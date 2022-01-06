import { assert, getDriver, config, By } from '../../../../utils/test';
import { VlInfoblock } from './infoblock';

const { sbUrl } = config;
const baseUrl = `${sbUrl}?id=custom-elements-vl-infoblock--`;
const selector = 'vl-infoblock';

describe('vl-infoblock', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the title of an infoblock', async () => {
    await driver.get(`${baseUrl}contact`);
    const iconblock = await new VlInfoblock(driver, selector);
    const title = await iconblock.getTitleSlotElements();
    await assert.eventually.equal(title[0].getText(), 'Contactenlijst');
  });

  it('as a user, I can see the content of an infoblock', async () => {
    await driver.get(`${baseUrl}contact`);
    const iconblock = await new VlInfoblock(driver, selector);
    const contentSlotText = await iconblock.getContentSlotText();
    assert.equal(
      contentSlotText,
      'Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.',
    );
  });

  it('as a dev, I can use the infotext wrapper isContact functionality', async () => {
    await driver.get(`${baseUrl}contact`);
    const iconblock = await new VlInfoblock(driver, selector);
    await assert.eventually.isTrue(iconblock.isContact());
  });

  it('as a dev, I can use the infotext wrapper isPublication functionality', async () => {
    await driver.get(`${baseUrl}publications`);
    const iconblock = await new VlInfoblock(driver, selector);
    await assert.eventually.isTrue(iconblock.isPublication());
  });

  it('as a dev, I can use the infotext wrapper isFaq functionality', async () => {
    await driver.get(`${baseUrl}faq`);
    const iconblock = await new VlInfoblock(driver, selector);
    await assert.eventually.isTrue(iconblock.isFaq());
  });

  it('as a dev, I can use the infotext wrapper isNews functionality', async () => {
    await driver.get(`${baseUrl}news`);
    const iconblock = await new VlInfoblock(driver, selector);
    await assert.eventually.isTrue(iconblock.isNews());
  });

  it('as a dev, I can use the infotext wrapper isTimeline functionality', async () => {
    await driver.get(`${baseUrl}timeline`);
    const iconblock = await new VlInfoblock(driver, selector);
    await assert.eventually.isTrue(iconblock.isTimeline());
  });

  it('as a dev, I can use the infotext wrapper isQuestion functionality', async () => {
    await driver.get(`${baseUrl}question`);
    const iconblock = await new VlInfoblock(driver, selector);
    await assert.eventually.isTrue(iconblock.isQuestion());
  });

  it('as a dev, I can use the infotext wrapper type functionality', async () => {
    await driver.get(`${baseUrl}custom-icon`);
    const iconblock = await new VlInfoblock(driver, selector);
    const icon = await iconblock.getIcon();
    await assert.eventually.equal(icon.getType(), 'calendar');
    await assert.eventually.isNull(iconblock.getType());
  });

  it('as a user, I can see the title of an infoblock, set via a slot', async () => {
    await driver.get(`${baseUrl}with-slot-elements`);
    const iconblock = await new VlInfoblock(driver, selector);
    const title = await iconblock.getTitleSlotElements();
    await assert.eventually.equal(title[0].getText(), 'Titel via slot');
  });
});
