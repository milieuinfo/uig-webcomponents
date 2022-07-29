import { html } from 'lit-html';
import '../../../../map';
import { argTypes } from '../config';
import { CATEGORIES, docsIntro, TYPES } from '../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-legend-single-layer-single-style',
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
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [147055.0, 197908.0],
        },
        properties: {
          styleId: "style-1"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [141000.0, 200908.0],
        },
        properties: {
          styleId: "style-2"
        }
      }
    ]
  };

  return html`<vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer .features=${features} data-vl-name="Laag 1">
      <vl-map-layer-circle-style data-vl-legend-text="Openbaar onderzoek"
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
    <vl-map-legend-control right="50px" bottom="0px"></vl-map-legend-control>
  </vl-map>`;
};
