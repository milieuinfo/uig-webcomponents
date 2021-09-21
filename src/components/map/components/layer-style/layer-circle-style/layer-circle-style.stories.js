import { html } from "lit-html";
import "../../../../map";
import { argTypes } from "../config.js";

export default {
  title: "custom-elements/vl-map/vl-map-layer-circle-style",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    ...argTypes,
    size: {
      name: "data-vl-size",
      type: { summary: "number" },
      description:
        "Attribuut wordt gebruikt om aan te geven wat de grootte is van de cirkels",
      table: {
        defaultValue: { summary: 5 },
      },
      control: { disable: true },
    },
    borderColor: {
      name: "data-vl-border-color",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om aan te geven wat de color is van de randen van de cirkels.",
      table: {
        defaultValue: { summary: "rgba(0, 0, 0, 0)" },
      },
      control: { disable: true },
    },
    borderSize: {
      name: "data-vl-border-size",
      type: { summary: "number" },
      description:
        "Attribuut wordt gebruikt om aan te geven wat de grootte is van de randen van de cirkels.",
      table: {
        defaultValue: { summary: 1 },
      },
      control: { disable: true },
    },
    clusterTextColor: {
      name: "data-vl-cluster-text-color",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om aan te geven wat de kleur van de tekst is bij het clusteren van features.",
      table: {
        defaultValue: { summary: "#FFF" },
      },
      control: { disable: true },
    },
    clusterColor: {
      name: "data-vl-cluster-color",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om aan te geven wat de kleur is bij het clusteren van features.",
      table: {
        defaultValue: { summary: "rgba(2, 85, 204, 1)" },
      },
      control: { disable: true },
    },
  },
};

export const Default = () => {
  const features = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [147055.0, 197908.0],
        },
      },
    ],
  };
  return html`<vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer data-vl-features=${JSON.stringify(features)}>
      <vl-map-layer-circle-style
        data-vl-color="#ffe615"
        data-vl-size="5"
        data-vl-border-color="#000"
        data-vl-border-size="1"
      ></vl-map-layer-circle-style>
    </vl-map-features-layer>
  </vl-map>`;
};
