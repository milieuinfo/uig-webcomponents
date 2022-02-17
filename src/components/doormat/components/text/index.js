import { nativeVlElement, define } from '../../../../utils/core';

export class VlDoormatText extends nativeVlElement(HTMLDivElement) {
  connectedCallback() {
    this._processStyle();
  }

  _processStyle() {
    this._addClass();
  }

  _addClass() {
    this.classList.add('vl-doormat__text');
  }
}

define('vl-doormat-text', VlDoormatText, { extends: 'div' });
