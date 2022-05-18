import { html } from 'lit-html';
import '.';
import { docsIntro } from '../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-controls',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'Controls on the map component. Controls should be wrapped with the appropriate wrapper element.',
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

export const ControlOutsideOfMap = () => html`
  <div>
    <vl-toggle-button
      id="measure-button"
      @click=${() => {
        const measureAction = document.getElementById('measure-action');
        measureAction.active = !measureAction.active;
      }}
    >
      Meten
    </vl-toggle-button>
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer>
        <vl-map-measure-action id="measure-action"></vl-map-measure-action>
      </vl-map-features-layer>
    </vl-map>
  </div>
`;
