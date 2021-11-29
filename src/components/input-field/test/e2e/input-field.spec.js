import { assert, getDriver, config } from '../../../../utils/test';
import { VlInputField } from './input-field';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-input-field--default`;
const disabledUrl = `${sbUrl}?id=native-elements-vl-input-field--disabled`;
const selector = 'input[is="vl-input-field"]';

describe('vl-input-field', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can input text in an input field', async () => {
    await driver.get(defaultUrl);
    const inputField = await new VlInputField(driver, selector);
    const inputText = 'text';
    await inputField.setValue(inputText);
    await assert.eventually.equal(inputField.getValue(), inputText);
  });

  it('as a dev, I can use the input-field wrapper block functionality', async () => {
    await driver.get(defaultUrl);
    const inputField = await new VlInputField(driver, selector);
    await assert.eventually.isFalse(inputField.isBlock());

    await driver.get(`${defaultUrl}&args=block:true`);
    const inputFieldBlock = await new VlInputField(driver, selector);
    await assert.eventually.isTrue(inputFieldBlock.isBlock());
  });

  it('as a dev, I can use the input-field wrapper error functionality', async () => {
    await driver.get(defaultUrl);
    const inputField = await new VlInputField(driver, selector);
    await assert.eventually.isFalse(inputField.isError());

    await driver.get(`${defaultUrl}&args=error:true`);
    const inputFieldError = await new VlInputField(driver, selector);
    await assert.eventually.isTrue(inputFieldError.isError());
  });

  it('as a dev, I can use the input-field wrapper error functionality', async () => {
    await driver.get(defaultUrl);
    const inputField = await new VlInputField(driver, selector);
    await assert.eventually.isFalse(inputField.isError());

    await driver.get(`${defaultUrl}&args=error:true`);
    const inputFieldError = await new VlInputField(driver, selector);
    await assert.eventually.isTrue(inputFieldError.isError());
  });

  it('as a dev, I can use the input-field wrapper success functionality', async () => {
    await driver.get(defaultUrl);
    const inputField = await new VlInputField(driver, selector);
    await assert.eventually.isFalse(inputField.isSuccess());

    await driver.get(`${defaultUrl}&args=success:true`);
    const inputFieldSuccess = await new VlInputField(driver, selector);
    await assert.eventually.isTrue(inputFieldSuccess.isSuccess());
  });

  it('as a user, I can see the difference between a normal input field and a disabled one', async () => {
    await driver.get(defaultUrl);
    const inputField = await new VlInputField(driver, selector);
    await assert.eventually.isTrue(inputField.isEnabled());

    await driver.get(disabledUrl);
    const inputFieldDisabled = await new VlInputField(driver, selector);
    await assert.eventually.isFalse(inputFieldDisabled.isEnabled());
  });

  it("as a user, I can't place a value in a disabled input field", async () => {
    await driver.get(disabledUrl);
    const inputField = await new VlInputField(driver, selector);
    await assert.isRejected(inputField.setValue('foobar'));
  });

  it('as a dev, I can use the input-field wrapper small functionality', async () => {
    await driver.get(defaultUrl);
    const inputField = await new VlInputField(driver, selector);
    await assert.eventually.isFalse(inputField.isSmall());

    await driver.get(`${defaultUrl}&args=small:true`);
    const inputFieldSmall = await new VlInputField(driver, selector);
    await assert.eventually.isTrue(inputFieldSmall.isSmall());
  });
});
