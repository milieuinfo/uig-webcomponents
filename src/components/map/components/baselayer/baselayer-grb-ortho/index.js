import { define } from '../../../../../utils/core';
import { VlMapBaseLayer } from '../../baselayer';

export class VlMapBaseLayerGRBOrtho extends VlMapBaseLayer {
  constructor() {
    super();
    this.url = 'https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts';
    this.layer = 'omwrgbmrvl';
    this.title = 'GRB ortho laag';
  }
}

define('vl-map-baselayer-grb-ortho', VlMapBaseLayerGRBOrtho);
