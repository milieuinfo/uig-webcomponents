import { html } from 'lit-html';
import '../../../map';
import { argTypes } from './config';
import { docsIntro } from '../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-layer-style',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'The map layer style class.',
        }),
      },
    },
  },
  argTypes,
};

export const Default = () => {
  const features = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [147055.0, 197908.0],
              [157055.0, 197908.0],
              [157055.0, 187908.0],
              [147055.0, 187908.0],
              [147055.0, 197908.0],
            ],
          ],
        },
        properties: { label: 'Label1' },
      },
    ],
  };
  return html`<vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer data-vl-features=${JSON.stringify(features)}>
      <vl-map-layer-style
        data-vl-color="rgba(255,0,0,0.5)"
        data-vl-border-color="rgba(255,255,100,1)"
        data-vl-border-size="2"
        data-vl-text-feature-attribute-name="label"
        data-vl-text-background-color="rgba(0,0,255,0.2)"
        data-vl-text-border-color="rgba(0,255,0,1)"
        data-vl-text-border-size="3"
        data-vl-text-color="rgba(255,0,0,1)"
        data-vl-text-offset-x="10"
        data-vl-text-offset-y="-10"
        data-vl-text-size="13px"
      >
      </vl-map-layer-style>
    </vl-map-features-layer>
  </vl-map>`;
};
