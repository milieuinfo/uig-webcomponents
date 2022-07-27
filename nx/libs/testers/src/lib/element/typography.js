import { VlElement } from '../util/vl-element';

export class VlTypography extends VlElement {
  async getText() {
    return this.shadowRoot.getText();
  }
}
