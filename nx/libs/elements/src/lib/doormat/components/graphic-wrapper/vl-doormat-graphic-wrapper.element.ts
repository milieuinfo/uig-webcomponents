import { vlElement, define } from '@uig/common/utilities';

export class VlDoormatGraphicWrapperElement extends vlElement(HTMLDivElement) {
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

define('vl-doormat-graphic-wrapper', VlDoormatGraphicWrapperElement, { extends: 'div' });
