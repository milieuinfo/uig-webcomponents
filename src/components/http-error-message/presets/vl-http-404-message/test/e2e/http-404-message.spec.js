import { assert, getDriver, config } from '../../../../../../utils/test';
import VlHttpErrorMessagePreset from '../../../test/e2e/http-error-message-preset';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-http-error-message-vl-http-404-message--default`;
const selector = 'vl-http-404-message';

describe('vl-http-404-message', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('als gebruiker kan ik de foutmelding titel lezen', async () => {
    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessagePreset(driver, selector);
    const child = await message.getChild();
    await assert.eventually.equal(child.getTitle(), 'Pagina niet gevonden');
  });

  it('als gebruiker kan ik de foutmelding content lezen', async () => {
    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessagePreset(driver, selector);
    const child = await message.getChild();
    await assert.eventually.equal(
      child.getContent(),
      'We vonden de pagina niet terug. Controleer even of u een tikfout heeft gemaakt. Bent u via een link of website op deze pagina gekomen. Mail dan de helpdesk en vermeld daarbij de URL hierboven en de foutcode 404.',
    );
  });

  it('als gebruiker kan ik de foutmelding link zien', async () => {
    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessagePreset(driver, selector);
    const link = await message._getAction();
    await assert.eventually.equal(link.getText(), 'Terug naar de startpagina');
  });

  it('als gebruiker kan ik de foutmelding afbeelding zien', async () => {
    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessagePreset(driver, selector);
    const child = await message.getChild();
    const image = await child.getImage();
    await assert.eventually.equal(
      image.getAttribute('src'),
      'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg',
    );
    await assert.eventually.equal(image.getAttribute('alt'), 'Pagina niet gevonden');
  });

  it('als gebruiker kan ik op de actieknop van een foutmelding klikken', async () => {
    const originalUrl = await driver.getCurrentUrl();
    assert.isFalse(originalUrl.endsWith('/'));

    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessagePreset(driver, selector);
    await message.clickOnAction();
    const urlAfterClick = await driver.getCurrentUrl();
    assert.isTrue(urlAfterClick.endsWith('/'));
  });
});
