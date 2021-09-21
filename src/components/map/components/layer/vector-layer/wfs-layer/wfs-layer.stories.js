import { html } from "lit-html";
import "../../../../../map";
import { argTypes } from "../../config";

export default {
  title: "custom-elements/vl-map/vl-map-wfs-layer",
  argTypes: {
    ...argTypes,
    url: {
      name: "data-vl-url",
      type: { summary: "string" },
      description: "Attribuut bepaalt de WMS url. Verplicht.",
      control: { disable: true },
    },
    layers: {
      name: "data-vl-layers",
      type: { summary: "string" },
      description: "Attribuut bepaalt de layers van de WMS. Verplicht.",
      control: { disable: true },
    },
  },
};
export const Default = () => html`
  <vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-wfs-layer
      data-vl-name="Oppervlaktewaterlichamen"
      data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
      data-vl-layers="owl_l"
      data-vl-max-resolution=${8}
    >
    </vl-map-wfs-layer>
  </vl-map>
`;
