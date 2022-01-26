import { html, css, LitElement, unsafeCSS } from 'lit';
import '../../grid';
import styles from '../styles.scss';

export class VlDescriptionDataViaProps extends LitElement {
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
      size: { type: Number, attribute: 'data-vl-items-size', reflect: true },
    };
  }

  render() {
    return html`<div class="vl-description-data">
      <div is="vl-grid">
        ${this.items.map(
          ({ label, value }) => html`
            <div is="vl-column" data-vl-size=${this.size}>
              <span class="vl-description-data__label">${label}</span>
              <span class="vl-description-data__value">${value}</span>
            </div>
          `,
        )}
      </div>
    </div>`;
  }
}

customElements.define('vl-via-props', VlDescriptionDataViaProps);
