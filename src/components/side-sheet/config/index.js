export const args = {
  enableSwipe: false,
  left: false,
  absolute: false,
  toggleText: "toggle text",
};

export const argTypes = {
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
  toggleText: {
    name: "data-vl-toggle-text",
    type: { summary: "string" },
    description:
      "Attribute wordt gebruikt om de toggle knop tekst te wijzigen.",
    table: {
      defaultValue: { summary: "Zijpaneel" },
    },
  },
};
