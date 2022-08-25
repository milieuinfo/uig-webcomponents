import { html } from 'lit-html';
import '../../index.js';
import { ifDefined } from 'lit-html/directives/if-defined';
import { docsIntro } from '../../../../../.storybook/utils.js';
import { LEGEND_PLACEMENT } from './enums/index.js';
import { argTypes } from './config/index.js';

export default {
  title: 'custom-elements/vl-map/vl-map-legend/vl-map-legend-multi-features-layer',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro:
            'De kaart legende voor kaart met meerdere vl-map-features-layers met een vl-map-layer-style per vl-map-features-layer.',
        }),
      },
    },
  },
  args: {
    placement: LEGEND_PLACEMENT.TOP_LEFT,
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  },
  argTypes: {
    ...argTypes,
  },
};

export const Default = (props) => {
  const features1 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [147055.0, 197908.0],
        },
      },
    ],
  };

  const features2 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [141000.0, 200908.0],
        },
      },
    ],
  };
  return html`<vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer .features=${features1} data-vl-name="Openbare onderzoeken laag">
      <vl-map-layer-circle-style
        data-vl-color="#ffe615"
        data-vl-size="5"
        data-vl-border-color="#000"
        data-vl-border-size="1"
      ></vl-map-layer-circle-style>
      <vl-map-measure-action></vl-map-measure-action>
    </vl-map-features-layer>
    <vl-map-features-layer .features=${features2} data-vl-name="Beslissingen laag">
      <vl-map-layer-circle-style
        data-vl-legend-text="Beslissing"
        data-vl-color="red"
        data-vl-size="5"
        data-vl-border-color="#000"
        data-vl-border-size="1"
      ></vl-map-layer-circle-style>
      <vl-map-measure-action></vl-map-measure-action>
    </vl-map-features-layer>
    <vl-map-action-controls>
      <vl-map-measure-control></vl-map-measure-control>
    </vl-map-action-controls>
    <vl-map-legend
      data-vl-placement="${props.placement}"
      top="${ifDefined(props.top)}"
      right="${ifDefined(props.right)}"
      bottom="${ifDefined(props.bottom)}"
      left="${ifDefined(props.left)}"
    ></vl-map-legend>
  </vl-map>`;
};
