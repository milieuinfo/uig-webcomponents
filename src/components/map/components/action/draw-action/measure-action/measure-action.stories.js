import { html } from 'lit-html';
import '../../../../../map';
import { args, argTypes } from '../config';
import { docsIntro } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-measure-action',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'The map measure action component.',
        }),
      },
    },
  },
  args,
  argTypes,
};

export const Default = () => html`
  <vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
      <vl-map-measure-action data-vl-default-active></vl-map-measure-action>
    </vl-map-features-layer>
  </vl-map>
`;
