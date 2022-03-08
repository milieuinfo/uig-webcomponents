/* eslint-disable lit-a11y/no-redundant-role */
/* eslint-disable no-undef */
import { html, css, LitElement, unsafeCSS, nothing } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from '../modal/styles.scss';
// import './lib';
import '@govflanders/vl-ui-modal';

export class NewModal extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      open: { type: Boolean },
      title: { type: String, attribute: 'data-vl-title', reflect: true },
      closable: { type: Boolean, attribute: 'data-vl-closable', reflect: true },
    };
  }

  constructor() {
    super();
    this.modalRef = createRef();
  }

  updated(changedProperties) {
    const isOpen = this.modalRef.value.classList.contains('vl-modal-dialog--opened');
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'open':
          if (this.open) {
            if (!isOpen) {
              vl.modal.toggle(this.modalRef.value);
            }
          } else if (isOpen) {
            vl.modal.toggle(this.modalRef.value);
          }
          break;
        case 'closable':
          vl.modal.dress(this.modalRef.value);
          break;
        default:
          break;
      }
    });
  }

  firstUpdated() {
    vl.modal.dress(this.modalRef.value);
  }

  render() {
    const hasFooterSlot = [...this.children].find((child) => child.getAttribute('slot') === 'footer-content');
    return html` <div class="vl-modal">
      <dialog
        ${ref(this.modalRef)}
        class="vl-modal-dialog"
        data-vl-modal
        data-vl-modal-closable
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        aria-hidden="true"
        aria-labelledby="modal-toggle-1-title"
        aria-describedby="modal-toggle-1-description"
      >
        ${this.title ? html`<h2 class="vl-modal-dialog__title">${this.title}</h2>` : nothing}
        <div class="vl-modal-dialog__content"><slot name="content"></slot></div>
        ${hasFooterSlot
          ? html`<div class="vl-modal-dialog__footer">
              <slot name="footer-content"></slot>
            </div>`
          : nothing}
      </dialog>
    </div>`;
  }
}
customElements.define('new-modal', NewModal);
