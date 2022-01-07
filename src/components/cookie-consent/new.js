/* eslint-disable consistent-return */
import { LitElement, css, html, unsafeCSS, nothing } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './styles.scss';
import '../form-grid';
import { analytics as matomo } from './analytics.js';
import { defaultOptIns, canModalOpen, functionalOptIn, submitCookies, resetCookies, getNewOptIns } from './utils';

export class VlCookieConsentNew extends LitElement {
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
      autoOpenDisabled: { type: Boolean, attribute: 'data-vl-auto-open-disabled', reflect: true },
      functionalOptInDisabled: { type: Boolean, attribute: 'data-vl-auto-opt-in-functional-disabled', reflect: true },
      owner: { type: String, attribute: 'data-vl-owner', reflect: true },
      link: { type: String, attribute: 'data-vl-link', reflect: true },
      submit: { type: Function },
      open: { type: Function },
      reset: { type: Function },
      optIns: { type: Array },
      extraOptIns: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.modalRef = createRef();
    this.analytics = false;
    this.functionalOptInDisabled = false;
    this.autoOpenDisabled = false;
    this.optIns = defaultOptIns;
    this.open = () => this.modalRef.value.open();
    this.submit = () => {
      const submittedCookies = submitCookies(this.optIns);
      this.dispatchEvent(
        new CustomEvent('vl-submitted', {
          bubbles: true,
          composed: true,
          detail: submittedCookies,
        }),
      );
      this.modalRef.value.close();
    };
    this.reset = () => {
      const resettedCookies = resetCookies(this.optIns);
      this.dispatchEvent(
        new CustomEvent('vl-reset', {
          bubbles: true,
          composed: true,
          detail: resettedCookies,
        }),
      );
    };
    this._addFunctionalOptIn = () => {
      if (!this.optIns.find((optIn) => optIn.name === functionalOptIn.name)) {
        this.optIns = [functionalOptIn, ...this.optIns];
      }
    };
    this._filterFunctionalOptIn = () => {
      this.optIns = this.optIns.filter((optIn) => optIn.name !== functionalOptIn.name);
    };
    this._handleFunctionalOptIn = () => {
      if (this.functionalOptInDisabled) {
        this._filterFunctionalOptIn();
      } else {
        this._addFunctionalOptIn();
      }
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'extraOptIns':
          this.optIns = [...defaultOptIns, ...getNewOptIns(this.extraOptIns)];
          this._handleFunctionalOptIn();
          break;
        case 'functionalOptInDisabled':
          this._handleFunctionalOptIn();
          break;
        case 'autoOpenDisabled':
          if (canModalOpen(this.autoOpenDisabled)) {
            this.modalRef.value.open();
          }
          break;
        case 'analytics':
          if (this.analytics) {
            if (!this.functionalOptInDisabled) {
              if (!document.getElementById(matomo.scriptId)) {
                console.log(matomo.script);
                document.head.appendChild(matomo.script);
              }
            } else {
              console.error(
                'analytics kunnen alleen toegevoegd worden wanneer de functionele cookies opt-in geactiveerd werd!',
              );
            }
          }
          break;
        default:
          break;
      }
    });
  }

  render() {
    return html`<vl-modal data-vl-title="Cookie-toestemming" data-vl-not-cancellable ${ref(this.modalRef)}>
      <div is="vl-form-grid" data-vl-is-stacked slot="content">
        <div is="vl-form-column">
          ${this.owner} maakt op de websites waarvoor zij verantwoordelijk is gebruik van "cookies" en vergelijkbare
          internettechnieken. Cookies zijn kleine "tekstbestanden" die worden gebruikt om onze websites en apps beter te
          laten werken en jouw surfervaring te verbeteren. Zij kunnen worden opgeslagen in de context van de
          webbrowser(s) die je gebruikt bij het bezoeken van onze website(s).
        </div>
        <div is="vl-form-column">
          Er zijn verschillende soorten cookies, en deze hebben ook een verschillende doelstelling en geldigheidsduur.
          Een beperkt aantal cookies (essenti&#235;le cookies) zijn absoluut noodzakelijk, deze zijn altijd anoniem.
          Andere cookies dragen bij aan het gebruikscomfort, je hebt de keuze om deze al dan niet te aanvaarden.
        </div>
        <div is="vl-form-column">
          Op
          <a id="link" href=${this.link} target="_blank">${this.link}</a>
          vind je meer informatie over de manier waarop ${this.owner} omgaat met uw privacy:
          <ul>
            <li>ons privacybeleid, vertaald in de Privacyverklaring</li>
            <li>algemene informatie over de nieuwe Privacywet</li>
            <li>de contactgegevens van de functionaris voor gegevensbescherming of DPO</li>
          </ul>
        </div>
        <div is="vl-form-column">
          De cookie-toestemming die je geeft is van toepassing op meerdere websites, subsites en apps van ${this.owner}.
          Welke dit zijn, vind je via de Privacyverklaring. Je kunt naderhand een eerdere toestemming intrekken of
          wijzigen.
        </div>
        <div is="vl-form-column">
          Naast noodzakelijke cookies gebruikt deze website Matomo voor analyse en om uw gebruikerservaring te
          verbeteren. We verwerken daarvoor uw IP-adres. Deze gegevens worden enkel verwerkt door het Departement
          Omgeving en onze verwerkers. Meer informatie vind u in onze privacyverklaring
          (https://omgeving.vlaanderen.be/privacy).
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
      </div>
      <button @click=${() => this.submit()} is="vl-button" slot="button">
        ${this.optIns.length > defaultOptIns.length ? 'Bewaar keuze' : 'Ik begrijp het'}
      </button>
    </vl-modal>`;
  }
}

customElements.whenDefined('vl-modal').then(() => {
  customElements.define('vl-cookie-consent-new', VlCookieConsentNew);
});
