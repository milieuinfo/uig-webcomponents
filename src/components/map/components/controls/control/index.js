import { vlElement, define } from '../../../../../utils/core';
import '../../../../toggle-button';

export class VlMapControl extends vlElement(HTMLElement) {
  constructor(map) {
    super();

    this.map = map;
  }

  connectedCallback() {
    this._addControl();
  }

  get _map() {
    if (this.closest('vl-map')) {
      return this.closest('vl-map');
    }
    return this.map;
  }

  get control() {
    return this._control;
  }

  set control(value) {
    this._control = value;
  }

  get identifier() {
    return this._identifier;
  }

  set identifier(value) {
    this._identifier = value;
  }

  _addControl() {
    if (this._map) {
      this.control.set('controlIdentifier', this.identifier);
      this._map.addControl(this.control);
    }
  }
}

define('vl-map-control', VlMapControl);
