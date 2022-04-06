import OlGeoJSON from 'ol/format/GeoJSON';
import OlVectorLayer from 'ol/layer/Vector';
import OlTileLayer from 'ol/layer/Tile';
import OlVectorSource from 'ol/source/Vector';
import OlWMTSSource from 'ol/source/WMTS';
import OlWMTSTileGrid from 'ol/tilegrid/WMTS';
import OlStyle from 'ol/style/Style';
import OlStyleStroke from 'ol/style/Stroke';
import OlStyleFill from 'ol/style/Fill';
import * as OlExtent from 'ol/extent';
import * as OlLoadingstrategy from 'ol/loadingstrategy';
import { vlElement, define } from '../../../../utils/core';

export class VlMapBaseLayer extends vlElement(HTMLElement) {
  connectedCallback() {
    this._configureMap();
  }

  /**
   * Returns the map layer type.
   *
   * @Return {string}
   */
  get type() {
    return this.getAttribute('type') || 'wmts';
  }

  /**
   * Returns the map layer URL.
   *
   * @Return {string}
   */
  get url() {
    return this.getAttribute('url') || this._url;
  }

  set url(value) {
    this._url = value;
  }

  /**
   * Returns the map layer identifier.
   *
   * @Return {string}
   */
  get layer() {
    return this.getAttribute('layer') || this._layer;
  }

  set layer(value) {
    this._layer = value;
  }

  /**
   * Returns the map layer title.
   *
   * @Return {string}
   */
  get title() {
    return this.getAttribute('title') || this._title;
  }

  set title(value) {
    this._title = value;
  }

  get _map() {
    if (this.parentNode) {
      return this.parentNode.map;
    }
  }

  get _projection() {
    if (this.parentNode) {
      return this.parentNode._projection;
    }
  }

  get _WMTSSource() {
    this._wmtsSource = this._wmtsSource || this._createWMTSSource();
    return this._wmtsSource;
  }

  get _vectorSource() {
    this._createdVectorSource = this._createdVectorSource || this._createVectorSource();
    return this._createdVectorSource;
  }

  _configureMap() {
    if (this._map) {
      this._map.addBaseLayerAndOverlayMapLayer(this._createBaseLayer(), this._createBaseLayer());
    }
  }

  _createWMTSSource() {
    const size = OlExtent.getWidth(this._projection.getExtent()) / 256;
    const resolutions = new Array(16);
    const matrixIds = new Array(16);
    for (let z = 0; z < 16; ++z) {
      resolutions[z] = size / Math.pow(2, z);
      matrixIds[z] = z;
    }

    return new OlWMTSSource({
      url: this.url,
      layer: this.layer,
      matrixSet: 'BPL72VL',
      format: 'image/png',
      projection: this._projection,
      tileGrid: new OlWMTSTileGrid({
        extent: this._projection.getExtent(),
        origin: OlExtent.getTopLeft(this._projection.getExtent()),
        resolutions,
        matrixIds,
      }),
      style: '',
    });
  }

  _createVectorSource() {
    const self = this;
    return new OlVectorSource({
      format: new OlGeoJSON({
        dataProjection: self._projection,
      }),
      url() {
        return `${self.url}&typeName=${self.layer}`;
      },
      strategy: OlLoadingstrategy.bbox,
    });
  }

  _createBaseLayer() {
    switch (this.type) {
      case 'wmts':
        return new OlTileLayer({
          title: this.title,
          type: 'base',
          source: this._WMTSSource,
        });
      case 'wfs':
        return new OlVectorLayer({
          source: this._vectorSource,
          style: new OlStyle({
            stroke: new OlStyleStroke({
              color: 'rgba(0, 0, 0, 1.0)',
              width: 1,
            }),
            fill: new OlStyleFill({
              color: 'rgba(255, 0, 0, 1.0)',
            }),
          }),
        });
      default:
        return null;
    }
  }
}

define('vl-map-baselayer', VlMapBaseLayer);
