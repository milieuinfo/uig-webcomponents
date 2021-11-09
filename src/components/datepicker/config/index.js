import { DATEPICKER_TYPE } from "../enum";

export const args = {
  type: DATEPICKER_TYPE.DATETIME,
  format: "",
  visualFormat: "",
  selectedDate: "",
  minDate: "",
  maxDate: "",
  minTime: "",
  maxTime: "",
  amPm: false,
  error: false,
  success: false,
  value: "",
  pattern: "",
  name: "",
};

export const argTypes = {
  type: {
    name: "data-vl-type",
    type: {
      summary: "string",
    },
    description: "Attribuut bepaalt het soort datepicker.",
    control: {
      type: "select",
      options: [
        DATEPICKER_TYPE.TIME,
        DATEPICKER_TYPE.RANGE,
        DATEPICKER_TYPE.DATETIME,
      ],
    },
    table: {
      defaultValue: { summary: DATEPICKER_TYPE.DATETIME },
    },
  },
  format: {
    name: "data-vl-format",
    type: { summary: "string" },
    description:
      "Attribuut bepaalt het formaat van de datum/tijd waarde, standaard 'd.m.Y' (-> 31.12.2019).",
    table: {
      defaultValue: { summary: "" },
    },
  },
  visualFormat: {
    name: "data-vl-visual-format",
    type: { summary: "string" },
    description:
      "Attribuut bepaalt het visueel formaat van de datum/tijd waarde.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  selectedDate: {
    name: "data-vl-selected-date",
    type: { summary: "string" },
    description:
      "Attribuut voor een vooringestelde datum conform het ingestelde formaat (bv. '03-10-2019') of 'today' voor vandaag.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  minDate: {
    name: "data-vl-min-date",
    type: { summary: "string" },
    description:
      "Attribuut voor een minimum datum conform het ingestelde formaat (bv. '01-01-2019') of 'today' voor vandaag.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  maxDate: {
    name: "data-vl-max-date",
    type: { summary: "string" },
    description:
      "Attribuut voor een maximum datum conform het ingestelde format (bv. '31-12-2019') of 'today' voor vandaag.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  minTime: {
    name: "data-vl-min-time",
    type: { summary: "string" },
    description:
      "Attribuut voor een minimum tijd conform het ingestelde formaat (bv. '09:00').",
    table: {
      defaultValue: { summary: "" },
    },
  },
  maxTime: {
    name: "data-vl-min-time",
    type: { summary: "string" },
    description:
      "Attribuut voor een maximum tijd conform het ingestelde format (bv. '17:00').",
    table: {
      defaultValue: { summary: "" },
    },
  },
  anPm: {
    name: "data-vl-am-pm",
    type: { summary: "boolean" },
    description: "Attribuut om de 12-uurs AM/PM timepicker te activeren.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  error: {
    name: "data-vl-error",
    type: { summary: "boolean" },
    description: "Attribuut om aan te geven dat de datepicker een error bevat.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  success: {
    name: "data-vl-success",
    type: { summary: "boolean" },
    description:
      "Attribuut om aan te geven dat de datepicker geen error bevat.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  value: {
    name: "data-vl-value",
    type: { summary: "string" },
    description: "Attribuut om de waarde te definiëren.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  pattern: {
    name: "data-vl-pattern",
    type: { summary: "string" },
    description:
      "Attribuut om aan te geven aan welk patroon de input moet voldoen.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  name: {
    name: "data-vl-name",
    type: { summary: "string" },
    description: "Attribuut om aan de naam te definiëren.",
    table: {
      defaultValue: { summary: "" },
    },
  },
};
