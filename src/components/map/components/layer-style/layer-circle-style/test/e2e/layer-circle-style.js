import { VlTestMapLayerStyle } from '../../../test/e2e/layer-style.js';

export class VlTestMapLayerCircleStyle extends VlTestMapLayerStyle {
  async getSize() {
    return this.getAttribute('size');
  }

  async getBorderColor() {
    return this.getAttribute('border-color');
  }

  async getBorderSize() {
    return this.getAttribute('border-size');
  }
}
