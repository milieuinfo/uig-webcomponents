import { html } from 'lit';
import { conditionalLayout } from '../conditionalLayout';

export const title = (isInConsent, version, date) => html`
  <section is="vl-region">
    ${conditionalLayout(
      isInConsent,
      html` <div is="vl-grid" data-vl-is-stacked>
        <div is="vl-column" data-vl-size="10">
          <h1 is="vl-h1" data-vl-no-space-bottom>Cookieverklaring</h1>
        </div>
        <div is="vl-column" data-vl-size="10">
          <p is="vl-introduction">
            <span>Versie</span> <span id="introduction-version">${version}</span> -
            <span>${date}</span>
          </p>
        </div>

        <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
          <vl-typography>
            <hr />
          </vl-typography>
        </div>
      </div>`,
    )}
  </section>
`;
