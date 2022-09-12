import { html } from 'lit-html';
import '../../../../map';
import { argTypes } from '../config';
import { CATEGORIES, docsIntro, TYPES } from '../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-layer-circle-style',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'De kaart laag style klasse voor cirkels.',
        }),
      },
    },
  },
  argTypes: {
    ...argTypes,
    size: {
      name: 'data-vl-size',
      type: { summary: TYPES.NUMBER },
      description: 'Attribuut wordt gebruikt om aan te geven wat de grootte is van de cirkels',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 5 },
      },
      control: { disable: true },
    },
    borderColor: {
      name: 'data-vl-border-color',
      type: { summary: TYPES.STRING },
      description: 'Attribuut wordt gebruikt om aan te geven wat de color is van de randen van de cirkels.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'rgba(0, 0, 0, 0)' },
      },
      control: { disable: true },
    },
    borderSize: {
      name: 'data-vl-border-size',
      type: { summary: TYPES.NUMBER },
      description: 'Attribuut wordt gebruikt om aan te geven wat de grootte is van de randen van de cirkels.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 1 },
      },
      control: { disable: true },
    },
    clusterTextColor: {
      name: 'data-vl-cluster-text-color',
      type: { summary: TYPES.STRING },
      description:
        'Attribuut wordt gebruikt om aan te geven wat de kleur van de tekst is bij het clusteren van features.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '#FFF' },
      },
      control: { disable: true },
    },
    clusterColor: {
      name: 'data-vl-cluster-color',
      type: { summary: TYPES.STRING },
      description: 'Attribuut wordt gebruikt om aan te geven wat de kleur is bij het clusteren van features.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'rgba(2, 85, 204, 1)' },
      },
      control: { disable: true },
    },
  },
};

export const Default = () => {
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
    ],
  };
  return html`<vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer .features=${features}>
      <vl-map-layer-circle-style
        data-vl-color="#ffe615"
        data-vl-size="5"
        data-vl-border-color="#000"
        data-vl-border-size="1"
      ></vl-map-layer-circle-style>
    </vl-map-features-layer>
  </vl-map>`;
};

export const ManyFeatures = () => {
  const features = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [147055.0, 197108.0],
        },
        properties: {
          label: 'Punt 1',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [147155.0, 197208.0],
        },
        properties: {
          label: 'Punt 2',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [147255.0, 197308.0],
        },
        properties: {
          label: 'Punt 3',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [147355.0, 197308.0],
        },
        properties: {
          label: 'Punt 4',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [147455.0, 197408.0],
        },
        properties: {
          label: 'Punt 5',
        },
      },
    ],
  };

  return html`<vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>

    <vl-map-features-layer data-vl-cluster data-vl-cluster-distance="100" .features=${features}>
      <vl-map-layer-circle-style
        data-vl-color="#ffe615"
        data-vl-size="10"
        data-vl-border-color="#000"
        data-vl-border-size="1"
        data-vl-text-feature-attribute-name="label"
        data-vl-text-color="black"
        data-vl-text-size="20px"
      ></vl-map-layer-circle-style>
    </vl-map-features-layer>
  </vl-map>`;
};
