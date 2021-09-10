import { html } from "lit-html";
import "../../../../index.js";
import "../../../../mapactions";
import styles from "../../../../styles.scss";
import { defaultArgs, defaultArgTypes } from "../../config";

export default {
  title: "custom-elements/vl-map/vl-map-wfs-layer",
  args: {
    ...defaultArgs,
    url: "",
    layers: "",
  },
  argTypes: {
    ...defaultArgTypes,
    url: {
      name: "data-vl-url",
      type: { summary: "string" },
      description: "Attribuut bepaalt de WMS url. Verplicht.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    layers: {
      name: "data-vl-layers",
      type: { summary: "string" },
      description: "Attribuut bepaalt de layers van de WMS. Verplicht.",
      table: {
        defaultValue: { summary: "" },
      },
    },
  },
};

const stylesheet = html`<style>
  ${styles}
</style>`;

const mapWrapper = (props, children) => {
  return html`
    ${stylesheet}
    <div is="vl-grid">${children}</div>
  `;
};

export const Default = (props) => html`
  ${mapWrapper(
    props,
    html`
      <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-wfs-layer
          data-vl-name="Oppervlaktewaterlichamen"
          data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
          data-vl-layers="owl_l"
          data-vl-max-resolution="8"
        >
        </vl-map-wfs-layer>
      </vl-map>
    `
  )}
`;
