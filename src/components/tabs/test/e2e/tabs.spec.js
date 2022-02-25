import { assert, getDriver, config } from '../../../../utils/test';
import VlTabs from './tabs';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-tabs--default`;
const activeTabUrl = `${sbUrl}?id=native-elements-vl-tabs--with-active-tab`;
const altUrl = `${sbUrl}?id=native-elements-vl-tabs--alt-variant`;
const slotUrl = `${sbUrl}?id=native-elements-vl-tabs-vl-tabs-pane--with-title-slot`;

const selector = 'vl-tabs';

const content1 =
  'Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.';
const content2 =
  'Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const content3 =
  'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.';
const content4 = 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.';

describe('vl-tabs', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user I can view the content of the different tabs', async () => {
    await driver.get(defaultUrl);
    const tabs = await new VlTabs(driver, selector);
    const tabElements = await tabs.getTabs();
    assert.lengthOf(tabElements, 3);

    await assert.eventually.equal(tabElements[0].getText(), 'Trein');
    await assert.eventually.equal(tabElements[1].getText(), 'Metro, tram en bus');
    await assert.eventually.equal(tabElements[2].getText(), 'Fiets');
  });

  it('as a user I can select a tab and see its specific content', async () => {
    await driver.get(defaultUrl);

    let tabs = await new VlTabs(driver, selector);
    const tabElements = await tabs.getTabs();

    await tabElements[1].click();
    tabs = await new VlTabs(driver, selector);
    await assert.eventually.isTrue(tabs.hasContent());
    let tabContent = await tabs.getContentSlotElement();
    await assert.eventually.equal(tabContent.getText(), content2);

    await tabElements[0].click();
    tabs = await new VlTabs(driver, selector);
    await assert.eventually.isTrue(tabs.hasContent());
    tabContent = await tabs.getContentSlotElement();
    await assert.eventually.equal(tabContent.getText(), content1);

    await tabElements[2].click();
    tabs = await new VlTabs(driver, selector);
    await assert.eventually.isTrue(tabs.hasContent());
    tabContent = await tabs.getContentSlotElement();
    await assert.eventually.equal(tabContent.getText(), content3);
  });

  it('as a user a tab will be activated when I directly surf to the tab URL', async () => {
    await driver.get(defaultUrl);

    const url = await driver.getCurrentUrl();
    await driver.get(`${url}#fiets`);
    await driver.navigate().refresh();

    const tabs = await new VlTabs(driver, selector);
    await assert.eventually.isTrue(tabs.hasContent());
    const tabContent = await tabs.getContentSlotElement();
    await assert.eventually.equal(tabContent.getText(), content1);
  });

  it('as a user I can see the difference between an alt variant and normal tabs', async () => {
    await driver.get(defaultUrl);
    const tabs = await new VlTabs(driver, selector);
    await assert.eventually.isFalse(tabs.isAlt());

    await driver.get(altUrl);
    const altTabs = await new VlTabs(driver, selector);
    await assert.eventually.isTrue(altTabs.isAlt());
  });

  it("as a user I immediately see the default active tab's content", async () => {
    await driver.get(defaultUrl);
    const tabs = await new VlTabs(driver, selector);

    let tabElements = await tabs.getTabs();
    await assert.eventually.isTrue(tabElements[0].isActive());
    await assert.eventually.isFalse(tabElements[1].isActive());
    await assert.eventually.isFalse(tabElements[2].isActive());

    await driver.get(activeTabUrl);
    const activeTabs = await new VlTabs(driver, selector);

    tabElements = await activeTabs.getTabs();
    await assert.eventually.isFalse(tabElements[0].isActive());
    await assert.eventually.isFalse(tabElements[1].isActive());
    await assert.eventually.isTrue(tabElements[2].isActive());
  });

  it('as a user I can view a tab with a title slot and content', async () => {
    await driver.get(slotUrl);
    const tabs = await new VlTabs(driver, selector);

    const tabElements = await tabs.getTabs();
    const tab1TitleSlot = await tabElements[0].getTitleSlotNodes();
    await assert.eventually.equal(tab1TitleSlot[0].getText(), 'Trein');

    const tabContent = await tabs.getContentSlotElement();
    const tabContentText = await tabContent.getText();
    await assert.isTrue(tabContentText.includes(content4));
  });
});
