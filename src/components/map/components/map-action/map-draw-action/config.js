export const defaultArgs = {
  defaultActive: false,
  layer: false,
  snapping: "",
  snappingPixelTolerance: 10,
};

export const defaultArgTypes = {
  defaultActive: {
    name: "data-vl-default-active",
    type: { summary: "boolean" },
    description: "Attribuut wordt gebruikt om de actie standaard te activeren.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  layer: {
    name: "data-vl-layer",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt om via het naam attribuut de actie te koppelen aan een kaartlaag.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  snapping: {
    name: "data-vl-snapping",
    type: { summary: "string" },
    description:
      "Attribuut wordt gebruikt om aan te geven dat er bij het tekenen snapping mag gebeuren, hetzij op de laag waarop getekend wordt (indien geen vl-map-wfs-layer(s) als child elementen), hetzij op de meegegeven vl-map-wfs-layers.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  snappingPixelTolerance: {
    name: "data-vl-snapping-pixel-tolerance",
    type: { summary: "string" },
    description:
      "Attribuut om aan te geven binnen de hoeveel pixel van een feature er gesnapped mag worden.",
    table: {
      defaultValue: { summary: "" },
    },
  },
};
