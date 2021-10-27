import VlInputGroup from "./input-group";
import { Page, config } from "../../../../utils/test";

class VlInputGroupPage extends Page {
  async _getInputGroup(selector) {
    return new VlInputGroup(this.driver, selector);
  }

  async load() {
    await super.load(config.baseUrl + "components/input-group/test/e2e");
  }

  async getInputGroup() {
    return this._getInputGroup("#input-group");
  }
}

export default VlInputGroupPage;
