import VlInputField from "./input-field";
import { Page, config } from "../../../../utils/test";

class VlInputFieldPage extends Page {
  async getInputField() {
    return this._getInputField("#input-field");
  }

  async getInputFieldBlock() {
    return this._getInputField("#input-field-block");
  }

  async getInputFieldError() {
    return this._getInputField("#input-field-error");
  }

  async getInputFieldSuccess() {
    return this._getInputField("#input-field-success");
  }

  async getInputFieldDisabled() {
    return this._getInputField("#input-field-disabled");
  }

  async getInputFieldSmall() {
    return this._getInputField("#input-field-small");
  }

  async load() {
    await super.load(config.baseUrl + "components/input-field/test/e2e");
  }

  async _getInputField(selector) {
    return new VlInputField(this.driver, selector);
  }
}

export default VlInputFieldPage;
