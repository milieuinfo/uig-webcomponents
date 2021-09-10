import { html } from "lit-html";
import "../../index.js";
import "../../mapactions";
import styles from "../../styles.scss";

const defaultArgs = {
  type: "wmts",
  url: "",
  layer: "",
  title: "",
};

export default {
  title: "custom-elements/vl-map/vl-map-baselayer-grb",
  args: { ...defaultArgs },
  argTypes: {
    type: {
      name: "data-vl-type",
      type: "select",
      options: ["wmts", "wfs"],
      description:
        "Attribuut wordt gebruikt om aan te geven wat het type is van de kaartlaag.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    url: {
      name: "data-vl-url",
      type: { summary: "string" },
      description:
        "Attribuut geeft aan via welke URL gebruikt wordt om de kaartlaag op te halen.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    layer: {
      name: "data-vl-layer",
      type: { summary: "string" },
      description: "Attribuut geeft aan wat de kaartlaag identifier is.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    title: {
      name: "data-vl-title",
      type: { summary: "string" },
      description: "Attribuut bepaalt de titel van de kaartlaag.",
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
        <vl-map-baselayer-grb id="baselayer-grb"></vl-map-baselayer-grb>
      </vl-map>
    `
  )}
`;
