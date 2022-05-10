import { html } from 'lit-html';
import '../../../../../map';
import { args, argTypes } from '../config';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../../../.storybook/utils.js';

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
  argTypes: {
    ...argTypes,
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

export const WithControl = () => html`
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
