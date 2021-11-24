import { assert, getDriver, config } from '../../../../utils/test';
import { VlAccordion } from './accordion.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-accordion--default`;
const dynamicToggleUrl = `${sbUrl}?id=custom-elements-vl-accordion--dynamic-toggle`;
const titleSlotUrl = `${sbUrl}?id=custom-elements-vl-accordion--with-title-slot`;

const assertAccordionCanBeOpenedAndClosed = async (accordion) => {
  await assert.eventually.isTrue(accordion.isClosed());
  await assert.eventually.isFalse(accordion.isContentDisplayed());
  await accordion.open();
  await assert.eventually.isTrue(accordion.isOpen());
  await assert.eventually.isTrue(accordion.isContentDisplayed());
  await accordion.close();
  await assert.eventually.isTrue(accordion.isClosed());
  await assert.eventually.isFalse(accordion.isContentDisplayed());
};

describe('vl-accordion', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can open and close a standard accordion', async () => {
    await driver.get(defaultUrl);
    const accordion = await new VlAccordion(driver, 'vl-accordion');
    await assertAccordionCanBeOpenedAndClosed(accordion);
  });

  it('as a user, I can open and close a dynamic accordion', async () => {
    await driver.get(dynamicToggleUrl);
    const accordion = await new VlAccordion(driver, 'vl-accordion');
    await assertAccordionCanBeOpenedAndClosed(accordion);
  });

  it('as a dev, I can open and close an accordion programmatically', async () => {
    await driver.get(defaultUrl);
    const accordion = await new VlAccordion(driver, 'vl-accordion');

    await accordion.open();
    await assert.eventually.isTrue(accordion.isOpen());
    await assert.eventually.isTrue(accordion.isContentDisplayed());

    await accordion.close();
    await assert.eventually.isTrue(accordion.isClosed());
    await assert.eventually.isFalse(accordion.isContentDisplayed());

    await accordion.toggle();
    await assert.eventually.isTrue(accordion.isOpen());
    await assert.eventually.isTrue(accordion.isContentDisplayed());

    await accordion.toggle();
    await assert.eventually.isTrue(accordion.isClosed());
    await assert.eventually.isFalse(accordion.isContentDisplayed());
  });

  it('as a user, I can open and close a accordion with a title slot', async () => {
    await driver.get(titleSlotUrl);
    const accordion = await new VlAccordion(driver, 'vl-accordion');
    await assertAccordionCanBeOpenedAndClosed(accordion);
  });

  it('as a user, I can see the title of a standard accordion', async () => {
    await driver.get(defaultUrl);
    const accordion = await new VlAccordion(driver, 'vl-accordion');
    await assert.eventually.equal(accordion.titleText(), 'Lees meer over de onderwijsdoelstelling');
    assert.equal((await accordion.getTitleSlotElements()).length, 0);
  });

  it('as a user, I can see the title of a standard accordion with a title slot', async () => {
    await driver.get(titleSlotUrl);
    const accordion = await new VlAccordion(driver, 'vl-accordion');
    await assert.eventually.equal(accordion.titleText(), 'Lees meer over de onderwijsdoelstelling');
    assert.eventually.equal(
      (await accordion.getTitleSlotElements())[0].getText(),
      'Lees meer over de onderwijsdoelstelling',
    );
  });

  it('as a user, I can see from the text whether a dynamic accordion is open or closed', async () => {
    await driver.get(dynamicToggleUrl);
    const accordion = await new VlAccordion(driver, 'vl-accordion');
    await assert.eventually.equal(accordion.titleText(), 'Open de onderwijsdoelstelling');
    await accordion.open();
    await assert.eventually.equal(accordion.titleText(), 'Sluit de onderwijsdoelstelling');
    await accordion.close();
  });

  it('as a user, I can see the content of an accordion', async () => {
    await driver.get(defaultUrl);
    const accordion = await new VlAccordion(driver, 'vl-accordion');
    const slotElement = (await accordion.contentSlotElements())[0];
    await assert.eventually.equal(
      slotElement.getText(),
      'Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.',
    );
  });
});
