import { html } from 'lit-html';
import '../../../../../map';
import { argTypes } from '../../config.js';
import { docsIntro } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-features-layer',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'Deze kaartlaag staat je toe om een set van te tonen features in te stellen.',
        }),
      },
    },
  },
  argTypes: {
    ...argTypes,
    autoExtent: {
      name: 'data-vl-auto-extent',
      control: { disable: true },
      type: { summary: 'boolean' },
      description:
        'Attribuut geeft aan of er automatisch gezoomt wordt op de kaartlaag zodat al de features zichtbaar zijn.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    autoExtentMaxZoom: {
      name: 'data-vl-max-zoom',
      control: { disable: true },
      type: { summary: 'string' },
      description: 'Attribuut geeft aan tot op welk niveau er maximaal automatisch gezoomd wordt bij een extent',
    },
    cluster: {
      name: 'data-vl-cluster',
      control: { disable: true },
      type: { summary: 'boolean' },
      description: 'Attribuut geeft aan of de features geclusterd moeten worden of niet.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    clusterDistance: {
      name: 'data-vl-cluster-distance',
      control: { disable: true },
      type: { summary: 'string' },
      description: 'Attribuut geeft aan vanaf welke afstand tussen features er geclusterd mag worden.',
    },
    features: {
      name: 'data-vl-features',
      control: { disable: true },
      type: { summary: 'string' },
      description: 'Attribuut die de kaartlaag bevat.',
    },
    featuresProp: {
      name: 'features',
      control: { disable: true },
      description: 'Property die de kaartlaag bevat.',
    },
  },
};

export const Default = () => {
  const features = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: 1,
        geometry: { type: 'Point', coordinates: [210000, 190000] },
      },
      {
        type: 'Feature',
        id: 2,
        geometry: {
          type: 'LineString',
          coordinates: [
            [170000, 170000],
            [150000, 206000],
          ],
        },
      },
      {
        type: 'Feature',
        id: 3,
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [44000, 171000],
              [100000, 171000],
              [100000, 205000],
              [44000, 205000],
              [44000, 171000],
            ],
          ],
        },
      },
    ],
  };

  return html`
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer .features=${features}></vl-map-features-layer>
    </vl-map>
  `;
};
