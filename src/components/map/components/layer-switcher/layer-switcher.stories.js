import { html } from 'lit-html';
import '../../../map';
import { docsIntro } from '../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-layer-switcher',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'De kaartlagen wisselaar.',
        }),
      },
    },
  },
};

export const Default = () => {
  const features1 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
      },
    ],
  };
  const features2 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [154055.0, 199908.0] },
      },
    ],
  };
  const features3 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [159055.0, 199908.0] },
      },
    ],
  };

  return html`
    <vl-map>
      <vl-map-side-sheet>
        <vl-map-layer-switcher></vl-map-layer-switcher>
      </vl-map-side-sheet>
      <vl-map-overview-map></vl-map-overview-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer data-vl-name="Kaartlaag 1" .features=${features1}>
        <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>
      </vl-map-features-layer>
      <vl-map-features-layer data-vl-name="Kaartlaag 2" .features=${features2}>
        <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>
      </vl-map-features-layer>
      <vl-map-features-layer data-vl-name="Kaartlaag 3" .features=${features3}>
        <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>
      </vl-map-features-layer>
      <vl-map-wmts-layer
        data-vl-url="https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts"
        data-vl-layer="grb_sel"
        data-vl-name="WMTS kaartlaag"
      >
      </vl-map-wmts-layer>
      <vl-map-tiled-wms-layer
        data-vl-name="WMS kaartlaag"
        data-vl-version="1.3.0"
        data-vl-opacity="1"
        data-vl-url="https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms"
        data-vl-layers="GEM_GRENS"
      >
      </vl-map-tiled-wms-layer>
      <vl-map-wfs-layer
        data-vl-name="WFS kaartlaag"
        data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
        data-vl-layers="owl_l"
        data-vl-max-resolution="8"
      >
      </vl-map-wfs-layer>
    </vl-map>
  `;
};

export const WithSpecialisedOptions = () => {
  const features1 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
      },
    ],
  };
  const features2 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [154055.0, 199908.0] },
      },
    ],
  };
  const features3 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [159055.0, 199908.0] },
      },
    ],
  };
  return html`
    <vl-map>
      <vl-map-side-sheet>
        <vl-map-layer-switcher>
          <vl-checkbox data-vl-label="Kaartlaag" data-vl-layer="layer-1"></vl-checkbox>
        </vl-map-layer-switcher>
      </vl-map-side-sheet>
      <vl-map-overview-map></vl-map-overview-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer data-vl-name="layer-1" .features=${features1}>
        <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>
      </vl-map-features-layer>
      <vl-map-features-layer data-vl-name="layer-2" .features=${features2}>
        <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>
      </vl-map-features-layer>
      <vl-map-features-layer data-vl-name="layer-3" .features=${features3}>
        <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const WithOptionForResolution = () => {
  const features1 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
      },
    ],
  };
  const features2 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [154055.0, 199908.0] },
      },
    ],
  };

  return html`
    <vl-map>
      <vl-map-side-sheet>
        <vl-map-layer-switcher>
          <vl-checkbox data-vl-label="Kaartlaag" data-vl-layer="layer"></vl-checkbox>
          <vl-checkbox data-vl-label="Kaartlaag met resolutie" data-vl-layer="resolution-layer"></vl-checkbox>
        </vl-map-layer-switcher>
      </vl-map-side-sheet>
      <vl-map-overview-map></vl-map-overview-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer data-vl-name="layer" .features=${features1}>
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
      </vl-map-features-layer>
      <vl-map-features-layer
        data-vl-name="resolution-layer"
        data-vl-min-resolution="128"
        data-vl-max-resolution="256"
        .features=${features2}
      >
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
      </vl-map-features-layer>
    </vl-map>
  `;
};
