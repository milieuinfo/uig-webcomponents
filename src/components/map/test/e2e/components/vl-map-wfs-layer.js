import { VlMapLayer } from "./vl-map-layer";

export class VlMapWfsLayer extends VlMapLayer {
  async getUrl() {
    return this.getAttribute("url");
  }

  async getLayers() {
    return this.getAttribute("layers");
  }

  static get TAG() {
    return "vl-map-wfs-layer";
  }
}
