import { define } from '../../../../../utils/core';
import { VlMapBaseLayer } from '../../baselayer';

export class VlMapBaseLayerGRBGray extends VlMapBaseLayer {
  constructor() {
    super();
    this.url = 'https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts';
    this.layer = 'grb_bsk_grijs';
    this.title = 'GRB basis laag grijs';
  }
}

define('vl-map-baselayer-grb-gray', VlMapBaseLayerGRBGray);
