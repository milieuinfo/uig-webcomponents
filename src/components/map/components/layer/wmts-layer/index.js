import OlTileLayer from 'ol/layer/Tile';
import OlWMTSSource from 'ol/source/WMTS';
import OlWMTSTileGrid from 'ol/tilegrid/WMTS';
import * as OlExtent from 'ol/extent';
import { define } from '../../../../../utils/core';
import { VlMapLayer } from '../../layer';

export class VlMapWmtsLayer extends VlMapLayer {
  connectedCallback() {
    super.connectedCallback();
    this._source = this.__createSource();
    this._layer = this._createLayer();
  }

  get _projection() {
    if (this.parentNode) {
      return this.parentNode._projection;
    }
  }

  get url() {
    const url = this.getAttribute('data-vl-url');
    if (!url) {
      throw new Error('URL not defined');
    }
    return url;
  }

  get _wmtsLayer() {
    const layer = this.getAttribute('data-vl-layer');
    if (!layer) {
      throw new Error('Layer not defined');
    }
    return layer;
  }

  _createLayer() {
    const layer = new OlTileLayer({
      title: this._name,
      source: this._source,
      minResolution: this._minResolution,
      maxResolution: this._maxResolution,
      visible: this._visible,
    });
    layer.set('id', VlMapLayer._counter);
    return layer;
  }

  __createSource() {
    const tileLimits = this.__grbTileLimits;
    return new OlWMTSSource({
      url: this.url,
      layer: this._wmtsLayer,
      matrixSet: this.__grbMatrixSet,
      format: this.__wmtsFormat,
      projection: this._projection,
      tileGrid: new OlWMTSTileGrid({
        extent: this._projection.getExtent(),
        origin: OlExtent.getTopLeft(this._projection.getExtent()),
        resolutions: tileLimits.resolutions,
        matrixIds: tileLimits.matrixIds,
      }),
      style: '',
    });
  }

  get __wmtsFormat() {
    return 'image/png';
  }

  get __grbMatrixSet() {
    return 'BPL72VL';
  }

  get __grbTileLimits() {
    const size = OlExtent.getWidth(this._projection.getExtent()) / 256;
    const resolutions = new Array(16);
    const matrixIds = new Array(16);
    for (let z = 0; z < 16; ++z) {
      resolutions[z] = size / Math.pow(2, z);
      matrixIds[z] = z;
    }
    return { matrixIds, resolutions };
  }
}

define('vl-map-wmts-layer', VlMapWmtsLayer);
