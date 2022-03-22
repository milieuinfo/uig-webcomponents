import { assert, getDriver } from '../../../../utils/test';
import { VlTabsPage } from './tabs.page';
import { VlTabsActiveTabPage } from './tabs-active-tab.page';

describe('vl-tabs', async () => {
  let vlTabsPage;
  let vlTabsActiveTabPage;

  const content1 = 'Nullam quis';
  const content2 = 'Donec sed';
  const content3 = 'Duis mollis';
  const content4 = 'Duis vitae';

  beforeEach(() => {
    const driver = getDriver();
    vlTabsPage = new VlTabsPage(driver);
    vlTabsActiveTabPage = new VlTabsActiveTabPage(driver);
    return vlTabsPage.load();
  });

  it('as a user I can see the different tabs', async () => {
    const tabs = await vlTabsPage.getTabs();
    const tabElements = await tabs.getTabs();
    assert.lengthOf(tabElements, 3);

    await assert.eventually.equal(tabElements[0].getText(), 'Trein');
    await assert.eventually.equal(tabElements[1].getText(), 'Metro, tram en bus');
    await assert.eventually.equal(tabElements[2].getText(), 'Fiets');
  });

  it('as a user I can see a tab with title slot and content', async () => {
    let tabs = await vlTabsPage.getSlottedTabs();
    await assert.eventually.isFalse(tabs.hasContent());

    const tabElements = await tabs.getTabs();
    const tab1TitleSlot = await tabElements[0].getTitleSlotNodes();
    const tab2TitleSlot = await tabElements[1].getTitleSlotNodes();
    await assert.eventually.equal(tab1TitleSlot[0].getText(), 'Auto');
    await assert.eventually.equal(tab2TitleSlot[0].getText(), 'Vrachtwagen');

    await tabElements[1].click();

    tabs = await vlTabsPage.getSlottedTabs();
    await assert.eventually.isTrue(tabs.hasContent());
    const tabContent = await tabs.getContentSlotElement();
    const tabContentText = await tabContent.getText();
    await assert.isTrue(tabContentText.startsWith(content4));
  });

  it('as a user I can select a tab and see the specific tab content', async () => {
    await vlTabsPage.load();

    let tabs = await vlTabsPage.getTabs();
    await assert.eventually.isFalse(tabs.hasContent());

    let tabElements = await tabs.getTabs();
    await tabElements[0].click();
    tabs = await vlTabsPage.getTabs();
    await assert.eventually.isTrue(tabs.hasContent());
    let tabContent = await tabs.getContentSlotElement();
    let tabContentText = await tabContent.getText();
    await assert.isTrue(tabContentText.startsWith(content1));

    tabElements = await tabs.getTabs();
    await tabElements[1].click();
    tabs = await vlTabsPage.getTabs();
    tabContent = await tabs.getContentSlotElement();
    tabContentText = await tabContent.getText();
    await assert.isTrue(tabContentText.startsWith(content2));

    tabElements = await tabs.getTabs();
    await tabElements[2].click();
    tabs = await vlTabsPage.getTabs();
    tabContent = await tabs.getContentSlotElement();
    tabContentText = await tabContent.getText();
    await assert.isTrue(tabContentText.startsWith(content3));
  });

  it('as a user I can directly surf to a URL of a tab and the tab will be activated', async () => {
    let tabs = await vlTabsPage.getTabs();
    await assert.eventually.isFalse(tabs.hasContent());

    await vlTabsPage.loadHash('#trein');
    tabs = await vlTabsPage.getTabs();
    await assert.eventually.isTrue(tabs.hasContent());
    const tabContent = await tabs.getContentSlotElement();
    const tabContentText = await tabContent.getText();
    await assert.isTrue(tabContentText.startsWith(content1));
  });

  it('as a user I can see the difference of alt tabs and normal tabs', async () => {
    const tabs = await vlTabsPage.getTabs();
    const altTabs = await vlTabsPage.getAltTabs();

    await assert.eventually.isFalse(tabs.isAlt());
    await assert.eventually.isTrue(altTabs.isAlt());
  });

  it('as a user I can immediately see the default active tab and its content without having to do anything', async () => {
    let tabs = await vlTabsPage.getTabs();
    let tabElements = await tabs.getTabs();
    await assert.eventually.isFalse(tabElements[0].isActive());
    await assert.eventually.isFalse(tabElements[1].isActive());
    await assert.eventually.isFalse(tabElements[2].isActive());
    await assert.eventually.isFalse(tabs.hasContent());

    await vlTabsActiveTabPage.load();
    tabs = await vlTabsActiveTabPage.getTabs();
    tabElements = await tabs.getTabs();
    await assert.eventually.isFalse(tabElements[0].isActive());
    await assert.eventually.isFalse(tabElements[1].isActive());
    await assert.eventually.isTrue(tabElements[2].isActive());
    await assert.eventually.isTrue(tabs.hasContent());
  });
});
