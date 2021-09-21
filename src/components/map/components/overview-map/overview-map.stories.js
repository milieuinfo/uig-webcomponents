import { html } from "lit-html";
import "../../../map";

export default {
  title: "custom-elements/vl-map/vl-map-overview-map",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () => html`
  <vl-map id="map">
    <vl-map-overview-map></vl-map-overview-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-baselayer-grb></vl-map-baselayer-grb>
    <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
  </vl-map>
`;
