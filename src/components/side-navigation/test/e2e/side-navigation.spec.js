import { assert, getDriver, config } from '../../../../utils/test';
import { VlH2, VlH3 } from '../../../titles/test/e2e/titles';
import { VlSideNavigation } from './side-navigation';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-side-navigation--default`;
const selector = `nav[is="vl-side-navigation"]`;

describe('vl-side-navigation', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the title of a navigation menu', async () => {
    await driver.get(defaultUrl);
    const navigation = await new VlSideNavigation(driver, selector);
    const navigationTitle = await navigation.getTitle();
    await assert.eventually.equal(navigationTitle.getText(), 'OP DEZE PAGINA');
  });

  it('as a user, I can see the different sections of the page in the navigation menu', async () => {
    await driver.get(defaultUrl);
    const navigation = await new VlSideNavigation(driver, selector);
    const navigationItems = await navigation.getItems();
    assert.lengthOf(navigationItems, 3);
    await assert.eventually.equal(navigationItems[0].getText(), 'content 1');
    await assert.eventually.equal(navigationItems[1].getText(), 'content 2');
    await assert.eventually.equal(navigationItems[2].getText(), 'content 3');
  });

  it('as a user, I can see on which item I am in the navigation menu while scrolling', async () => {
    await driver.get(defaultUrl);
    const navigation = await new VlSideNavigation(driver, selector);
    const content1 = await new VlH2(driver, '#content-1 [is="vl-h2"]');
    const content2 = await new VlH2(driver, '#content-2 [is="vl-h2"]');
    const content3 = await new VlH2(driver, '#content-3 [is="vl-h2"]');
    const navigationItems = await navigation.getItems();
    const navigationContent1Toggle = await navigationItems[0].getToggle();
    const navigationContent2Toggle = await navigationItems[1].getToggle();
    const navigationContent3Toggle = await navigationItems[2].getToggle();
    await assert.eventually.isFalse(navigationContent1Toggle.isActive());
    await assert.eventually.isFalse(navigationContent2Toggle.isActive());
    await assert.eventually.isFalse(navigationContent3Toggle.isActive());
    await content1.scrollIntoView();
    await driver.wait(async () => await navigationContent1Toggle.isActive());
    await assert.eventually.isTrue(navigationContent1Toggle.isActive());
    await assert.eventually.isFalse(navigationContent2Toggle.isActive());
    await assert.eventually.isFalse(navigationContent3Toggle.isActive());
    await content2.scrollIntoView();
    await driver.wait(async () => await navigationContent2Toggle.isActive());
    await assert.eventually.isFalse(navigationContent1Toggle.isActive());
    await assert.eventually.isTrue(navigationContent2Toggle.isActive());
    await assert.eventually.isFalse(navigationContent3Toggle.isActive());
    await content3.scrollIntoView();
    await driver.wait(async () => await navigationContent3Toggle.isActive());
    await assert.eventually.isFalse(navigationContent1Toggle.isActive());
    await assert.eventually.isFalse(navigationContent2Toggle.isActive());
    await assert.eventually.isTrue(navigationContent3Toggle.isActive());
  });

  it('as a user, I can see the sub menu items while scrolling to a sub content item', async () => {
    await driver.get(defaultUrl);
    const navigation = await new VlSideNavigation(driver, selector);
    const content1 = await new VlH2(driver, '#content-1 [is="vl-h2"]');
    const content1Sub1 = await new VlH3(driver, '#content-1-1 [is="vl-h3"]');
    const items = await navigation.getItems();
    const navigationContent1Items = await items[0].getItems();
    const navigationContent1Toggle = await items[0].getToggle();
    const navigationContent1Item1Toggle = await navigationContent1Items[0].getToggle();
    await assert.eventually.isFalse(navigationContent1Items[0].isDisplayed());
    await assert.eventually.isFalse(navigationContent1Items[1].isDisplayed());
    await assert.eventually.isFalse(navigationContent1Items[2].isDisplayed());
    await assert.eventually.isFalse(navigationContent1Items[3].isDisplayed());
    await content1.scrollIntoView();
    await driver.wait(async () => await navigationContent1Toggle.isActive());
    await assert.eventually.isFalse(navigationContent1Items[0].isDisplayed());
    await assert.eventually.isFalse(navigationContent1Items[1].isDisplayed());
    await assert.eventually.isFalse(navigationContent1Items[2].isDisplayed());
    await assert.eventually.isFalse(navigationContent1Items[3].isDisplayed());
    await content1Sub1.scrollIntoView();
    await driver.wait(async () => await navigationContent1Item1Toggle.isActive());
    await assert.eventually.isTrue(navigationContent1Items[0].isDisplayed());
    await assert.eventually.isTrue(navigationContent1Items[1].isDisplayed());
    await assert.eventually.isTrue(navigationContent1Items[2].isDisplayed());
    await assert.eventually.isTrue(navigationContent1Items[3].isDisplayed());
  });

  it('as a user, I can use the navigation menu to navigate to a section on the page', async () => {
    await driver.get(defaultUrl);
    const navigation = await new VlSideNavigation(driver, selector);
    const content1 = await new VlH2(driver, '#content-1 [is="vl-h2"]');
    const content2 = await new VlH2(driver, '#content-2 [is="vl-h2"]');
    const content3 = await new VlH2(driver, '#content-3 [is="vl-h2"]');
    const navigationItems = await navigation.getItems();
    const navigationContent1Toggle = await navigationItems[0].getToggle();
    const navigationContent3Toggle = await navigationItems[2].getToggle();
    await navigationContent3Toggle.click();
    await driver.wait(async () => await content3.isInViewport());
    await assert.eventually.isFalse(content1.isInViewport());
    await assert.eventually.isFalse(content2.isInViewport());
    await assert.eventually.isTrue(content3.isInViewport());
    await navigationContent1Toggle.click();
    await driver.wait(async () => await content1.isInViewport());
    await assert.eventually.isTrue(content1.isInViewport());
    await assert.eventually.isFalse(content2.isInViewport());
    await assert.eventually.isFalse(content3.isInViewport());
  });
});
