/* eslint-disable lit-a11y/click-events-have-key-events */
/* eslint-disable lit-a11y/no-redundant-role */
import { html, css, LitElement, unsafeCSS, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from '../modal/styles.scss';

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

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'open':
          if (this.open) {
            document.querySelector('body').classList.add('vl-u-no-overflow');
          } else {
            document.querySelector('body').classList.remove('vl-u-no-overflow');
            this.dispatchEvent(new CustomEvent('vl-closed'));
          }
          break;

        default:
          break;
      }
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.open = false;
  }

  onClose(reason) {
    this.dispatchEvent(
      new CustomEvent('vl-close', {
        detail: {
          reason,
        },
      }),
    );
  }

  render() {
    const hasFooterSlot = [...this.children].find((child) => child.getAttribute('slot') === 'footer');
    return html` <div
        class="vl-modal"
        @keydown=${(event) => {
          if (event.key === 'Esc' || event.key === 'Escape') {
            this.onClose('escapeKeyDown');
          }
        }}
      >
        <dialog
          ?open=${this.open}
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
          <div class="vl-modal-dialog__content"><slot></slot></div>
          ${hasFooterSlot
            ? html`<div class="vl-modal-dialog__footer">
                <slot name="footer"></slot>
              </div>`
            : nothing}
          ${this.closable
            ? html`<button
                @click=${() => this.onClose('closeButtonClick')}
                type="button"
                class="vl-modal-dialog__close"
                data-vl-modal-close
              >
                <i class="vl-modal-dialog__close__icon vl-vi vl-vi-cross" aria-hidden="true"></i>
                <span class="vl-u-visually-hidden">Dialoogvenster sluiten</span>
              </button>`
            : nothing}
        </dialog>
      </div>
      <div
        @click=${() => this.onClose('backdropClick')}
        class="vl-modal-backdrop ${classMap({ 'vl-modal-backdrop--hidden': !this.open })} "
      ></div>`;
  }
}
customElements.define('new-modal', NewModal);
