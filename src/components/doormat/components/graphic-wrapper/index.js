import { nativeVlElement, define } from '../../../../utils/core';

export class VlDoormatGraphicWrapper extends nativeVlElement(HTMLDivElement) {
  connectedCallback() {
    this._processStyle();
  }

  _processStyle() {
    this._addClass();
  }

  _addClass() {
    this.classList.add('vl-doormat__graphic-wrapper');
  }
}

define('vl-doormat-graphic-wrapper', VlDoormatGraphicWrapper, { extends: 'div' });
