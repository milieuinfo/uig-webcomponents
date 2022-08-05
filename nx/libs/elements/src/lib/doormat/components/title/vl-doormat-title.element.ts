import { vlElement, define } from '@uig/common/utilities';

export class VlDoormatTitleElement extends vlElement(HTMLHeadingElement) {
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

define('vl-doormat-title', VlDoormatTitleElement, { extends: 'h2' });
