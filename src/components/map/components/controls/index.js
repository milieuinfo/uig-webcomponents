import { vlElement, define } from '../../../../utils/core';
import '../../../toggle-button';

export class VlMapControls extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
        div {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          display: flex;
          flex-direction: row;
          column-gap: 10px;
          justify-content: flex-end;
          width: calc(100% - 20px);
          padding: 10px;
        }
      </style>
      <div>
        <slot></slot>
      </div>
    `);
  }
}

define('vl-map-controls', VlMapControls);
