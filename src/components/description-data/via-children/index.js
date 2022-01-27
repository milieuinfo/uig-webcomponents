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

  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.items = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.items = [...this.querySelectorAll('vl-description-data-item')];
  }

  render() {
    return html`<div class="vl-description-data">
      <div is="vl-grid">
        ${this.items.map((item) => html`<div is="vl-column" data-vl-size=${12 / this.items.length}>${item}</div>`)}
      </div>
    </div>`;
  }
}

customElements.define('vl-via-children', VlDescriptionDataViaChildren);
