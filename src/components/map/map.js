import proj4 from 'proj4';
import OlLayerGroup from 'ol/layer/Group';
import OlProjection from 'ol/proj/Projection';
import OlFullScreenControl from 'ol/control/FullScreen';
import { vlElement, define } from '../../utils/core';
import { VlCustomMap } from './components/map-with-actions/custom-map/custom-map';

import styles from './styles.scss';

export class VlMap extends vlElement(HTMLElement) {
  /**
   * Returns the event name used when a new action is added to the map
   *
   * @return {string}
   */
  static get EVENTS() {
    return {
      action: {
        activated: 'action-activated',
      },
    };
  }

  constructor() {
    super(`
      <style>
       ${styles}
      </style>
      <div id="map">
        <slot></slot>
      </div>
    `);

    this.__prepareReadyPromises();
  }

  /**
   * Returns a Promise that resolves when the card is ready for further use.
   *
   * @return {Promise<void>}
   */
  get ready() {
    return this.__ready;
  }

  __prepareReadyPromises() {
    this.__mapReady = new Promise((resolve) => (this.__mapReadyResolver = resolve));
    this.__overviewMapReady = new Promise((resolve) => (this.__overviewMapReadyResolver = resolve));
    this.__ready = Promise.all([this.__mapReady, this.__overviewMapReady]);
  }

  /**
   * Returns the OpenLayers folder.
   *
   * @return {VlCustomMap}
   */
  get map() {
    return this._map;
  }

  /**
   * Returns the OpenLayers map resolution.
   *
   * @return {Object}
   */
  get resolution() {
    return this.map.getView().getResolution();
  }

  /**
   * Returns the OpenLayers map layers that are not used as a base map layer.
   *
   * @return {Object[]}
   */
  get nonBaseLayers() {
    return [...this.querySelectorAll(':scope > [data-vl-is-layer]')];
  }

  get disableEscapeKey() {
    return this.getAttribute('disable-escape-key') != undefined;
  }

  get disableRotation() {
    return this.getAttribute('disable-rotation') != undefined;
  }

  get disableMouseWheelZoom() {
    return this.getAttribute('disable-mouse-wheel-zoom') != undefined;
  }

  get activeAction() {
    return this.map && this.map.currentAction;
  }

  get _mapElement() {
    return this._shadow.querySelector('#map');
  }

  get _controls() {
    if (this.dataset.vlAllowFullscreen != undefined) {
      return [new OlFullScreenControl()];
    }
    return [];
  }

  get _projection() {
    return new OlProjection({
      code: 'EPSG:31370',
      extent: this._extent,
      getPointResolution: (r) => r,
    });
  }

  get _extent() {
    return [9928, 66928, 272072, 329072];
  }

  connectedCallback() {
    this.__initializeCoordinateSystem();

    this._map = new VlCustomMap({
      actions: [],
      disableEscapeKey: this.disableEscapeKey,
      disableRotation: this.disableRotation,
      disableMouseWheelZoom: this.disableMouseWheelZoom,
      customLayers: {
        baseLayerGroup: this.__createLayerGroup('Basis lagen', []),
        overviewMapLayers: [],
        overlayGroup: this.__createLayerGroup('Lagen', []),
      },
      projection: this._projection,
      target: this._mapElement,
      controls: this._controls,
    });

    this._map.initializeView();
    this.__updateMapSizeOnLoad();
    this.__updateOverviewMapSizeOnLoad();
  }

  addLayer(layer) {
    this.map.getOverlayLayers().push(layer);
  }

  addAction(action) {
    this.map.addAction(action);
  }

  removeAction(action) {
    this.map.removeAction(action);
  }

  activateAction(action) {
    if (action) {
      this.map.activateAction(action);
      this.dispatchEvent(new Event(VlMap.EVENTS.action.activated));
    }
  }

  zoomTo(geometryOrBoundingbox, max) {
    if (Array.isArray(geometryOrBoundingbox)) {
      this.map.zoomToExtent(geometryOrBoundingbox, max);
    } else if (geometryOrBoundingbox instanceof Object) {
      this.map.zoomToGeometry(geometryOrBoundingbox, max);
    }
  }

  /**
   * Register card event.
   *
   * @param {*} event
   * @param {*} callback
   */
  on(event, callback) {
    this.map.on(event, callback);
  }

  rerender() {
    this.map.render();
  }

  __updateMapSize() {
    this.style.display = 'block';
    if (this.map) {
      this.map.updateSize();
    }
    this.__mapReadyResolver();
  }

  __updateOverviewMapSize() {
    if (this.map.overviewMapControl) {
      this.map.overviewMapControl.getOverviewMap().updateSize();
    }
    this.__overviewMapReadyResolver();
  }

  __updateOverviewMapSizeOnLoad() {
    VlMap.__callOnceOnLoad(this.__updateOverviewMapSize.bind(this));
  }

  __updateMapSizeOnLoad() {
    VlMap.__callOnceOnLoad(this.__updateMapSize.bind(this));
  }

  __createLayerGroup(title, layers) {
    return new OlLayerGroup({
      title,
      layers,
    });
  }

  __initializeCoordinateSystem() {
    proj4.defs(
      'EPSG:31370',
      '+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs',
    );
  }

  static __callOnceOnLoad(callback) {
    if (document.readyState === 'complete') {
      callback();
    } else {
      window.addEventListener('load', callback, { once: true });
    }
  }
}

define('vl-map', VlMap);
