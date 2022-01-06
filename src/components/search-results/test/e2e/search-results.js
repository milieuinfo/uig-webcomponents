import { VlElement, By } from '../../../../utils/test';
import { VlSearchResult } from '../../components/search-result/test/e2e/search-result';

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
