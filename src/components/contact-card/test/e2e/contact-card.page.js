import { VlContactCard } from "./contact-card.js";
import { Page, config } from "../../../../utils/test";

export class VlContactCardPage extends Page {
  async getContactCard() {
    return this._getContactCard("#contact-card");
  }

  async load() {
    await super.load(config.baseUrl + "components/contact-card/test/e2e");
  }

  async _getContactCard(selector) {
    return new VlContactCard(this.driver, selector);
  }
}
