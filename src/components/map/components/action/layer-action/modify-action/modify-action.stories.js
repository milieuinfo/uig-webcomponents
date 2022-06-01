import { html } from 'lit-html';
import { args, argTypes } from '../../config';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-modify-action',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'The map modify action component.',
        }),
      },
    },
  },
  args: { ...args, snapping: true, snappingPixelTolerance: 1000 },
  argTypes: {
    ...argTypes,
    snapping: {
      name: 'data-vl-snapping',
      type: { summary: TYPES.BOOLEAN },
      description: 'Attribute enables snapping on the vl-map-wfs-layers that are added to this action.',
      table: {
        defaultValue: { summary: 'false' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    snappingPixelTolerance: {
      name: 'data-vl-snapping-pixel-tolerance',
      type: { summary: TYPES.NUMBER },
      description:
        'Attribute configures the maximum distance (in pixels) between a feature and your pointing device before snapping occurs.',
      table: {
        defaultValue: { summary: '10' },
        category: CATEGORIES.ATTRIBUTES,
      },
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
        geometry: { type: 'Point', coordinates: [157836.54, 190879.51] },
      },
      {
        type: 'Feature',
        id: 2,
        geometry: { type: 'Point', coordinates: [152161.53, 212358.26] },
      },
      {
        type: 'Feature',
        id: 3,
        geometry: {
          type: 'LineString',
          coordinates: [
            [157836.54, 190879.51],
            [152161.53, 212358.26],
          ],
        },
      },
      {
        type: 'Feature',
        id: 4,
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [104896.56, 193972.22],
              [157836.54, 190879.51],
              [152161.53, 212358.26],
              [173780.97, 174292.43],
            ],
          ],
        },
      },
    ],
  };

  return html`
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer .features=${features}>
        <vl-map-modify-action .active=${active}></vl-map-modify-action>
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
        geometry: { type: 'Point', coordinates: [157836.54, 190879.51] },
      },
      {
        type: 'Feature',
        id: 2,
        geometry: { type: 'Point', coordinates: [152161.53, 212358.26] },
      },
      {
        type: 'Feature',
        id: 3,
        geometry: {
          type: 'LineString',
          coordinates: [
            [157836.54, 190879.51],
            [152161.53, 212358.26],
          ],
        },
      },
      {
        type: 'Feature',
        id: 4,
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [104896.56, 193972.22],
              [157836.54, 190879.51],
              [152161.53, 212358.26],
              [173780.97, 174292.43],
            ],
          ],
        },
      },
    ],
  };

  return html`
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer .features=${features}>
        <vl-map-modify-action data-vl-default-active></vl-map-modify-action>
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

export const WithSnapping = ({ active, snapping, snappingPixelTolerance }) => {
  const features = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: 1,
        geometry: { type: 'Point', coordinates: [151285.5138477709, 211586.43498009123] },
      },
    ],
  };

  return html`
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer .features=${features} data-vl-auto-extent>
        <vl-map-modify-action 
            .active=${active}
            ?data-vl-snapping=${snapping}
            data-vl-snapping-pixel-tolerance=${snappingPixelTolerance}>
          <vl-map-wfs-layer
              data-vl-name="Stromend waterlichamen"
              data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
              data-vl-layers="owl_l"
              data-vl-max-resolution="4">
        </vl-map-modify-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};
