import { assert, getDriver, config } from '../../../../utils/test';
import { VlInputField } from './input-field';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-input-field--default`;
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

  it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een disabled inputfield', async () => {
    await driver.get(defaultUrl);
    const inputField = await new VlInputField(driver, selector);
    await assert.eventually.isFalse(inputField.isEnabled());

    await driver.get(`${defaultUrl}&args=disabled:true`);
    const inputFieldDisabled = await new VlInputField(driver, selector);
    await assert.eventually.isTrue(inputFieldDisabled.isEnabled());
  });

  // it('Als gebruiker kan ik geen waarde zetten in een disabled input veld', async () => {
  //   const inputFieldDisabled = await vlInputFieldPage.getInputFieldDisabled();
  //   await assert.isRejected(inputFieldDisabled.setValue('foobar'));
  // });

  // it('Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een small inputfield', async () => {
  //   const inputFieldNotSmall = await vlInputFieldPage.getInputField();
  //   await assert.eventually.isFalse(inputFieldNotSmall.isSmall());
  //   const inputFieldSmall = await vlInputFieldPage.getInputFieldSmall();
  //   await assert.eventually.isTrue(inputFieldSmall.isSmall());
  // });
});
