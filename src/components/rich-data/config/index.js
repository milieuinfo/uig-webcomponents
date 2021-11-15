export const args = {
  filterClosable: false,
  filterClosed: false,
};

export const argTypes = {
  filterClosable: {
    name: "data-vl-filter-closable",
    type: { summary: "boolean" },
    description:
      "Attribute that makes the filter closable and shows a button to show and hide the filter again. A modal is opened on a small screen when clicking the filter button instead of showing the filter next to the table. To hide elements of the filter only in the modal, the attribute data-vl-hidden-in-modal can be set. ",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  filterClosed: {
    name: "data-vl-filter-closed",
    type: { summary: "boolean" },
    description: "Attribute indicating whether the filter is closed. ",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};
