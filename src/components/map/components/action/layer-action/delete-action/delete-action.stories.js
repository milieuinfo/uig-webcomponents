import { html } from "lit-html";
import { VlMapDeleteAction } from "../../../../../map";
import { args, argTypes } from "../config";
import { docsIntro } from "../../../../../../../.storybook/utils.js";
import { define } from "../../../../../../utils/core";

export default {
  title: "custom-elements/vl-map/vl-map-delete-action",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "map",
          intro: "Actie om features te deleten van een layer.",
        }),
      },
    },
  },
  args,
  argTypes,
};

export const Default = () => {
  const features = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: 1,
        geometry: { type: "Point", coordinates: [210000, 190000] },
      },
      {
        type: "Feature",
        id: 2,
        geometry: {
          type: "LineString",
          coordinates: [
            [170000, 170000],
            [150000, 206000],
          ],
        },
      },
      {
        type: "Feature",
        id: 3,
        geometry: {
          type: "Polygon",
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
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer data-vl-features=${JSON.stringify(features)}>
        <vl-map-delete-action data-vl-default-active></vl-map-delete-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const DeleteWithCustomStyle = () => {
  const features = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: 1,
        geometry: { type: "Point", coordinates: [210000, 190000] },
      },
      {
        type: "Feature",
        id: 2,
        geometry: {
          type: "LineString",
          coordinates: [
            [150000, 162000],
            [150000, 206000],
          ],
        },
      },
      {
        type: "Feature",
        id: 3,
        geometry: {
          type: "Polygon",
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
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer data-vl-features=${JSON.stringify(features)}>
        <vl-map-delete-action data-vl-default-active>
          <vl-map-layer-style
            data-vl-text-color="#000"
            data-vl-color="#FFE615"
            data-vl-border-color="#FFE615"
          ></vl-map-layer-style>
        </vl-map-delete-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const FilteredDelete = () => {
  const features = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: 1,
        geometry: { type: "Point", coordinates: [150000, 195000] },
      },
      {
        type: "Feature",
        id: 2,
        geometry: {
          type: "LineString",
          coordinates: [
            [140815, 210000],
            [150000, 225000],
          ],
        },
      },
      {
        type: "Feature",
        id: 3,
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [135000, 193972],
              [135000, 200000],
              [145000, 200000],
              [145000, 193972],
              [135000, 193972],
            ],
          ],
        },
      },
      {
        type: "Feature",
        id: 4,
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [85000, 193972],
              [85000, 200000],
              [90000, 200000],
              [90000, 193972],
              [85000, 193972],
            ],
          ],
        },
      },
    ],
  };

  class VlMapFilteredDeleteAction extends VlMapDeleteAction {
    appliesTo(feature) {
      return feature.getId() === 4;
    }
  }

  define("vl-map-filtered-delete-action", VlMapFilteredDeleteAction);

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer data-vl-features=${JSON.stringify(features)}>
        <vl-map-layer-style></vl-map-layer-style>
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
        <vl-map-filtered-delete-action data-vl-default-active></vl-map-filtered-delete-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};