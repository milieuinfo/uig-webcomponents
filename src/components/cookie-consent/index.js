import { LitElement, css, html, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './styles.scss';
import '../../legacy/modal';
import '../form-grid';
import '../checkbox';
import '../form-message';
import '../link';
import '../button';
import '../privacy';
import '../functional-header';
import '../action-group';
import { defaultOptIns, canModalOpen, handleOptIns, getActiveCookies } from './utils';
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
      extraCookies: {
        type: Array,
      },
      view: { type: Number },
      projectName: { type: String, attribute: 'data-vl-project-name', reflect: true },
      fromPreferencesButton: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.extraCookies = [];
    this.extraOptIns = [];
    this.modalRef = createRef();
    this.dialogRef = createRef();
    this.optIns = defaultOptIns;
    this.analytics = false;
    this.view = VIEWS.COOKIE_CONSENT;
  }

  firstUpdated() {
    if (canModalOpen(this.open)) {
      this.dispatchEvent(
        new CustomEvent('vl-auto-opened', {
          bubbles: true,
        }),
      );
      this.open = true;
    }

    // workarounds until modal is migrated iso legacy component
    this.dialogRef.value = this.modalRef.value.shadowRoot.querySelector('dialog');
    this.dialogRef.value.classList.add('vl-modal-dialog--large');
    this.dialogRef.value.querySelector('#modal-action-group').style = 'margin-top: -1rem';
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'extraOptIns':
          handleOptIns(this);
          break;
        case 'open':
          if (this.open) {
            // compare current cookies from browser everytime the consent opens
            this.optIns = this.optIns.map((optIn) => {
              const matchedOptIn = getActiveCookies().find((activeCookie) => activeCookie.name === optIn.name);
              return matchedOptIn ? { ...optIn, checked: matchedOptIn.value === 'true' } : optIn;
            });
            this.modalRef.value.open();
            this.dispatchEvent(
              new CustomEvent('vl-opened', {
                bubbles: true,
              }),
            );
          } else if (oldValue === true) {
            this.modalRef.value.close();
            this.dispatchEvent(
              new CustomEvent('vl-closed', {
                bubbles: true,
              }),
            );
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
          return null;
      }
    };

    const getTitle = () => {
      if (this.view === VIEWS.COOKIE_CONSENT) {
        return 'Cookie-informatie';
      }
      return null;
    };

    return html`<vl-modal
      data-vl-title=${ifDefined(getTitle())}
      data-vl-not-cancellable
      data-vl-not-auto-closable
      ${ref(this.modalRef)}
    >
      ${getContent()}
    </vl-modal>`;
  }
}

customElements.define('vl-cookie-consent', VlCookieConsent);
