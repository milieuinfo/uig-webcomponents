/* eslint-disable no-undef */
import { html, css, LitElement, unsafeCSS } from 'lit';
import '@govflanders/vl-ui-util/dist/js/util.js';
import '@govflanders/vl-ui-core/dist/js/core.js';
import '@govflanders/vl-ui-toaster';
import { ref, createRef } from 'lit/directives/ref.js';
import { classMap } from 'lit/directives/class-map.js';
import '../alert';
import alertStyles from '../alert/styles.scss';
import styles from './styles.scss';
import { alertProps, renderAlert } from '../alert/new';

export class VlToaster extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
      css`
        ${unsafeCSS(alertStyles)}
      `,
    ];
  }

  static get properties() {
    return {
      open: { type: Boolean },
      canRender: { type: Boolean },
      position: { type: String, attribute: 'data-vl-position', reflect: true },
      ...alertProps,
    };
  }

  constructor() {
    super();
    this.toasterRef = createRef();
    this.closeButtonRef = createRef();
    this.open = false;
    this.canRender = false;
    this.alertRef = createRef();
  }

  onClose() {
    this.open = false;
    window.setTimeout(() => {
      this.canRender = false;
    }, 300);
  }

  firstUpdated() {
    vl.toaster.dress(this.toasterRef.value);
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'open':
          if (this.open) {
            this.canRender = this.open;
          } else if (this.canRender) {
            // in lack of a close function from dv
            if (this.closeButtonRef.value) {
              this.closeButtonRef.value.click();
            } else {
              this.canRender = false;
            }
          }
          break;
        default:
          break;
      }
    });
  }

  render() {
    const classes = {
      'vl-toaster': true,
      'vl-toaster--top-right': this.position === 'top-right',
      'vl-toaster--top-left': this.position === 'top-left',
      'vl-toaster--bottom-right': this.position === 'bottom-right',
      'vl-toaster--bottom-left': this.position === 'bottom-left',
    };
    return html`<div ${ref(this.toasterRef)} class=${classMap(classes)}>${renderAlert(this)}</div> `;
  }
}

// data-vl-toaster-fadeout="true"

customElements.define('vl-toaster', VlToaster);
