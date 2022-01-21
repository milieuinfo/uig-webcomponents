import { VlElement, By } from '../../../../utils/test';

export class VlCookieConsent extends VlElement {
  async getElementInShadow(parent, selector) {
    const element = await this.driver.executeScript(
      `return arguments[0].shadowRoot.querySelector("${selector}")`,
      parent,
    );
    return element;
  }

  async getConsent() {
    const consent = await this.driver.findElement(By.css('vl-cookie-consent'));
    return consent;
  }

  async getModal() {
    const consent = await this.getConsent();
    const modal = this.getElementInShadow(consent, 'vl-modal');
    return modal;
  }

  async getDialog() {
    const modal = await this.getModal();
    const dialog = this.getElementInShadow(modal, 'dialog');
    return dialog;
  }

  async getSubmitButton() {
    const modal = await this.getModal();
    const button = await modal.findElement(By.css('button'));
    return button;
  }

  async getCookies() {
    const allCookies = await this.driver.executeScript('return document.cookie');
    return allCookies;
  }

  async isCookieActive(name) {
    const cookies = await this.getCookies();
    return cookies.includes(name);
  }

  async getResetButton() {
    const button = await this.driver.findElement(By.css('button'));
    return button;
  }

  async clickResetButton() {
    const resetButton = await this.getResetButton();
    await resetButton.click();
  }

  async clickSubmitButton() {
    const submitButton = await this.getSubmitButton();
    await submitButton.click();
  }

  async setExtraOptIn(name) {
    const consent = await this.getConsent();
    const extraOptIns = [
      {
        name,
        label: 'Default checked',
        defaultChecked: true,
      },
    ];
    await this.driver.executeScript('arguments[0].extraOptIns = arguments[1]', consent, extraOptIns);
  }

  async getOpenButton() {
    const button = await this.driver.findElement(By.css('button'));
    return button;
  }

  async clickOpenButton() {
    const openButton = await this.getOpenButton();
    await openButton.click();
  }

  async toggleExtraOptIn() {
    const modal = await this.getModal();
    const checkbox = await modal.findElement(By.css('vl-checkbox'));
    const input = await this.getElementInShadow(checkbox, 'input');
    await this.driver.executeScript('arguments[0].click()', input);
  }

  async getCookieValue(name) {
    const cookies = await this.getCookies();
    const mappedCookies = cookies.split(';').map((cookie) => cookie.replace(/\s/g, ''));
    for (let index = 0; index < mappedCookies.length; index += 1) {
      const currentCookie = mappedCookies[index];
      if (currentCookie.includes(name)) {
        const value = currentCookie.substring(name.length, currentCookie.length);
        try {
          return JSON.parse(value);
        } catch (error) {
          return value;
        }
      }
    }
    return null;
  }
}
