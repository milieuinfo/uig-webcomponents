import Control from 'ol/control/Control';
import { define } from '../../../../../../utils/core';
import { VlMapControl } from '../index';

export class VlMapMeasureControl extends VlMapControl {
  constructor() {
    super();

    const button = document.createElement('vl-toggle-button');
    button.setAttribute('data-vl-icon', 'pencil');
    button.setAttribute('data-vl-text-hidden', 'true');

    this.controlElement = new Control({
      element: button,
      target: this,
    });
  }
}

define('vl-map-measure-control', VlMapMeasureControl);
