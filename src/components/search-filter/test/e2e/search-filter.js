import { VlElement, By } from "../../../../utils/test";

export default class VlSearchFilter extends VlElement {
  async getTitleText() {
    const title = await this.findElement(By.css("p.vl-search-filter__intro"));
    return title.getText();
  }

  async isAlt() {
    return this.hasAttribute("alt");
  }
}
