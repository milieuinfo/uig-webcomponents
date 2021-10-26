import { Page, config } from "../../../../utils/test";
import VLSearchResults from "./search-results";

class VLSearchResultsPage extends Page {
  async getSearchResults() {
    return this._getSearchResults("#search-results");
  }

  async load() {
    await super.load(config.baseUrl + "components/search-results/test/e2e");
  }

  async _getSearchResults(selector) {
    return new VLSearchResults(this.driver, selector);
  }
}

export default VLSearchResultsPage;
