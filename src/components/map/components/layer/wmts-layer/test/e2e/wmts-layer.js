import { VlTestMapLayer } from '../../../../layer/test/e2e/layer.js';

export class VlTestMapWmtsLayer extends VlTestMapLayer {
  async getUrl() {
    return this.getAttribute('url');
  }

  async getLayer() {
    return this.getAttribute('layer');
  }

  static get TAG() {
    return 'vl-map-wmts-layer';
  }
}
