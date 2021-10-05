import { html } from "lit-html";
import "../../../../../map";
import { argTypes as wmsLayerArgTypes } from "../config.js";
import { argTypes as layerArgTypes } from "../../config.js";
import { docsIntro } from "../../../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-map/vl-map-tiled-wms-layer",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "map",
          intro: "Deze kaartlaag staat toe om een WMS laag aan te maken.",
        }),
      },
    },
  },
  argTypes: { ...wmsLayerArgTypes, ...layerArgTypes },
};

export const Default = () => {
  return html`
    <vl-map id="map">
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-tiled-wms-layer
        data-vl-name="Gemeentegrenzen"
        data-vl-version="1.3.0"
        data-vl-opacity="1"
        data-vl-url="https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms"
        data-vl-layers="GEM_GRENS"
      >
      </vl-map-tiled-wms-layer>
    </vl-map>
  `;
};
