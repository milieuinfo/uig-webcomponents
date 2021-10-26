import { Page, config } from "../../../../utils/test";
import VlForm from "../../../form/test/e2e/form";

class VlFormValidationPage extends Page {
  async getForm(number) {
    return new VlForm(this.driver, `#form-${number}`);
  }

  async load() {
    await super.load(config.baseUrl + "components/form-validation/test/e2e");
  }

  async _getForm(id) {
    return new VlForm(this.driver, `#${id}`);
  }

  async getFormWithErrorMessageAttributes() {
    return this._getForm("form-with-error-message-attributes");
  }

  async getFormWithErrorMessageElements() {
    return this._getForm("form-with-error-message-elements");
  }
}

export default VlFormValidationPage;
