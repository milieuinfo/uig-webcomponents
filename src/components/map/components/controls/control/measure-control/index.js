import Control from 'ol/control/Control';
import { define } from '../../../../../../utils/core';
import { VlMeasureAction } from '../../../../actions/measure-action';
import { VlMapControl } from '../index';

export class VlMapMeasureControl extends VlMapControl {
  constructor(map, controlElement) {
    super(map);

    if (controlElement) {
      this.controlElement = controlElement;
      this.control = new Control({
        element: controlElement,
      });
    } else {
      this.controlElement = document.createElement('vl-toggle-button');
      // button.setAttribute('data-vl-icon', 'pencil');
      // this.controlElement.setAttribute('data-vl-text-hidden', 'true');
      this.controlElement.innerText = 'Meten';

      this.control = new Control({
        element: this.controlElement,
        target: this,
      });
    }

    this.controlElement.addEventListener('click', this.handleMeasureControlClick.bind(this), false);

    this.identifier = 'measure';

    this.active = false;
  }

  handleMeasureControlClick() {
    const measureAction = this._map.actions.find((action) => action instanceof VlMeasureAction);

    if (this.active) {
      this._map.deactivateAction(measureAction);
    } else {
      this._map.activateAction(measureAction);
    }

    this.active = !this.active;
  }
}

define('vl-map-measure-control', VlMapMeasureControl);
