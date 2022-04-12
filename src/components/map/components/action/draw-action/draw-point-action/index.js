import OlGeometryType from 'ol/geom/GeometryType';
import { define } from '../../../../../../utils/core';
import { VlMapDrawAction } from '../../draw-action';
import { VlDrawAction } from '../../actions/draw-action';

export class VlMapDrawPointAction extends VlMapDrawAction {
  _createAction(layer) {
    return new VlDrawAction(layer, OlGeometryType.POINT, this._callback, this.__drawOptions);
  }
}

define('vl-map-draw-point-action', VlMapDrawPointAction);
