const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlSelectPage = require('./pages/vl-select.page');

describe('vl-select', async () => {
  let vlSelectPage;

  before(() => {
    vlSelectPage = new VlSelectPage(getDriver());
    return vlSelectPage.load();
  });

  it('als gebruiker kan ik de values van een select opvragen', async () => {
    const select = await vlSelectPage.getDefaultSelect();
    const values = await select.values();
    assert.isNotEmpty(values);
    assert.isTrue(values.includes('Belgium', 'Germany', 'France'));
    await assert.eventually.isTrue(select.hasValue('Belgium'));
    await assert.eventually.isTrue(select.hasValue('Germany'));
    await assert.eventually.isTrue(select.hasValue('France'));
  });

  it('als gebruiker kan ik een optie selecteren via tekst', async () => {
    const select = await vlSelectPage.getDefaultSelect();
    await select.selectByText('Frankrijk');
    await assert.eventually.equal(select.getSelectedValue(), 'France');
  });

  it('als gebruiker kan ik een optie selecteren via value', async () => {
    const select = await vlSelectPage.getDefaultSelect();
    await select.selectByValue('Germany');
    await assert.eventually.equal(select.getSelectedValue(), 'Germany');
  });

  it('als gebruiker kan ik een optie selecteren via index', async () => {
    const select = await vlSelectPage.getDefaultSelect();
    await select.selectByIndex(2);
    await assert.eventually.equal(select.getSelectedValue(), 'France');
  });

  it('als gebruiker zie ik wanneer een select een error bevat', async () => {
    const select = await vlSelectPage.getDefaultSelect();
    const errorSelect = await vlSelectPage.getErrorSelect();
    await assert.eventually.isFalse(select.isError());
    await assert.eventually.isTrue(errorSelect.isError());
  });

  it('als gebruiker zie ik wanneer een select succesvol is', async () => {
    const select = await vlSelectPage.getDefaultSelect();
    const successSelect = await vlSelectPage.getSuccessSelect();
    await assert.eventually.isFalse(select.isSuccess());
    await assert.eventually.isTrue(successSelect.isSuccess());
  });

  it('als gebruiker kan ik het verschil zien tussen een dressed en gewone select', async () => {
    const select = await vlSelectPage.getDefaultSelect();
    const dressedSelect = await vlSelectPage.getDressedSelect();
    await assert.eventually.isFalse(select.isDressed());
    await assert.eventually.isTrue(dressedSelect.isDressed());
  });

  it('als gebruiker kan ik de values van een dressed select opvragen', async () => {
    const select = await vlSelectPage.getDressedSelect();
    await assert.eventually.isNotEmpty(select.values());
    await assert.eventually.include(select.values(), 'België', 'Duitsland', 'Frankrijk');
  });

  it('als gebruiker kan ik een optie selecteren via text in een dressed select', async () => {
    const select = await vlSelectPage.getDressedSelect();
    await select.selectByText('Duitsland');
    await assert.eventually.equal(select.getSelectedValue(), 'Duitsland');
  });

  it('als gebruiker kan ik een optie selecteren via value in een dressed select', async () => {
    const select = await vlSelectPage.getDressedSelect();
    await select.selectByValue('Frankrijk');
    await assert.eventually.equal(select.getSelectedValue(), 'Frankrijk');
  });

  it('als gebruiker kan ik een optie selecteren via index in een dressed select', async () => {
    const select = await vlSelectPage.getDressedSelect();
    await select.selectByIndex(1);
    await assert.eventually.equal(select.getSelectedValue(), 'Duitsland');
  });

  it('als gebruiker kan ik een dressed select markeren als succesvol', async () => {
    const select = await vlSelectPage.getDressedToggleSuccessSelect();
    await assert.eventually.isFalse(select.isSuccess());
    await vlSelectPage.toggleSuccess();
    await assert.eventually.isTrue(select.isSuccess());
    await vlSelectPage.toggleSuccess();
    await assert.eventually.isFalse(select.isSuccess());
  });

  it('als gebruiker kan ik een optie selecteren via het zoekveld', async () => {
    const select = await vlSelectPage.getSearchableSelect();
    await select.search('Frankrijk');
    await select.selectByIndex(0);
    await assert.eventually.equal(select.getSelectedValue(), 'Frankrijk');
  });

  it('als gebruiker kan ik alleen zoeken bij een select die deze optie voorziet', async () => {
    const searchableSelect = await vlSelectPage.getSearchableSelect();
    const select = await vlSelectPage.getNotSearchableSelect();
    await assert.eventually.isTrue(searchableSelect.isSearchable());
    await assert.eventually.isFalse(select.isSearchable());
  });

  it('als gebruiker kan ik de geselecteerde optie deselecteren en zal het select element niet open staan', async () => {
    const select = await vlSelectPage.getDeletableSelect();
    await select.selectByValue('Duitsland');
    await assert.eventually.equal(select.getSelectedValue(), 'Duitsland');
    await select.deleteSelectedValue();
    await assert.eventually.notEqual(select.getSelectedValue(), 'Duitsland');
    await assert.eventually.isFalse(select.isOpen());
  });

  it('als gebruiker krijg ik een beperkt aantal zoekresultaten te zien', async () => {
    const select = await vlSelectPage.getLimitedSearchResultsSelect();
    await select.search('straat');
    await assert.eventually.lengthOf(select.values(), 5);
    await select.close();
  });

  it('als gebruiker krijg ik een onbeperkt aantal zoekresultaten te zien', async () => {
    const select = await vlSelectPage.getUnlimitedSearchResultsSelect();
    await select.search('straat');
    await assert.eventually.lengthOf(select.values(), 14);
    await select.close();
  });

  it('als gebruiker kan ik een select dynamisch activeren', async () => {
    let select = await vlSelectPage.getDynamicSelect();
    await assert.eventually.isFalse(select.isDressed());
    await assert.eventually.isFalse(select.hasValue('one'));
    await assert.eventually.isFalse(select.hasValue('two'));
    await vlSelectPage.activateDynamicData();
    select = await vlSelectPage.getDynamicSelect();
    await assert.eventually.isTrue(select.isDressed());
    await assert.eventually.isNotEmpty(select.values());
    await assert.eventually.isTrue(select.hasValue('one'));
    await assert.eventually.isTrue(select.hasValue('two'));
  });

  it('als gebruiker kan ik interageren met een dressed select met dynamisch aangeleverde groepen', async () => {
    const select = await vlSelectPage.getDynamicGroupingSelect();
    await assert.eventually.isFalse(select.isDressed());
    assert.equal((await select.groups()).length, 0);

    await vlSelectPage.activateDynamicDataGrouping();

    const selectMetData = await vlSelectPage.getDynamicGroupingSelect();
    await assert.eventually.isTrue(selectMetData.isDressed());

    const groups = await selectMetData.groups();
    assert.equal(groups.length, 2);

    // dressed variant sorteert de choices 'by label' dus 'Label four' komt voor 'Label three'
    await assert.eventually.equal(groups[0].getLabel(), 'Group 1');
    await assert.equal(groups[0].options.length, 2);
    await assert.eventually.equal(groups[0].options[0].getLabel(), 'Label one');
    await assert.eventually.equal(groups[0].options[0].getValue(), 'one');
    await assert.eventually.equal(groups[0].options[1].getLabel(), 'Label two');
    await assert.eventually.equal(groups[0].options[1].getValue(), 'two');
    await assert.eventually.equal(groups[1].getLabel(), 'Group 2');
    assert.equal(groups[1].options.length, 2);
    await assert.eventually.equal(groups[1].options[0].getLabel(), 'Label four');
    await assert.eventually.equal(groups[1].options[0].getValue(), 'four');
    await assert.eventually.equal(groups[1].options[1].getLabel(), 'Label three');
    await assert.eventually.equal(groups[1].options[1].getValue(), 'three');

    await selectMetData.selectByValue('one');
    await assert.eventually.equal(selectMetData.getSelectedValue(), 'one');
  });

  it('als gebruiker kan ik interageren met een undressed select met groepen', async () => {
    const select = await vlSelectPage.getSelectUndressedGrouping();
    await assert.eventually.isFalse(select.isDressed());

    const groups = await select.groups();
    assert.equal(groups.length, 2);

    // undressed variant sorteert de choices zoals ze voorkomen in de HTML dus 'Label three' komt hier voor 'Label four'
    await assert.eventually.equal(groups[0].getLabel(), 'Group 1');
    await assert.equal(groups[0].options.length, 2);
    await assert.eventually.equal(groups[0].options[0].getLabel(), 'Label one');
    await assert.eventually.equal(groups[0].options[0].getValue(), 'one');
    await assert.eventually.equal(groups[0].options[1].getLabel(), 'Label two');
    await assert.eventually.equal(groups[0].options[1].getValue(), 'two');
    await assert.eventually.equal(groups[1].getLabel(), 'Group 2');
    assert.equal(groups[1].options.length, 2);
    await assert.eventually.equal(groups[1].options[0].getLabel(), 'Label three');
    await assert.eventually.equal(groups[1].options[0].getValue(), 'three');
    await assert.eventually.equal(groups[1].options[1].getLabel(), 'Label four');
    await assert.eventually.equal(groups[1].options[1].getValue(), 'four');

    await select.selectByValue('one');
    await assert.eventually.equal(select.getSelectedValue(), 'one');
  });

  it('als gebruiker kan ik een select via een knop dressen en undressen', async () => {
    const select = await vlSelectPage.getDresUndressSelect();
    await assert.eventually.isFalse(select.isDressed());
    await vlSelectPage.dress();
    await assert.eventually.isTrue(select.isDressed());
    await vlSelectPage.undress();
    await assert.eventually.isFalse(select.isDressed());
  });

  it('als gebruiker kan ik een select via een knop enablen en disablen', async () => {
    const select = await vlSelectPage.getEnableDisableSelect();
    await vlSelectPage.disable();
    await assert.eventually.isFalse(select.isEnabled());
    await vlSelectPage.enable();
    await assert.eventually.isTrue(select.isEnabled());
  });

  it('als gebruiker kan ik een optie in een select kiezen en verwijderen via een knop', async () => {
    const select = await vlSelectPage.getSetMethodeSelect();
    await vlSelectPage.select();
    await assert.eventually.equal(select.getSelectedValue(), 'Duitsland');
    await vlSelectPage.remove();
    await assert.eventually.isEmpty(select.getSelectedValue());
  });

  it('als gebruiker kan ik een terugkoppeling te zien krijgen als ik zoek', async () => {
    const select = await vlSelectPage.getSearchableSelect();
    await select.search('foobar');
    await assert.eventually.equal(vlSelectPage.getSearchValue(), 'foobar');
  });
});
