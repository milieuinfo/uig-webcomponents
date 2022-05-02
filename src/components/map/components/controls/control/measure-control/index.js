import Control from 'ol/control/Control';
import { define } from '../../../../../../utils/core';
import { VlMeasureAction } from '../../../../actions/measure-action';
import { VlMapControl } from '../index';

export class VlMapMeasureControl extends VlMapControl {
  constructor() {
    super();

    const button = document.createElement('vl-toggle-button');
    button.setAttribute('data-vl-icon', 'pencil');
    button.setAttribute('data-vl-text-hidden', 'true');

    button.addEventListener('click', this.handleMeasureControlClick.bind(this), false);

    this.controlElement = new Control({
      element: button,
      target: this,
    });
  }

  handleMeasureControlClick() {
    const { actions, currentAction } = this._map;

    if (currentAction && currentAction instanceof VlMeasureAction) {
      this._map.deactivateCurrentAction();
    } else {
      const measureDrawAction = actions.find((action) => action instanceof VlMeasureAction);
      this._map.activateAction(measureDrawAction);
    }
  }
}

define('vl-map-measure-control', VlMapMeasureControl);
