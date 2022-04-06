import { VlMapLayer } from '../../../../../layer/test/e2e/layer.js';

export class VlMapWfsLayer extends VlMapLayer {
  async getUrl() {
    return this.getAttribute('url');
  }

  async getLayers() {
    return this.getAttribute('layers');
  }

  static get TAG() {
    return 'vl-map-wfs-layer';
  }
}
