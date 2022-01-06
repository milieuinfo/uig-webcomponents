import { VlElement } from '../../../../utils/test';

export class VlTypography extends VlElement {
  async getText() {
    return this.shadowRoot.getText();
  }
}
