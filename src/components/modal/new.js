/* eslint-disable lit-a11y/no-redundant-role */
/* eslint-disable no-undef */
import { html, css, LitElement, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from '../modal/styles.scss';
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
    };
  }

  constructor() {
    super();
    this.modalRef = createRef();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'open':
          if (this.modalRef.value) {
            vl.modal.toggle(this.modalRef.value);
          }
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
        <h2 class="vl-modal-dialog__title">${this.title}</h2>
        <div class="vl-modal-dialog__content"><slot name="content">Modal content</slot></div>
        <div class="vl-modal-dialog__footer">
          <div class="vl-action-group">
            <slot name="button" data-vl-modal-close></slot>
            <!-- <a href="documentation/js-components/vl-ui-modal/#" class="vl-link" data-vl-modal-close>
              <span class="vl-link__icon vl-link__icon--before vl-vi vl-vi-cross" aria-hidden="true"></span>Annuleer
            </a> -->
          </div>
        </div>
      </dialog>
    </div>`;
  }
}
customElements.define('new-modal', NewModal);
