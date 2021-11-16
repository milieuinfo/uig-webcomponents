import { CATEGORIES } from "../../../../.storybook/utils.js";

export const args = {
  title: "Lorem ipsum",
  alt: false,
  mobileModal: false,
  mobileModalTitle: "Lorem ipsum dolor set",
};

export const argTypes = {
  title: {
    name: "data-vl-title",
    description: "De titel van deze search filter.",
    table: {
      type: { summary: "string" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "" },
    },
  },
  alt: {
    name: "data-vl-alt",
    description: "Alternatieve (transparante) achtergrond.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  mobileModal: {
    name: "data-vl-mobile-modal",
    description:
      "Activeert geoptimaliseerde weergave voor op mobiele toestellen.",
    table: {
      type: { summary: "boolean" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "false" },
    },
  },
  mobileModalTitle: {
    name: "data-vl-mobile-modal-title",
    description:
      "De titel van deze search filter op mobiele toestellen indien niet gedeclareerd wordt het data-vl-title attribuut of de default genomen.",
    table: {
      type: { summary: "string" },
      category: CATEGORIES.ATTRIBUTES,
      defaultValue: { summary: "" },
    },
  },
};
