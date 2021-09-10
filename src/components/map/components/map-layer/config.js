export const defaultArgs = {
  name: "",
  hidden: "",
};

export const defaultArgTypes = {
  name: {
    name: "data-vl-name",
    type: { summary: "string" },
    description: "Attribuut bepaalt de kaartlaag naam.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  hidden: {
    name: "data-vl-hidden",
    type: { summary: "string" },
    description: "Attribuut bepaalt of de kaartlaag zichtbaar is.",
    table: {
      defaultValue: { summary: "" },
    },
  },
};
