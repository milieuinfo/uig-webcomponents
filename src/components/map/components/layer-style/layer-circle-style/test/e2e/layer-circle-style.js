import { VlMapLayerStyle } from "../../../test/e2e/layer-style.js";

export class VlMapLayerCircleStyle extends VlMapLayerStyle {
  async getSize() {
    return this.getAttribute("size");
  }

  async getBorderColor() {
    return this.getAttribute("border-color");
  }

  async getBorderSize() {
    return this.getAttribute("border-size");
  }
}
