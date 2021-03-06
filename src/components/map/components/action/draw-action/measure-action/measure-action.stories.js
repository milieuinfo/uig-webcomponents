import { html } from 'lit-html';
import '../../../../../map';
import { args, argTypes } from '../config';
import { docsIntro, getLastElement } from '../../../../../../../.storybook/utils.js';

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

export const Default = ({ active }) => html`
  <vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
      <vl-map-measure-action .active=${active}></vl-map-measure-action>
    </vl-map-features-layer>
  </vl-map>
`;

export const WithDefaultActive = () => html`<vl-map>
  <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
  <vl-map-features-layer>
    <vl-map-measure-action data-vl-default-active>
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

WithDefaultActive.argTypes = {
  active: {
    control: {
      disable: true,
    },
  },
};

export const WithSnapping = ({ active }) => html`<vl-map>
  <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
  <vl-map-features-layer>
    <vl-map-measure-action .active=${active} data-vl-snapping>
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

const getMeasureAction = () => getLastElement('vl-map-measure-action');

export const WithControlOutsideOfMap = ({ active }) => html`
  <div is="vl-grid" data-vl-is-stacked>
    <div is="vl-column">
      <vl-toggle-button
        @click=${() => {
          const measureAction = getMeasureAction();
          measureAction.active = !measureAction.active;
        }}
      >
        Meten
      </vl-toggle-button>
    </div>
    <div is="vl-column">
      <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
          <vl-map-measure-action .active=${active}></vl-map-measure-action>
        </vl-map-features-layer>
      </vl-map>
    </div>
  </div>
`;

WithControlOutsideOfMap.args = {
  active: false,
};
