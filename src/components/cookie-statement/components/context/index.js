import { html, LitElement } from 'lit';
import { VIEWS } from '../../../cookie-consent/enums';

export class VlCookieStatementContext extends LitElement {
  static get properties() {
    return {
      consent: {},
      statement: {},
    };
  }

  query(selector) {
    return this.querySelector(selector);
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'consent':
          // this.consent.extraCookies = this.extraCookies;
          break;
        case 'statement':
          // this.statement.extraCookies = this.extraCookies;
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
        this.consent.open = true;
        this.consent.view = VIEWS.PREFERENCES;
      }}
    ></slot>`;
  }
}
customElements.define('vl-cookie-statement-context', VlCookieStatementContext);
