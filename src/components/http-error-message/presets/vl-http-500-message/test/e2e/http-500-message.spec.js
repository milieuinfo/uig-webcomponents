import { assert, getDriver, config } from '../../../../../../utils/test';
import VlHttpErrorMessage from '../../../../test/e2e/http-error-message';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-http-error-message-vl-http-500-message--default`;
const selector = 'vl-http-500-message';

describe('vl-http-500-message', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('als gebruiker kan ik de foutmelding titel lezen', async () => {
    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessage(driver, selector);
    await assert.eventually.equal(message.getTitle(), 'Interne fout');
  });

  it('als gebruiker kan ik de foutmelding content lezen', async () => {
    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessage(driver, selector);
    await assert.eventually.equal(
      message.getContent(),
      'Er ging iets fout. Probeer het nog eens. Lukt het nog niet, mail dan de helpdesk en vermeld daarbij de URL hierboven en de foutcode 500.',
    );
  });

  it('als gebruiker kan ik de foutmelding link zien', async () => {
    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessage(driver, selector);
    const link = await message._getAction();
    await assert.eventually.equal(link.getText(), 'Terug naar de pagina');
  });

  it('als gebruiker kan ik de foutmelding afbeelding zien', async () => {
    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessage(driver, selector);
    const image = await message.getImage();
    await assert.eventually.equal(
      image.getAttribute('src'),
      'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
    );
    await assert.eventually.equal(image.getAttribute('alt'), 'Onverwachte fout');
  });

  it('als gebruiker kan ik op de actieknop van een foutmelding klikken', async () => {
    await driver.get(defaultUrl);
    const message = await new VlHttpErrorMessage(driver, selector);
    await message.clickOnAction();
    const urlAfterClick = await driver.getCurrentUrl();
    assert.isTrue(
      urlAfterClick.endsWith('?id=native-elements-vl-http-error-message-vl-http-500-message--default&viewMode=story'),
    );
  });
});
