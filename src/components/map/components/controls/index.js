import Control from 'ol/control/Control';
import { vlElement, define } from '../../../../utils/core';
import '../../../toggle-button';

export class VlMapControl extends vlElement(HTMLElement) {
  // connectedCallback() {
  //   this._configureMap();
  // }

  connectedCallback() {
    this._addControl();
  }

  get _map() {
    if (this.parentNode) {
      console.log('get _map: ', this.parentNode.map);

      return this.parentNode.map;
    }
  }

  get type() {
    console.log('type: ', this.getAttribute('type'));
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  // _configureMap() {
  //   if (this._map) {
  //     this._map.addControl(this._createControl());
  //   }
  // }

  // _createControl() {
  //   return new OlTileLayer({
  //     title: this.title,
  //     type: 'base',
  //     source: this._WMTSSource,
  //   });
  // }
  _addControl() {
    if (this._map) {
      this._map.addControl(this._createControl());
    }
  }

  _createControl() {
    const controlElement = document.createElement('vl-toggle-button');
    controlElement.innerText = 'Meet';
    controlElement.setAttribute('data-vl-icon', 'pencil');
    controlElement.setAttribute('style', 'position: absolute');

    switch (this.type) {
      case 'measure':
        return new Control({
          element: controlElement,
        });
      default:
        return null;
    }
  }
}

define('vl-map-control', VlMapControl);
