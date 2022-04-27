import Control from 'ol/control/Control';
import { define } from '../../../../../utils/core';
import { VlMapControl } from '../index';

export class VlMapMeasureControl extends VlMapControl {
  // constructor() {
  //   console.log('VlMapMeasureControl constructor');
  //   super();

  //   const controlElement = document.createElement('div');
  //   controlElement.setAttribute('style', 'background-color: red; width: 20px; height: 20px;');

  //   const control = new Control({
  //     element: controlElement,
  //   });

  //   console.log('control: ', control);

  //   this.addControl(this.control);
  // }

  constructor() {
    super();
    this.type = 'measure';
  }

  // connectedCallback() {
  //   console.log('VlMapMeasureControl connectedCallback');
  //   const controlElement = document.createElement('div');
  //   controlElement.setAttribute('style', 'background-color: red; width: 20px; height: 20px;');

  //   const control = new Control({
  //     element: controlElement,
  //   });

  //   console.log('control: ', control);

  //   super.addControl();
  // }
}

define('vl-map-measure-control', VlMapMeasureControl);
