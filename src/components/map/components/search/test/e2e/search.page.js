import { VlTestMapSearch } from './search.js';
import { config, By } from '../../../../../../utils/test';
import { VlTestMapPage } from '../../../map/test/e2e/map.page.js';

export class VlTestMapSearchPage extends VlTestMapPage {
  async getMap() {
    return this._getMap('#map-with-search');
  }

  async getBindMap() {
    return this._getMap('#bind-map');
  }

  async getBindMapSearch() {
    return this._getSearch('#bind-map-search');
  }

  async clickBindMapButton() {
    const button = await this.driver.findElement(By.css('#bind-map-button'));
    await button.click();
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/search/test/e2e/index.html`);
  }

  async _getSearch(selector) {
    return new VlTestMapSearch(this.driver, selector);
  }
}
