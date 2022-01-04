import { assert, getDriver, config } from '../../../../utils/test';
import { VlH1, VlH2, VlH3, VlH4, VlH5, VlH6 } from './titles';

const { sbUrl } = config;
const baseUrl = `${sbUrl}?id=native-elements-vl-titles-vl-`;
const [h1, h2, h3, h4, h5, h6] = [
  {
    id: 1,
    url: `${baseUrl}h1--default`,
    class: VlH1,
    selector: 'h1[is="vl-h1"]',
  },
  {
    id: 2,
    url: `${baseUrl}h2--default`,
    class: VlH2,
    selector: 'h2[is="vl-h2"]',
  },
  {
    id: 3,
    url: `${baseUrl}h3--default`,
    class: VlH3,
    selector: 'h3[is="vl-h3"]',
  },
  {
    id: 4,
    url: `${baseUrl}h4--default`,
    class: VlH4,
    selector: 'h4[is="vl-h4"]',
  },
  {
    id: 5,
    url: `${baseUrl}h5--default`,
    class: VlH5,
    selector: 'h5[is="vl-h5"]',
  },
  {
    id: 6,
    url: `${baseUrl}h6--default`,
    class: VlH6,
    selector: 'h6[is="vl-h6"]',
  },
];

describe('vl-titles', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see an h1, h2, h3, h4, h5 and h6', async () => {
    const testStandardTitle = async (title, headerNumber) => {
      await assert.eventually.isTrue(title.isH(headerNumber));
      await assert.eventually.isFalse(title.isSansFont());
      await assert.eventually.isFalse(title.hasBorder());
      await assert.eventually.isFalse(title.isAlt());
      await assert.eventually.equal(title.getText(), "I'm a title");
    };

    await driver.get(h1.url);
    await testStandardTitle(await new h1.class(driver, h1.selector), h1.id);

    await driver.get(h2.url);
    await testStandardTitle(await new h2.class(driver, h2.selector), h2.id);

    await driver.get(h3.url);
    await testStandardTitle(await new h3.class(driver, h3.selector), h3.id);

    await driver.get(h4.url);
    await testStandardTitle(await new h4.class(driver, h4.selector), h4.id);

    await driver.get(h5.url);
    await testStandardTitle(await new h5.class(driver, h5.selector), h5.id);

    await driver.get(h6.url);
    await testStandardTitle(await new h6.class(driver, h6.selector), h6.id);
  });

  it('as a dev, I can use the titles wrapper sans functionality', async () => {
    await driver.get(`${h1.url}&args=sans:true`);
    const title = await new h1.class(driver, h1.selector);
    await assert.eventually.isTrue(title.isSansFont());
    await assert.eventually.isFalse(title.hasBorder());
    await assert.eventually.isFalse(title.isAlt());
    await assert.eventually.isFalse(title.hasNoSpaceBottom());
  });

  it('as a dev, I can use the titles wrapper border functionality', async () => {
    await driver.get(`${h1.url}&args=border:true`);
    const title = await new h1.class(driver, h1.selector);
    await assert.eventually.isFalse(title.isSansFont());
    await assert.eventually.isTrue(title.hasBorder());
    await assert.eventually.isFalse(title.isAlt());
    await assert.eventually.isFalse(title.hasNoSpaceBottom());
  });

  it('as a dev, I can use the titles wrapper alt functionality', async () => {
    await driver.get(`${h4.url}&args=alt:true`);
    const title = await new h4.class(driver, h4.selector);
    await assert.eventually.isFalse(title.isSansFont());
    await assert.eventually.isFalse(title.hasBorder());
    await assert.eventually.isTrue(title.isAlt());
    await assert.eventually.isFalse(title.hasNoSpaceBottom());
  });

  it('as a dev, I can use the titles wrapper no space bottom functionality', async () => {
    await driver.get(`${h4.url}&args=noSpaceBottom:true`);
    const title = await new h4.class(driver, h4.selector);
    await assert.eventually.isFalse(title.isSansFont());
    await assert.eventually.isFalse(title.hasBorder());
    await assert.eventually.isFalse(title.isAlt());
    await assert.eventually.isTrue(title.hasNoSpaceBottom());
  });
});
