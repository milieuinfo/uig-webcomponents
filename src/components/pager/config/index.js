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
    description: "This attribute determines the total number of elements.",
    table: {
      type: { summary: "number" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 100 },
    },
  },
  currentPage: {
    name: "data-vl-current-page",
    description: "This attribute determines the current page.",
    table: {
      type: { summary: "number" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 1 },
    },
  },
  itemsPerPage: {
    name: "data-vl-items-per-page",
    description:
      "This attribute determines the number of rows to show per page.",
    table: {
      type: { summary: "number" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: 10 },
    },
  },
  paginationDisabled: {
    name: "data-vl-pagination-disabled",
    description:
      "This attribute determines if the page links should be disabled.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  alignCenter: {
    name: "data-vl-align-center",
    description: "This attribute is used to center the pagination.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  alignRight: {
    name: "data-vl-align-right",
    description:
      "This attribute is used to align the the pagination to the right.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  change: {
    name: "change",
    description:
      "This event is triggered when a click on a pager item happens. In the detail of the event you can find the current page, total page number, items per page number and the total items of the pagination.",
    table: { category: CATEGORIES.EVENTS },
  },
};
