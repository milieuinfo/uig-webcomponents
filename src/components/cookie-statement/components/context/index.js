import { html, LitElement } from 'lit';
import { VIEWS } from '../../../cookie-consent/enums';

export class VlCookieStatementContext extends LitElement {
  static get properties() {
    return {
      consent: {},
      statement: {},
      extraCookies: { type: Array },
    };
  }

  query(selector) {
    return this.querySelector(selector);
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'statement':
          if (this.statement) {
            this.statement.isInContext = true;
            if (this.extraCookies) {
              this.statement.extraCookies = this.extraCookies;
            }
          }
          break;
        case 'consent':
          if (this.consent && this.extraCookies) {
            this.consent.extraCookies = this.extraCookies;
          }
          break;
        default:
          break;
      }
    });
  }

  render() {
    return html`<slot
      @slotchange=${() => {
        this.consent = this.query('vl-cookie-consent');
        this.statement = this.query('vl-cookie-statement');
      }}
      @vl-click-preferences-button=${() => {
        this.consent.fromPreferencesButton = true;
        this.consent.open = true;
        this.consent.view = VIEWS.PREFERENCES;
      }}
      @vl-submitted=${() => {
        this.consent.open = false;
      }}
      @vl-auto-opened=${() => {
        this.consent.fromPreferencesButton = false;
      }}
    ></slot>`;
  }
}
customElements.define('vl-cookie-statement-context', VlCookieStatementContext);
