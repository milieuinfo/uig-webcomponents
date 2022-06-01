import { define } from '../../../../../../utils/core';
import { VlMapDrawAction } from '../../draw-action';
import { VlDrawPolygonAction } from '../../../../actions/draw-polygon-action';

/**
 * VlMapDrawPolygonAction
 * @class
 * @classdesc De kaart polygoon teken actie component.
 *
 * @extends VlMapDrawAction
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-map/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-draw-actions.html|Demo}
 */
export class VlMapDrawPolygonAction extends VlMapDrawAction {
  _createAction(layer) {
    return new VlDrawPolygonAction(layer, this._callback, this.__drawOptions);
  }
}

define('vl-map-draw-polygon-action', VlMapDrawPolygonAction);
