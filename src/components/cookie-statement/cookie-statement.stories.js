import { html } from 'lit-html';
import '../cookie-statement';
import './components/cookie';
import '../cookie-consent';
import { CATEGORIES } from '../../../.storybook/utils';
import './components/context';

export default {
  title: 'custom-elements/vl-cookie-statement',
  parameters: {
    layout: 'fullscreen',
    controls: { hideNoControlsWarning: true },
  },
  args: {
    extraCookies: [],
  },
  argTypes: {
    extraCookies: {
      description: 'Test',
      table: {
        category: CATEGORIES.PROPERTIES,
      },
    },
  },
};

export const Default = ({ extraCookies }) =>
  html` <vl-cookie-statement .extraCookies=${extraCookies}></vl-cookie-statement>`;

export const WithExtraCookies = ({ extraCookies }) =>
  html`<vl-cookie-statement .extraCookies=${extraCookies}></vl-cookie-statement>`;

WithExtraCookies.args = {
  extraCookies: [
    {
      title: 'Bestellen publicaties Vlaamse overheid',
      names: [
        'SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)',
        'DDASS* (vb. “SSESS8d910012bf0d5f60012be2880f590bf0”)',
      ],
      purpose:
        'Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces.',
      domain: 'publicaties.vlaanderen.be',
      processor: 'Vlaamse overheid',
      validity: 'Permanente cookie met een geldigheid van 3 weken',
    },
  ],
};

export const WithSlots = () => html`<vl-cookie-statement>
  <vl-cookie
    data-vl-title="Bestellen publicaties Vlaamse overheid"
    .names=${['SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)']}
    data-vl-purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."
    data-vl-domain="publicaties.vlaanderen.be"
    data-vl-processor="Vlaamse overheid"
    data-vl-validity="Permanente cookie met een geldigheid van 3 weken"
  >
  </vl-cookie>
</vl-cookie-statement>`;
