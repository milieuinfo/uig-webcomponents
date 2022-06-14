import { html } from 'lit-html';
import '../../../../../map';
import { args, argTypes } from '../config';
import { docsIntro } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-draw-polygon-action',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'The map polygon draw action component.',
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
      <vl-map-draw-polygon-action .active=${active}></vl-map-draw-polygon-action>
    </vl-map-features-layer>
  </vl-map>
`;

export const WithDefaultActive = () => html`
  <vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
      <vl-map-draw-polygon-action data-vl-default-active></vl-map-draw-polygon-action>
    </vl-map-features-layer>
  </vl-map>
`;

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
    <vl-map-draw-polygon-action .active=${active} data-vl-snapping>
      <vl-map-wfs-layer
        data-vl-name="Stromend waterlichamen"
        data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
        data-vl-layers="owl_l"
        data-vl-max-resolution="4"
      >
      </vl-map-wfs-layer>
    </vl-map-draw-polygon-action>
  </vl-map-features-layer>
</vl-map>`;
