import OlTileLayer from 'ol/layer/Tile';
import OlTileWMSSource from 'ol/source/TileWMS';
import { define } from '../../../../../../utils/core';
import { VlMapWmsLayer } from '../../wms-layer';

export class VlMapTiledWmsLayer extends VlMapWmsLayer {
  constructor() {
    super(OlTileLayer, OlTileWMSSource);
  }
}

define('vl-map-tiled-wms-layer', VlMapTiledWmsLayer);
