import { html } from "lit-html";
import "../../../../map";
import { args, argTypes } from "../config";

export default {
  title: "custom-elements/vl-map/vl-map-baselayer-grb",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args,
  argTypes,
};

export const Default = () => {
  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
    </vl-map>
  `;
};
