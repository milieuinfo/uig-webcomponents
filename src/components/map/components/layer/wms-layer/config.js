export const argTypes = {
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
  styles: {
    name: "data-vl-styles",
    type: { summary: "string" },
    description: "Attribuut bepaalt de WMS stijlen.",
    control: { disable: true },
  },
  version: {
    name: "data-vl-version",
    type: { summary: "string" },
    description: "Attribuut bepaalt de WMS versie.",
    table: {
      defaultValue: { summary: "1.3.0" },
    },
    control: { disable: true },
  },
  opacity: {
    name: "data-vl-opacity",
    type: { summary: "number" },
    description: "Attribuut bepaalt de WMS transparantie.",
    table: {
      defaultValue: { summary: 1 },
    },
    control: { disable: true },
  },
};
