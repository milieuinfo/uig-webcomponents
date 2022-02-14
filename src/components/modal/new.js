/* eslint-disable lit-a11y/no-redundant-role */
/* eslint-disable no-undef */
import { html, css, LitElement, unsafeCSS, nothing } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
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
      closable: { type: Boolean, attribute: 'data-vl-closable', reflect: true },
      hideAll: { type: Boolean },
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
    return html` <div class="vl-modal">
      <dialog
        style=${styleMap({ padding: this.hideAll ? '0' : 'revert' })}
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
        ${this.hideAll
          ? html`<slot name="content"></slot>`
          : html`<h2 class="vl-modal-dialog__title">${this.title}</h2>
              <div class="vl-modal-dialog__content"><slot name="content"></slot></div>
              <div class="vl-modal-dialog__footer">
                <div class="vl-action-group">
                  <slot name="button" data-vl-modal-close></slot>
                  <!-- <a href="documentation/js-components/vl-ui-modal/#" class="vl-link" data-vl-modal-close>
              <span class="vl-link__icon vl-link__icon--before vl-vi vl-vi-cross" aria-hidden="true"></span>Annuleer
            </a> -->
                </div>
              </div>
              ${this.closable
                ? html` <button type="button" class="vl-modal-dialog__close" data-vl-modal-close>
                    <i class="vl-modal-dialog__close__icon vl-vi vl-vi-cross" aria-hidden="true"></i>
                    <span class="vl-u-visually-hidden">Dialoogvenster sluiten</span>
                  </button>`
                : nothing}`}
      </dialog>
    </div>`;
  }
}
customElements.define('new-modal', NewModal);
