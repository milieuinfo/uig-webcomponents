import { Page, config } from "../../../../utils/test";
import VlForm from "./form";

class VlFormPage extends Page {
  async getForm() {
    return this._getForm("form");
  }

  async load() {
    await super.load(config.baseUrl + "components/form/test/e2e");
  }

  async _getForm(selector) {
    return new VlForm(this.driver, selector);
  }
}

export default VlFormPage;
