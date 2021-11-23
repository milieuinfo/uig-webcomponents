import { nativeVlElement, define } from '../../../../utils/core';
import { vlPillElement } from '../../mixin';

export class VlButtonPill extends vlPillElement(nativeVlElement(HTMLButtonElement)) {
  constructor() {
    super();
    this.classList.add('vl-pill');
    this.classList.add(this._classPrefix + 'clickable');
  }
}

define('vl-button-pill', VlButtonPill, { extends: 'button' });
