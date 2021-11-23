import { VlElement, By } from '../../../../utils/test';

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
