export const args = {
  content: "Button",
  secondary: false,
  tertiary: false,
  loading: false,
  disabled: false,
  error: false,
  block: false,
  large: false,
  wide: false,
  narrow: false,
};

export const argTypes = {
  secondary: {
    name: "data-vl-secondary",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt in combinatie met een gewone knop om alternatieve acties te voorzien.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  tertiary: {
    name: "data-vl-tertiary",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt in combinatie met gewone en secondary knoppen om alternatieve acties te voorzien.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  disabled: {
    name: "data-vl-disabled",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt om aan de gebruiker aan te duiden dat de functionaliteit niet actief is.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  error: {
    name: "data-vl-error",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt om het belang of de gevolgen van een actie te benadrukken.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  block: {
    name: "data-vl-block",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt om ervoor te zorgen dat de knop getoond wordt als een block element en bijgevol de breedte van de parent zal aannemen.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  large: {
    name: "data-vl-large",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt om de aandacht van de gebruiker te trekken door de font-size te vergroten.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  wide: {
    name: "data-vl-wide",
    type: { summary: "boolean" },
    description:
      "Attribuut zorgt ervoor dat de knop breder op het scherm zal getoond worden.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  narrow: {
    name: "data-vl-narrow",
    type: { summary: "boolean" },
    description:
      "Attribuut zorgt ervoor dat de knop smaller op het scherm zal getoond worden.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  loading: {
    name: "data-vl-loading",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt om aan de gebruiker aan te geven dat zijn actie momenteel verwerkt wordt.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  content: {
    name: "content (for demo purposes)",
    type: { summary: "string" },
  },
};
