import { config, assert, getDriver, Key } from '../../../../utils/test';
import { VlModalPage } from './modal.page';

describe('vl-modal', async () => {
  let driver;
  let vlModalPage;

  before(() => {
    driver = getDriver();
    vlModalPage = new VlModalPage(driver);
    return vlModalPage.load();
  });

  it('as a user, I can open and close the modal via a cancel button', async () => {
    const modal = await vlModalPage.getModal();
    await assert.eventually.isFalse(modal.isDisplayed());
    await vlModalPage.openModal();
    await assert.eventually.isTrue(modal.isDisplayed());
    await assert.eventually.isTrue(modal.isCancellable());
    await assert.eventually.isFalse(modal.isClosable());
    await assert.eventually.isTrue(modal.isSubmittable());
    await modal.cancel();
    await assert.eventually.isFalse(modal.isDisplayed());
  });

  it('as a user, I can open and close a closable modal via a close button', async () => {
    const modal = await vlModalPage.getModalClosable();
    await assert.eventually.isFalse(modal.isDisplayed());
    await vlModalPage.openModalClosable();
    await assert.eventually.isTrue(modal.isDisplayed());
    await assert.eventually.isTrue(modal.isCancellable());
    await assert.eventually.isTrue(modal.isClosable());
    await assert.eventually.isTrue(modal.isSubmittable());
    await modal.close();
  });

  it('as a user, I cannot close the not automatically closable modal by clicking on the action button', async () => {
    const modal = await vlModalPage.getModalClosableNietAutomatisch();
    await assert.eventually.isFalse(modal.isDisplayed());
    await vlModalPage.openModalClosableNietAutomatisch();
    await assert.eventually.isTrue(modal.isDisplayed());
    await assert.eventually.isTrue(modal.isCancellable());
    await assert.eventually.isTrue(modal.isClosable());
    await assert.eventually.isTrue(modal.isSubmittable());
    await modal.submit();
    await assert.eventually.isTrue(modal.isDisplayed());
    await modal.close();
    await assert.eventually.isFalse(modal.isDisplayed());
  });

  it('as a user, I cannot close the closable, not cancellable modal via the cancel button', async () => {
    const modal = await vlModalPage.getModalClosableNietCancellable();
    await assert.eventually.isFalse(modal.isDisplayed());
    await vlModalPage.openModalClosableNietCancellable();
    await assert.eventually.isTrue(modal.isDisplayed());
    await assert.eventually.isFalse(modal.isCancellable());
    await assert.eventually.isTrue(modal.isClosable());
    await assert.eventually.isTrue(modal.isSubmittable());
    await modal.close();
  });

  it('as a user, I can close the automatically closable modal by clicking the action button', async () => {
    const modal = await vlModalPage.getModal();
    await assert.eventually.isFalse(modal.isDisplayed());
    await vlModalPage.openModal();
    await assert.eventually.isTrue(modal.isDisplayed());
    await assert.eventually.isTrue(modal.isCancellable());
    await assert.eventually.isFalse(modal.isClosable());
    await assert.eventually.isTrue(modal.isSubmittable());
    await modal.submit();
    await assert.eventually.isFalse(modal.isDisplayed());
  });

  it('as a user, I can close the automatically closable modal by clicking the action link', async () => {
    const modal = await vlModalPage.getModalClosableNietCancellableMetLinkEnIcon();
    await assert.eventually.isFalse(modal.isDisplayed());
    await vlModalPage.openModalClosableNietCancellableMetLinkEnIcon();
    await assert.eventually.isTrue(modal.isDisplayed());
    await assert.eventually.isFalse(modal.isCancellable());
    await assert.eventually.isTrue(modal.isClosable());
    await assert.eventually.isTrue(modal.isSubmittable());
    await modal.submit();
    await assert.eventually.isFalse(modal.isDisplayed());
  });

  it('as a user, I can open and close the modal manually', async () => {
    const modal = await vlModalPage.getModalManual();
    await assert.eventually.isFalse(modal.isDisplayed());
    await vlModalPage.openModalManual();
    await assert.eventually.isTrue(modal.isDisplayed());
    await modal.cancel();
    await assert.eventually.isFalse(modal.isDisplayed());
  });

  it('as a user, I can execute something by clicking the action button in the modal', async () => {
    const modal = await vlModalPage.getModalListener();
    await vlModalPage.klikVoegListenerToe();
    await vlModalPage.openModalListener();
    await modal.submit();
    await assert.eventually.isFalse(modal.isDisplayed());
    await assert.eventually.equal(vlModalPage.getListenerText(), 'Lach de lach der dwazen');
  });

  // it('als gebruiker kan ik meteen typen in het input-veld in de modal in Safari', async () => {
  //   const modal = await vlModalPage.getModalSafari();
  //   await vlModalPage.openModalSafari();
  //   const slotElements = await modal.getContentSlotElements();
  //   const input = await new VlInputField(driver, slotElements[0]);
  //   await assert.eventually.isTrue(input.hasFocus());
  //   await modal.close();
  // });

  it('as a user, I can scrol vertical if there is an overflow', async () => {
    await vlModalPage.openModalMetVeelTekst();
    const modal = await vlModalPage.getModalMetVeelTekst();
    await modal.scrollToTop();
    await modal.cancel();
  });

  // it('als gebruiker kan ik op een element klikken dat groter is dan de content van de modal als het attribuut allow-overflow gezet is', async () => {
  //   await vlModalPage.openModalMetDatepicker();
  //   const modal = await vlModalPage.getModalMetDatepicker();
  //   const element = await modal.findElement(By.css('vl-datepicker'));
  //   const datepicker = await new VlDatepicker(driver, element);
  //   await datepicker.scrollIntoView();
  //   await datepicker.selectDay(25);
  //   await assert.eventually.isDefined(datepicker.getInputValue());
  //   await modal.cancel();
  // });

  it('as a user, I cannot close a not closable modal by pressing escape', async () => {
    if (config.browserName !== 'edge') {
      let modal = await vlModalPage.getModal();
      await assert.eventually.isFalse(modal.isDisplayed());
      await vlModalPage.openModal();
      await assert.eventually.isTrue(modal.isDisplayed());
      await modal.sendKeys(Key.ESCAPE);
      await assert.eventually.isTrue(modal.isDisplayed());
      await modal.cancel();

      modal = await vlModalPage.getModalClosable();
      await assert.eventually.isFalse(modal.isDisplayed());
      await vlModalPage.openModalClosable();
      await assert.eventually.isTrue(modal.isDisplayed());
      await modal.sendKeys(Key.ESCAPE);
      await assert.eventually.isFalse(modal.isDisplayed());
    }
  });
});
