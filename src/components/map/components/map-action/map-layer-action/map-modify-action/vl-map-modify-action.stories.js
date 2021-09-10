import { html } from "lit-html";
import "../../../../index.js";
import "../../../../mapactions";
import styles from "../../../../styles.scss";
import { defaultArgs, defaultArgTypes } from "../config";

export default {
  title: "custom-elements/vl-map/vl-map-modify-action",
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

export const MapWithPointModify = (props) => {
  const features =
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "id" : 1, "geometry" : { "type" : "Point" , "coordinates" : [157836.54,190879.51] } }, { "type" : "Feature" , "id" : 2, "geometry" : { "type" : "Point" , "coordinates" : [152161.53,212358.26] } }] }';

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer
        id="point-layer"
        data-vl-name="punt-laag"
        data-vl-features=${features}
      >
        <vl-map-layer-circle-style></vl-map-layer-circle-style>
        <vl-map-modify-action data-vl-default-active=""></vl-map-modify-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const MapWithLineModify = (props) => {
  const features =
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "id" : 1, "geometry" : { "type" : "LineString" , "coordinates" : [ [157836.54,190879.51], [152161.53,212358.26] ] } }] }';

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer
        id="line-layer"
        data-vl-name="lijn-laag"
        data-vl-features=${features}
      >
        <vl-map-layer-style></vl-map-layer-style>
        <vl-map-modify-action data-vl-default-active=""></vl-map-modify-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

MapWithLineModify.args = defaultArgs;
MapWithLineModify.argTypes = defaultArgTypes;

export const MapWithPolygonModify = (props) => {
  const features =
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "id" : 1, "geometry" : { "type" : "Polygon" , "coordinates" : [ [[104896.56,193972.22],[157836.54,190879.51],[152161.53,212358.26],[173780.97,174292.43]] ] } }] }';

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer
        id="polygon-layer"
        data-vl-name="polygoon-laag"
        data-vl-features=${features}
      >
        <vl-map-layer-style></vl-map-layer-style>
        <vl-map-modify-action data-vl-default-active=""></vl-map-modify-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

MapWithPolygonModify.args = defaultArgs;
MapWithPolygonModify.argTypes = defaultArgTypes;
