import { assert, getDriver, config } from '../../../../utils/test';
import VlLoader from './loader.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-loader--default`;
const lightUrl = `${sbUrl}?id=custom-elements-vl-loader--light-without-text`;
const customContentUrl = `${sbUrl}?id=custom-elements-vl-loader--with-custom-content`;

describe('vl-loader', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('als gebruiker kan ik zien dat de pagina aan het laden is', async () => {
    await driver.get(defaultUrl);
    const loader = await new VlLoader(driver, 'vl-loader');
    await assert.eventually.isTrue(loader.isDisplayed());
    await assert.eventually.equal(loader.getText(), 'Pagina is aan het laden');
  });

  it('als gebruiker kan ik het verschil zien tussen een light en gewone loader', async () => {
    await driver.get(defaultUrl);
    const loader = await new VlLoader(driver, 'vl-loader');
    await assert.eventually.isFalse(loader.isLight());

    await driver.get(lightUrl);
    const lightLoader = await new VlLoader(driver, 'vl-loader');
    await assert.eventually.isTrue(lightLoader.isLight());
  });

  it('als gebruiker kan ik de loader tekst zien', async () => {
    await driver.get(defaultUrl);
    const loader = await new VlLoader(driver, 'vl-loader');
    await assert.eventually.equal(loader.getText(), 'Pagina is aan het laden');

    await driver.get(customContentUrl);
    const slotLoader = await new VlLoader(driver, 'vl-loader');
    const slot = await slotLoader.slotElements();
    await assert.eventually.equal(slot[0].getText(), 'Informatie is aan het laden');
  });

  it('als gebruiker kan ik het verschil zien tussen een single en gewone loader', async () => {
    await driver.get(defaultUrl);
    const loader = await new VlLoader(driver, 'vl-loader');

    await assert.eventually.isFalse(loader.isSingle());
    await assert.eventually.isTrue(loader.hasText());

    await driver.get(`${defaultUrl}&args=single:true`);
    const singleLoader = await new VlLoader(driver, 'vl-loader');
    await assert.eventually.isTrue(singleLoader.isSingle());
    await assert.eventually.isFalse(singleLoader.hasText());
  });
});
