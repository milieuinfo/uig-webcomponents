import { html } from 'lit-html';
import '../../../map';
import { docsIntro } from '../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-side-sheet',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'The map side sheet.',
        }),
      },
    },
  },
};

export const Default = () => html`
  <vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-side-sheet>
      <vl-map-side-sheet-menu>
        <vl-map-side-sheet-menu-item></vl-map-side-sheet-menu-item>
      </vl-map-side-sheet-menu>
    </vl-map-side-sheet>
  </vl-map>
`;
