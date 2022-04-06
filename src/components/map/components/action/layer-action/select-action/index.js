import { define } from '../../../../../../utils/core';
import { VlMapLayerAction } from '../../layer-action';
import { VlMapLayerStyle } from '../../../layer-style';
import { VlSelectAction } from './select-action';

export class VlMapSelectAction extends VlMapLayerAction {
  /**
   * Returns the style that a selected feature will have.
   *
   * @return {Object} de stijl
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

  _createAction(layer) {
    const options = {
      style: this.style,
      cluster: this._cluster != undefined,
    };
    return new VlSelectAction(layer, this._callback, options);
  }
}

define('vl-map-select-action', VlMapSelectAction);
