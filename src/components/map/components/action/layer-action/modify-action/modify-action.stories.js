import { html } from "lit-html";
import "../../../../../map";
import { args, argTypes } from "../config";
import { docsIntro } from "../../../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-map/vl-map-modify-action",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "map",
          intro: "De kaart aanpas actie component.",
        }),
      },
    },
  },
  args,
  argTypes: {
    ...argTypes,
    snapping: {
      name: "data-vl-snapping",
      type: {summary: "boolean"},
      description: "Attribute enables snapping on the vl-map-wfs-layers that are added to this action.",
      control: {disable: true},
      table: {
        defaultValue: { summary: "false" },
      },
    },
    snappingPixelTolerance: {
      name: "data-vl-snapping-pixel-tolerance",
      type: {summary: "number"},
      description: "Attribute configures the maximum distance (in pixels) between a feature and your pointing device before snapping occurs.",
      control: {disable: true},
      table: {
        defaultValue: { summary: "10" },
      },
    }
  }
};

export const MapWithPointModify = () => {
  const features = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: 1,
        geometry: { type: "Point", coordinates: [157836.54, 190879.51] },
      },
      {
        type: "Feature",
        id: 2,
        geometry: { type: "Point", coordinates: [152161.53, 212358.26] },
      },
    ],
  };

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer data-vl-features=${JSON.stringify(features)}>
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
        <vl-map-modify-action data-vl-default-active></vl-map-modify-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const MapWithLineModify = () => {
  const features = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: 1,
        geometry: {
          type: "LineString",
          coordinates: [
            [157836.54, 190879.51],
            [152161.53, 212358.26],
          ],
        },
      },
    ],
  };

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer data-vl-features=${JSON.stringify(features)}>
        <vl-map-layer-style></vl-map-layer-style>
        <vl-map-modify-action data-vl-default-active></vl-map-modify-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const MapWithPolygonModify = () => {
  const features = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: 1,
        geometry: {
          type: "Polygon",
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
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer data-vl-features=${JSON.stringify(features)}>
        <vl-map-layer-style></vl-map-layer-style>
        <vl-map-modify-action data-vl-default-active></vl-map-modify-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const MapWithSnappingModify = () => {
  const features = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: 1,
        geometry: { type: "Point", coordinates: [ 151285.5138477709, 211586.43498009123 ] },
      },
    ],
  };

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer data-vl-features=${JSON.stringify(features)} data-vl-auto-extent>
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
        <vl-map-modify-action 
            data-vl-default-active
            data-vl-snapping
            data-vl-snapping-pixel-tolerance="1000">
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
