import {VlDrawAction} from './vl-mapactions-draw-action';
import GeometryType from 'ol/geom/GeometryType';

export class VlDrawLineAction extends VlDrawAction {
  constructor(layer, onDraw, options = {}) {
    super(layer, GeometryType.LINE_STRING, onDraw, options);
  }
}
