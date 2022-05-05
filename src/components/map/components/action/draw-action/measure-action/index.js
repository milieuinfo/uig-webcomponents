import { define } from '../../../../../../utils/core';
import { VlMapDrawAction } from '../../draw-action';
import { VlMeasureAction } from '../../../../actions/measure-action';

export class VlMapMeasureAction extends VlMapDrawAction {
  _createAction(layer) {
    return new VlMeasureAction(layer, this.__drawOptions);
  }
}

define('vl-map-measure-action', VlMapMeasureAction);
