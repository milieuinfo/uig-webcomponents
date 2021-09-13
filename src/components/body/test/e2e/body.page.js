import { VlBody } from "./body.js";
import { Page, config } from "../../../../utils/test";

export class VlBodyPage extends Page {
  async getBody() {
    return this._getBody("#body");
  }

  async load() {
    await super.load(config.baseUrl + "components/body/test/e2e");
  }

  async _getBody(selector) {
    return new VlBody(this.driver, selector);
  }
}
