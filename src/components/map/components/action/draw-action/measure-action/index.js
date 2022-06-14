import { define } from '../../../../../../utils/core';
import { VlMapDrawAction } from '../../draw-action';
import { VlMeasureAction } from '../../../../actions/measure-action';
import { IDENTIFIER } from '../../../../enums';

export class VlMapMeasureAction extends VlMapDrawAction {
  constructor() {
    super();
    this.identifier = IDENTIFIER.MEASURE;
  }

  _createAction(layer) {
    return new VlMeasureAction(layer, this.__drawOptions);
  }
}

define('vl-map-measure-action', VlMapMeasureAction);
