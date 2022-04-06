import { define } from '../../../../../utils/core';
import { VlMapBaseLayer } from '../../baselayer';

export class VlMapBaseLayerGRB extends VlMapBaseLayer {
  constructor() {
    super();
    this.url = 'https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts';
    this.layer = 'grb_bsk';
    this.title = 'GRB basis laag';
  }
}

define('vl-map-baselayer-grb', VlMapBaseLayerGRB);
