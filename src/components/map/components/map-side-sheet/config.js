export const defaultArgs = {
  enableSwipe: false,
  left: false,
  absolute: false,
  right: false,
  toggleText: false,
};

export const defaultArgTypes = {
  enableSwipe: {
    name: "data-vl-enable-swipe",
    type: { summary: "boolean" },
    description:
      "Attribute wordt gebruikt om aan te duiden dat swipe functie toegelaten is.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  left: {
    name: "data-vl-left",
    type: { summary: "boolean" },
    description:
      "Attribute wordt gebruikt om aan te duiden dat de side-sheet de linkererand van het scherm moet plaatsen",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  absolute: {
    name: "data-vl-absolute",
    type: { summary: "boolean" },
    description:
      "Attribute wordt gebruikt om aan te duiden dat de side-sheet absoluut gepositioneerd wordt.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  right: {
    name: "data-vl-right",
    type: { summary: "boolean" },
    description:
      "Attribute wordt gebruikt om aan te duiden dat de side-sheet de rechterkant van het scherm moet plaatsen.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  toggleText: {
    name: "data-vl-toggle-text",
    type: { summary: "boolean" },
    description:
      "Attribute wordt gebruikt om de toggle knop tekst te wijzigen.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};
