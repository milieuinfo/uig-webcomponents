import { nativeVlElement, define } from '../../../../utils/core';

export class VlDoormatTitle extends nativeVlElement(HTMLHeadingElement) {
  connectedCallback() {
    this._processStyle();
  }

  _processStyle() {
    this._addClass();
  }

  _addClass() {
    this.classList.add('vl-doormat__title');
  }
}

define('vl-doormat-title', VlDoormatTitle, { extends: 'h2' });
