import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';

export default class VlSearchFilter extends VlElement {
  async getTitleText() {
    const title = await this.findElement(By.css("p.vl-search-filter__intro"));
    return title.getText();
  }

  async isAlt() {
    return this.hasAttribute("alt");
  }
}
