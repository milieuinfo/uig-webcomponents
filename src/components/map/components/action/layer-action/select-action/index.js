import { define } from '../../../../../../utils/core';
import { VlMapLayerAction } from '../../layer-action';
import { VlMapLayerStyle } from '../../../layer-style';
import { VlSelectAction } from './select-action';

export class VlMapSelectAction extends VlMapLayerAction {
  /**
   * Returns the style that a selected feature will be given.
   *
   * @return {Object} the style
   */
  get style() {
    return this._style;
  }

  /**
   * Set the style that a selected feature will have.
   *
   * @param {VlMapLayerStyle|Object} style - the style: a VlMapLayerStyle or a OpenLayers StyleLikeF
   */
  set style(style) {
    if (style instanceof VlMapLayerStyle) {
      this._style = style.style;
    } else {
      this._style = style;
    }
    this._processAction();
  }

  get _cluster() {
    return this.getAttribute('cluster');
  }

  mark(id) {
    if (this._action && id) {
      this._action.markFeatureWithId(id, this.layer);
    }
  }

  removeMarks() {
    if (this._action) {
      this._action.demarkAllFeatures();
    }
  }

  select(feature) {
    if (this.action && feature) {
      this.action.selectFeature(feature);
    }
  }

  onSelect(callback) {
    this.__callback = callback;
  }

  reset() {
    if (this.action) {
      this.action.clearFeatures();
    }
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
      style: this.style,
      cluster: this._cluster !== undefined,
      filter: this.appliesTo.bind(this),
    };
    return new VlSelectAction(layer, this._callback, options);
  }
}

define('vl-map-select-action', VlMapSelectAction);
