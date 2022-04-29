import { vlElement, define } from '../../../../../utils/core';
import '../../../../toggle-button';

export class VlMapControl extends vlElement(HTMLElement) {
  connectedCallback() {
    this._addControl();
  }

  get _map() {
    return this.closest('vl-map').map;
  }

  get controlElement() {
    return this._controlElement;
  }

  set controlElement(value) {
    this._controlElement = value;
  }

  _addControl() {
    if (this._map) {
      this._map.addControl(this.controlElement);
    }
  }
}

define('vl-map-control', VlMapControl);
