import { VlMapLayer } from "../../../../layer/test/e2e/layer.js";

export class VlMapWmsLayer extends VlMapLayer {
  async getUrl() {
    return this.getAttribute("url");
  }

  async getLayers() {
    return this.getAttribute("layers");
  }

  async getStyles() {
    return this.getAttribute("styles");
  }

  async getVersion() {
    return this.getAttribute("version");
  }

  async getOpacity() {
    return this.getAttribute("opacity");
  }

  async isTiled() {
    return this.getAttribute("tiled");
  }
}
