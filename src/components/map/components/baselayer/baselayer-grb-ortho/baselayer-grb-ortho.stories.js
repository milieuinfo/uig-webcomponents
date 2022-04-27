import { html } from 'lit-html';
import { args, argTypes } from '../config.js';
import '../../../../map';
import { docsIntro } from '../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-baselayer-grb-ortho',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'De kaart basis laag component voor GRB ortho.',
        }),
      },
    },
  },
  args,
  argTypes,
};

export const Default = () => html`
  <vl-map>
    <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
  </vl-map>
`;
