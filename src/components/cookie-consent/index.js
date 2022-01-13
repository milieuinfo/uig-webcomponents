/* eslint-disable consistent-return */
import { LitElement, css, html, unsafeCSS, nothing } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './styles.scss';
import '../form-grid';
import '../modal';
import '../checkbox';
import '../form-message';
import { defaultOptIns, canModalOpen, getNewOptIns, submit, handleFuntionalOptIn } from './utils';

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
      autoOpenDisabled: { type: Boolean, attribute: 'data-vl-auto-open-disabled', reflect: true },
      functionalOptInDisabled: { type: Boolean, attribute: 'data-vl-auto-opt-in-functional-disabled', reflect: true },
      owner: { type: String, attribute: 'data-vl-owner', reflect: true },
      link: { type: String, attribute: 'data-vl-link', reflect: true },
      open: { type: Boolean, attribute: 'data-vl-open', reflect: true },
      submit: { type: Function },
      optIns: { type: Array },
      extraOptIns: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.owner = 'Departement Omgeving';
    this.link = 'https://www.omgevingvlaanderen.be/privacy';
    this.modalRef = createRef();
    this.optIns = defaultOptIns;
    this.autoOpenDisabled = false;
    this.functionalOptInDisabled = false;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'extraOptIns':
          this.optIns = [...defaultOptIns, ...getNewOptIns(this.extraOptIns)];
          handleFuntionalOptIn(this);
          break;
        case 'functionalOptInDisabled':
          handleFuntionalOptIn(this);
          break;
        case 'autoOpenDisabled':
          if (canModalOpen(this.autoOpenDisabled)) {
            this.modalRef.value.open();
          }
          break;
        case 'open':
          if (this.open) {
            this.modalRef.value.open();
          } else {
            this.modalRef.value.close();
          }
          break;
        default:
          break;
      }
    });
  }

  render() {
    return html`<vl-modal
      data-vl-title="Cookie-toestemming"
      data-vl-not-auto-closable
      data-vl-not-cancellable
      ${ref(this.modalRef)}
    >
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
      <button @click=${() => submit(this)} is="vl-button" slot="button">
        ${this.optIns.length > defaultOptIns.length ? 'Bewaar keuze' : 'Ik begrijp het'}
      </button>
    </vl-modal>`;
  }
}

customElements.whenDefined('vl-modal').then(() => {
  customElements.define('vl-cookie-consent', VlCookieConsent);
});
