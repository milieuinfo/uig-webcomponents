import { assert, getDriver, config } from '../../../../../../utils/test';
import { VlColumn } from './column';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-grid-vl-column--default`;
const customSizesUrl = `${sbUrl}?id=native-elements-vl-grid-vl-column--with-custom-sizes`;
const selector = 'div[is="vl-column"]';

describe('vl-column', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see a column with the default values', async () => {
    await driver.get(defaultUrl);
    const column = await new VlColumn(driver, selector);
    await assert.eventually.equal(column.getSize(), 8);
    await assert.eventually.equal(column.getMaxSize(), 12);
    await assert.eventually.equal(column.getMediumSize(), 10);
    await assert.eventually.equal(column.getMediumMaxSize(), 12);
    await assert.eventually.equal(column.getSmallSize(), 12);
    await assert.eventually.equal(column.getSmallMaxSize(), 12);
    await assert.eventually.equal(column.getExtraSmallSize(), 12);
    await assert.eventually.equal(column.getExtraSmallMaxSize(), 12);
  });

  it('as a user, I can see a column with custom responsive sizes', async () => {
    await driver.get(`${customSizesUrl}&args=size:4;mediumSize:6;smallSize:8`);
    const column = await new VlColumn(driver, selector);
    await assert.eventually.equal(column.getSize(), 4);
    await assert.eventually.equal(column.getMaxSize(), 12);
    await assert.eventually.equal(column.getMediumSize(), 6);
    await assert.eventually.equal(column.getMediumMaxSize(), 12);
    await assert.eventually.equal(column.getSmallSize(), 8);
    await assert.eventually.equal(column.getSmallMaxSize(), 12);
    await assert.eventually.equal(column.getExtraSmallSize(), 12);
    await assert.eventually.equal(column.getExtraSmallMaxSize(), 12);
    await assert.eventually.equal(column.getPush(), 0);
  });

  it('as a user, I can see a columns with that is pushed', async () => {
    await driver.get(`${customSizesUrl}&args=size:4;push:1`);
    const column = await new VlColumn(driver, selector);
    await assert.eventually.equal(column.getSize(), 4);
    await assert.eventually.equal(column.getMaxSize(), 12);
    await assert.eventually.equal(column.getPush(), 1);
  });
});
