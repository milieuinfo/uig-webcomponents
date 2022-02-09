import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from '../modal/styles.scss';
// import './lib';

export class SimpleGreeting extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  render() {
    return html` <div class="vl-modal">
      <dialog
        class="vl-modal-dialog"
        data-vl-modal
        tabindex="-1"
        aria-modal="true"
        aria-hidden="true"
        aria-labelledby="modal-toggle-title"
        aria-describedby="modal-toggle-description"
      >
        <slot></slot>
      </dialog>
    </div>`;
  }
}
customElements.define('new-modal', SimpleGreeting);
