import { assert, getDriver, config } from '../../../../utils/test';
import { VlCookieConsent } from './cookie-consent';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-cookie-consent--default`;
const extraOptInsUrl = `${sbUrl}?id=custom-elements-vl-cookie-consent--with-extra-opt-ins`;
const controlledUrl = `${sbUrl}?id=custom-elements-vl-cookie-consent--controlled`;
const selector = 'vl-cookie-consent';
const consentCookie = 'vl-cookie-consent-cookie-consent=true';
const dateCookie = 'vl-cookie-consent-cookie-consent-date=';

describe('vl-cookie-consent', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can confirm a consent and the default cookies get set', async () => {
    await driver.get(defaultUrl);
    const consent = await new VlCookieConsent(driver, selector);
    const dialog = await consent.getDialog();
    await assert.eventually.isTrue(dialog.isDisplayed());
    assert.isFalse(await consent.isCookieActive(consentCookie));
    assert.isFalse(await consent.isCookieActive(dateCookie));
    await consent.clickSubmitButton();
    await assert.eventually.isFalse(dialog.isDisplayed());
    assert.isTrue(await consent.isCookieActive(consentCookie));
    assert.isTrue(await consent.isCookieActive(dateCookie));
    await consent.clickResetButton();
  });

  it('as a dev, I can reset a cookie-consent', async () => {
    await driver.get(defaultUrl);
    const consent = await new VlCookieConsent(driver, selector);
    await consent.clickSubmitButton();
    assert.isTrue(await consent.isCookieActive(consentCookie));
    assert.isTrue(await consent.isCookieActive(dateCookie));
    await consent.clickResetButton();
    assert.isFalse(await consent.isCookieActive(consentCookie));
    assert.isFalse(await consent.isCookieActive(dateCookie));
  });

  it('as a user, I can confirm a consent with analytics and the functional cookie gets set', async () => {
    await driver.get(`${defaultUrl}&args=analytics:true`);
    const consent = await new VlCookieConsent(driver, selector);
    const functionalCookie = 'functional';
    assert.isFalse(await consent.isCookieActive(functionalCookie));
    await consent.clickSubmitButton();
    assert.isTrue(await consent.isCookieActive(functionalCookie));
    await consent.clickResetButton();
  });

  it('as a user, I can confirm a consent with custom opt ins and the right cookies get set', async () => {
    await driver.get(extraOptInsUrl);
    const consent = await new VlCookieConsent(driver, selector);
    await consent.clickSubmitButton();
    assert.isTrue(await consent.isCookieActive('vl-cookie-consent-mandatory=true'));
    assert.isTrue(await consent.isCookieActive('vl-cookie-consent-withoutDescription=false'));
    assert.isTrue(await consent.isCookieActive('vl-cookie-consent-defaultChecked=true'));
    await consent.clickResetButton();
  });

  it('as a user, I can reconfirm a consent and the new cookies get set', async () => {
    await driver.get(controlledUrl);
    const consent = await new VlCookieConsent(driver, selector);
    const extraOptInName = 'defaultChecked';
    await consent.setExtraOptIn(extraOptInName);
    await consent.clickOpenButton();
    assert.isFalse(await consent.isCookieActive(extraOptInName));
    await consent.clickSubmitButton();
    const firstDateValue = await consent.getCookieValue(dateCookie);
    assert.isTrue(await consent.isCookieActive(`${extraOptInName}=true`));
    await consent.clickOpenButton();
    await consent.toggleExtraOptIn();
    await consent.clickSubmitButton();
    assert.isTrue(await consent.isCookieActive(`${extraOptInName}=false`));
    const secondDateValue = await consent.getCookieValue(dateCookie);
    assert.isAbove(secondDateValue, firstDateValue);
  });
});
