import { html } from 'lit-html';
import { args, argTypes } from '../../config';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-select-action',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'The map select action component.',
        }),
      },
    },
  },
  args: { ...args, cluster: false },
  argTypes: {
    ...argTypes,
    cluster: {
      name: 'data-vl-cluster',
      type: { summary: TYPES.BOOLEAN },
      description: 'Indicates whether the features are clustered or not.',
      table: {
        defaultValue: { summary: 'false' },
        category: CATEGORIES.ATTRIBUTES,
      },
      control: { disable: true },
    },
  },
};

export const Default = ({ active }) => {
  const features = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: 1,
        geometry: { type: 'Point', coordinates: [147055.0, 197908.0] },
      },
      {
        type: 'Feature',
        id: 2,
        geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
      },
      {
        type: 'Feature',
        id: 3,
        geometry: { type: 'Point', coordinates: [151055.0, 201908.0] },
      },
    ],
  };

  return html`
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer .features=${features}>
        <vl-map-select-action .active=${active}></vl-map-select-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const WithDefaultActive = () => {
  const features = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: 1,
        geometry: { type: 'Point', coordinates: [147055.0, 197908.0] },
      },
      {
        type: 'Feature',
        id: 2,
        geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
      },
      {
        type: 'Feature',
        id: 3,
        geometry: { type: 'Point', coordinates: [151055.0, 201908.0] },
      },
    ],
  };

  return html`
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer .features=${features}>
        <vl-map-select-action data-vl-default-active></vl-map-select-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

WithDefaultActive.argTypes = {
  active: {
    control: {
      disable: true,
    },
  },
};

export const WithClustering = ({ active }) => {
  const features = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: 1,
        geometry: { type: 'Point', coordinates: [147055.0, 197908.0] },
      },
      {
        type: 'Feature',
        id: 2,
        geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
      },
      {
        type: 'Feature',
        id: 3,
        geometry: { type: 'Point', coordinates: [151055.0, 201908.0] },
      },
    ],
  };

  return html`
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer data-vl-cluster data-vl-cluster-distance="100" .features=${features}>
        <vl-map-select-action .active=${active} data-vl-cluster></vl-map-select-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};
