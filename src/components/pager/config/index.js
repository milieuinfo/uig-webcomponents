export const args = {
  totalItems: 100,
  currentPage: 1,
  itemsPerPage: 10,
  paginationDisabled: false,
  alignCenter: false,
  alignRight: false,
};

export const argTypes = {
  totalItems: {
    name: "data-vl-total-items (demo purposes)",
    type: { summary: "number" },
    description: "Attribuut wordt gebruikt om totaal van elementen te bepalen.",
    table: {
      defaultValue: { summary: 100 },
    },
  },
  currentPage: {
    name: "data-vl-current-page (demo purposes)",
    type: { summary: "number" },
    description: "Attribuut wordt gebruikt om huidige pagina te bepalen.",
    table: {
      defaultValue: { summary: 1 },
    },
  },
  itemsPerPage: {
    name: "data-vl-items-per-page (demo purposes)",
    type: { summary: "number" },
    description:
      "Attribuut wordt gebruikt om het aantal rijen per pagina te bepalen.",
    table: {
      defaultValue: { summary: 10 },
    },
  },
  paginationDisabled: {
    name: "data-vl-pagination-disabled",
    type: { summary: "boolean" },
    description: "Attribuut wordt gebruikt om geen pagina links te tonen.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  alignCenter: {
    name: "data-vl-align-center",
    type: { summary: "boolean" },
    description: "Attribuut wordt gebruikt om de paginatie te centreren.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  alignRight: {
    name: "data-vl-align-right",
    type: { summary: "boolean" },
    description:
      "Attribuut wordt gebruikt om de paginatie rechts uit te lijnen.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};
