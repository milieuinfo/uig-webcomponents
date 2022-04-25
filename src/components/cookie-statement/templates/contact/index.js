import { html } from 'lit';
import { conditionalLayout } from '../../../../templates';

export const contact = (isInConsent) =>
  html`<section is="vl-region" ?data-vl-overlap=${!isInConsent}>
    ${conditionalLayout(
      isInConsent,
      html` <div is="vl-grid" data-vl-is-stacked>
        <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
          <vl-contact-card>
            <vl-infoblock slot="info" data-vl-type="contact">
              <h3 slot="title">Departement Omgeving</h3>
            </vl-infoblock>
            <vl-properties slot="properties">
              <dl is="vl-properties-list">
                <dt is="vl-property-term">Adres</dt>
                <dd is="vl-property-value">
                  Graaf de Ferrarisgebouw<br />Koning Albert II laan 20 (bus 8)<br />1000 Brussel, België
                </dd>
                <dt is="vl-property-term">Telefoon</dt>
                <dd is="vl-property-value">
                  <a is="vl-link" href="tel:02 553 80 11"
                    >02 553 80 11<span is="vl-icon" data-vl-icon="phone" data-vl-after></span
                  ></a>
                </dd>
                <dt is="vl-property-term">E-mail</dt>
                <dd is="vl-property-value">
                  <a is="vl-link" href="mailto:omgeving@vlaanderen.be"
                    >omgeving@vlaanderen.be<span is="vl-icon" data-vl-icon="mail" data-vl-after></span
                  ></a>
                </dd>
                <dt is="vl-property-term">Website</dt>
                <dd is="vl-property-value">
                  <a is="vl-link" href="https://omgeving.vlaanderen.be" target="_blank"
                    >https://omgeving.vlaanderen.be<span is="vl-icon" data-vl-icon="external" data-vl-after></span
                  ></a>
                </dd>
              </dl>
            </vl-properties>
          </vl-contact-card>
        </div>
      </div>`,
    )}
  </section>`;
