import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from '../../styles.scss';

export class VlTestItem extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      href: { type: String, attribute: 'data-vl-href', reflect: true },
    };
  }

  render() {
    return html`<a href=${this.href} class="vl-breadcrumb__list__item__cta"><slot></slot></a>`;
  }
}

customElements.define('vl-breadcrumb-item', VlTestItem);
