import { html, nothing } from 'lit';
import { fwColumn } from '../fullWidthColumn';
import { submit } from '../../utils';
import { backButton } from '../backButton';

export const preferences = (reference) => html`<div slot="content">
    <div is="vl-grid" data-vl-is-stacked-small>
      ${reference.fromPreferencesButton ? nothing : fwColumn(backButton(reference))}
      <h2 is="vl-h2">Cookievoorkeuren</h2>
      ${fwColumn(html`<p>
        De cookie-toestemming die je geeft is van toepassing op meerdere websites, subsites en apps van Departement
        Omgeving. Je kunt op elk moment een eerdere toestemming intrekken of wijzigen.
      </p>`)}
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
  <button style="margin-top: 1rem" is="vl-button" slot="button" @click=${() => submit(reference)}>
    Bewaar mijn keuze
  </button> `;
