import { define } from '../../../../../../utils/core';
import { VlMapDrawAction } from '../../draw-action';
import { VlDrawPolygonAction } from '../../actions/draw-action/draw-polygon-action';

export class VlMapDrawPolygonAction extends VlMapDrawAction {
  _createAction(layer) {
    return new VlDrawPolygonAction(layer, this._callback, this.__drawOptions);
  }
}

define('vl-map-draw-polygon-action', VlMapDrawPolygonAction);
