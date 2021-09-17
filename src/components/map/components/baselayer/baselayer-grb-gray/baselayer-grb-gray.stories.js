import { html } from "lit-html";
import "../../../index.js";
import "../../../mapactions";
import styles from "../../map/styles.scss";
import { defaultArgs, defaultArgTypes } from "../config";

export default {
  title: "custom-elements/vl-map/vl-map-baselayer-grb-gray",
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

export const Default = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map">
        <vl-map-baselayer-grb-gray
          id="baselayer-grb-gray"
        ></vl-map-baselayer-grb-gray>
      </vl-map>
    `
  )}
`;
