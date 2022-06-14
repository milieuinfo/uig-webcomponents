import { assert, getDriver } from '../../../../utils/test';
import { VlToasterPage } from './toaster.page';

describe('vl-toaster', async () => {
  let driver;
  let vlToasterPage;

  it('as a user I can see alerts in a toaster', async () => {
    driver = getDriver();
    vlToasterPage = new VlToasterPage(driver);
    await vlToasterPage.load();
    const toaster = await vlToasterPage.getStandardToaster();
    await assert.eventually.isFalse(toaster.shouldFadeOut());
    await assert.eventually.isFalse(toaster.isLocatedBottomLeft());
    await assert.eventually.isFalse(toaster.isLocatedBottomRight());
    await assert.eventually.isFalse(toaster.isLocatedTopLeft());
    await assert.eventually.isFalse(toaster.isLocatedTopRight());

    const successAlertButton = await vlToasterPage.getStandardToasterSuccessAlertButton();
    const warningAlertButton = await vlToasterPage.getStandardToasterWarningAlertButton();
    await assert.eventually.lengthOf(toaster.getAlerts(), 0);

    await successAlertButton.click();
    await assert.eventually.lengthOf(toaster.getAlerts(), 1);

    await warningAlertButton.click();
    const alerts = await toaster.getAlerts();
    assert.lengthOf(alerts, 2);
    const successAlert = alerts[0];
    await assert.eventually.isTrue(successAlert.isSuccess());
    const warningAlert = alerts[1];
    await assert.eventually.isTrue(warningAlert.isWarning());
  });

  it('as a user I can see a toaster in all corners of the page', async () => {
    driver = getDriver();
    vlToasterPage = new VlToasterPage(driver);
    await vlToasterPage.load();
    const bottomLeftToaster = await vlToasterPage.getBottomLeftToaster();
    await assert.eventually.isTrue(bottomLeftToaster.isLocatedBottomLeft());
    await assert.eventually.isFalse(bottomLeftToaster.isLocatedBottomRight());
    await assert.eventually.isFalse(bottomLeftToaster.isLocatedTopLeft());
    await assert.eventually.isFalse(bottomLeftToaster.isLocatedTopRight());

    const bottomRightToaster = await vlToasterPage.getBottomRightToaster();
    await assert.eventually.isFalse(bottomRightToaster.isLocatedBottomLeft());
    await assert.eventually.isTrue(bottomRightToaster.isLocatedBottomRight());
    await assert.eventually.isFalse(bottomRightToaster.isLocatedTopLeft());
    await assert.eventually.isFalse(bottomRightToaster.isLocatedTopRight());

    const topLeftToaster = await vlToasterPage.getTopLeftToaster();
    await assert.eventually.isFalse(topLeftToaster.isLocatedBottomLeft());
    await assert.eventually.isFalse(topLeftToaster.isLocatedBottomRight());
    await assert.eventually.isTrue(topLeftToaster.isLocatedTopLeft());
    await assert.eventually.isFalse(topLeftToaster.isLocatedTopRight());

    const topRightToaster = await vlToasterPage.getTopRightToaster();
    await assert.eventually.isFalse(topRightToaster.isLocatedBottomLeft());
    await assert.eventually.isFalse(topRightToaster.isLocatedBottomRight());
    await assert.eventually.isFalse(topRightToaster.isLocatedTopLeft());
    await assert.eventually.isTrue(topRightToaster.isLocatedTopRight());
  });

  it('as a user I can see that alerts disappear after a few seconds whens they are configured that way', async () => {
    driver = getDriver();
    vlToasterPage = new VlToasterPage(driver);
    await vlToasterPage.load();
    const toaster = await vlToasterPage.getFadeoutToaster();
    const successAlertButton = await vlToasterPage.getFadeoutToasterSuccessAlertButton();
    const errorAlertButton = await vlToasterPage.getFadeoutToasterErrorAlertButton();
    await assert.eventually.isTrue(toaster.shouldFadeOut());
    await successAlertButton.click();
    await errorAlertButton.click();
    await assert.eventually.lengthOf(toaster.getAlerts(), 2);
    await driver.wait(async () => {
      const alerts = await toaster.getAlerts();
      return alerts.length === 0;
    });
  });

  it('as a user I can see that alerts that were created at the same moment will disappear after a few seconds when they are configured that way', async () => {
    driver = getDriver();
    vlToasterPage = new VlToasterPage(driver);
    await vlToasterPage.load();
    const toaster = await vlToasterPage.getFadeoutToaster();
    const button = await vlToasterPage.getFadeoutToasterWarningAlertsButton();
    await assert.eventually.isTrue(toaster.shouldFadeOut());
    await button.click();
    await assert.eventually.lengthOf(toaster.getAlerts(), 2);
    await driver.wait(async () => {
      const alerts = await toaster.getAlerts();
      return alerts.length === 0;
    });
  });
});
