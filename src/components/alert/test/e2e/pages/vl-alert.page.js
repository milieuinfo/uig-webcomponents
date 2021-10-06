import VlAlert from "../components/vl-alert";
import { Page } from "../../../../../utils/test";
import { config } from "../../../../../utils/test/config";

export default class VLAlertPage extends Page {
  async getAlert() {
    return this._getAlert("#alert");
  }

  async getClosableAlert() {
    return this._getAlert("#alert-closable");
  }

  async getAlertWithButton() {
    return this._getAlert("#alert-with-button");
  }

  async getSmallAlert() {
    return this._getAlert("#alert-small");
  }

  async getAlertError() {
    return this._getAlert("#alert-error");
  }

  async getAlertWarning() {
    return this._getAlert("#alert-warning");
  }

  async getSuccessAlert() {
    return this._getAlert("#alert-success");
  }

  async getAlertInfo() {
    return this._getAlert("#alert-info");
  }

  async getAlertTitleSlot() {
    return this._getAlert("#alert-title-slot");
  }

  async load() {
    await super.load(config.baseUrl + "components/alert/test/e2e");
  }

  async _getAlert(selector) {
    return new VlAlert(this.driver, selector);
  }
}
