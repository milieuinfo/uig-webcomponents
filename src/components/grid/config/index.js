import { CATEGORIES } from "../../../../.storybook/utils.js";

export const args = {
  stacked: true,
  alignStart: false,
  alignCenter: false,
  alignEnd: false,
  alignSpaceBetween: false,
  alignSpaceAround: false,
  vTop: false,
  vCenter: false,
  vBottom: false,
  vStretch: false,
};

export const argTypes = {
  stacked: {
    name: "data-vl-is-stacked",
    description: "Add margin between stacked columns.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  alignStart: {
    name: "data-vl-align-start",
    description: "Align one or more columns on the left.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  alignCenter: {
    name: "data-vl-align-center",
    description: "Center one or more columns horizontally.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  alignEnd: {
    name: "data-vl-align-end",
    description: "Align one or more columns on the right.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  alignSpaceBetween: {
    name: "data-vl-align-space-between",
    description: "Leave as much space as possible between columns.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  alignSpaceAround: {
    name: "data-vl-align-space-around",
    description: "Leave as much space as possible around columns. ",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  vTop: {
    name: "data-vl-v-top",
    description: "Align one or more columns at the top.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  vCenter: {
    name: "data-vl-v-center",
    description: "Center one or more columns vertically.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  vBottom: {
    name: "data-vl-v-bottom",
    description: "Align one or more columns at the bottom.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  vStretch: {
    name: "data-vl-v-stretch",
    description: "Stretch the columns to their maximum height.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
};
