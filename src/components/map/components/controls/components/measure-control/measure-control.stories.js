import { html } from 'lit-html';
import '../../../map';
import { docsIntro } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-controls/vl-measure-control',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro:
            'Measure control on the map component to activate or deactivate the measure action. A map should only contain one measure action control and one measure action.',
        }),
      },
    },
  },
};

export const Default = () =>
  html`
    <vl-map id="map">
      <vl-map-action-controls>
        <vl-map-measure-control></vl-map-measure-control>
      </vl-map-action-controls>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer>
        <vl-map-measure-action></vl-map-measure-action>
      </vl-map-features-layer>
    </vl-map>
  `;
