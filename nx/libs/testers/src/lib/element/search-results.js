import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';
import { VlSearchResult } from './search-result';

export class VLSearchResults extends VlElement {
  async getSearchResult(number) {
    const results = await this.getSearchResults();
    return results[--number];
  }

  async getSearchResults() {
    const items = await this.findElements(By.css('[is="vl-search-result"]'));
    return Promise.all(items.map((item) => new VlSearchResult(this.driver, item)));
  }
}
