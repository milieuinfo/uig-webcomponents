import { html, nothing } from 'lit';
import { VIEWS } from '../../enums';
import { fwColumn } from '../fullWidthColumn';
import { submit, getAllCookies } from '../../utils';

export const preferences = (reference) => {
  const activeCookiesObject = getAllCookies().map((cookie) => {
    const cookieWithoutPrefix = cookie.split('vl-cookie-consent-').pop();
    const [name, value] = cookieWithoutPrefix.split('=');
    return { name, value };
  });

  const getCalc = () =>
    reference.optIns.map((optIn) => {
      const matchedOptIn = activeCookiesObject.find((activeCookie) => activeCookie.name === optIn.name);
      if (matchedOptIn) {
        return { ...optIn, checked: matchedOptIn.value === 'true' };
      }
      return optIn;
    });

  reference.optIns = getCalc();

  console.log({ activeCookiesObject, optIns: reference.optIns });

  return html`<div slot="content">
      ${reference.isInContext
        ? nothing
        : html` <vl-functional-header
            .backLinkEventListener=${(event) => {
              event.preventDefault();
              reference.view = VIEWS.COOKIE_CONSENT;
            }}
            data-vl-title=${reference.projectName}
            data-vl-sub-title="Cookievoorkeuren"
            data-vl-link="https://omgeving.vlaanderen.be"
            .inModal=${true}
          ></vl-functional-header>`}
      <div is="vl-grid" data-vl-is-stacked-small>
        ${fwColumn(html` De cookie-toestemming die je geeft is van toepassing op meerdere websites, subsites en apps van
        Departement Omgeving. Je kunt op elk moment een eerdere toestemming intrekken of wijzigen.`)}
        ${reference.optIns.map(({ label, checked, mandatory, description, name }) =>
          label
            ? html`${fwColumn(html`
                <vl-checkbox
                  data-vl-label=${label}
                  ?data-vl-checked=${checked}
                  ?data-vl-disabled=${mandatory}
                  @change=${({ currentTarget }) => {
                    reference.optIns = reference.optIns.map((optIn) =>
                      optIn.name === name ? { ...optIn, checked: currentTarget.checked } : optIn,
                    );
                  }}
                ></vl-checkbox>
                ${description ? html`<p is="vl-form-annotation" data-vl-block>${description}</p>` : nothing}
              `)}`
            : nothing,
        )}
      </div>
    </div>
    <button is="vl-button" slot="button" @click=${() => submit(reference)}>Bewaar mijn keuze</button> `;
};
