/* eslint-disable consistent-return */
import { LitElement, css, html, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './styles.scss';
import '../form-grid';
import '../modal/new';
import '../checkbox';
import '../form-message';
import '../link';
import '../button';
import '../privacy';
import '../functional-header';
import { defaultOptIns, canModalOpen, handleOptIns } from './utils';
import { VIEWS } from './enums';
import { consent, preferences, privacy, statement } from './templates';

export class VlCookieConsent extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      analytics: { type: Boolean, attribute: 'data-vl-analytics', reflect: true },
      open: { type: Boolean },
      optIns: { type: Array },
      extraOptIns: {
        type: Array,
      },
      view: { type: Number },
    };
  }

  constructor() {
    super();
    this.modalRef = createRef();
    this.optIns = defaultOptIns;
    this.analytics = false;
    this.view = VIEWS.COOKIE_CONSENT;
  }

  firstUpdated() {
    if (canModalOpen(this.open)) {
      this.modalRef.value.open = true;
    }
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'extraOptIns':
          handleOptIns(this);
          break;
        case 'open':
          if (this.open) {
            this.modalRef.value.open = true;
          } else {
            this.modalRef.value.open = false;
          }
          break;
        case 'analytics':
          handleOptIns(this);
          break;
        default:
          break;
      }
    });
  }

  render() {
    const getContent = () => {
      switch (this.view) {
        case VIEWS.COOKIE_CONSENT:
          return consent(this);
        case VIEWS.COOKIE_STATEMENT:
          return statement(this);
        case VIEWS.PRIVACY_STATEMENT:
          return privacy(this);
        case VIEWS.PREFERENCES:
          return preferences(this);
        default:
          break;
      }
    };

    return html`<new-modal
      data-vl-title="Cookie-informatie"
      data-vl-not-auto-closable
      data-vl-not-cancellable
      .hideAll=${this.view !== VIEWS.COOKIE_CONSENT}
      ${ref(this.modalRef)}
    >
      ${getContent()}
    </new-modal>`;
  }
}

customElements.define('vl-cookie-consent', VlCookieConsent);

// @change=${({ currentTarget }) => {
//   this.optIns = this.optIns.map((optIn) =>
//     optIn.name === name ? { ...optIn, checked: currentTarget.checked } : optIn,
//   );
// }}

// ${description ? html`<p is="vl-form-annotation" data-vl-block>${description}</p>` : nothing}

// <div is="vl-form-column">
// <button @click=${() => submit(this)} is="vl-button">
//   ${this.optIns.filter((optIn) => optIn.label).length > 0 ? 'Bewaar keuze' : 'Ik begrijp het'}
// </button>
// </div>
