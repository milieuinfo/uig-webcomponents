import { html, LitElement, css, unsafeCSS } from 'lit';
import '../functional-header';
import '../grid';
import '../titles';
import '../introduction';
import '../typography';
import '../document';
import '../link';
import '../icon';
import '../contact-card';
import '../infoblock';
import '../properties';
import '../side-navigation';
import styles from './styles.scss';
import { body, contact, header, sideNavigation, title } from './templates';
import { conditionalLayout } from '../../templates';

export class VlPrivacy extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      version: { type: String, attribute: 'data-vl-version', reflect: true },
      date: { type: String, attribute: 'data-vl-date', reflect: true },
      isInConsent: { type: Boolean },
      withoutFunctionalHeader: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.version = '1.0.0';
    this.date = '3 maart 2021';
  }

  render() {
    const columnSize = this.isInConsent ? '12' : '8';

    return html`
      ${header(this.withoutFunctionalHeader)}
      <div>
        ${title(this.isInConsent, this.version, this.date)}
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
        ${contact(this.isInConsent)}
      </div>
    `;
  }
}

customElements.define('vl-privacy', VlPrivacy);
