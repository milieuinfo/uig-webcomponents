export const args = {
  hover: false,
  matrix: false,
  lined: false,
  zebra: false,
  collapsedM: false,
  collapsedS: false,
  collapsedXS: false,
};

export const argTypes = {
  hover: {
    name: "data-vl-hover",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt om een rij te highlighten waneer de gebruiker erover hovert met muiscursor.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  matrix: {
    name: "data-vl-matrix",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt om data in 2 dimensies te tonen. Zowel de rijen als de kolommen krijgen een titel. Deze titels worden gescheiden door een dikke lijn.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  lined: {
    name: "data-vl-lined",
    type: { summary: "boolean" },
    description: "Variant met een lijn tussen elke rij en kolom.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  zebra: {
    name: "data-vl-zebra",
    type: { summary: "boolean" },
    description:
      "Variant waarin de rijen afwisslend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  collapsedM: {
    name: "data-vl-collapsed-m",
    type: { summary: "boolean" },
    description:
      "Vanaf een medium schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  collapsedS: {
    name: "data-vl-collapsed-s",
    type: { summary: "boolean" },
    description:
      "Vanaf een small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  collapsedXS: {
    name: "data-vl-collapsed-xs",
    type: { summary: "boolean" },
    description:
      "Vanaf een extra small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};
