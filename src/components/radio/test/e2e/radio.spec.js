import { assert, getDriver, config, By, Key } from '../../../../utils/test';
import { VlRadio } from './radio';

const { sbUrl } = config;
const baseUrl = `${sbUrl}?id=native-elements-vl-radio--default`;
const slotUrl = `${sbUrl}?id=native-elements-vl-radio--with-label-slot&args=checked:true`;
const blockUrl = `${sbUrl}?id=native-elements-vl-radio--default&args=block:true`;
const errorUrl = `${sbUrl}?id=native-elements-vl-radio--default&args=error:true`;
const disabledUrl = `${sbUrl}?id=native-elements-vl-radio--default&args=disabled:true`;
const singleUrl = `${sbUrl}?id=native-elements-vl-radio--default&args=single:true`;
const checkedUrl = `${sbUrl}?id=native-elements-vl-radio--default&args=checked:true`;

const selector = 'vl-radio';
const fistRadioSelector = 'vl-radio:first-of-type';
const secondRadioSelector = 'vl-radio:nth-of-type(2)';

describe('vl-radio', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user I can see the radio label', async () => {
    await driver.get(baseUrl);
    const radio = await new VlRadio(driver, selector);
    await assert.eventually.equal(radio.getText(), 'Ja');

    await driver.get(slotUrl);
    const slotRadio = await new VlRadio(driver, selector);
    const slotLabels = await slotRadio.labelSlotElements();
    await assert.eventually.equal(slotLabels[0].getText(), 'Ja');
  });

  it('as a user I can only select one radio button at a time', async () => {
    await driver.get(baseUrl);
    const radio1 = await new VlRadio(driver, fistRadioSelector);
    const radio2 = await new VlRadio(driver, secondRadioSelector);

    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());
    await radio1.click();
    await assert.eventually.isTrue(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());
    await radio2.click();
    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isTrue(radio2.isChecked());
  });

  it('as a user I can see the difference between a normal and a block radio', async () => {
    await driver.get(baseUrl);
    const radio = await new VlRadio(driver, selector);
    await assert.eventually.isFalse(radio.isBlock());

    await driver.get(blockUrl);
    const blockRadio = await new VlRadio(driver, selector);
    await assert.eventually.isTrue(blockRadio.isBlock());
  });

  it('as a user I can see the difference between a normal and an error radio', async () => {
    await driver.get(baseUrl);
    const radio = await new VlRadio(driver, selector);
    await assert.eventually.isFalse(radio.hasError());

    await driver.get(errorUrl);
    const errorRadio = await new VlRadio(driver, selector);
    await assert.eventually.isTrue(errorRadio.hasError());
  });

  it("as a user I can't select a disabled radio", async () => {
    await driver.get(baseUrl);
    const radio = await new VlRadio(driver, selector);
    await assert.eventually.isFalse(radio.isDisabled());
    await radio.click();
    await assert.eventually.isTrue(radio.isChecked());

    await driver.get(disabledUrl);
    const disabledRadio = await new VlRadio(driver, selector);
    await assert.eventually.isTrue(disabledRadio.isDisabled());
    await disabledRadio.click();
    await assert.eventually.isFalse(disabledRadio.isChecked());
  });

  it('as a user I can see the difference between a normal and a single radio', async () => {
    await driver.get(baseUrl);
    const radio = await new VlRadio(driver, selector);
    await assert.eventually.isFalse(radio.isSingle());

    await driver.get(singleUrl);
    const singleRadio = await new VlRadio(driver, selector);
    await assert.eventually.isTrue(singleRadio.isSingle());
  });

  it('as a user I can see a radio button is default selected', async () => {
    await driver.get(checkedUrl);
    const radio = await new VlRadio(driver, selector);
    await assert.eventually.isTrue(radio.isChecked());
  });

  it('as a user I can check a radio by using the arrow keys', async () => {
    await driver.get(baseUrl);
    const html = await driver.findElement(By.css('html'));
    const radio1 = await new VlRadio(driver, fistRadioSelector);
    const radio2 = await new VlRadio(driver, secondRadioSelector);
    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());

    if (config.browserName === 'chrome') {
      await html.sendKeys(Key.TAB);
      await html.sendKeys(Key.TAB);
      await html.sendKeys(Key.TAB);
      await html.sendKeys(Key.TAB);
    } else {
      await html.sendKeys(Key.TAB);
    }

    await radio1.sendKeys(Key.RIGHT);
    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isTrue(radio2.isChecked());

    await radio2.sendKeys(Key.LEFT);
    await assert.eventually.isTrue(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());

    await radio1.sendKeys(Key.UP);
    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isTrue(radio2.isChecked());

    await radio2.sendKeys(Key.DOWN);
    await assert.eventually.isTrue(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());
  });

  it('as a user I can go from the last radio to the first one and the other way around by using the arrow keys', async () => {
    await driver.get(baseUrl);
    const html = await driver.findElement(By.css('html'));
    const radio1 = await new VlRadio(driver, fistRadioSelector);
    const radio2 = await new VlRadio(driver, secondRadioSelector);
    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());

    if (config.browserName === 'chrome') {
      await html.sendKeys(Key.TAB);
      await html.sendKeys(Key.TAB);
      await html.sendKeys(Key.TAB);
      await html.sendKeys(Key.TAB);
    } else {
      await html.sendKeys(Key.TAB);
    }

    await radio1.sendKeys(Key.RIGHT);
    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isTrue(radio2.isChecked());

    await radio2.sendKeys(Key.RIGHT);
    await assert.eventually.isTrue(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());

    await radio1.sendKeys(Key.UP);
    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isTrue(radio2.isChecked());

    await radio2.sendKeys(Key.UP);
    await assert.eventually.isTrue(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());
  });

  it('as a user I can see the already selected radio gets a focus when using tab', async () => {
    await driver.get(baseUrl);
    const html = await driver.findElement(By.css('html'));
    const radio1 = await new VlRadio(driver, fistRadioSelector);
    const radio2 = await new VlRadio(driver, secondRadioSelector);

    await radio2.click();

    if (config.browserName === 'chrome') {
      await html.sendKeys(Key.SHIFT + Key.TAB);
    } else {
      await radio2.sendKeys(Key.SHIFT + Key.TAB);
    }

    await html.sendKeys(Key.TAB);
    await assert.eventually.isFalse(radio1.hasFocus());
    await assert.eventually.isTrue(radio2.hasFocus());
  });
});
