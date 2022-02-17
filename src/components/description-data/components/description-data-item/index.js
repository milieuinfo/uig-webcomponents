import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from '../../styles.scss';

export class VlDescriptionDataItem extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      label: { type: String, attribute: 'data-vl-label', reflect: true },
      value: { type: String, attribute: 'data-vl-value', reflect: true },
    };
  }

  hasSlot(name) {
    return [...this.children].find((child) => child.getAttribute('slot') === name);
  }

  render() {
    const labelClass = 'vl-description-data__label';
    const valueClass = 'vl-description-data__value';
    return html`
      ${this.hasSlot('label')
        ? html`<slot name="label" class=${labelClass}></slot>`
        : html`<span class=${labelClass}>${this.label}</span>`}
      ${this.hasSlot('value')
        ? html`<slot name="value" class=${valueClass}></span>`
        : html`<span class=${valueClass}>${this.value}</span>`}
    `;
  }
}

customElements.define('vl-description-data-item', VlDescriptionDataItem);
