import { html } from 'lit-html';
import '../../../map';
import { docsIntro } from '../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-controls',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'Controls on the map component.',
        }),
      },
    },
  },
};

export const Default = () => html`
  <vl-map id="map">
    <vl-map-controls>
      <vl-map-measure-control></vl-map-measure-control>
      <vl-map-measure-control></vl-map-measure-control>
    </vl-map-controls>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
  </vl-map>
`;
