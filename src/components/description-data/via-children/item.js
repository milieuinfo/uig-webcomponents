import { html, css, LitElement, unsafeCSS } from 'lit';
import '../../grid';
// import styles from '../styles.scss';

export class VlDescriptionDataItem extends LitElement {
  // static get styles() {
  //   return [
  //     css`
  //       ${unsafeCSS(styles)}
  //     `,
  //   ];
  // }

  static get properties() {
    return {
      label: { type: String, attribute: 'data-vl-label', reflect: true },
      value: { type: String, attribute: 'data-vl-value', reflect: true },
    };
  }

  render() {
    return html`
      <span class="vl-description-data__label">${this.label}</span>
      <span class="vl-description-data__value">${this.value}</span>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('vl-description-data-item', VlDescriptionDataItem);
