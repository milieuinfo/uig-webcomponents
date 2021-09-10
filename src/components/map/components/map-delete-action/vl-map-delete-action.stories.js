import { html } from "lit-html";
import "../../index.js";
import "../../mapactions";
import styles from "../../styles.scss";

const defaultArgs = {};

export default {
  title: "custom-elements/vl-map/vl-map-delete-action",
  args: { ...defaultArgs },
  argTypes: {},
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
    '{"type": "FeatureCollection" , "features" : [{ "type" : "Feature" , "id" : 1, "geometry" : { "type" : "Point" , "coordinates" : [210000,190000] } }, { "type" : "Feature" , "id" : 2, "geometry" : { "type" : "LineString" , "coordinates" : [[170000,170000], [150000,206000]] } }, { "type" : "Feature" , "id" : 3, "geometry" : { "type" : "Polygon" , "coordinates" : [[[44000,171000],[100000,171000],[100000,205000],[44000,205000],[44000,171000]]] } }] }';

  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-features-layer
        id="layer"
        data-vl-name="Laag"
        data-vl-features=${features}
      >
        <vl-map-delete-action
          id="delete-action"
          data-vl-default-active=""
        ></vl-map-delete-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};
