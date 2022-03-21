import { assert, getDriver, config, By, Key } from '../../../../utils/test';
import { VlRadioPage } from './radio.page';

describe('vl-radio', async () => {
  let driver;
  let vlRadioPage;

  beforeEach(() => {
    driver = getDriver();
    vlRadioPage = new VlRadioPage(driver);
    return vlRadioPage.load();
  });

  it('as a user I can see the radio label', async () => {
    const radio = await vlRadioPage.getCheckedRadio(1);
    const slotLabelRadio = await vlRadioPage.getSlotLabelRadio(1);
    const slotLabels = await slotLabelRadio.labelSlotElements();
    await assert.eventually.equal(radio.getText(), 'Ja');
    await assert.eventually.equal(slotLabels[0].getText(), 'Ja');
  });

  it('as a user I can only check one radio at a time', async () => {
    const radio1 = await vlRadioPage.getRadio(1);
    const radio2 = await vlRadioPage.getRadio(2);

    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());
    await radio1.click();
    await assert.eventually.isTrue(radio1.isChecked());
    await assert.eventually.isFalse(radio2.isChecked());
    await radio2.click();
    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isTrue(radio2.isChecked());
  });

  it('as a user I can see the difference between a block radio and a normal radio', async () => {
    const radio = await vlRadioPage.getRadio(1);
    const blockRadio = await vlRadioPage.getBlockRadio(1);
    await assert.eventually.isFalse(radio.isBlock());
    await assert.eventually.isTrue(blockRadio.isBlock());
  });

  it('as a user I can see the difference between an error radio and a normal radio', async () => {
    const radio = await vlRadioPage.getRadio(1);
    const errorRadio = await vlRadioPage.getErrorRadio(1);
    await assert.eventually.isFalse(radio.hasError());
    await assert.eventually.isTrue(errorRadio.hasError());
  });

  it(`as a user I can't select a disabled radio`, async () => {
    const radio = await vlRadioPage.getRadio(1);
    const disabledRadio = await vlRadioPage.getDisabledRadio(1);
    await assert.eventually.isFalse(radio.isDisabled());
    await assert.eventually.isTrue(disabledRadio.isDisabled());
    await radio.click();
    await assert.eventually.isFalse(radio.isDisabled());
    await assert.eventually.isTrue(disabledRadio.isDisabled());
    await disabledRadio.click();
    await assert.eventually.isFalse(radio.isDisabled());
    await assert.eventually.isTrue(disabledRadio.isDisabled());
  });

  it('as a user I can see the difference between a single radio and a normal radio', async () => {
    const radio = await vlRadioPage.getRadio(1);
    const singleRadio = await vlRadioPage.getSingleRadio(1);
    await assert.eventually.isFalse(radio.isSingle());
    await assert.eventually.isTrue(singleRadio.isSingle());
  });

  it('as a user I can see a radio is default checked', async () => {
    const radio1 = await vlRadioPage.getCheckedRadio(1);
    const radio2 = await vlRadioPage.getCheckedRadio(2);
    await assert.eventually.isFalse(radio1.isChecked());
    await assert.eventually.isTrue(radio2.isChecked());
  });

  it('as a user I can check a radio user the arrow keys', async () => {
    if (config.browserName === 'chrome') {
      const html = await driver.findElement(By.css('html'));
      const radio1 = await vlRadioPage.getRadio(1);
      const radio2 = await vlRadioPage.getRadio(2);
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
    }
  });

  it('as a user I can go from the last radio to the first one and back', async () => {
    if (config.browserName === 'chrome') {
      const html = await driver.findElement(By.css('html'));
      const radio1 = await vlRadioPage.getRadio(1);
      const radio2 = await vlRadioPage.getRadio(2);
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
    }
  });

  it('as a user I can see the already checked radio gets focus while tabbing', async () => {
    if (config.browserName === 'chrome') {
      const html = await driver.findElement(By.css('html'));
      const radio1 = await vlRadioPage.getRadio(1);
      const radio2 = await vlRadioPage.getRadio(2);

      await radio2.click();
      await assert.eventually.isTrue(radio2.hasFocus());

      if (config.browserName === 'chrome') {
        await html.sendKeys(Key.SHIFT + Key.TAB);
      } else {
        await radio2.sendKeys(Key.SHIFT + Key.TAB);
      }
      await assert.eventually.isFalse(radio1.hasFocus());
      await assert.eventually.isFalse(radio2.hasFocus());

      await html.sendKeys(Key.TAB);
      await html.sendKeys(Key.TAB);
      await assert.eventually.isFalse(radio1.hasFocus());
      await assert.eventually.isTrue(radio2.hasFocus());
    }
  });

  // it('as a user I can check a radio with a shadow DOM using the arrow keys', async () => {
  //   const radios = await vlRadioPage.getShadowDOMRadioElement();
  //   const radio1 = await vlRadioPage.getShadowDOMRadio(1);
  //   const radio2 = await vlRadioPage.getShadowDOMRadio(2);
  //   await assert.eventually.isFalse(radio1.isChecked());
  //   await assert.eventually.isFalse(radio2.isChecked());

  //   await radio1.click();
  //   await assert.eventually.isTrue(radio1.isChecked());
  //   await assert.eventually.isFalse(radio2.isChecked());

  //   await radios.sendKeys(Key.RIGHT);
  //   await assert.eventually.isFalse(radio1.isChecked());
  //   await assert.eventually.isTrue(radio2.isChecked());
  // });
});
