import { Page, config } from "../../../../utils/test";
import VlSearchFilter from "./search-filter";

class VlSearchFilterPage extends Page {
  async _getSearchFilter(selector) {
    return new VlSearchFilter(this.driver, selector);
  }

  async getSearchFilter() {
    return this._getSearchFilter("#search-filter");
  }

  async getSearchFilterAlt() {
    return this._getSearchFilter("#search-filter-alt");
  }

  async load() {
    await super.load(config.baseUrl + "components/search-filter/test/e2e");
  }
}

export default VlSearchFilterPage;
