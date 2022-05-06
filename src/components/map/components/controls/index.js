import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from './styles.scss';

export class VlMapControls extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  render() {
    return html`<div>
      <slot></slot>
    </div>`;
  }
}
customElements.define('vl-map-controls', VlMapControls);
