import { PATTERN } from "../enums/index";

export const args = {
  pattern: "",
  patternPrefix: "",
  patternDressed: false,
};

export const argTypes = {
  pattern: {
    name: "data-vl-pattern",
    type: { summary: "string" },
    description: "",
    control: {
      type: "select",
      options: [
        PATTERN.RRN,
        PATTERN.DATE,
        PATTERN.IBAN,
        PATTERN.UUID,
        PATTERN.PHONE,
        PATTERN.PRICE,
        PATTERN.NUMERICAL,
      ],
    },
    table: {
      defaultValue: { summary: "" },
    },
  },
  patternPrefix: {
    name: "data-vl-pattern-prefix",
    type: { summary: "string" },
    description: "",
    table: {
      defaultValue: { summary: "" },
    },
  },
  patternDressed: {
    name: "data-vl-pattern-dressed",
    type: { summary: "boolean" },
    description: "",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};
