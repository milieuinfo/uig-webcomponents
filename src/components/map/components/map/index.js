import { vlElement, define } from "../../../../utils/core";
import {
  OlFullScreenControl,
  OlLayerGroup,
  OlProjection,
  VlCustomMap,
  OlView,
  proj4,
  OlExtent,
} from "../../mapactions";
import styles from "./styles.scss";
import { register } from "ol/proj/proj4";

/**
 * VlMap
 * @class
 * @classdesc De kaart component.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-allow-fullscreen - Attribuut wordt gebruikt om de gebruiker de mogelijkheid te geven om de kaart in fullscreen te
 *     visualiseren.
 * @property {boolean} data-vl-disable-escape-key - Attribuut wordt gebruikt om ervoor te zorgen dat de escape toets niet gebruikt kan worden.
 * @property {boolean} data-vl-disable-rotation - Attribuut wordt gebruikt om ervoor te zorgen dat het niet mogelijk is om de kaart te draaien.
 * @property {boolean} data-vl-disable-mouse-wheel-zoom - Attribuut wordt gebruikt om ervoor te zorgen dat het niet mogelijk is om de kaart in te zoomen met het muiswiel.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-circle-style.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-delete-action.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-draw-actions.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-features-layer.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-layer-style.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-layer-switcher.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-modify-actions.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-overview-map.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-search.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-select-action.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-side-sheet.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-wfs-layer.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-wms-layer.html|Demo}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-wmts-layer.html|Demo}
 */
