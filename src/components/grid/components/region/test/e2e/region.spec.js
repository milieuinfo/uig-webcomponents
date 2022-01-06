import { assert, getDriver, config } from '../../../../../../utils/test';
import { VlRegion } from './region';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-grid-vl-region--default`;
const overlapUrl = `${sbUrl}?id=native-elements-vl-grid-vl-region--overlap`;
const selector = 'section[is="vl-region"]';

describe('vl-region', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see a region without special properties', async () => {
    await driver.get(defaultUrl);
    const region = await new VlRegion(driver, selector);
    await assert.eventually.isFalse(region.hasNoSpace());
    await assert.eventually.isFalse(region.hasNoSpaceBottom());
    await assert.eventually.isFalse(region.hasNoSpaceTop());
    await assert.eventually.isFalse(region.isAlt());
    await assert.eventually.isFalse(region.isOverlap());
    await assert.eventually.isFalse(region.isSmall());
    await assert.eventually.isFalse(region.isMedium());
    await assert.eventually.isFalse(region.hasBorder());
  });

  it('as a user, I can see an alt region with only alt properties', async () => {
    await driver.get(`${defaultUrl}&args=alt:true`);
    const region = await new VlRegion(driver, selector);
    await assert.eventually.isFalse(region.hasNoSpace());
    await assert.eventually.isFalse(region.hasNoSpaceBottom());
    await assert.eventually.isFalse(region.hasNoSpaceTop());
    await assert.eventually.isTrue(region.isAlt());
    await assert.eventually.isFalse(region.isOverlap());
    await assert.eventually.isFalse(region.isSmall());
    await assert.eventually.isFalse(region.isMedium());
    await assert.eventually.isFalse(region.hasBorder());
  });

  it('as a user, I can see an overlap region with only overlap properties', async () => {
    await driver.get(overlapUrl);
    const region = await new VlRegion(driver, selector);
    await assert.eventually.isFalse(region.hasNoSpace());
    await assert.eventually.isFalse(region.hasNoSpaceBottom());
    await assert.eventually.isFalse(region.hasNoSpaceTop());
    await assert.eventually.isFalse(region.isAlt());
    await assert.eventually.isTrue(region.isOverlap());
    await assert.eventually.isFalse(region.isSmall());
    await assert.eventually.isFalse(region.isMedium());
    await assert.eventually.isFalse(region.hasBorder());
  });
});
