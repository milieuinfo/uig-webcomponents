import { html } from "lit-html";
import "../../../../index.js";
import "../../../../mapactions";
import styles from "../../../../styles.scss";
import { defaultArgs, defaultArgTypes } from "../config";

export default {
  title: "custom-elements/vl-map/vl-map-draw-polygon-action",
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
  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer id="polygon-layer">
        <vl-map-layer-style></vl-map-layer-style>
        <vl-map-draw-polygon-action
          id="draw-polygon-action"
          data-vl-default-active=""
        ></vl-map-draw-polygon-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};
