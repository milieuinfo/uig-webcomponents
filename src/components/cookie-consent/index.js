/* eslint-disable consistent-return */
import { LitElement, css, html, unsafeCSS, nothing } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './styles.scss';
import '../form-grid';
import '../modal/new';
import '../checkbox';
import '../form-message';
import '../link';
import '../button';
import '../privacy';
import '../cookie-statement';
import { defaultOptIns, canModalOpen, submit, handleOptIns } from './utils';
import { VIEWS } from './enums';

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
    this.view = VIEWS.PRIVACY_STATEMENT;
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
    const showPrivacy = this.optIns.find(({ name }) => name === 'analytics');
    const getContent = () => {
      switch (this.view) {
        case VIEWS.COOKIE_CONSENT:
          return html`<div is="vl-form-grid" data-vl-is-stacked slot="content">
              <div is="vl-form-column">
                Departement Omgeving maakt op de websites waarvoor zij verantwoordelijk is gebruik van "cookies" en
                vergelijkbare internettechnieken. Cookies zijn kleine "tekstbestanden" die worden gebruikt om onze
                websites en apps beter te laten werken en jouw surfervaring te verbeteren. Zij kunnen worden opgeslagen
                in de context van de webbrowser(s) die je gebruikt bij het bezoeken van onze website(s).
              </div>
              <div is="vl-form-column">
                Er zijn verschillende soorten cookies, en deze hebben ook een verschillende doelstelling en
                geldigheidsduur. Een beperkt aantal cookies (essentiële cookies) zijn absoluut noodzakelijk, deze zijn
                altijd anoniem. Andere cookies dragen bij aan het gebruikscomfort, je hebt de keuze om deze al dan niet
                te aanvaarden.
              </div>
              <div is="vl-form-column">
                <button
                  is="vl-button-link"
                  @click=${() => {
                    this.view = VIEWS.COOKIE_STATEMENT;
                  }}
                  data-vl-inline
                >
                  Lees hier onze uitgebreide Cookieverklaring<span
                    is="vl-icon"
                    data-vl-icon="arrow-right-fat"
                    data-vl-after
                  ></span>
                </button>
              </div>
              ${showPrivacy
                ? html`<div is="vl-form-column">
                      Naast noodzakelijke cookies gebruikt deze website Matomo voor analyse en om uw gebruikerservaring
                      te verbeteren. Meer informatie vind u in onze privacyverklaring.
                    </div>
                    <div is="vl-form-column">
                      <button
                        is="vl-button-link"
                        @click=${() => {
                          this.view = VIEWS.PRIVACY_STATEMENT;
                        }}
                        data-vl-inline
                      >
                        Lees hier onze uitgebreide Privacyverklaring<span
                          is="vl-icon"
                          data-vl-icon="arrow-right-fat"
                          data-vl-after
                        ></span>
                      </button>
                    </div>`
                : nothing}
              <div is="vl-form-column">
                Deze website gebruikt enkel noodzakelijke cookies die nodig zijn om de functionaliteit van de website
                mogelijk te maken.
              </div>
              ${this.optIns.map(({ label, checked, mandatory, description, name }) =>
                label
                  ? html`<div is="vl-form-column" style="width: 100%">
                      <vl-checkbox
                        data-vl-label=${label}
                        ?data-vl-checked=${checked}
                        ?data-vl-disabled=${mandatory}
                        @change=${({ currentTarget }) => {
                          this.optIns = this.optIns.map((optIn) =>
                            optIn.name === name ? { ...optIn, checked: currentTarget.checked } : optIn,
                          );
                        }}
                      ></vl-checkbox>
                      ${description ? html`<p is="vl-form-annotation" data-vl-block>${description}</p>` : nothing}
                    </div>`
                  : nothing,
              )}
              <!-- <div is="vl-form-column">
                <button @click=${() => submit(this)} is="vl-button">
                  ${this.optIns.filter((optIn) => optIn.label).length > 0 ? 'Bewaar keuze' : 'Ik begrijp het'}
                </button>
              </div> -->
            </div>

            <button @click=${() => submit(this)} is="vl-button" slot="button">
              ${this.optIns.filter((optIn) => optIn.label).length > 0 ? 'Bewaar keuze' : 'Ik begrijp het'}
            </button>`;
        case VIEWS.COOKIE_STATEMENT:
          return html`<vl-cookie-statement
            data-vl-inline
            @vl-back=${() => {
              this.view = VIEWS.COOKIE_CONSENT;
            }}
            slot="content"
          ></vl-cookie-statement>`;

        case VIEWS.PRIVACY_STATEMENT:
          return html`<vl-privacy
            data-vl-inline
            @vl-back=${() => {
              this.view = VIEWS.COOKIE_CONSENT;
            }}
            slot="content"
          ></vl-privacy>`;

        default:
          break;
      }
    };

    return html`<new-modal
      data-vl-title="Cookie-informatie"
      data-vl-not-auto-closable
      data-vl-not-cancellable
      .hideAll=${this.view === VIEWS.COOKIE_STATEMENT || this.view === VIEWS.PRIVACY_STATEMENT}
      ${ref(this.modalRef)}
    >
      ${getContent()}
    </new-modal>`;
  }
}

customElements.define('vl-cookie-consent', VlCookieConsent);
