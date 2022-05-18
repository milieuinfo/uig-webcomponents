import OlFullScreenControl from 'ol/control/FullScreen';
import OlLayerGroup from 'ol/layer/Group';
import OlProjection from 'ol/proj/Projection';
import proj4 from 'proj4';
import { vlElement, define } from '../../../../utils/core';
import { VlCustomMap } from '../../actions/custom-map';
import { EVENT, CONTROL_TYPE } from '../../enums';

import styles from './styles.scss';

export class VlMap extends vlElement(HTMLElement) {
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
   * Returns a Promise that resolves when the map is ready for further use.
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
   * Returns the OpenLayers map.
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

  /**
   * Returns all actions of the map.
   */
  get actions() {
    return this.map && this.map.actions;
  }

  /**
   * Gives all the controls of the map.
   */
  get controls() {
    return this.map && this.map.getControls().getArray();
  }

  /**
   * Gives the active map action.
   *
   * @return {VlMapAction}
   */
  get activeAction() {
    return this.map && this.map.getCurrentActiveAction();
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

  /**
   * Adds a map layer to the map.
   *
   * @param {Object} layer
   */
  addLayer(layer) {
    this.map.getOverlayLayers().push(layer);
  }

  /**
   * Adds a control to the map.
   *
   * @param {VlMapControl} control
   */
  addControl(control) {
    this.map.addControl(control);
  }

  /**
   * Adds a map action to the map.
   *
   * @param {VlMapAction} action
   */
  addAction(action) {
    this.map.addAction(action);
  }

  /**
   * Removes a map action from the map.
   *
   * @param {VlMapAction} action
   */
  removeAction(action) {
    this.map.removeAction(action);
  }

  _handleLayerVisibilityChange(layerElement) {
    // Visibility false: Disable action controls linked to actions in the layer and deactivate the possible active action in the layer
    // Visibility true:  Enable action controls linked to actions in the layer
    const actions = this.map.getLayerActions(layerElement.layer);

    if (actions) {
      actions.forEach((action) => {
        if (!layerElement.visible) {
          this.deactivateAction(action);
        }

        if (action.handleLayerVisibilityChange) {
          action.handleLayerVisibilityChange();
        }

        const actionControl = action.getControl();
        if (actionControl) {
          if (!layerElement.visible) {
            actionControl.target_.setActive(false);
          }
          actionControl.get('element').setDisabled(!layerElement.visible);
        }
      });
    }
  }

  _handleActionsActiveState(changedAction, changedActiveState) {
    // Only the action that was set to true gets an active state of true, the others are set to false

    if (this.actions) {
      this.actions.forEach((action) => {
        const set = changedActiveState && changedAction === action;
        action.element._active = set;
      });
    }
  }

  _handleActionControlsActiveState(changedAction, changedActiveState) {
    // Only the action control with the same identifier as the changed action gets an active state of true, the others are set to false

    const actionControls = this.map.getActionControls();
    if (actionControls) {
      actionControls.forEach((actionControl) => {
        actionControl.target_.setActive(
          changedActiveState && changedAction.element.identifier === actionControl.get('element').identifier,
        );
      });
    }
  }

  _dispatchActionActiveChangedEvent(changedAction, changedActiveState) {
    this.dispatchEvent(
      new CustomEvent(EVENT.ACTION_ACTIVE_CHANGED, {
        detail: { changedAction, active: changedActiveState },
      }),
    );
  }

  /**
   * Activates a map action.
   *
   * @param {VlMapAction} action
   */
  activateAction(action) {
    // Only activate action when its layer is visible
    if (action && action.layer.get('visible')) {
      this.map.activateAction(action);

      this._dispatchActionActiveChangedEvent(action, true);
      this._handleActionsActiveState(action, true);
      this._handleActionControlsActiveState(action, true);
    }
  }

  /**
   * Deactivates a map action.
   *
   * @param {VlMapAction} action
   */
  deactivateAction(action) {
    // First check if action to deactivate is actually active at this moment
    if (action && this.activeAction && this.activeAction === action) {
      this.map.deactivateCurrentAction();

      this._dispatchActionActiveChangedEvent(action, false);
      this._handleActionsActiveState(action, false);
      this._handleActionControlsActiveState(action, false);

      this.map.activateDefaultAction();
    }
  }

  /**
   * Zooms on the map to the given geometry or bounding box.
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
   * Register map event.
   *
   * @param {*} event
   * @param {*} callback
   */
  on(event, callback) {
    this.map.on(event, callback);
  }

  /**
   * Render the map again.
   */
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
