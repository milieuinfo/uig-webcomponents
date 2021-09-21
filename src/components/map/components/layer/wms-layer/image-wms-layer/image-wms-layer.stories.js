import { html } from "lit-html";
import "../../../../../map";
import { argTypes as wmsLayerArgTypes } from "../config.js";
import { argTypes as layerArgTypes } from "../../config.js";

export default {
  title: "custom-elements/vl-map/vl-map-image-wms-layer",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: { ...wmsLayerArgTypes, ...layerArgTypes },
};

export const Default = () => html`
  <vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-image-wms-layer
      data-vl-name="Beschermingszones"
      data-vl-version="1.3.0"
      data-vl-opacity="0.7"
      data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
      data-vl-layers="grondwater:beschermingszones_2014"
    >
    </vl-map-image-wms-layer>
  </vl-map>
`;
