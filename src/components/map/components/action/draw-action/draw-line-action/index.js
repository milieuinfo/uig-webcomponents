import { define } from '../../../../../../utils/core';
import { VlMapDrawAction } from '../../draw-action';
import { VlDrawLineAction } from './draw-line-action';

export class VlMapDrawLineAction extends VlMapDrawAction {
  _createAction(layer) {
    return new VlDrawLineAction(layer, this._callback, this.__drawOptions);
  }
}

define('vl-map-draw-line-action', VlMapDrawLineAction);
