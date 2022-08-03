import { html } from 'lit-html';
import '../../index.js';
import { CATEGORIES, docsIntro, TYPES } from '../../../../../.storybook/utils.js';
import { LEGEND_PLACEMENT } from './enums/index.js';

export default {
  title: 'custom-elements/vl-map/vl-map-legend-multi-features-layer',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'De kaart legende voor kaart met meerdere feature layers.',
        }),
      },
    },
  },
  argTypes: {
    placement: {
      name: 'data-vl-placement',
      type: { summary: TYPES.STRING },
      description: 'Attribuut wordt gebruikt om de plaats van de legende op de kaart te bepalen',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: `${LEGEND_PLACEMENT.BOTTOM_RIGHT}` },
      },
      control: { disable: true },
    },
    left: {
      name: 'left',
      type: { summary: TYPES.STRING },
      description:
        'Attribuut wordt gebruikt om de "left" positie van de legende op de kaart te bepalen. Kan gebruikt worden in combinatie met data-vl-placement.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'undefined' },
      },
      control: { disable: true },
    },
    top: {
      name: 'top',
      type: { summary: TYPES.STRING },
      description:
        'Attribuut wordt gebruikt om de "top" positie van de legende op de kaart te bepalen. Kan gebruikt worden in combinatie met data-vl-placement.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'undefined' },
      },
      control: { disable: true },
    },
    right: {
      name: 'right',
      type: { summary: TYPES.STRING },
      description:
        'Attribuut wordt gebruikt om de "right" positie van de legende op de kaart te bepalen. Kan gebruikt worden in combinatie met data-vl-placement.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'undefined' },
      },
      control: { disable: true },
    },
    bottom: {
      name: 'bottom',
      type: { summary: TYPES.STRING },
      description:
        'Attribuut wordt gebruikt om de "bottom" positie van de legende op de kaart te bepalen. Kan gebruikt worden in combinatie met data-vl-placement.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'undefined' },
      },
      control: { disable: true },
    },
  },
};

export const Default = () => {
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
    <vl-map-features-layer .features=${features1}>
      <vl-map-layer-circle-style
        data-vl-legend-text="Openbaar onderzoek"
        data-vl-color="#ffe615"
        data-vl-size="5"
        data-vl-border-color="#000"
        data-vl-border-size="1"
      ></vl-map-layer-circle-style>
      <vl-map-measure-action></vl-map-measure-action>
    </vl-map-features-layer>
    <vl-map-features-layer .features=${features2}>
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
    <vl-map-legend data-vl-placement="${LEGEND_PLACEMENT.TOP_LEFT}"></vl-map-legend>
  </vl-map>`;
};
