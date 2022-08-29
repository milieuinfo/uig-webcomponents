import { html } from 'lit-html';
import '../../index.js';
import { ifDefined } from 'lit-html/directives/if-defined';
import { argTypes } from './config/index.js';
import { docsIntro } from '../../../../../.storybook/utils.js';
import { LEGEND_PLACEMENT } from './enums/index.js';

export default {
  title: 'custom-elements/vl-map/vl-map-legend/vl-map-legend-single-features-layer-with-single-style',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'De kaart legende voor kaart met één vl-map-features-layer met één vl-map-layer-style.',
        }),
      },
    },
  },
  args: {
    placement: LEGEND_PLACEMENT.TOP_RIGHT,
    top: undefined,
    right: '100px',
    bottom: undefined,
    left: undefined,
  },
  argTypes: {
    ...argTypes,
  },
};

export const Default = (props) => {
  const features = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [147055.0, 197908.0],
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [141000.0, 200908.0],
        },
      },
    ],
  };

  return html`<vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer .features=${features} data-vl-name="Laag 1">
      <vl-map-layer-circle-style
        data-vl-name="Openbaar onderzoek"
        data-vl-color="#ffe615"
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
