import { html, nothing } from 'lit';
import { VIEWS } from '../../enums';
import { submit } from '../../utils';
import { fwColumn } from '../fullWidthColumn';

export const consent = (reference) => {
  const showPrivacy = reference.optIns.find(({ name }) => name === 'analytics');
  const { label, checked, mandatory } = reference.optIns.find(({ name }) => name === 'functional');

  return html`<div is="vl-grid" slot="content" data-vl-is-stacked-small>
      ${fwColumn(html`Departement Omgeving maakt op de websites waarvoor zij verantwoordelijk is gebruik van "cookies"
      en vergelijkbare internettechnieken. Cookies zijn kleine "tekstbestanden" die worden gebruikt om onze websites en
      apps beter te laten werken en jouw surfervaring te verbeteren. Zij kunnen worden opgeslagen in de context van de
      webbrowser(s) die je gebruikt bij het bezoeken van onze website(s).`)}
      ${fwColumn(html`Er zijn verschillende soorten cookies, en deze hebben ook een verschillende doelstelling en
      geldigheidsduur. Een beperkt aantal cookies (essentiële cookies) zijn absoluut noodzakelijk, deze zijn altijd
      anoniem. Andere cookies dragen bij aan het gebruikscomfort, je hebt de keuze om deze al dan niet te aanvaarden.`)}
      ${fwColumn(html`
        <button
          is="vl-button-link"
          @click=${() => {
            reference.view = VIEWS.COOKIE_STATEMENT;
          }}
          data-vl-inline
        >
          Lees hier onze uitgebreide Cookieverklaring<span
            is="vl-icon"
            data-vl-icon="arrow-right-fat"
            data-vl-after
          ></span>
        </button>
      `)}
      ${showPrivacy
        ? html` ${fwColumn(html` Naast noodzakelijke cookies gebruikt deze website Matomo voor analyse en om uw
          gebruikerservaring te verbeteren. Meer informatie vind u in onze privacyverklaring.`)}
          ${fwColumn(html` <button
            is="vl-button-link"
            @click=${() => {
              reference.view = VIEWS.PRIVACY_STATEMENT;
            }}
            data-vl-inline
          >
            Lees hier onze uitgebreide Privacyverklaring<span
              is="vl-icon"
              data-vl-icon="arrow-right-fat"
              data-vl-after
            ></span>
          </button>`)}`
        : nothing}
      ${reference.extraOptIns.length === 0
        ? html`${fwColumn(html`Deze website gebruikt enkel noodzakelijke cookies die nodig zijn om de functionaliteit
          van de website mogelijk te maken.`)}
          ${fwColumn(html` <vl-checkbox
            data-vl-label=${label}
            ?data-vl-checked=${checked}
            ?data-vl-disabled=${mandatory}
          ></vl-checkbox>`)} `
        : html`
            ${fwColumn(html`
              <button
                is="vl-button-link"
                @click=${() => {
                  reference.view = VIEWS.PREFERENCES;
                }}
                data-vl-inline
              >
                Cookievoorkeuren beheren<span is="vl-icon" data-vl-icon="arrow-right-fat" data-vl-after></span>
              </button>
            `)}
          `}
    </div>
    <div
      is="vl-action-group"
      slot="footer-content"
      data-vl-collapse-l
      data-vl-collapse-m
      data-vl-collapse-s
      data-vl-collapse-xs
    >
      ${reference.optIns.filter((optIn) => optIn.label).length > 1
        ? html`<button is="vl-button">Alle cookies aanvaarden</button>
            <button is="vl-button" data-vl-secondary>Enkel noodzakelijke cookies aanvaarden</button>`
        : html`<button is="vl-button">Ik begrijp het</button>`}
    </div>`;
};
