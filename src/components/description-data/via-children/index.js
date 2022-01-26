import { html, css, LitElement, unsafeCSS } from 'lit';
import '../../grid';
import styles from '../styles.scss';
import './item';

export class VlDescriptionDataViaChildren extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  render() {
    return html`<div class="vl-description-data">
      <!-- <div is="vl-grid"> -->
      <slot></slot>
      <!-- </div> -->
    </div>`;
  }
}

customElements.define('vl-via-children', VlDescriptionDataViaChildren);
