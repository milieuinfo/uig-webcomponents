import { html } from "lit-html";
import { args, argTypes } from "../config";
import { docsIntro } from "../../../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-map/vl-map-select-action",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "map",
          intro: "De kaart selecteer actie component.",
        }),
      },
    },
  },
  args: { ...args, cluster: false },
  argTypes: {
    ...argTypes,
    cluster: {
      name: "data-vl-cluster",
      type: { summary: "boolean" },
      description:
        "Attribuut geeft aan of de features geclusterd zijn of niet.",
      table: {
        defaultValue: { summary: "false" },
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
        id: 1,
        geometry: { type: "Point", coordinates: [147055.0, 197908.0] },
      },
      {
        type: "Feature",
        id: 2,
        geometry: { type: "Point", coordinates: [149055.0, 199908.0] },
      },
      {
        type: "Feature",
        id: 3,
        geometry: { type: "Point", coordinates: [151055.0, 201908.0] },
      },
    ],
  };

  return html`
    <vl-map id="map" id="map-with-select-action">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer
        id="map-layer"
        data-vl-features=${JSON.stringify(features)}
      >
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
      </vl-map-features-layer>
      <vl-map-select-action id="select-action" data-vl-default-active>
        <vl-map-layer-circle-style
          data-vl-text-color="#000"
          data-vl-color="#FFE615"
          data-vl-border-color="#FFE615"
        ></vl-map-layer-circle-style>
      </vl-map-select-action>
    </vl-map>
    <script>
      const layer = document.querySelector("#map-layer");
      const selectAction = document.querySelector("#select-action");
      selectAction.layer = layer.layer;
    </script>
  `;
};

export const SelectWithClustering = () => {
  const features = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: 1,
        geometry: { type: "Point", coordinates: [147055.0, 197908.0] },
      },
      {
        type: "Feature",
        id: 2,
        geometry: { type: "Point", coordinates: [149055.0, 199908.0] },
      },
      {
        type: "Feature",
        id: 3,
        geometry: { type: "Point", coordinates: [151055.0, 201908.0] },
      },
    ],
  };

  return html`
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer
        data-vl-cluster
        data-vl-cluster-distance="100"
        data-vl-features=${JSON.stringify(features)}
      >
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
      </vl-map-features-layer>
      <vl-map-select-action data-vl-cluster data-vl-default-active>
        <vl-map-layer-circle-style
          data-vl-text-color="#000"
          data-vl-color="#FFE615"
          data-vl-border-color="#FFE615"
        ></vl-map-layer-circle-style>
      </vl-map-select-action>
    </vl-map>
  `;
};

export const FilteredSelect = () => {
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

  class VlMapFilteredSelectAction extends VlMapSelectAction {
    appliesTo(feature) {
      return feature.getId() === 4;
    }
  }

  define("vl-map-filtered-select-action", VlMapFilteredSelectAction);

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer data-vl-features=${JSON.stringify(features)}>
        <vl-map-layer-style></vl-map-layer-style>
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
        <vl-map-filtered-select-action data-vl-default-active></vl-map-filtered-select-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};