import { assert, getDriver, config, By, Key } from '../../../../../../utils/test';
import { VlRadioGroup } from './radio-group';

const { sbUrl } = config;
const baseUrl = `${sbUrl}?id=custom-elements-vl-radio-vl-radio-group--default`;
const disabledUrl = `${sbUrl}?id=custom-elements-vl-radio-vl-radio-group--with-disabled-radio`;
const selector = 'vl-radio-group';

describe('vl-radio-group', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user I can only check one radio in a group at a time', async () => {
    await driver.get(baseUrl);
    const radioGroup = await new VlRadioGroup(driver, selector);

    const radio1 = await radioGroup.getRadio(1);
    const radio2 = await radioGroup.getRadio(2);

    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());

    await radio1.click();

    await assert.eventually.isTrue(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());

    await radio2.click();

    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isTrue(radio2.isChecked());
  });

  it('as a user I can check a radio and see that it gets focus', async () => {
    await driver.get(baseUrl);
    const radioGroup = await new VlRadioGroup(driver, selector);

    const radio1 = await radioGroup.getRadio(1);
    const radio2 = await radioGroup.getRadio(2);

    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());

    await radio2.click();

    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isFalse(radio1.hasFocus());
    await assert.eventually.isTrue(radio2.isChecked());
    await assert.eventually.isTrue(radio2.hasFocus());
  });

  it('as a user I can reach the group elements using the tab button and the first element gets focused when no element in the group is checked', async () => {
    await driver.get(baseUrl);
    const html = await driver.findElement(By.css('html'));
    const radioGroup = await new VlRadioGroup(driver, selector);

    const radio1 = await radioGroup.getRadio(1);
    const radio2 = await radioGroup.getRadio(2);

    await assert.eventually.isFalse(radio1.hasFocus());
    await assert.eventually.isFalse(radio2.hasFocus());

    // Tab to group; First element gets focus
    await html.sendKeys(Key.TAB);
    await assert.eventually.isTrue(radio1.hasFocus());
    await assert.eventually.isFalse(radio2.hasFocus());
  });

  it('as a user I can reach the group elements using the tab button and the checked element gets focused', async () => {
    await driver.get(baseUrl);

    const html = await driver.findElement(By.css('html'));

    const radioGroup = await new VlRadioGroup(driver, selector);

    const radio1 = await radioGroup.getRadio(1);
    const radio2 = await radioGroup.getRadio(2);

    // Check second radio and unfocus; No element in group are focused
    await radio2.click();
    await html.click();
    await assert.eventually.isFalse(radio1.hasFocus());
    await assert.eventually.isFalse(radio2.hasFocus());

    // // Tab to group; Checked element gets focus
    await html.sendKeys(Key.TAB);
    await assert.eventually.isFalse(radio1.hasFocus());
    await assert.eventually.isTrue(radio2.hasFocus());
  });

  it('as a user I can check a radio by using the arrow keys', async () => {
    await driver.get(baseUrl);
    const html = await driver.findElement(By.css('html'));
    const radioGroup = await new VlRadioGroup(driver, selector);

    const radio1 = await radioGroup.getRadio(1);
    const radio2 = await radioGroup.getRadio(2);

    // Tab to group; First element gets focus
    await html.sendKeys(Key.TAB);
    await assert.eventually.isTrue(radio1.hasFocus());
    await assert.eventually.isFalse(radio2.hasFocus());

    // Navigate to second radio
    await radio1.sendKeys(Key.RIGHT);
    await assert.eventually.isTrue(radio1.isInactive());
    await assert.eventually.isTrue(radio2.isActive());

    // Navigate back to first radio
    await radio2.sendKeys(Key.LEFT);
    await assert.eventually.isTrue(radio1.isActive());
    await assert.eventually.isTrue(radio2.isInactive());

    // Navigate to second radio
    await radio1.sendKeys(Key.UP);
    await assert.eventually.isTrue(radio1.isInactive());
    await assert.eventually.isTrue(radio2.isActive());

    // Navigate back first radio
    await radio2.sendKeys(Key.DOWN);
    await assert.eventually.isTrue(radio1.isActive());
    await assert.eventually.isTrue(radio2.isInactive());

    // Navigate to second radio
    await radio1.sendKeys(Key.RIGHT);
    await assert.eventually.isTrue(radio1.isInactive());
    await assert.eventually.isTrue(radio2.isActive());

    // Navigate to first radio
    await radio2.sendKeys(Key.RIGHT);
    await assert.eventually.isTrue(radio1.isActive());
    await assert.eventually.isTrue(radio2.isInactive());

    // Navigate to second radio
    await radio1.sendKeys(Key.UP);
    await assert.eventually.isTrue(radio1.isInactive());
    await assert.eventually.isTrue(radio2.isActive());

    // Navigate to first radio
    await radio2.sendKeys(Key.UP);
    await assert.eventually.isTrue(radio1.isActive());
    await assert.eventually.isTrue(radio2.isInactive());
  });

  it('as a user I can check a radio by using the arrow keys and disabled radios will be ignored', async () => {
    await driver.get(disabledUrl);
    const html = await driver.findElement(By.css('html'));
    const radioGroup = await new VlRadioGroup(driver, selector);

    const radio1 = await radioGroup.getRadio(1);
    const radio2 = await radioGroup.getRadio(2);
    const radio3 = await radioGroup.getRadio(3);

    // Tab to group; First not-disabled element gets focus
    await html.sendKeys(Key.TAB);

    await assert.eventually.isTrue(radio1.hasFocus());
    await assert.eventually.isFalse(radio2.hasFocus());
    await assert.eventually.isFalse(radio3.hasFocus());

    // Navigate to next radio; Next not-disabled element is checked
    await radio1.sendKeys(Key.RIGHT);
    await assert.eventually.isTrue(radio1.isInactive());
    await assert.eventually.isTrue(radio2.isInactive());
    await assert.eventually.isTrue(radio3.isActive());
  });
});
