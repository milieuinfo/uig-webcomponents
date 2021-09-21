import { VlMapLayer } from "./vl-map-layer";

export class VlMapWmtsLayer extends VlMapLayer {
  async getUrl() {
    return this.getAttribute("url");
  }

  async getLayer() {
    return this.getAttribute("layer");
  }

  static get TAG() {
    return "vl-map-wmts-layer";
  }
}
