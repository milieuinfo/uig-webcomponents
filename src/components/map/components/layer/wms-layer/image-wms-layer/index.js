import OlImageLayer from 'ol/layer/Image';
import OlImageWMSSource from 'ol/source/ImageWMS';
import { define } from '../../../../../../utils/core';
import { VlMapWmsLayer } from '../../wms-layer';

export class VlMapImageWmsLayer extends VlMapWmsLayer {
  constructor() {
    super(OlImageLayer, OlImageWMSSource);
  }
}

define('vl-map-image-wms-layer', VlMapImageWmsLayer);
