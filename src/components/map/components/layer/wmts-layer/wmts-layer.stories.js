import { html } from 'lit-html';
import '../../../../map';
import { argTypes } from '../config';
import { docsIntro } from '../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-wmts-layer',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'A WMTS (overlay) layer.',
        }),
      },
    },
  },
  argTypes,
};

export const Default = () => html`
  <vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-wmts-layer
      data-vl-url="https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts"
      data-vl-layer="grb_sel"
      data-vl-name="GRB Wegenkaart"
    >
    </vl-map-wmts-layer>
  </vl-map>
`;
