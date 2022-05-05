import { define } from '../../../../../../utils/core';
import { VlMapDrawAction } from '../../draw-action';
import { VlMeasureAction } from '../../../../actions/measure-action';

export class VlMapMeasureAction extends VlMapDrawAction {
  _createAction(layer) {
    return new VlMeasureAction(layer, this.__drawOptions);
  }

  // For control outside of the map

  get active() {
    return this.getAttribute('active') && this.getAttribute('active') === 'true';
  }

  set active(value) {
    if (value) {
      this.activate();
    } else {
      this.deactivate();
    }
  }
}

define('vl-map-measure-action', VlMapMeasureAction);
