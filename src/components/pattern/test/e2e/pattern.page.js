import { Page, config } from "../../../../utils/test";
import VlInputField from "../../../input-field/test/e2e/input-field";
import vlPattern from "../../../pattern/test/e2e/pattern";

class VlPatternPage extends Page {
  async getIBANInput() {
    return this._getInput("iban");
  }

  async getPhoneInput() {
    return this._getInput("phone");
  }

  async getDateInput() {
    return this._getInput("date");
  }

  async getPriceInput() {
    return this._getInput("price");
  }

  async getRRNInput() {
    return this._getInput("rrn");
  }

  async getUuidInput() {
    return this._getInput("uuid");
  }

  async getNumericalInput() {
    return this._getInput("numerical");
  }

  async load() {
    await super.load(config.baseUrl + "components/pattern/test/e2e");
  }

  async _getInput(selector) {
    const input = await new VlInputField(this.driver, `#pattern-${selector}`);
    Object.assign(input, vlPattern);
    return input;
  }
}

export default VlPatternPage;
