import { html } from "lit-html";
import "../../../map";

export default {
  title: "custom-elements/vl-map/vl-map-search",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () =>
  html`
    <vl-map id="map">
      <vl-map-search></vl-map-search>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
  `;

export const WithSeparateSearchFunctionality = () => {
  return html`
    <vl-map-search id="bind-map-search"></vl-map-search>
    <br />
    <vl-map id="map">
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
    <script>
      document
        .querySelector("#bind-map-search")
        .bindMap(document.querySelector("#map"));
    </script>
  `;
};
