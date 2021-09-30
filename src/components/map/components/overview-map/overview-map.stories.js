import { html } from "lit-html";
import "../../../map";
import { docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-map/vl-map-overview-map",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "map",
          intro: "De kaart overview component.",
        }),
      },
    },
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
