import { CATEGORIES } from "../../../../.storybook/utils.js";
import { action } from "@storybook/addon-actions";

export const args = {
  totalItems: 50,
  currentPage: 1,
  itemsPerPage: 7,
  paginationDisabled: false,
  alignCenter: false,
  alignRight: false,
  change: action("change"),
};

export const argTypes = {
  totalItems: {
    name: "data-vl-total-items",
    description: "Attribuut wordt gebruikt om totaal van elementen te bepalen.",
    table: {
      type: { summary: "number" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 100 },
    },
  },
  currentPage: {
    name: "data-vl-current-page",
    description: "Attribuut wordt gebruikt om huidige pagina te bepalen.",
    table: {
      type: { summary: "number" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 1 },
    },
  },
  itemsPerPage: {
    name: "data-vl-items-per-page",
    description:
      "Attribuut wordt gebruikt om het aantal rijen per pagina te bepalen.",
    table: {
      type: { summary: "number" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 10 },
    },
  },
  paginationDisabled: {
    name: "data-vl-pagination-disabled",
    description: "Attribuut wordt gebruikt om geen pagina links te tonen.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  alignCenter: {
    name: "data-vl-align-center",
    description: "Attribuut wordt gebruikt om de paginatie te centreren.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  alignRight: {
    name: "data-vl-align-right",
    description:
      "Attribuut wordt gebruikt om de paginatie rechts uit te lijnen.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  change: {
    name: "change",
    description:
      "Dit event gebeurd wanneer een klik op een pager item gebeurd.",
    table: { category: CATEGORIES.EVENTS },
  },
};
