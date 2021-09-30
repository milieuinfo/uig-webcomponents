import { html } from "lit-html";
import "../../../../../map";
import { args, argTypes } from "../config";
import { docsIntro } from "../../../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-map/vl-map-draw-line-action",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "map",
          intro: "De kaart lijn teken actie component.",
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
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer>
        <vl-map-layer-style></vl-map-layer-style>
        <vl-map-draw-line-action
          data-vl-default-active
        ></vl-map-draw-line-action>
      </vl-map-features-layer>
    </vl-map>
  `;
};

export const WithSnapping = () => {
  return html`<vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-baselayer-grb></vl-map-baselayer-grb>
    <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    <vl-map-features-layer>
      <vl-map-layer-style></vl-map-layer-style>
      <vl-map-draw-line-action data-vl-default-active data-vl-snapping
        ><vl-map-wfs-layer
          data-vl-name="Stromend waterlichamen"
          data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
          data-vl-layers="owl_l"
          data-vl-max-resolution="4"
        >
          <vl-map-layer-style></vl-map-layer-style> </vl-map-wfs-layer
      ></vl-map-draw-line-action>
    </vl-map-features-layer>
  </vl-map>`;
};
