import { RICH_DATA_FIELD_SORTING_DIRECTION } from "../enum/index";

export const args = {
  name: "",
  label: "",
  selector: "",
  sortable: false,
  sortingDirection: RICH_DATA_FIELD_SORTING_DIRECTION.ASC,
  sortingPriority: "",
};

export const argTypes = {
  name: {
    name: "data-vl-name",
    type: { summary: "string" },
    description:
      "Een naam die gebruikt kan worden om het veld te benoemen. Dit wordt gebruikt voor de sortering.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  label: {
    name: "data-vl-label",
    type: { summary: "string" },
    description: "Een naam die getoond kan worden aan de gebruiker.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  selector: {
    name: "data-vl-selector",
    type: { summary: "string" },
    description:
      "De selector die gebruikt wordt om de juiste waarde uit de data te halen.",
    table: {
      defaultValue: { summary: "" },
    },
  },
  sortable: {
    name: "data-vl-sortable",
    type: { summary: "boolean" },
    description: "Of er gesorteerd moet kunnen worden.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  sortingDirection: {
    name: "data-vl-sorting-direction",
    type: { summary: "string" },
    description:
      "In welke volgorde er initieel gesorteerd wordt. Indien leeg, is er nog geen sorteringsrichting voorgedefinieerd.",
    control: {
      type: "select",
      options: [
        RICH_DATA_FIELD_SORTING_DIRECTION.ASC,
        RICH_DATA_FIELD_SORTING_DIRECTION.DESC,
      ],
    },
    table: {
      defaultValue: { summary: "" },
    },
  },
  sortingPriority: {
    name: "data-vl-sorting-priority",
    type: { summary: "string" },
    description:
      "Welke prioriteit er initieel gebruikt wordt voor de sortering. Indien leeg, is er nog geen prioriteit gekozen. 1 is de hoogste prioriteit, 2 is een lagere prioriteit, en zo verder.",
    table: {
      defaultValue: { summary: "" },
    },
  },
};
