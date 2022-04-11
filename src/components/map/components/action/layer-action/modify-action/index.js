import { define } from '../../../../../../utils/core';
import { VlMapLayerAction } from '../../layer-action';
import { VlMapVectorLayer } from '../../../layer/vector-layer';
import { VlModifyAction } from '../../actions/select-action/modify-action';
import { VlCompositeVectorLayer } from '../../../composite-vector-layer';

export class VlMapModifyAction extends VlMapLayerAction {
  static get _observedAttributes() {
    return ['snapping', 'snapping-pixel-tolerance'];
  }

  disconnectedCallback() {
    this.__removeSnappingLayerStyleChangedEventListener();
  }

  /**
   * Set the function to be executed after executing the edit action
   *
   * @param {Function} callback function with the following arguments:
   *                            - {ol.Feature} the edited feature
   *                            - {Function} reject callback with argument the modified feature where the feature is returned to its original state
   */
  onModify(callback) {
    this.__callback = callback;
  }

  /**
   * Specifies if the action is allowed to be performed on a feature and/or a layer. Returns true by default.
   *
   * @param {Object} feature Openlayers feature
   * @param {Object} layer Openlayers layer
   *
   * @Return {boolean} true if the action is allowed to be performed, false if the action may not be performed for the supplied feature and/or layer
   */
  appliesTo() {
    return true;
  }

  _createAction(layer) {
    const options = {
      snapping: this.__snappingOptions,
      filter: this.appliesTo.bind(this),
    };
    return new VlModifyAction(layer, this._callback, options);
  }

  _snappingChangedCallback() {
    this._processAction();
  }

  _snappingPixelToleranceChangedCallback() {
    this._processAction();
  }

  get __snappingOptions() {
    if (this.dataset.vlSnapping !== undefined && this.__snappingLayers.length > 0) {
      return {
        layer: this.__createSnappingLayer(),
        pixelTolerance: this.dataset.vlSnappingPixelTolerance || 10,
        node: false,
        vertex: false,
      };
    }

    return true;
  }

  __createSnappingLayer() {
    this.__snappingLayer = new VlCompositeVectorLayer(
      this.__snappingLayers.map((layer) => layer._layer),
      {},
    );
    this.__addSnappingLayerStyleChangedEventListener();
    return this.__snappingLayer;
  }

  __addSnappingLayerStyleChangedEventListener() {
    if (this.__snappingLayers && this.__snappingLayers.length > 0) {
      const firstVectorLayer = this.__snappingLayers[0];
      this.__snappingLayer.setStyle(firstVectorLayer.style);
      this.__onSnappingLayerStyleChanged = (event) => this.__snappingLayer.setStyle(event.target.style);
      firstVectorLayer.addEventListener(VlMapVectorLayer.EVENTS.styleChanged, this.__onSnappingLayerStyleChanged);
    }
  }

  __removeSnappingLayerStyleChangedEventListener() {
    if (this.__snappingLayers && this.__snappingLayers.length > 0) {
      this.__snappingLayers[0].removeEventListener(
        VlMapVectorLayer.EVENTS.styleChanged,
        this.__onSnappingLayerStyleChanged,
      );
    }
  }

  get __snappingLayers() {
    return Array.from(this.querySelectorAll('vl-map-wfs-layer'));
  }
}

define('vl-map-modify-action', VlMapModifyAction);
