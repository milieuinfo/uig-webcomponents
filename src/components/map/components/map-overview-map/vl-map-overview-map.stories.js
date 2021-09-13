import { html } from "lit-html";
import "../../index.js";
import "../../mapactions";
import styles from "../map/styles.scss";

export default {
  title: "custom-elements/vl-map/vl-map-overview-map",
  args: {},
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

export const Default = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map">
        <vl-map-overview-map></vl-map-overview-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      </vl-map>
    `
  )}
`;
