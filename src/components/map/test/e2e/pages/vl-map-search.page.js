import { VlMapSearch } from "../components/vl-map-search";
import { config, By } from "../../../../../utils/test";
import { VlMapPage } from "./vl-map.page";

export class VlMapSearchPage extends VlMapPage {
  async getMap() {
    return this._getMap("#map-with-search");
  }

  async getBindMap() {
    return this._getMap("#bind-map");
  }

  async getBindMapSearch() {
    return this._getSearch("#bind-map-search");
  }

  async clickBindMapButton() {
    const button = await this.driver.findElement(By.css("#bind-map-button"));
    await button.click();
  }

  async load() {
    await super.load(config.baseUrl + "components/map/test/e2e/map-search");
  }

  async _getSearch(selector) {
    return new VlMapSearch(this.driver, selector);
  }
}
