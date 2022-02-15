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
      phase: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.modalRef = createRef();
    this.optIns = defaultOptIns;
    this.analytics = false;
    this.phase = 2;
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
    return html`<new-modal
      data-vl-title="Cookie-informatie"
      data-vl-not-auto-closable
      data-vl-not-cancellable
      .hideAll=${this.phase === 2}
      ${ref(this.modalRef)}
    >
      ${this.phase === 1 &&
      html`<div is="vl-form-grid" data-vl-is-stacked slot="content">
          <div is="vl-form-column">
            Departement Omgeving maakt op de websites waarvoor zij verantwoordelijk is gebruik van "cookies" en
            vergelijkbare internettechnieken. Cookies zijn kleine "tekstbestanden" die worden gebruikt om onze websites
            en apps beter te laten werken en jouw surfervaring te verbeteren. Zij kunnen worden opgeslagen in de context
            van de webbrowser(s) die je gebruikt bij het bezoeken van onze website(s).
          </div>
          <div is="vl-form-column">
            Er zijn verschillende soorten cookies, en deze hebben ook een verschillende doelstelling en geldigheidsduur.
            Een beperkt aantal cookies (essentiële cookies) zijn absoluut noodzakelijk, deze zijn altijd anoniem. Andere
            cookies dragen bij aan het gebruikscomfort, je hebt de keuze om deze al dan niet te aanvaarden.
          </div>
          <div is="vl-form-column">
            <button
              is="vl-button-link"
              @click=${() => {
                this.phase = 2;
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
          <div is="vl-form-column">
            Deze website gebruikt enkel noodzakelijke cookies die nodig zijn om de functionaliteit van de website
            mogelijk te maken.
          </div>

          <!-- ${this.analytics
            ? html` <div is="vl-form-column">
                Naast noodzakelijke cookies gebruikt deze website Matomo voor analyse en om uw gebruikerservaring te
                verbeteren. We verwerken daarvoor uw IP-adres. Deze gegevens worden enkel verwerkt door het Departement
                Omgeving en onze verwerkers. Meer informatie vind u in onze privacyverklaring (<a
                  href="https://www.omgevingvlaanderen.be/privacy"
                  target="_blank"
                  >https://www.omgevingvlaanderen.be/privacy</a
                >).
              </div>`
            : nothing} -->
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
        </button>`}
      ${this.phase === 2
        ? html`<vl-cookie-statement
            data-vl-inline
            @vl-back=${() => {
              this.phase = 1;
            }}
            slot="content"
          ></vl-cookie-statement>`
        : nothing}
    </new-modal>`;
  }
}

// customElements.whenDefined('vl-modal').then(() => {
customElements.define('vl-cookie-consent', VlCookieConsent);
// });
