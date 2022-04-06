import { define } from '../../../../../../utils/core';
import { VlDeleteAction } from '../../layer-action/select-action/box-select-action/delete-action/delete-action';
import { VlMapLayerAction } from '../../layer-action';
import { VlMapLayerStyle } from '../../../layer-style';

export class VlMapDeleteAction extends VlMapLayerAction {
  get style() {
    return this._style;
  }

  set style(style) {
    if (style instanceof VlMapLayerStyle) {
      this._style = style.style;
    } else {
      this._style = style;
    }
    this._processAction();
  }

  /**
   * Sets the function that will be executed after executing the delete action.
   * For each selected feature, the reject callback is used to remove the feature or the reject callback so that the feature is not removed.
   *
   * @param {Function} callback function with the following arguments:
   *                            - {[ol.Feature]} the features to be removed
   *                            - {Function} resolve callback with ol.Feature as argument to be removed
   *                            - {Function} reject callback with no argument removing the highlight
   */
  onDelete(callback) {
    this.__callback = callback;
  }

  get _callback() {
    return (features, resolve, reject) => {
      if (this.__callback) {
        return this.__callback(features, resolve, reject);
      }
      features.forEach((feature) => resolve(feature));
    };
  }

  _createAction(layer) {
    const options = {
      style: this._style,
    };
    return new VlDeleteAction(layer, this._callback, options);
  }
}

define('vl-map-delete-action', VlMapDeleteAction);
