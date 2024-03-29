import { vlElement, define } from '@uig/common/utilities';

export class VlDoormatTextElement extends vlElement(HTMLDivElement) {
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

define('vl-doormat-text', VlDoormatTextElement, { extends: 'div' });
