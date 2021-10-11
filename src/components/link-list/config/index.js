export const args = {
  small: false,
  inline: false,
  bordered: false,
};

export const argTypes = {
  small: {
    name: "data-vl-small",
    type: { summary: "boolean" },
    description: "The smaller variant of a link-list.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  inline: {
    name: "data-vl-inline",
    type: { summary: "boolean" },
    description:
      "A link-list that is displayed as an inline list, will follow the original flow of content.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  bordered: {
    name: "data-vl-bordered",
    type: { summary: "boolean" },
    description: "A link-list that is displayed as a bordered link-list.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};
