const {VlElement} = require('vl-ui-core').Test;
const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlSideNavigationPage = require('./pages/vl-side-navigation.page');
const {VlH2, VlH3} = require('vl-ui-titles').Test.VlTitles;

describe('vl-side-navigation', async () => {
  let driver;
  let vlSideNavigationPage;

  before(() => {
    driver = getDriver();
    vlSideNavigationPage = new VlSideNavigationPage(driver);
    return vlSideNavigationPage.load();
  });

  it('als gebruiker kan ik de titel van de navigatie menu zien', async () => {
    const navigation = await vlSideNavigationPage.getSideNavigation();
    const navigationTitle = await navigation.getTitle();
    await assert.eventually.equal(navigationTitle.getText(), 'OP DEZE PAGINA');
  });

  it('als gebruiker kan ik in de navigatie menu de verschillende secties van een pagina zien', async () => {
    const navigation = await vlSideNavigationPage.getSideNavigation();
    const navigationItems = await navigation.getItems();
    assert.lengthOf(navigationItems, 3);
    await assert.eventually.equal(navigationItems[0].getText(), 'content 1');
    await assert.eventually.equal(navigationItems[1].getText(), 'content 2');
    await assert.eventually.equal(navigationItems[2].getText(), 'content 3');
  });

  it('als gebruiker kan ik tijdens het scrollen zien aan welke sectie ik in het navigatie menu zit', async () => {
    const navigation = await vlSideNavigationPage.getSideNavigation();
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

  it('als gebruiker kan ik de sub menu items zien bij het scrollen naar een sub content item', async () => {
    const navigation = await vlSideNavigationPage.getSideNavigation();
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

  it('als gebruiker kan ik het navigatie menu gebruiken om te navigeren naar een sectie op de pagina', async () => {
    const body = await new VlElement(driver, 'body');
    await body.scrollToTop();
    const navigation = await vlSideNavigationPage.getSideNavigation();
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
