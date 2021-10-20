import { LitElement, css, html, unsafeCSS, nothing } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './styles.scss';
import '../form-grid';
import { analytics } from './analytics.js';

const attributes = {
  vlAnalytics: 'data-vl-analytics',
  autoOpenDisabled: 'data-vl-auto-open-disabled',
  functionalOptInDisabled: 'data-vl-auto-opt-in-functional-disabled',
  owner: 'data-vl-owner',
  link: 'data-vl-link',
};

const events = { submitted: 'vl-submitted', reset: 'vl-reset' };

const { vlAnalytics, autoOpenDisabled, functionalOptInDisabled, owner, link } = attributes;
const { submitted, reset } = events;

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
      [vlAnalytics]: { type: Boolean },
      [autoOpenDisabled]: { type: Boolean },
      [functionalOptInDisabled]: { type: Boolean },
      [owner]: { type: String },
      [link]: { type: String },
      submit: { type: Function },
      open: { type: Function },
      reset: { type: Function },
      optIns: { type: Array },
      extraOptIns: {
        type: Array,
      },
    };
  }

  _defaultOptIns() {
    return [
      {
        name: 'functional',
        label: 'Noodzakelijke cookies toestaan (verplicht)',
        checked: true,
        mandatory: true,
        description:
          'Noodzakelijke cookies helpen een website bruikbaarder te maken, door basisfuncties als paginanavigatie en toegang tot beveiligde gedeelten van de website mogelijk te maken. Zonder deze cookies kan de website niet naar behoren werken.',
      },
      { name: 'cookie-consent', checked: true, mandatory: true },
      { name: 'cookie-consent-date', checked: true, mandatory: true, value: new Date().getTime() },
    ];
  }

  constructor() {
    super();
    this.optIns = this._defaultOptIns();
    this[vlAnalytics] = false;
    this[functionalOptInDisabled] = false;
    this[autoOpenDisabled] = false;
    this.open = () => this.modalRef.value.open();
    this.submit = () => {
      const submittedCookies = this.optIns.map(({ checked, name, value }) => {
        const cookieName = this._getCookieName(name);
        const cookieValue = value || checked || false;
        document.cookie = `${cookieName}=${cookieValue};Max-Age=2147483647;path=/;SameSite=Strict;`;
        return { name: cookieName, value: cookieValue };
      });
      this.dispatchEvent(
        new CustomEvent(submitted, {
          bubbles: true,
          composed: true,
          detail: submittedCookies,
        }),
      );
      this.modalRef.value.close();
    };
    this.reset = () => {
      const resetCookies = this.optIns.map(({ name }) => {
        const cookieName = this._getCookieName(name);
        document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
        return { name: cookieName };
      });
      this.dispatchEvent(
        new CustomEvent(reset, {
          bubbles: true,
          composed: true,
          detail: resetCookies,
        }),
      );
    };
    this.isOptInChecked = (name) => {
      const optIn = this.optIns.find((optIn) => optIn.name === name);
      return optIn ? optIn.checked : false;
    };
  }

  modalRef = createRef();

  _getCookieName(name) {
    return `vl-cookie-consent-${name}`;
  }

  _getCookie(name) {
    name = `${this._getCookieName(name)}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        try {
          return JSON.parse(cookie.substring(name.length, cookie.length));
        } catch (error) {
          return cookie.substring(name.length, cookie.length);
        }
      }
    }
  }

  _addFunctionalOptIn() {
    if (!this.optIns.find((optIn) => optIn.name === 'functional')) {
      this.optIns = [
        {
          name: 'functional',
          label: 'Noodzakelijke cookies toestaan (verplicht)',
          checked: true,
          mandatory: true,
          description:
            'Noodzakelijke cookies helpen een website bruikbaarder te maken, door basisfuncties als paginanavigatie en toegang tot beveiligde gedeelten van de website mogelijk te maken. Zonder deze cookies kan de website niet naar behoren werken.',
        },
        ...this.optIns,
      ];
    }
  }

  _filterFunctionalOptIn() {
    this.optIns = this.optIns.filter((optIn) => optIn.name !== 'functional');
  }

  _handleFunctionalOptIn() {
    this[functionalOptInDisabled] ? this._filterFunctionalOptIn() : this._addFunctionalOptIn();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'extraOptIns':
          const newOptIns = this.extraOptIns.map((optIn) => {
            return { ...optIn, checked: optIn.defaultChecked || optIn.mandatory || false };
          });
          this.optIns = [...this._defaultOptIns(), ...newOptIns];
          this._handleFunctionalOptIn();
          break;
        case functionalOptInDisabled:
          this._handleFunctionalOptIn();
          break;
        case autoOpenDisabled:
          const hasConsentCookie = this._getCookie('cookie-consent');
          const consentDateCookie = this._getCookie('cookie-consent-date');
          const isConsentDateCookieValid =
            !isNaN(consentDateCookie) && new Date(consentDateCookie) > new Date('2019/05/14');
          if (
            !this[autoOpenDisabled] &&
            (!hasConsentCookie || consentDateCookie === undefined || !isConsentDateCookieValid)
          ) {
            this.modalRef.value.open();
          }
        case vlAnalytics:
          if (this[vlAnalytics]) {
            if (!this[functionalOptInDisabled]) {
              if (!document.getElementById(analytics.scriptId)) {
                console.log(analytics.script);
                document.head.appendChild(analytics.script);
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
          ${this[owner]} maakt op de websites waarvoor zij verantwoordelijk is gebruik van "cookies" en vergelijkbare
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
          <a id="link" href=${this[link]} target="_blank">${this[link]}</a>
          vind je meer informatie over de manier waarop ${this[owner]} omgaat met uw privacy:
          <ul>
            <li>ons privacybeleid, vertaald in de Privacyverklaring</li>
            <li>algemene informatie over de nieuwe Privacywet</li>
            <li>de contactgegevens van de functionaris voor gegevensbescherming of DPO</li>
          </ul>
        </div>
        <div is="vl-form-column">
          De cookie-toestemming die je geeft is van toepassing op meerdere websites, subsites en apps van
          ${this[owner]}. Welke dit zijn, vind je via de Privacyverklaring. Je kunt naderhand een eerdere toestemming
          intrekken of wijzigen.
        </div>
        ${this.optIns.map(({ label, checked, mandatory, description, name }) =>
          label
            ? html`<div is="vl-form-column" style="width: 100%">
                <vl-checkbox
                  data-vl-label=${label}
                  ?data-vl-checked=${checked}
                  ?data-vl-disabled=${mandatory}
                  @change=${({ currentTarget }) =>
                    (this.optIns = this.optIns.map((optIn) =>
                      optIn.name === name ? { ...optIn, checked: currentTarget.checked } : optIn,
                    ))}
                ></vl-checkbox>
                ${description ? html`<p is="vl-form-annotation" data-vl-block>${description}</p>` : nothing}
              </div>`
            : nothing,
        )}
      </div>
      <button @click=${() => this.submit()} is="vl-button" slot="button">
        ${this.optIns.length ? 'Bewaar keuze' : 'Ik begrijp het'}
      </button>
    </vl-modal>`;
  }
}

customElements.whenDefined('vl-modal').then(() => {
  customElements.define('vl-cookie-consent-new', VlCookieConsentNew);
});
