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

export const WithControl = () => html`
  <vl-map>
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

export const WithSeperateControl = ({ active }) => html`
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

WithSeperateControl.args = {
  active: false,
};

WithSeperateControl.argTypes = { active: { control: { disabled: false } } };
