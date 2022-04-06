import { define } from '../../../../../../utils/core';
import { VlMapLayerAction } from '../../layer-action';
import { VlModifyAction } from './modify-action';

export class VlMapModifyAction extends VlMapLayerAction {
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

  _createAction(layer) {
    const options = {
      snapping: true,
    };
    return new VlModifyAction(layer, this._callback, options);
  }
}

define('vl-map-modify-action', VlMapModifyAction);
