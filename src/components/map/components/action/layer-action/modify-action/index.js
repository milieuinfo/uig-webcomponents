import { VlModifyAction, VlCompositeVectorLayer } from "vl-mapactions/dist/vl-mapactions.js";
import { define } from "../../../../../../utils/core";
import { VlMapLayerAction } from "../../layer-action";
import { VlMapVectorLayer } from "../../../layer/vector-layer";

/**
 * VlMapModifyAction
 * @class
 * @classdesc The map modify action component.
 *
 * @extends VlMapLayerAction
 *
 * @property {boolean} [data-vl-snapping] - Attribute enables snapping on the vl-map-wfs-layers that are added to this action.
 * @property {number} [data-vl-snapping-pixel-tolerance=10] - Attribute configures the maximum distance (in pixels) between a feature and your pointing device before snapping occurs.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-modify-actions.html|Demo}
 */
export class VlMapModifyAction extends VlMapLayerAction {
  static get _observedAttributes() {
    return ["snapping", "snapping-pixel-tolerance"];
  }

  disconnectedCallback() {
    this.__removeSnappingLayerStyleChangedEventListener();
  }

  /**
   * Configure the function that will be called after processing an action.
   *
   * @param {Function} callback function with the following arguments:
   *                            - {ol.Feature} the modified feature
   *                            - {Function} reject callback with the modified feature as argument, which will revert the feature back to its original state
   */
  onModify(callback) {
    this.__callback = callback;
  }

  _createAction(layer) {
    const options = {
      snapping: this.__snappingOptions,
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
    this.__snappingLayer = new VlCompositeVectorLayer(this.__snappingLayers.map((layer) => layer._layer), {});
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
      this.__snappingLayers[0].removeEventListener(VlMapVectorLayer.EVENTS.styleChanged, this.__onSnappingLayerStyleChanged);
    }
  }

  get __snappingLayers() {
    return Array.from(this.querySelectorAll("vl-map-wfs-layer"));
  }
}

define("vl-map-modify-action", VlMapModifyAction);
