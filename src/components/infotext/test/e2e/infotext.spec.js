import { assert, getDriver, config } from '../../../../utils/test';
import { By } from '../../../../utils/test';
import VlInfotext from './vl-infotext.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-infotext--default`;
const complexUrl = `${sbUrl}?id=native-elements-vl-infotext--with-complex-content&args=badge:true`;

describe('vl-infotext', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('als gebruiker kan ik de waarde en tekst zien', async () => {
    await driver.get(defaultUrl);
    const infoText = await new VlInfotext(driver, 'div[is="vl-infotext"]');

    const value = await infoText.getValue();
    await assert.eventually.equal(value.getText(), '3.200');

    const text = await infoText.getText();
    await assert.eventually.equal(text.getText(), 'Bezoekers per dag');

    await assert.eventually.isFalse(infoText.isBadge());
  });

  it('als gebruiker kan ik de infotext als badge zien', async () => {
    await driver.get(`${defaultUrl}&args=badge:true`);
    const infoText = await new VlInfotext(driver, 'div[is="vl-infotext"]');

    await assert.eventually.isTrue(infoText.isBadge());
  });

  it('als gebruiker kan ik een complexere waarde en tekst zien', async () => {
    await driver.get(complexUrl);
    const infoText = await new VlInfotext(driver, 'div[is="vl-infotext"]');

    const value = await infoText.getValue();
    await assert.eventually.equal(value.getText(), '150 cm');
    await assert.eventually.exists(value.findElement(By.css('span.eenheid-waarde')));
    await assert.eventually.exists(value.findElement(By.css('span.lengte-waarde')));

    const text = await infoText.getText();
    await assert.eventually.equal(text.getText(), 'Lengte (eenheid)');
    await assert.eventually.exists(text.findElement(By.css('span.eenheid')));
    await assert.eventually.exists(text.findElement(By.css('span.lengte')));

    await assert.eventually.isTrue(infoText.isBadge());
  });
});
