import {VlDrawAction} from './vl-mapactions-draw-action';
import GeometryType from 'ol/geom/GeometryType';

export class VlDrawPolygonAction extends VlDrawAction {
  constructor(layer, onDraw, options = {}) {
    super(layer, GeometryType.POLYGON, onDraw, options);
  }
}