export class VlMap extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ["extent"];
  }

  /**
   * Geeft de event naam die gebruikt wordt wanneer een nieuwe actie toegevoegd wordt aan de kaart
   *
   * @return {string}
   */
  static get EVENTS() {
    return {
      action: {
        activated: "action-activated",
      },
    };
  }

  static get PROJECTION_EXTENT() {
    return [17736.0314, 23697.0977, 297289.9391, 245375.4223];
  }

  static get DEFAULT_VIEW_EXTENT() {
    return [9928, 66928, 272072, 329072];
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

    this.__viewExtent = VlMap.DEFAULT_VIEW_EXTENT;
    this.__prepareReadyPromises();
  }

  _extentChangedCallback(_oldValue, newValue) {
    if (newValue) {
      this.__viewExtent = JSON.parse(newValue);
    } else {
      this.__viewExtent = VlMap.DEFAULT_VIEW_EXTENT;
    }
    this.__changeMapView();
  }

  __changeMapView() {
    if (this.map) {
      this.map.setView(
        new OlView({
          center: OlExtent.getCenter(this.__viewExtent),
          extent: this.__viewExtent,
          // properties overnemen uit VlCustomMap
          projection: this.map.getView().getProjection(),
          zoom: this.map.getView().getZoom(),
          maxZoom: this.map.getView().getMaxZoom(),
          minZoom: this.map.getView().getMinZoom(),
        })
      );
    }
  }

  /**
   * Geeft een Promise terug die resolved wanneer de kaart klaar is voor verder gebruik.
   *
   * @return {Promise<void>}
   */
  get ready() {
    return this.__ready;
  }

  __prepareReadyPromises() {
    this.__mapReady = new Promise(
      (resolve) => (this.__mapReadyResolver = resolve)
    );
    this.__overviewMapReady = new Promise(
      (resolve) => (this.__overviewMapReadyResolver = resolve)
    );
    this.__ready = Promise.all([this.__mapReady, this.__overviewMapReady]);
  }

  /**
   * Geeft de OpenLayers map terug.
   *
   * @return {VlCustomMap}
   */
  get map() {
    return this._map;
  }

  /**
   * Geeft de OpenLayers kaart resolutie terug.
   *
   * @return {Object}
   */
  get resolution() {
    return this.map.getView().getResolution();
  }

  /**
   * Geeft de OpenLayers kaartlagen terug die niet gebruikt worden als basis kaartlaag.
   *
   * @return {Object[]}
   */
  get nonBaseLayers() {
    return [...this.querySelectorAll(":scope > [data-vl-is-layer]")];
  }

  get disableEscapeKey() {
    return this.getAttribute("disable-escape-key") != undefined;
  }

  get disableRotation() {
    return this.getAttribute("disable-rotation") != undefined;
  }

  get disableMouseWheelZoom() {
    return this.getAttribute("disable-mouse-wheel-zoom") != undefined;
  }

  /**
   * Geeft de actieve kaartactie.
   *
   * @return {VlMapAction}
   */
  get activeAction() {
    return this.map && this.map.currentAction;
  }

  get _mapElement() {
    return this._shadow.querySelector("#map");
  }

  get _controls() {
    if (this.dataset.vlAllowFullscreen != undefined) {
      return [new OlFullScreenControl()];
    } else {
      return [];
    }
  }

  get _projection() {
    return new OlProjection({
      code: "EPSG:31370",
      extent: VlMap.PROJECTION_EXTENT,
      getPointResolution: (r) => r,
    });
  }

  get _extent() {
    return this.__viewExtent;
  }

  connectedCallback() {
    this.__initializeCoordinateSystem();

    this._map = new VlCustomMap({
      actions: [],
      disableEscapeKey: this.disableEscapeKey,
      disableRotation: this.disableRotation,
      disableMouseWheelZoom: this.disableMouseWheelZoom,
      customLayers: {
        baseLayerGroup: this.__createLayerGroup("Basis lagen", []),
        overviewMapLayers: [],
        overlayGroup: this.__createLayerGroup("Lagen", []),
      },
      projection: this._projection,
      view: {
        projection: this._projection,
        extent: this._extent,
      },
      target: this._mapElement,
      controls: this._controls,
    });

    this.__updateMapSizeOnLoad();
    this.__updateOverviewMapSizeOnLoad();
  }

  /**
   * Voegt een kaartlaag toe aan de kaart.
   *
   * @param {Object} layer
   */
  addLayer(layer) {
    this.map.getOverlayLayers().push(layer);
  }

  /**
   * Voegt een kaartactie toe aan de kaart.
   *
   * @param {VlMapAction} action
   */
  addAction(action) {
    this.map.addAction(action);
  }

  /**
   * Verwijdert een kaartactie van de kaart.
   *
   * @param {VlMapAction} action
   */
  removeAction(action) {
    this.map.removeAction(action);
  }

  /**
   * Activeert een kaartactie.
   *
   * @param {VlMapAction} action
   */
  activateAction(action) {
    if (action) {
      this.map.activateAction(action);
      this.dispatchEvent(new Event(VlMap.EVENTS.action.activated));
    }
  }

  /**
   * Zoomt op de kaart naar de meegegeven geometry of bounding box.
   *
   * @param {(ol/geom/Geometry|Number[])} geometryOrBoundingbox
   * @param {Number} max
   */
  zoomTo(geometryOrBoundingbox, max) {
    if (Array.isArray(geometryOrBoundingbox)) {
      this.map.zoomToExtent(geometryOrBoundingbox, max);
    } else if (geometryOrBoundingbox instanceof Object) {
      this.map.zoomToGeometry(geometryOrBoundingbox, max);
    }
  }

  /**
   * Registreer kaart event.
   *
   * @param {*} event
   * @param {*} callback
   */
  on(event, callback) {
    this.map.on(event, callback);
  }

  /**
   * Render de kaart opnieuw.
   */
  rerender() {
    this.map.render();
  }

  __updateMapSize() {
    this.style.display = "block";
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
      title: title,
      layers: layers,
    });
  }

  __initializeCoordinateSystem() {
    proj4.defs(
      "EPSG:31370",
      "+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs"
    );
    register(proj4);
  }

  static __callOnceOnLoad(callback) {
    if (document.readyState === "complete") {
      callback();
    } else {
      window.addEventListener("load", callback, { once: true });
    }
  }
}

define("vl-map", VlMap);
