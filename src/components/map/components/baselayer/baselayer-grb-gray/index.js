import { define } from '../../../../../utils/core';
import { VlMapBaseLayer } from '../../baselayer';

/**
 * VlMapBaseLayerGRBGray
 * @class
 * @classdesc De kaart basis laag component voor GRB grijstinten.
 *
 * @extends VlMapBaseLayer
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map.html|Demo}
 */
export class VlMapBaseLayerGRBGray extends VlMapBaseLayer {
  constructor() {
    super();
    this.url = 'https://geo.api.vlaanderen.be/GRB/wmts';
    this.layer = 'grb_bsk_grijs';
    this.title = 'GRB basis laag grijs';
  }
}

define('vl-map-baselayer-grb-gray', VlMapBaseLayerGRBGray);
