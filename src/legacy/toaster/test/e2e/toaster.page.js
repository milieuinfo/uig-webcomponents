import { Page, config } from '../../../../utils/test';
import { VlToaster } from './toaster';
import { VlButton } from '../../../../components/button/test/e2e/button';

export class VlToasterPage extends Page {
  async _getToaster(selector) {
    return new VlToaster(this.driver, selector);
  }

  async _getButton(selector) {
    return new VlButton(this.driver, selector);
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/toaster/test/e2e/index.html`);
  }

  async getStandardToaster() {
    return this._getToaster('#demo-toaster');
  }

  async getTopLeftToaster() {
    return this._getToaster('#top-left-toaster');
  }

  async getTopRightToaster() {
    return this._getToaster('#top-right-toaster');
  }

  async getBottomLeftToaster() {
    return this._getToaster('#bottom-left-toaster');
  }

  async getBottomRightToaster() {
    return this._getToaster('#bottom-right-toaster');
  }

  async getFadeoutToaster() {
    return this._getToaster('#fadeout-toaster');
  }

  async getStandardToasterSuccessAlertButton() {
    return this._getButton('#demo-toaster-success-alert-button');
  }

  async getStandardToasterWarningAlertButton() {
    return this._getButton('#demo-toaster-warning-alert-button');
  }

  async getFadeoutToasterSuccessAlertButton() {
    return this._getButton('#fadeout-toaster-success-alert-button');
  }

  async getFadeoutToasterErrorAlertButton() {
    return this._getButton('#fadeout-toaster-error-alert-button');
  }

  async getFadeoutToasterWarningAlertsButton() {
    return this._getButton('#fadeout-toaster-warning-alerts-button');
  }
}
