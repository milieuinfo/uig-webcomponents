import { assert, getDriver, config } from '../../../../utils/test';
import { VlActionGroup } from './action-group';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-action-group--default`;
const linksUrl = `${sbUrl}?id=native-elements-vl-action-group--with-links`;
const selector = 'div[is="vl-action-group"]';

describe('vl-action-group', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a dev, I can use the action-group wrapper aligned functionality', async () => {
    await driver.get(defaultUrl);
    const actionGroup = await new VlActionGroup(driver, selector);
    await assert.eventually.isTrue(actionGroup.isLeftAligned());
    await assert.eventually.isFalse(actionGroup.isCenterAligned());
    await assert.eventually.isFalse(actionGroup.isRightAligned());

    await driver.get(`${defaultUrl}&args=align:center`);
    const centerAlignedActionGroup = await new VlActionGroup(driver, selector);
    await assert.eventually.isFalse(centerAlignedActionGroup.isLeftAligned());
    await assert.eventually.isTrue(centerAlignedActionGroup.isCenterAligned());
    await assert.eventually.isFalse(centerAlignedActionGroup.isRightAligned());

    await driver.get(`${defaultUrl}&args=align:right`);
    const rightAlignedActionGroup = await new VlActionGroup(driver, selector);
    await assert.eventually.isFalse(rightAlignedActionGroup.isLeftAligned());
    await assert.eventually.isFalse(rightAlignedActionGroup.isCenterAligned());
    await assert.eventually.isTrue(rightAlignedActionGroup.isRightAligned());
  });

  it('as a dev, I can use the action-group wrapper space between functionality', async () => {
    await driver.get(defaultUrl);
    const actionGroup = await new VlActionGroup(driver, selector);
    await assert.eventually.isFalse(actionGroup.hasSpaceBetween());

    await driver.get(`${defaultUrl}&args=spaceBetween:true`);
    const spaceBetweenActionGroup = await new VlActionGroup(driver, selector);
    await assert.eventually.isTrue(spaceBetweenActionGroup.hasSpaceBetween());
  });

  it('as a dev, I can use the action-group wrapper bordered functionality', async () => {
    await driver.get(linksUrl);
    const actionGroup = await new VlActionGroup(driver, selector);
    await assert.eventually.isFalse(actionGroup.isBordered());

    await driver.get(`${linksUrl}&args=bordered:true`);
    const borderedActionGroup = await new VlActionGroup(driver, selector);
    await assert.eventually.isTrue(borderedActionGroup.isBordered());
  });
});
