import { html } from 'lit-html';
import '../../../../../map';
import { argTypes } from '../../config';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-wfs-layer',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'This map layer allows to create a WFS layer.',
        }),
      },
    },
  },
  argTypes: {
    ...argTypes,
    url: {
      name: 'data-vl-url',
      type: { summary: TYPES.STRING },
      description: 'Determines the WMS url. Obligated.',
      control: { disable: true },
      table: { category: CATEGORIES.ATTRIBUTES },
    },
    layers: {
      name: 'data-vl-layers',
      type: { summary: TYPES.STRING },
      description: 'Determines the layers of the WMS. Obligated.',
      control: { disable: true },
      table: { category: CATEGORIES.ATTRIBUTES },
    },
  },
};
export const Default = () => html`
  <vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-wfs-layer
      data-vl-name="Oppervlaktewaterlichamen"
      data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
      data-vl-layers="owl_l"
      data-vl-max-resolution=${8}
    >
    </vl-map-wfs-layer>
  </vl-map>
`;
