import { assert, getDriver } from '../../../../utils/test';
import { VlCheckboxPage } from './checkbox.page.js';

describe('vl-checkbox', async () => {
  let vlCheckboxPage;

  before(() => {
    vlCheckboxPage = new VlCheckboxPage(getDriver());
    return vlCheckboxPage.load();
  });

  it('as a user I can check and uncheck a standard checkbox', async () => {
    const checkbox = await vlCheckboxPage.getDefaultCheckbox(1);
    await canInteractWithCheckbox(checkbox);
  });

  it('as a user I see a label at the checkbox', async () => {
    const checkbox = await vlCheckboxPage.getDefaultCheckbox(1);
    await assert.eventually.equal(checkbox.getLabel(), 'Optie 1');
  });

  it('as a user I see a label at the checkbox switch variant', async () => {
    const checkbox = await vlCheckboxPage.getCheckboxSwitchLabel();
    await assert.eventually.equal(checkbox.getLabel(), 'Instellingen blokkeren');
  });

  it('as a user I can tell the difference between a block and a regular checkbox', async () => {
    const checkbox = await vlCheckboxPage.getDefaultCheckbox(1);
    const blockCheckbox = await vlCheckboxPage.getCheckboxBlock();

    await assert.eventually.isFalse(checkbox.isBlock());
    await assert.eventually.isTrue(blockCheckbox.isBlock());
  });

  it('as a user I can see the difference between an error and a regular checkbox', async () => {
    const checkbox = await vlCheckboxPage.getDefaultCheckbox(1);
    const errorCheckbox = await vlCheckboxPage.getCheckboxError();

    await assert.eventually.isFalse(checkbox.isError());
    await assert.eventually.isTrue(errorCheckbox.isError());
  });

  it('as a user I cannot check or uncheck a disabled checkboxn', async () => {
    const checkboxUnchecked = await vlCheckboxPage.getCheckboxDisabledUnchecked();
    const checkboxChecked = await vlCheckboxPage.getCheckboxDisabledChecked();

    await assert.eventually.isTrue(checkboxUnchecked.isDisabled());
    await assert.eventually.isTrue(checkboxChecked.isDisabled());

    await assert.eventually.isFalse(checkboxUnchecked.isChecked());
    await checkboxUnchecked.click();
    await assert.eventually.isFalse(checkboxUnchecked.isChecked());

    await assert.eventually.isTrue(checkboxChecked.isChecked());
    await checkboxChecked.click();
    await assert.eventually.isTrue(checkboxChecked.isChecked());
  });

  it('as a user I cannot check or uncheck a switch disabled checkbox', async () => {
    const switchCheckbox = await vlCheckboxPage.getCheckboxSwitchDisabled();

    await assert.eventually.isTrue(switchCheckbox.isDisabled());
    await assert.eventually.isFalse(switchCheckbox.isChecked());
    await switchCheckbox.click();
    await assert.eventually.isFalse(switchCheckbox.isChecked());
  });

  it('as a user I can tell the difference between a single and a regular checkbox', async () => {
    const checkbox = await vlCheckboxPage.getDefaultCheckbox(1);
    const singleCheckbox = await vlCheckboxPage.getCheckboxSingle();

    await assert.eventually.isFalse(checkbox.isSingle());
    await assert.eventually.isTrue(singleCheckbox.isSingle());
  });

  it('as a user I can check and uncheck a switch checkbox', async () => {
    const switchCheckbox = await vlCheckboxPage.getCheckboxSwitch();

    await assert.eventually.isTrue(switchCheckbox.isSwitch());
    await canInteractWithCheckbox(switchCheckbox);
  });

  it('as a user I can check and uncheck multi checkboxes', async () => {
    const checkbox1 = await vlCheckboxPage.getCheckboxMulti(1);
    const checkbox2 = await vlCheckboxPage.getCheckboxMulti(2);
    const checkbox3 = await vlCheckboxPage.getCheckboxMulti(3);

    await assert.eventually.isFalse(checkbox1.isChecked());
    await assert.eventually.isFalse(checkbox2.isChecked());
    await assert.eventually.isFalse(checkbox3.isChecked());

    await canInteractWithCheckbox(checkbox1);
    await canInteractWithCheckbox(checkbox2);
    await canInteractWithCheckbox(checkbox3);
  });

  it('as a user I see that multiple checkboxes are initialized correctly', async () => {
    const checkbox1 = await vlCheckboxPage.getCheckboxMultiStandard(1);
    const checkbox2 = await vlCheckboxPage.getCheckboxMultiStandard(2);
    const checkbox3 = await vlCheckboxPage.getCheckboxMultiStandard(3);

    await assert.eventually.isFalse(checkbox1.isChecked());
    await assert.eventually.isTrue(checkbox2.isChecked());
    await assert.eventually.isTrue(checkbox3.isChecked());
  });

  it('as a user I see a label at a checkbox that uses a lock element', async () => {
    const checkbox = await vlCheckboxPage.getCheckboxSlot();
    const switchCheckbox = await vlCheckboxPage.getCheckboxSlotSwitch();
    const labelSlotElements = await checkbox.getLabelSlotElements();
    const labelSlotElementsSwitch = await switchCheckbox.getLabelSlotElements();
    await assert.eventually.equal(labelSlotElements[0].getText(), 'Optie 1');
    await assert.eventually.equal(labelSlotElementsSwitch[0].getText(), 'Optie 2');
  });

  const canInteractWithCheckbox = async (checkbox) => {
    const initialState = await checkbox.isChecked();
    await checkbox.click();
    await assert.eventually.equal(checkbox.isChecked(), !initialState);
    await checkbox.click();
    await assert.eventually.equal(checkbox.isChecked(), initialState);
  };
});
