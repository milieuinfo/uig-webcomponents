import { html, css, LitElement, unsafeCSS, nothing } from 'lit';
import styles from '../styles.scss';

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
      isLastItem: { type: Boolean },
      href: { type: String, attribute: 'data-vl-href', reflect: true },
    };
  }

  constructor() {
    super();
    this.isLastItem = false;
  }

  render() {
    return html`<li class="vl-breadcrumb__list__item">
      ${!this.isLastItem
        ? html`<span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>`
        : nothing}
      <a href=${this.href} class="vl-breadcrumb__list__item__cta"><slot></slot></a>
    </li>`;
  }
}

customElements.define('vl-breadcrumb-item', VlTestItem);
