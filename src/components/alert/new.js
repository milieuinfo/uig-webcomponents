import { html, css, LitElement, unsafeCSS, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ref as litRef, createRef } from 'lit/directives/ref.js';
import styles from './styles.scss';
import { ALERT_SIZE, ALERT_TYPE } from './enums';

export const alertProps = {
  icon: { type: String, attribute: 'data-vl-icon', reflect: true },
  title: { type: String, attribute: 'data-vl-title', reflect: true },
  closable: { type: Boolean, attribute: 'data-vl-closable', reflect: true },
  type: { type: String, attribute: 'data-vl-type', reflect: true },
  size: { type: String, attribute: 'data-vl-size', reflect: true },
};

export const renderAlert = (ref) => {
  const classes = {
    'vl-alert': true,
    'vl-alert--error': ref.type === ALERT_TYPE.ERROR,
    'vl-alert--warning': ref.type === ALERT_TYPE.WARNING,
    'vl-alert--success': ref.type === ALERT_TYPE.SUCCESS,
    'vl-alert--info': ref.type === ALERT_TYPE.INFO,
    'vl-alert--small': ref.size === ALERT_SIZE.SMALL,
    'vl-alert--large': ref.size === ALERT_SIZE.LARGE,
  };

  return ref.canRender
    ? html`<div class=${classMap(classes)} role="alertdialog">
        ${ref.icon
          ? html` <div class="vl-alert__icon">
              <i class="vl-vi vl-vi-${ref.icon}" aria-hidden="true"></i>
            </div>`
          : nothing}
        ${ref.closable
          ? html` <button
              class="vl-alert__close"
              type="button"
              ${litRef(ref.closeButtonRef)}
              @click=${() => {
                ref.onClose();
              }}
            >
              <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
              <span class="vl-u-visually-hidden">Sluiten</span>
            </button>`
          : nothing}
        <div class="vl-alert__content">
          <p class="vl-alert__title">${ref.title}</p>
          <div class="vl-alert__message">
            <slot></slot>
          </div>
        </div>
      </div>`
    : nothing;
};

export class NewAlert extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return { open: { type: Boolean }, canRender: { type: Boolean }, ...alertProps };
  }

  constructor() {
    super();
    this.canRender = true;
  }

  onClose() {
    this.dispatchEvent(
      new CustomEvent('vl-close', {
        bubbles: true,
        composed: true,
      }),
    );
    if (this.open === undefined) {
      this.canRender = false;
    }
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'open':
          this.canRender = this.open;
          break;
        default:
          break;
      }
    });
  }

  render() {
    return renderAlert(this);
  }
}

customElements.define('new-alert', NewAlert);
