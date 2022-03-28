import { Page, config, VlElement } from '../../../../utils/test';
import { VlRadio } from './radio';

export class VlRadioPage extends Page {
  async getRadio(number) {
    return this._getRadio(`#radio-${number}`);
  }

  async getBlockRadio(number) {
    return this._getRadioByType('block', number);
  }

  async getErrorRadio(number) {
    return this._getRadioByType('error', number);
  }

  async getDisabledRadio(number) {
    return this._getRadioByType('disabled', number);
  }

  async getSingleRadio(number) {
    return this._getRadioByType('single', number);
  }

  async getCheckedRadio(number) {
    return this._getRadioByType('checked', number);
  }

  async getSlotLabelRadio(number) {
    return this._getRadioByType('slot-label', number);
  }

  async getShadowDOMRadioElement() {
    return new VlElement(this.driver, 'vl-radio-test');
  }

  async getShadowDOMRadio(number) {
    const element = await this.getShadowDOMRadioElement();
    const radio = await this.driver.executeScript(
      `return arguments[0].shadowRoot.querySelector('#radio-${number}')`,
      element,
    );
    return new VlRadio(this.driver, radio);
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/radio/test/e2e/index.html`);
  }

  async _getRadio(selector) {
    return new VlRadio(this.driver, selector);
  }

  async _getRadioByType(type, number) {
    return this._getRadio(`#radio-${type}-${number}`);
  }
}
