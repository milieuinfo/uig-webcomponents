import { assert, getDriver, config } from '../../../../utils/test';
import VlHttpErrorMessage from './http-error-message.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-http-error-message--custom`;
const selector = 'vl-http-error-message';

describe('vl-http-error-message', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('als gebruiker kan ik de foutmelding titel lezen', async () => {
    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessage(driver, selector);
    await assert.eventually.equal(message.getTitle(), 'Niets gevonden hiervoor.');
  });

  // it('als gebruiker kan ik de foutmelding content lezen', async () => {
  //   await driver.get(defaultUrl);
  //   const message = await new VlHttpErrorMessage(driver, selector);
  //   await assert.eventually.equal(message.getContent(), 'Sorry, er liep iets onverwachts mis.');
  // });

  // it('als gebruiker kan ik de foutmelding link zien', async () => {
  //   await driver.get(defaultUrl);
  //   const message = await new VlHttpErrorMessage(driver, selector);
  //   const link = await message._getAction();
  //   await assert.eventually.equal(link.getText(), 'Opnieuw opstarten');
  // });

  // it('als gebruiker kan ik de foutmelding afbeelding zien', async () => {
  //   await driver.get(defaultUrl);
  //   const message = await new VlHttpErrorMessage(driver, selector);
  //   const image = await message.getImage();
  //   assert.isTrue((await image.getAttribute('src')).endsWith('unexpected-error.svg'));
  //   await assert.eventually.equal(image.getAttribute('alt'), 'Niets gevonden');
  // });

  // it('als gebruiker kan ik op de actieknop van een foutmelding klikken', async () => {
  //   await driver.get(defaultUrl);
  //   const message = await new VlHttpErrorMessage(driver, selector);
  //   await message.clickOnAction();
  //   const urlAfterClick = await driver.getCurrentUrl();
  //   assert.isTrue(urlAfterClick.endsWith('#'));
  // });
});
