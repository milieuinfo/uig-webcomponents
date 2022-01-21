/* eslint-disable consistent-return */
import { LitElement, css, html, unsafeCSS, nothing } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './styles.scss';
import '../form-grid';
import '../modal';
import '../checkbox';
import '../form-message';
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
    };
  }

  constructor() {
    super();
    this.modalRef = createRef();
    this.optIns = defaultOptIns;
    this.analytics = false;
  }

  firstUpdated() {
    if (canModalOpen(this.open)) {
      this.modalRef.value.open();
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
            this.modalRef.value.open();
          } else {
            this.modalRef.value.close();
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
    console.log(this.optIns);
    return html`<vl-modal
      data-vl-title="Cookie-toestemming"
      data-vl-not-auto-closable
      data-vl-not-cancellable
      ${ref(this.modalRef)}
    >
      <div is="vl-form-grid" data-vl-is-stacked slot="content">
        <div is="vl-form-column">
          Departement Omgeving maakt op de websites waarvoor zij verantwoordelijk is gebruik van "cookies" en
          vergelijkbare internettechnieken. Cookies zijn kleine "tekstbestanden" die worden gebruikt om onze websites en
          apps beter te laten werken en jouw surfervaring te verbeteren. Zij kunnen worden opgeslagen in de context van
          de webbrowser(s) die je gebruikt bij het bezoeken van onze website(s).
        </div>
        <div is="vl-form-column">
          Er zijn verschillende soorten cookies, en deze hebben ook een verschillende doelstelling en geldigheidsduur.
          Een beperkt aantal cookies (essenti&#235;le cookies) zijn absoluut noodzakelijk, deze zijn altijd anoniem.
          Andere cookies dragen bij aan het gebruikscomfort, je hebt de keuze om deze al dan niet te aanvaarden.
        </div>
        <div is="vl-form-column">
          Op
          <a href="https://www.omgevingvlaanderen.be/privacy" target="_blank"
            >https://www.omgevingvlaanderen.be/privacy</a
          >
          vind je meer informatie over de manier waarop Departement Omgeving omgaat met uw privacy:
          <ul>
            <li>ons privacybeleid, vertaald in de Privacyverklaring</li>
            <li>algemene informatie over de nieuwe Privacywet</li>
            <li>de contactgegevens van de functionaris voor gegevensbescherming of DPO</li>
          </ul>
        </div>
        <div is="vl-form-column">
          De cookie-toestemming die je geeft is van toepassing op meerdere websites, subsites en apps van Departement
          Omgeving. Welke dit zijn, vind je via de Privacyverklaring. Je kunt naderhand een eerdere toestemming
          intrekken of wijzigen.
        </div>
        ${this.analytics
          ? html` <div is="vl-form-column">
              Naast noodzakelijke cookies gebruikt deze website Matomo voor analyse en om uw gebruikerservaring te
              verbeteren. We verwerken daarvoor uw IP-adres. Deze gegevens worden enkel verwerkt door het Departement
              Omgeving en onze verwerkers. Meer informatie vind u in onze privacyverklaring (<a
                href="https://www.omgevingvlaanderen.be/privacy"
                target="_blank"
                >https://www.omgevingvlaanderen.be/privacy</a
              >).
            </div>`
          : nothing}
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
      <button @click=${() => submit(this)} is="vl-button" slot="button">
        ${this.optIns.filter((optIn) => optIn.label).length > 0 ? 'Bewaar keuze' : 'Ik begrijp het'}
      </button>
    </vl-modal>`;
  }
}

customElements.whenDefined('vl-modal').then(() => {
  customElements.define('vl-cookie-consent', VlCookieConsent);
});
