import { html, nothing } from 'lit';
import { VIEWS } from '../../enums';

export const preferences = (reference) => html`<div slot="content">
  <vl-functional-header
    .backLinkEventListener=${(event) => {
      event.preventDefault();
      reference.view = VIEWS.COOKIE_CONSENT;
    }}
    data-vl-title="Projectnaam"
    data-vl-sub-title="Cookievoorkeuren"
    data-vl-link="https://omgeving.vlaanderen.be"
  ></vl-functional-header>
  <section is="vl-region">
    <div is="vl-layout" style="min-width: revert">
      <div is="vl-form-grid" data-vl-is-stacked>
        <div is="vl-form-column">
          <p>
            De cookie-toestemming die je geeft is van toepassing op meerdere websites, subsites en apps van Departement
            Omgeving. Je kunt op elk moment een eerdere toestemming intrekken of wijzigen.
          </p>
        </div>
        ${reference.optIns.map(({ label, checked, mandatory, description, name }) =>
          label
            ? html`<div is="vl-form-column" style="width: 100%">
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
              </div>`
            : nothing,
        )}
      </div>
    </div>
  </section>
</div>`;
