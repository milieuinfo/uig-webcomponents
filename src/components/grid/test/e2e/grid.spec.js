import { assert, getDriver, config } from '../../../../utils/test';
import { VlGrid } from './grid';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-grid--default`;
const selector = 'div[is="vl-grid"]';

describe('vl-grid', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see a stacked grid', async () => {
    await driver.get(defaultUrl);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isStacked());
  });

  it('as a user, I can see a large stacked grid', async () => {
    await driver.get(`${defaultUrl}&args=stackedLarge:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isStackedLarge());
  });

  it('as a user, I can see a small stacked grid', async () => {
    await driver.get(`${defaultUrl}&args=stackedSmall:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isStackedSmall());
  });

  it('as a user, I can see a left aligned grid', async () => {
    await driver.get(`${defaultUrl}&args=alignStart:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isHorizontallyStartAligned());
  });

  it('as a user, I can see a center aligned grid', async () => {
    await driver.get(`${defaultUrl}&args=alignCenter:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isHorizontallyCenterAligned());
  });

  it('as a user, I can see a right aligned grid', async () => {
    await driver.get(`${defaultUrl}&args=alignEnd:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isHorizontallyEndAligned());
  });

  it('as a user, I can see a spaced around grid', async () => {
    await driver.get(`${defaultUrl}&args=alignSpaceAround:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isHorizontallyAlignedWithSpaceAround());
  });

  it('as a user, I can see a spaced between grid', async () => {
    await driver.get(`${defaultUrl}&args=alignSpaceBetween:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isHorizontallyAlignedWithSpaceBetween());
  });

  it('as a user, I can see a vertical top aligned grid', async () => {
    await driver.get(`${defaultUrl}&args=vTop:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isVerticallyTopAligned());
  });

  it('as a user, I can see a vertical center aligned grid', async () => {
    await driver.get(`${defaultUrl}&args=vCenter:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isVerticallyCenterAligned());
  });

  it('as a user, I can see a vertical bottom aligned grid', async () => {
    await driver.get(`${defaultUrl}&args=vBottom:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isVerticallyBottomAligned());
  });

  it('as a user, I can see a grid with the height of the columns stretched to the maximum', async () => {
    await driver.get(`${defaultUrl}&args=vStretch:true`);
    const grid = await new VlGrid(driver, selector);
    await assert.eventually.isTrue(grid.isVerticallyStretched());
  });
});
