import { html } from "lit-html";
import { args, argTypes } from "../config.js";
import "../../../../map";

export default {
  title: "custom-elements/vl-map/vl-map-baselayer-grb-ortho",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args,
  argTypes,
};

export const Default = () => {
  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
  `;
};
