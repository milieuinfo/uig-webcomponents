import { vlElement, define } from '../../../../../utils/core';
import styles from './styles.scss';

export class VlMapSideSheetMenu extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
        ${styles}
        :host {
          margin: -1.5rem;
          display: block;
        }
      </style>
      <slot></slot>
    `);
  }
}

define('vl-map-side-sheet-menu', VlMapSideSheetMenu);
