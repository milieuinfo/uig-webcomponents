import { html } from 'lit-html';
import '../../../../../map';
import { argTypes } from '../../config';
import { CATEGORIES, docsIntro, TYPES } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-wfs-layer',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'Deze kaartlaag staat toe om een WFS laag aan te maken.',
        }),
      },
    },
  },
  argTypes: {
    ...argTypes,
    url: {
      name: 'data-vl-url',
      type: { summary: TYPES.STRING },
      description: 'Attribuut bepaalt de WMS url. Verplicht.',
      control: { disable: true },
      table: { category: CATEGORIES.ATTRIBUTES },
    },
    layers: {
      name: 'data-vl-layers',
      type: { summary: TYPES.STRING },
      description: 'Attribuut bepaalt de layers van de WMS. Verplicht.',
      control: { disable: true },
      table: { category: CATEGORIES.ATTRIBUTES },
    },
  },
};
export const Default = () => html`
  <vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-wfs-layer
      data-vl-name="Oppervlaktewaterlichamen"
      data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
      data-vl-layers="owl_l"
      data-vl-max-resolution="8"
    >
    </vl-map-wfs-layer>
  </vl-map>
`;
