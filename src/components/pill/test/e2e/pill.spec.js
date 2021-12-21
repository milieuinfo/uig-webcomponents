import { assert, getDriver, config } from '../../../../utils/test';
import { VlPill } from './pill.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-pill--default`;
const closableUrl = `${sbUrl}?id=custom-elements-vl-pill--default&args=closable:true`;
const checkableUrl = `${sbUrl}?id=custom-elements-vl-pill--default&args=checkable:true`;

describe('vl-pill', async () => {
  let driver;
  let identifier = 'vl-pill';

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('als gebruiker kan ik de inhoud van een pill zien', async () => {
    await driver.get(defaultUrl);
    const pill = await new VlPill(driver, identifier);
    const content = await pill.getContentSlotNodes();
    await assert.equal(content[0].textContent.trim(), 'Optie 1');
  });

  it('als gebruiker kan ik pillen zien zonder type en succes, waarschuwing en fout pillen', async () => {
    await driver.get(defaultUrl);
    const pill = await new VlPill(driver, identifier);
    await assert.eventually.isFalse(pill.isSuccess());
    await assert.eventually.isFalse(pill.isWarning());
    await assert.eventually.isFalse(pill.isError());

    await driver.get(`${defaultUrl}&args=type:success`);
    const successPill = await new VlPill(driver, identifier);
    await assert.eventually.isTrue(successPill.isSuccess());
    await assert.eventually.isFalse(successPill.isWarning());
    await assert.eventually.isFalse(successPill.isError());

    await driver.get(`${defaultUrl}&args=type:warning`);
    const warningPill = await new VlPill(driver, identifier);
    await assert.eventually.isFalse(warningPill.isSuccess());
    await assert.eventually.isTrue(warningPill.isWarning());
    await assert.eventually.isFalse(warningPill.isError());

    await driver.get(`${defaultUrl}&args=type:error`);
    const errorPill = await new VlPill(driver, identifier);
    await assert.eventually.isFalse(errorPill.isSuccess());
    await assert.eventually.isFalse(errorPill.isWarning());
    await assert.eventually.isTrue(errorPill.isError());
  });

  it('als gebruiker kan ik een closable pill sluiten', async () => {
    await driver.get(closableUrl);
    const pill = await new VlPill(driver, identifier);

    await assert.eventually.isTrue(pill.isClosable());
    await assert.eventually.isFalse(pill.isCheckable());

    await pill.close();
  });

  //   it('als gebruiker kan ik een checkable pill aan- en uitvinken', async () => {
  //     await driver.get(checkableUrl);
  //     const pill = await new VlPill(driver, identifier);

  //     await assert.eventually.isFalse(pill.isClosable());
  //     await assert.eventually.isTrue(pill.isCheckable());

  //     await assert.eventually.isFalse(pill.isChecked());

  //     await pill.toggleCheck();
  //     await assert.eventually.isTrue(pill.isChecked());

  //     await pill.toggleCheck();
  //     await assert.eventually.isFalse(pill.isChecked());
  //   });
});
