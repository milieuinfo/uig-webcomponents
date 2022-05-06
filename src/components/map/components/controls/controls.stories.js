import { html } from 'lit-html';
import '../../../map';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../.storybook/utils.js';

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
    <vl-map-controls>
      <vl-map-measure-control></vl-map-measure-control>
    </vl-map-controls>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
      <vl-map-measure-action></vl-map-measure-action>
    </vl-map-features-layer>
  </vl-map>
`;

// Get last measure action, because storybook can render multiple stories
const getMeasureAction = () => {
  const [lastItem] = [...document.querySelectorAll('vl-map-measure-action')].slice(-1);
  return lastItem;
};

export const SeperateControl = ({ active }) => html`
  <div>
    <vl-toggle-button
      id="measure-button"
      @click=${() => {
        const measureAction = getMeasureAction();
        measureAction.active = !measureAction.active;
      }}
      >Meten</vl-toggle-button
    >
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer>
        <vl-map-measure-action .active=${active}></vl-map-measure-action>
      </vl-map-features-layer>
    </vl-map>
  </div>
`;

SeperateControl.args = {
  active: false,
};

SeperateControl.argTypes = { active: { control: { disabled: false } } };
