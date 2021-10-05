import { html } from "lit-html";
import "../../../../map";
import { args, argTypes } from "../config";
import { docsIntro } from "../../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-map/vl-map-baselayer-grb",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "map",
          intro: "De kaart layer component voor GRB.",
        }),
      },
    },
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
