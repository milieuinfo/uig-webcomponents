import { html } from 'lit-html';
import '../../../map';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-controls/vl-measure-control',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'Measure control on the map component to activate or deactivate the measure action.',
        }),
      },
    },
  },
  args: { active: undefined },
  argTypes: {
    active: {
      name: 'active',
      description: 'Controls the active state of the measure action.',
      table: {
        type: {
          summary: TYPES.BOOLEAN,
        },
        category: CATEGORIES.PROPERTIES,
      },
      control: { disabled: true },
    },
  },
};

export const Default = () => html`
  <vl-map id="map">
    <vl-map-action-controls>
      <vl-map-measure-control></vl-map-measure-control>
    </vl-map-action-controls>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
      <vl-map-select-action data-vl-default-active></vl-map-select-action>
      <vl-map-measure-action></vl-map-measure-action>
    </vl-map-features-layer>
  </vl-map>
  <script>
    const map = document.getElementById('map');
    map.addEventListener('action-activated', () => {
      console.log('action-activated');
    });
    map.addEventListener('action-deactivated', () => {
      console.log('action-deactivated');
    });
  </script>
`;
