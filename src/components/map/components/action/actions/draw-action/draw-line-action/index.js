import GeometryType from 'ol/geom/GeometryType';
import { VlDrawAction } from '..';

export class VlDrawLineAction extends VlDrawAction {
  constructor(layer, onDraw, options = {}) {
    super(layer, GeometryType.LINE_STRING, onDraw, options);
  }
}
