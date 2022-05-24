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
          intro:
            'The map measure action component. The measure action component should be wrapped in its own features layer without predefined features. A map should only contain one measure action and, if desired, one corresponding action control.',
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

export const WithSnapping = () => html`<vl-map>
  <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
  <vl-map-features-layer>
    <vl-map-measure-action data-vl-default-active data-vl-snapping>
      <vl-map-wfs-layer
        data-vl-name="Stromend waterlichamen"
        data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
        data-vl-layers="owl_l"
        data-vl-max-resolution="4"
      >
      </vl-map-wfs-layer>
    </vl-map-measure-action>
  </vl-map-features-layer>
</vl-map>`;

export const WithControl = ({ active }) =>
  html`
    <vl-map>
      <vl-map-action-controls>
        <vl-map-measure-control></vl-map-measure-control>
      </vl-map-action-controls>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer>
        <vl-map-measure-action .active=${active}></vl-map-measure-action>
      </vl-map-features-layer>
    </vl-map>
  `;

WithControl.args = {
  active: false,
};

WithControl.argTypes = { active: { control: { disabled: false } } };

export const WithControlOutsideOfMap = () => html`
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
