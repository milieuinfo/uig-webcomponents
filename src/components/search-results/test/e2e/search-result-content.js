import { VlElement, By } from "../../../../utils/test";

class VlSearchResultContent extends VlElement {
  async getDescription(number) {
    return this._getElementText("dt", number);
  }

  async getValue(number) {
    return this._getElementText("dd", number);
  }

  async _getElementText(selector, number) {
    const element = await this.findElements(By.css(selector));
    const vlElement = await new VlElement(this.driver, element[--number]);
    return vlElement.getText();
  }
}

export default VlSearchResultContent;
