import { assert, getDriver } from '../../../../utils/test';
import { VlMultiSelectPage } from './multiselect.page';

describe('vl-multiselect', async () => {
  let vlMultiSelectPage;

  before(async () => {
    vlMultiSelectPage = new VlMultiSelectPage(getDriver());
    return vlMultiSelectPage.load();
  });

  afterEach(async () => {
    await vlMultiSelectPage.closeAnyOpenDropdowns();
  });

  it('als gebruiker kan ik de geselecteerde items opvragen', async () => {
    const multiselect = await vlMultiSelectPage.getVoorgeselecteerdeMultiselect();
    const selectedItems = await multiselect.getSelectedItems();
    assert.isTrue(selectedItems.some((item) => item.text === 'Brugge'));
    assert.isTrue(selectedItems.some((item) => item.value === 'Bruges'));
  });

  it('als gebruiker kan ik een optie selecteren en deze zal dan in de combobox getoond worden', async () => {
    const multiselect = await vlMultiSelectPage.getStandardMultiselect();
    const selectedItems = await multiselect.getSelectedItems();
    const unselectedItems = await multiselect.getUnselectedItems();
    const itemToSelect = unselectedItems.find((item) => item.text === 'Duitsland');

    assert.isFalse(selectedItems.some((i) => i.text === 'Duitsland'));
    await multiselect.select(itemToSelect);
    const selectedItemsAfterUpdate = await multiselect.getSelectedItems();
    assert.isTrue(selectedItemsAfterUpdate.some((i) => i.text === 'Duitsland'));
  });

  it('de default multiselect heeft geen error of success attribuut', async () => {
    const multiselect = await vlMultiSelectPage.getStandardMultiselect();
    await assert.eventually.isFalse(multiselect.isError());
    await assert.eventually.isFalse(multiselect.isSuccess());
  });

  it('als gebruiker kan ik een gekozen optie verwijderen', async () => {
    const multiselect = await vlMultiSelectPage.getGegroepeerdeMultiselect();
    const selectedItems = await multiselect.getSelectedItems();
    const itemToUnSelect = selectedItems.find((item) => item.text === 'Brugge');

    assert.isTrue(selectedItems.some((i) => i.text === 'Brugge'));
    await multiselect.unselect(itemToUnSelect);
    const selectedItemsAfterUnselect = await multiselect.getSelectedItems();
    assert.isFalse(selectedItemsAfterUnselect.some((i) => i.text === 'Brugge'));
  });

  it('als gebruiker kan ik een multiselect definieren als error multiselect', async () => {
    const multiselect = await vlMultiSelectPage.getErrorMultiselect();
    await assert.eventually.isTrue(multiselect.isError());
  });

  it('als gebruiker kan ik een multiselect definieren als success multiselect', async () => {
    const multiselect = await vlMultiSelectPage.getSuccessMultiselect();
    await assert.eventually.isTrue(multiselect.isSuccess());
  });

  it('als gebruiker kan ik een multiselect definieren als disabled', async () => {
    const multiselect = await vlMultiSelectPage.getDisabledMultiselect();
    await assert.eventually.isTrue(multiselect.isDisabled());
  });

  it('het aantal resultaten van een zoekopdracht kan beperkt worden', async () => {
    const multiselect = await vlMultiSelectPage.getMultiselectMetSpecifiekAantalResultaten();
    await multiselect.searchByPartialText('straat');
    await assert.eventually.equal(multiselect.getNumberOfSearchResults(), 5);
  });

  it('het aantal resultaten van een zoekopdracht is standaard niet beperkt', async () => {
    const multiselect = await vlMultiSelectPage.getMultiselectMetOnbeperkteResultaten();
    await multiselect.searchByPartialText('straat');
    await assert.eventually.isAbove(multiselect.getNumberOfSearchResults(), 4);
  });

  it('als gebruiker kan ik luisteren naar een change event en onChange zal er een extra attribuut gezet worden', async () => {
    const multiselect = await vlMultiSelectPage.getChangeEventMultiselect();
    await assert.eventually.isFalse(multiselect.hasAttribute('changed'));
    await multiselect.selectByValue('Germany');
    await assert.eventually.isTrue(multiselect.hasAttribute('changed'));
  });

  it('als gebruiker kan ik de multiselect via enable/disable-methode in/uit-schakelen', async () => {
    const multiselect = await vlMultiSelectPage.getEnableDisableMethodeMultiselect();
    await vlMultiSelectPage.disable();
    await assert.eventually.isTrue(multiselect.isDisabled());
    await vlMultiSelectPage.enable();
    await assert.eventually.isFalse(multiselect.isDisabled());
  });

  it('als gebruiker kan ik programmatorisch (een) waarde(s) toevoegen/verwijderen in de multiselect', async () => {
    const multiselect = await vlMultiSelectPage.getSetGetMethodeMultiselect();
    await assert.eventually.isEmpty(multiselect.getSelectedItems());
    await vlMultiSelectPage.kiesDuitsland();
    const de = await multiselect.getSelectedItems();
    assert.isTrue(de.some((i) => i.text === 'Duitsland'));
    await vlMultiSelectPage.kiesBelgieEnNederland();
    const nlBe = await multiselect.getSelectedItems();
    assert.isTrue(de.some((i) => i.text === 'Duitsland'));
    assert.isTrue(nlBe.some((i) => i.text === 'België'));
    assert.isTrue(nlBe.some((i) => i.text === 'Nederland'));
    await assert.eventually.lengthOf(multiselect.getSelectedItems(), 3);
    await vlMultiSelectPage.verwijderSelectie();
    await assert.eventually.lengthOf(multiselect.getSelectedItems(), 2);
  });

  it('als een multiselect boven een datepicker gerenderd wordt, kunnen zowel de multiselect als de datepicker correct gebruikt worden', async () => {
    const multiselect = await vlMultiSelectPage.getDatepickerMultiselect();
    const datepicker = await vlMultiSelectPage.getDatepicker();

    await datepicker.selectYear(2018);
    await datepicker.selectMonth('augustus');
    await datepicker.selectDay(29);
    await assert.eventually.equal(datepicker.getInputValue(), `29.08.2018`);

    await multiselect.selectByValue('Germany');
    const selectedItems = await multiselect.getSelectedItems();
    assert.isTrue(selectedItems.some((item) => item.text === 'Duitsland'));
  });

  it('als gebruiker kan ik opties groeperen', async () => {
    const multiselect = await vlMultiSelectPage.getGegroepeerdeMultiselect();
    await assert.eventually.isTrue(multiselect.isGrouped());
    await assert.eventually.isTrue(multiselect.hasHeadings());
  });

  it('de datepicker kan niet geopend worden wanneer de multiselect geopend is', async () => {
    const multiselect = await vlMultiSelectPage.getDatepickerMultiselect();
    const datepicker = await vlMultiSelectPage.getDatepicker();
    await multiselect.open();
    await assert.isRejected(datepicker.selectDay(4));
  });

  it('als de gebruiker de multiselect opent wanneer de datepicker zichtbaar is, zal de datepicker verdwijnen', async () => {
    const multiselect = await vlMultiSelectPage.getDatepickerMultiselect();
    const datepicker = await vlMultiSelectPage.getDatepicker();

    await assert.eventually.isFalse(datepicker.isOpen());
    await datepicker.open();
    await assert.eventually.isTrue(datepicker.isOpen());
    await multiselect.open();
    await assert.eventually.isTrue(multiselect.isOpen());
    await assert.eventually.isFalse(datepicker.isOpen());
  });
});
