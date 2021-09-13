import { html } from "lit-html";
import "../../../../index.js";
import "../../../../mapactions";
import styles from "../../../map/styles.scss";
import { defaultArgs, defaultArgTypes } from "../config";

export default {
  title: "custom-elements/vl-map/vl-map-select-action",
  args: defaultArgs,
  argTypes: defaultArgTypes,
};

const stylesheet = html`<style>
  ${styles}
</style>`;

const mapWrapper = (props, children) => {
  return html`
    ${stylesheet}
    <div is="vl-grid">${children}</div>
  `;
};

export const Default = (props) => {
  const features =
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "id" : 1, "geometry" : { "type" : "Point" , "coordinates" : [147055.0,197908.0] } }, { "type" : "Feature" , "id" : 2, "geometry" : { "type" : "Point" , "coordinates" : [149055.0,199908.0] } }, { "type" : "Feature" , "id" : 3, "geometry" : { "type" : "Point" , "coordinates" : [151055.0,201908.0] } }] }';

  return html`
    <div id="select-action-log"></div>
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer
        id="map-layer"
        data-vl-name="laag"
        data-vl-features=${features}
      >
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
      </vl-map-features-layer>
      <vl-map-select-action id="select-action" data-vl-default-active="">
        <vl-map-layer-circle-style
          data-vl-text-color="#000"
          data-vl-color="#FFE615"
          data-vl-border-color="#FFE615"
        ></vl-map-layer-circle-style>
      </vl-map-select-action>
    </vl-map>
  `;
};

export const SelectWithClustering = (props) => {
  const features =
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "id" : 1, "geometry" : { "type" : "Point" , "coordinates" : [147055.0,197908.0] } }, { "type" : "Feature" , "id" : 2, "geometry" : { "type" : "Point" , "coordinates" : [149055.0,199908.0] } }, { "type" : "Feature" , "id" : 3, "geometry" : { "type" : "Point" , "coordinates" : [151055.0,201908.0] } }] }';

  return html`
    <div id="select-action-cluster-log"></div>
    <vl-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer
        id="map"
        data-vl-name="laag"
        data-vl-cluster=""
        data-vl-cluster-distance="100"
        data-vl-features=${features}
      >
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
      </vl-map-features-layer>
      <vl-map-select-action
        id="select-action-cluster"
        data-vl-cluster=""
        data-vl-default-active=""
      >
        <vl-map-layer-circle-style
          data-vl-text-color="#000"
          data-vl-color="#FFE615"
          data-vl-border-color="#FFE615"
        ></vl-map-layer-circle-style>
      </vl-map-select-action>
    </vl-map>
  `;
};
