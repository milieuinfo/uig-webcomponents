import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';

export class VlCodePreview extends VlElement {
  async getText() {
    const code = await this._getCodeElement();
    return code.getText();
  }

  async _getCodeElement() {
    const element = await this.shadowRoot.findElement(By.css('code'));
    return new VlElement(this.driver, element);
  }
}
