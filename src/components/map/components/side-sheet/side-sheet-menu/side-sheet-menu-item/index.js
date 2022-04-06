import { vlElement, define } from '../../../../../../utils/core';
import styles from './styles.scss';

export class VlMapSideSheetMenuItem extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['title', 'href'];
  }

  constructor() {
    super(`
      <style>
        ${styles}

        .vl-map-side-sheet-menu-item {
          background: #e8ebee;
          padding: 2rem;
        }

        slot {
          padding: 1.5rem;
          display: block;
        }
      </style>
      <div>
        <div class="vl-map-side-sheet-menu-item">
          <a id="vl-map-side-sheet-menu-item-link" is="vl-link" href="#">
            <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span><span id="title">Terug</span>
          </a>
        </div>
        <slot></slot>
      </div>
    `);
  }

  get _titleElement() {
    return this._shadow.querySelector('#title');
  }

  get _hrefElement() {
    return this._shadow.querySelector('#vl-map-side-sheet-menu-item-link');
  }

  _titleChangedCallback(oldValue, newValue) {
    if (newValue) {
      this._titleElement.innerText = newValue;
    }
  }

  _hrefChangedCallback(oldValue, newValue) {
    if (newValue) {
      this._hrefElement.setAttribute('href', newValue);
    }
  }
}

define('vl-map-side-sheet-menu-item', VlMapSideSheetMenuItem);
