import { html } from 'lit-html';
import '../../../../map';
import { argTypes } from '../config';
import { CATEGORIES, docsIntro, TYPES } from '../../../../../../.storybook/utils.js';
import {LEGEND_PLACEMENT} from '../../controls/components/legend-control/enums';

export default {
  title: 'custom-elements/vl-map/vl-map-layer-single-layer-legend',
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
          coordinates: [153055.0, 203908.0],
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
      },
      {
        type: "Feature",
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
        properties: {
          styleId: "style-3"
        }
      }
    ]
  };

  return html`<vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer .features=${features} data-vl-name="Laag 1">
      <vl-map-layer-circle-style id="style-1" data-vl-legend-text="Openbaar onderzoek"
        data-vl-color="#ffe615"
        data-vl-size="5"
        data-vl-border-color="#000"
        data-vl-border-size="1"
      ></vl-map-layer-circle-style>
      <vl-map-layer-circle-style id="style-2" data-vl-legend-text="Beslissing"
          data-vl-color="red"
          data-vl-size="5"
          data-vl-border-color="#000"
          data-vl-border-size="1"
      ></vl-map-layer-circle-style>
      <vl-map-layer-style id="style-3" data-vl-legend-text="And another one"
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
      ></vl-map-layer-style>
      <vl-map-measure-action></vl-map-measure-action>
    </vl-map-features-layer>
    <vl-map-action-controls>
      <vl-map-measure-control></vl-map-measure-control>
    </vl-map-action-controls>
    <vl-map-legend-control data-vl-placement="${LEGEND_PLACEMENT.BOTTOM_RIGHT}"></vl-map-legend-control>
  </vl-map>`;
};
