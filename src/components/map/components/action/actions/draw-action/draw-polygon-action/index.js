import GeometryType from 'ol/geom/GeometryType';
import { VlDrawAction } from '..';

export class VlDrawPolygonAction extends VlDrawAction {
  constructor(layer, onDraw, options = {}) {
    super(layer, GeometryType.POLYGON, onDraw, options);
  }
}
