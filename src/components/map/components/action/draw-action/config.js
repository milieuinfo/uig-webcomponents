export const args = {
  defaultActive: true,
  layer: "",
  snapping: false,
  snappingPixelTolerance: 1000,
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
    type: { summary: "string" },
    description:
      "Attribuut wordt gebruikt om via het naam attribuut de actie te koppelen aan een kaartlaag.",
    table: {
      defaultValue: { summary: "" },
    },
    control: { disable: true },
  },
  snapping: {
    name: "data-vl-snapping",
    type: { summary: "string" },
    description:
      "Attribuut wordt gebruikt om aan te geven dat er bij het tekenen snapping mag gebeuren, hetzij op de laag waarop getekend wordt (indien geen vl-map-wfs-layer(s) als child elementen), hetzij op de meegegeven vl-map-wfs-layers.",
    table: {
      defaultValue: { summary: "false" },
    },
    control: { disable: true },
  },
  snappingPixelTolerance: {
    name: "data-vl-snapping-pixel-tolerance",
    type: { summary: "string" },
    description:
      "Attribuut om aan te geven binnen de hoeveel pixel van een feature er gesnapped mag worden.",
    table: {
      defaultValue: { summary: "10" },
    },
    control: { disable: true },
  },
};
