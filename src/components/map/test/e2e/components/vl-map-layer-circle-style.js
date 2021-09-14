import { VlMapLayerStyle } from "./vl-map-layer-style";

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
