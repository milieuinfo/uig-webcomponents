import { define } from '../../../../utils/core';
import { VlSideSheet } from '../../../side-sheet';

export class VlMapSideSheet extends VlSideSheet {
  constructor() {
    super(`
      :host {
        width: 3.5rem;
        transition: width 0.1s;
      }

      :host([data-vl-open]) {
        width: var(--vl-side-sheet-width,calc(100%/3));
      }

      .vl-side-sheet__toggle {
        margin: 10px;
      }

      :host([data-vl-open]) .vl-side-sheet__toggle {
        margin-left: 0px;
      }

      ::slotted(*) {
        margin-bottom: 20px;
      }
    `);
  }

  connectedCallback() {
    super.connectedCallback();
    this._render();
  }

  _render() {
    this.setAttribute('data-vl-left', '');
    this.setAttribute('data-vl-absolute', '');
  }
}

define('vl-map-side-sheet', VlMapSideSheet);
