import { VlTestMapLayer } from '../../../../../layer/test/e2e/layer.js';

export class VlTestMapWfsLayer extends VlTestMapLayer {
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
