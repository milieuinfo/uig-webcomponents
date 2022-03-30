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

  it('as a user I can request the selected items', async () => {
    const multiselect = await vlMultiSelectPage.getVoorgeselecteerdeMultiselect();
    const selectedItems = await multiselect.getSelectedItems();
    assert.isTrue(selectedItems.some((item) => item.text === 'Brugge'));
    assert.isTrue(selectedItems.some((item) => item.value === 'Bruges'));
  });

  it('as a user I can select an option and it will be shown in the combobox', async () => {
    const multiselect = await vlMultiSelectPage.getStandardMultiselect();
    const selectedItems = await multiselect.getSelectedItems();
    const unselectedItems = await multiselect.getUnselectedItems();
    const itemToSelect = unselectedItems.find((item) => item.text === 'Duitsland');

    assert.isFalse(selectedItems.some((i) => i.text === 'Duitsland'));
    await multiselect.select(itemToSelect);
    const selectedItemsAfterUpdate = await multiselect.getSelectedItems();
    assert.isTrue(selectedItemsAfterUpdate.some((i) => i.text === 'Duitsland'));
  });

  it('the default multiselect has no error or success attribute', async () => {
    const multiselect = await vlMultiSelectPage.getStandardMultiselect();
    await assert.eventually.isFalse(multiselect.isError());
    await assert.eventually.isFalse(multiselect.isSuccess());
  });

  it('as a user I can delete a chosen option', async () => {
    const multiselect = await vlMultiSelectPage.getGegroepeerdeMultiselect();
    const selectedItems = await multiselect.getSelectedItems();
    const itemToUnSelect = selectedItems.find((item) => item.text === 'Brugge');

    assert.isTrue(selectedItems.some((i) => i.text === 'Brugge'));
    await multiselect.unselect(itemToUnSelect);
    const selectedItemsAfterUnselect = await multiselect.getSelectedItems();
    assert.isFalse(selectedItemsAfterUnselect.some((i) => i.text === 'Brugge'));
  });

  it('as a user I can define a multiselect as error multiselect', async () => {
    const multiselect = await vlMultiSelectPage.getErrorMultiselect();
    await assert.eventually.isTrue(multiselect.isError());
  });

  it('as a user I can define a multiselect as success multiselect', async () => {
    const multiselect = await vlMultiSelectPage.getSuccessMultiselect();
    await assert.eventually.isTrue(multiselect.isSuccess());
  });

  it('as a user I can define a multiselect as disabled', async () => {
    const multiselect = await vlMultiSelectPage.getDisabledMultiselect();
    await assert.eventually.isTrue(multiselect.isDisabled());
  });

  it('the number of results of a search can be limited', async () => {
    const multiselect = await vlMultiSelectPage.getMultiselectMetSpecifiekAantalResultaten();
    await multiselect.searchByPartialText('straat');
    await assert.eventually.equal(multiselect.getNumberOfSearchResults(), 5);
  });

  it('the number of results of a search is not limited by default', async () => {
    const multiselect = await vlMultiSelectPage.getMultiselectMetOnbeperkteResultaten();
    await multiselect.searchByPartialText('straat');
    await assert.eventually.isAbove(multiselect.getNumberOfSearchResults(), 4);
  });

  it('as a user I can listen to a change event and onChange an extra attribute will be set', async () => {
    const multiselect = await vlMultiSelectPage.getChangeEventMultiselect();
    await assert.eventually.isFalse(multiselect.hasAttribute('changed'));
    await multiselect.selectByValue('Germany');
    await assert.eventually.isTrue(multiselect.hasAttribute('changed'));
  });

  it('as a user I can enable/disable the multiselect via enable/disable method', async () => {
    const multiselect = await vlMultiSelectPage.getEnableDisableMethodeMultiselect();
    await vlMultiSelectPage.disable();
    await assert.eventually.isTrue(multiselect.isDisabled());
    await vlMultiSelectPage.enable();
    await assert.eventually.isFalse(multiselect.isDisabled());
  });

  it('as a user I can programmatically add/remove (a) value(s) in the multiselect', async () => {
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

  // it('if a multiselect is rendered over a datepicker, both the multiselect and the datepicker can be used correctly', async () => {
  //   const multiselect = await vlMultiSelectPage.getDatepickerMultiselect();
  //   const datepicker = await vlMultiSelectPage.getDatepicker();

  //   await datepicker.selectYear(2018);
  //   await datepicker.selectMonth('augustus');
  //   await datepicker.selectDay(29);
  //   await assert.eventually.equal(datepicker.getInputValue(), `29.08.2018`);

  //   await multiselect.selectByValue('Germany');
  //   const selectedItems = await multiselect.getSelectedItems();
  //   assert.isTrue(selectedItems.some((item) => item.text === 'Duitsland'));
  // });

  it('as a user I can group options', async () => {
    const multiselect = await vlMultiSelectPage.getGegroepeerdeMultiselect();
    await assert.eventually.isTrue(multiselect.isGrouped());
    await assert.eventually.isTrue(multiselect.hasHeadings());
  });

  // it('the datepicker cannot be opened when the multiselect is open', async () => {
  //   const multiselect = await vlMultiSelectPage.getDatepickerMultiselect();
  //   const datepicker = await vlMultiSelectPage.getDatepicker();
  //   await multiselect.open();
  //   await assert.isRejected(datepicker.selectDay(4));
  // });

  // it('if the user opens the multiselect when the datepicker is visible, the datepicker will disappear', async () => {
  //   const multiselect = await vlMultiSelectPage.getDatepickerMultiselect();
  //   const datepicker = await vlMultiSelectPage.getDatepicker();

  //   await assert.eventually.isFalse(datepicker.isOpen());
  //   await datepicker.open();
  //   await assert.eventually.isTrue(datepicker.isOpen());
  //   await multiselect.open();
  //   await assert.eventually.isTrue(multiselect.isOpen());
  //   await assert.eventually.isFalse(datepicker.isOpen());
  // });
});
