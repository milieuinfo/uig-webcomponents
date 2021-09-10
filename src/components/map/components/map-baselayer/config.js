export const defaultArgs = {
  type: "wmts",
  url: "",
  layer: "",
  title: "",
};

export const defaultArgTypes = {
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
};
