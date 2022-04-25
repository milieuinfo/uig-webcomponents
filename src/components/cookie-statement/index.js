import { LitElement, css, html, unsafeCSS } from 'lit';
import '../functional-header';
import '../grid';
import '../titles';
import '../introduction';
import '../typography';
import '../contact-card';
import '../infoblock';
import '../properties';
import '../link';
import '../icon';
import '../side-navigation';
import './components';
import styles from './styles.scss';
import { header, title, body, sideNavigation, contact } from './templates';
import { conditionalLayout } from '../../templates';

export class VlCookieStatement extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      extraCookies: { type: Array },
      version: { type: String, attribute: 'data-vl-version', reflect: true },
      date: { type: String, attribute: 'data-vl-date', reflect: true },
      isInConsent: { type: Boolean },
      cookies: { type: Array },
      isInContext: { type: Boolean },
      withoutFunctionalHeader: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.extraCookies = [];
    this.version = '1.0.0';
    this.date = '3 maart 2021';
  }

  render() {
    const columnSize = this.isInConsent ? '12' : '8';

    return html`${header(this.withoutFunctionalHeader)} ${title(this.isInConsent, this.version, this.date)}
      <section is="vl-region">
        ${conditionalLayout(
          this.isInConsent,
          html`<div is="vl-grid" data-vl-is-stacked>
            <div
              is="vl-column"
              data-vl-size=${columnSize}
              data-vl-medium-size=${columnSize}
              data-vl-small-size=${columnSize}
              data-vl-extra-small-size="12"
            >
              ${body(this)}
            </div>
            ${sideNavigation(this.isInConsent)}
          </div>`,
        )}
      </section>
      ${contact(this.isInConsent)} `;
  }
}

customElements.define('vl-cookie-statement', VlCookieStatement);
