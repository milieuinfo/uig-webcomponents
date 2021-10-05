export const argTypes = {
  name: {
    name: "data-vl-name",
    type: { summary: "string" },
    description: "Attribuut bepaalt de kaartlaag naam.",
    control: { disable: true },
  },
  hidden: {
    name: "data-vl-hidden",
    type: { summary: "boolean" },
    description: "Attribuut bepaalt of de kaartlaag zichtbaar is.",
    table: {
      defaultValue: { summary: "false" },
    },
    control: { disable: true },
  },
  minResolution: {
    name: "data-vl-min-resolution",
    type: { summary: "number" },
    description: "",
    table: {
      defaultValue: { summary: 0 },
    },
    control: { disable: true },
  },
  maxResolution: {
    name: "data-vl-max-resolution",
    type: { summary: "number" },
    description: "",
    table: {
      defaultValue: { summary: Infinity },
    },
    control: { disable: true },
  },
};
