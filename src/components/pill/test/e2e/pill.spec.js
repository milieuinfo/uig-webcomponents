/* eslint-disable no-undef */
import { assert, getDriver, config } from '../../../../utils/test';
import { VlPill } from './pill.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-pill--default`;
const selector = 'vl-pill';

describe('vl-pill', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  // to fix broken tests, ticket is made

  // it('as a user, I can see the content of a pill', async () => {
  //   await driver.get(defaultUrl);
  //   const pill = await new VlPill(driver, selector);
  //   const content = await pill.getContentSlotNodes();
  //   await assert.equal(content[0].textContent.trim(), 'Optie 1');
  // });

  it('as a dev, I can use the type wrapper functionality', async () => {
    await driver.get(defaultUrl);
    const pill = await new VlPill(driver, selector);
    await assert.eventually.isFalse(pill.isSuccess());
    await assert.eventually.isFalse(pill.isWarning());
    await assert.eventually.isFalse(pill.isError());

    await driver.get(`${defaultUrl}&args=type:success`);
    const successPill = await new VlPill(driver, selector);
    await assert.eventually.isTrue(successPill.isSuccess());
    await assert.eventually.isFalse(successPill.isWarning());
    await assert.eventually.isFalse(successPill.isError());

    await driver.get(`${defaultUrl}&args=type:warning`);
    const warningPill = await new VlPill(driver, selector);
    await assert.eventually.isFalse(warningPill.isSuccess());
    await assert.eventually.isTrue(warningPill.isWarning());
    await assert.eventually.isFalse(warningPill.isError());

    await driver.get(`${defaultUrl}&args=type:error`);
    const errorPill = await new VlPill(driver, selector);
    await assert.eventually.isFalse(errorPill.isSuccess());
    await assert.eventually.isFalse(errorPill.isWarning());
    await assert.eventually.isTrue(errorPill.isError());
  });

  it('as a dev, I can use the disabled wrapper functionality', async () => {
    await driver.get(defaultUrl);
    const pill = await new VlPill(driver, selector);
    await assert.eventually.isFalse(pill.isDisabled());

    await driver.get(`${defaultUrl}&args=disabled:true`);
    const disabledPill = await new VlPill(driver, selector);
    await assert.eventually.isTrue(disabledPill.isDisabled());
  });

  // it('as a user, I can use a closable pill', async () => {
  //   await driver.get(`${defaultUrl}&args=closable:true`);
  //   const pill = await new VlPill(driver, selector);
  //   await assert.eventually.isTrue(pill.isClosable());
  //   await assert.eventually.isFalse(pill.isCheckable());

  //   await pill.close();
  //   const closeIsFired = await driver.executeScript('return window.closeIsFired');
  //   assert.isTrue(closeIsFired);
  // });

  it('as a user, I can check and uncheck a checkable pill', async () => {
    await driver.get(`${defaultUrl}&args=checkable:true`);
    const pill = await new VlPill(driver, selector);

    await assert.eventually.isFalse(pill.isClosable());
    await assert.eventually.isTrue(pill.isCheckable());

    await assert.eventually.isFalse(pill.isChecked());

    await pill.toggleCheck();
    await assert.eventually.isTrue(pill.isChecked());

    await pill.toggleCheck();
    await assert.eventually.isFalse(pill.isChecked());
  });
});
