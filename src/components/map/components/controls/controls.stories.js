import { html } from 'lit-html';
import '.';
import { docsIntro } from '../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-action-controls',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'Action controls wrapper. All action controls should be defined in this wrapper.',
        }),
      },
    },
  },
};

export const Default = () => html`
  <vl-map>
    <vl-map-action-controls>
      <vl-map-measure-control></vl-map-measure-control>
    </vl-map-action-controls>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
      <vl-map-measure-action></vl-map-measure-action>
    </vl-map-features-layer>
  </vl-map>
`;
