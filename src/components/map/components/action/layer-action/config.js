export const args = {
  defaultActive: false,
  layer: false,
};

export const argTypes = {
  defaultActive: {
    name: "data-vl-default-active",
    type: { summary: "boolean" },
    description: "Attribuut wordt gebruikt om de actie standaard te activeren.",
    table: {
      defaultValue: { summary: "false" },
    },
    control: { disable: true },
  },
  layer: {
    name: "data-vl-layer",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt om via het naam attribuut de actie te koppelen aan een kaartlaag.",
    table: {
      defaultValue: { summary: "false" },
    },
    control: { disable: true },
  },
};
