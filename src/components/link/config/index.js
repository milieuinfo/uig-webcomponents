export const args = {
  block: false,
  error: false,
  content: "Terug naar overzicht",
};

export const argTypes = {
  block: {
    name: "data-vl-block",
    type: { summary: "boolean" },
    description:
      "Attribuut zorgt ervoor dat het element als block getoond wordt.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  error: {
    name: "data-vl-error",
    type: { summary: "boolean" },
    description:
      "Attribuut zorgt ervoor dat het element als error getoond wordt.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  content: { name: "content (for demo purposes)" },
};

export const iconArgs = {
  type: "before",
  icon: "arrow-right-fat",
};

export const iconArgTypes = {
  type: {
    name: "type (for demo purposes)",
    control: {
      type: "select",
      options: ["before", "after"],
    },
  },
  icon: {
    name: "icon (for demo purposes)",
    type: "select",
    options: ["arrow-right-fat", "external"],
    table: {
      type: { summary: "string" },
    },
  },
};
