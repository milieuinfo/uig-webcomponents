import { assert, getDriver, config } from '../../../../utils/test';
import { VlInfoTile } from './info-tile';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-info-tile--default`;
const toggleableUrl = `${sbUrl}?id=custom-elements-vl-info-tile--default&args=toggleable:true`;
const toggleableAutoOpenUrl = `${sbUrl}?id=custom-elements-vl-info-tile--default&args=autoOpen:true;toggleable:true`;
const selector = 'vl-info-tile';

describe('vl-info-tile', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user I can see the tilte of the info tile', async () => {
    await driver.get(defaultUrl);
    const infoTile = await new VlInfoTile(driver, selector);
    await assert.eventually.equal(infoTile.getTitle(), 'Broos Deprez');
  });

  it('as a user I can see the subtitle of the info tile', async () => {
    await driver.get(defaultUrl);
    const infoTile = await new VlInfoTile(driver, selector);
    await assert.eventually.equal(infoTile.getSubtitle(), 'Uw zoon (19.05.2005)');
  });

  it('as a user I can see the content of the info tile', async () => {
    await driver.get(defaultUrl);
    const infoTile = await new VlInfoTile(driver, selector);
    const contentSlotElement = await infoTile.getContentSlotElement();
    await assert.eventually.include(contentSlotElement.getText(), 'De studietoelage voor Broos Deprez werd toegekend.');
  });

  it('as a user I can open and close a toggleable info tile', async () => {
    await driver.get(toggleableUrl);
    const infoTile = await new VlInfoTile(driver, selector);
    await assert.eventually.isFalse(infoTile.isOpen());
    await infoTile.toggle();
    await assert.eventually.isTrue(infoTile.isOpen());
    await infoTile.toggle();
    await assert.eventually.isFalse(infoTile.isOpen());
  });

  it('as a user I can open and close a toggleable info tile by clicking on the title', async () => {
    await driver.get(toggleableUrl);
    const infoTile = await new VlInfoTile(driver, selector);
    await assert.eventually.isFalse(infoTile.isOpen());
    const slots = await infoTile.getTitleSlotElements();
    await slots[0].click();
    await assert.eventually.isTrue(infoTile.isOpen());
    await slots[0].click();
    await assert.eventually.isFalse(infoTile.isOpen());
  });

  it("as a user I can immediately see the content of an info tile when it's automatically open", async () => {
    await driver.get(toggleableAutoOpenUrl);
    const infoTile = await new VlInfoTile(driver, selector);
    await assert.eventually.isTrue(infoTile.isOpen());
  });
});
