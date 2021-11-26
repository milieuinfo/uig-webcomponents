import { html, css, LitElement, unsafeCSS } from 'lit';
import './components/share-button';
import { classMap } from 'lit/directives/class-map.js';
import styles from './styles.scss';

export class VlShareButtons extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return { alt: { type: Boolean, attribute: 'data-vl-alt', reflect: true } };
  }

  render() {
    return html`<div class=${classMap({ 'vl-share-buttons': true, 'vl-share-buttons--alt': this.alt })}>
      <div class="vl-share-buttons__label">Deel:</div>
      <slot></slot>
    </div>`;
  }
}

customElements.define('vl-share-buttons', VlShareButtons);
