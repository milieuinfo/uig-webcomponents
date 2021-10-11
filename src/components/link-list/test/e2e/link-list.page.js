import VlLinkList from "./link-list";
import { Page, config } from "../../../../utils/test";

export default class VlLinkListPage extends Page {
  async _getLinkList(selector) {
    return new VlLinkList(this.driver, selector);
  }

  async getLinkList() {
    return this._getLinkList("#link-list");
  }

  async load() {
    await super.load(config.baseUrl + "components/link-list/test/e2e");
  }
}
