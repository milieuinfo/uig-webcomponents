import { html } from 'lit-html';
import '../../../../map';
import { argTypes } from '../config';
import { CATEGORIES, docsIntro, TYPES } from '../../../../../../.storybook/utils.js';

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
  /* const features = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [147055.0, 197908.0],
        },
        properties: {
          type: "1"
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [141000.0, 200908.0],
        },
        properties: {
          type: "2"
        }
      },
    ],
  }; */

  document.addEventListener('DOMContentLoaded', async (e) => {

    console.log("DOMContentLoaded >>>")

    const map = document.getElementById("map");
    await map.ready;
    const laag1Features = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [147055.0, 197908.0],
          },
          properties: {
            type: "1"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [141000.0, 200908.0],
          },
          properties: {
            type: "2"
          }
        }
      ]
    };
     const laag1 = document.getElementById("laag-1");
    laag1.features = laag1Features;

    document.getElementById("style-1").appliesTo = feature => feature.get("type") === "1";
    document.getElementById("style-2").appliesTo = feature => feature.get("type") !== "1";

    /* const selectAction = document.getElementById("select-action");
    selectAction.layer = laag1.layer;
    selectAction.onSelect((feature) => {
      alert(feature.get("type") == "1" ? "Op nen blauwe geklikt" : "Op ne rode geklikt");
    }); */

  });

  // .features=${features}

  return html`<vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer  id="laag-1" data-vl-name="Laag 1">
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
      <vl-map-measure-action></vl-map-measure-action>
    </vl-map-features-layer>
    <vl-map-action-controls>
      <vl-map-measure-control></vl-map-measure-control>
      <vl-map-legend-control></vl-map-legend-control>
    </vl-map-action-controls>
  </vl-map>`;
};
