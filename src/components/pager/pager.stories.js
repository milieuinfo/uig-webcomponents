import { html } from "lit-html";
import "../pager";
import { docsIntro } from "../../../.storybook/utils.js";
import { args, argTypes } from "./config";

export default {
  title: "custom-elements/vl-pager",
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "pager",
          intro:
            "Use the pager component to show the number of available pages, highlight the current page (range) and add previous/next buttons for navigation.",
        }),
      },
    },
  },
};

export const Default = ({
  totalItems,
  itemsPerPage,
  currentPage,
  paginationDisabled,
  alignCenter,
  alignRight,
}) => html`
  <vl-pager
    data-vl-total-items=${totalItems}
    data-vl-items-per-page=${itemsPerPage}
    data-vl-current-page=${currentPage}
    ?data-vl-pagination-disabled=${paginationDisabled}
    ?data-vl-align-center=${alignCenter}
    ?data-vl-align-right=${alignRight}
  ></vl-pager>
`;

export const SinglePage = () => html`
  <vl-pager
    data-vl-total-items="10"
    data-vl-items-per-page="10"
    data-vl-current-page="1"
  ></vl-pager>
`;

export const WithoutPageItems = () => html`
  <vl-pager
    data-vl-total-items="100"
    data-vl-items-per-page="10"
    data-vl-current-page="1"
    data-vl-pagination-disabled=""
  ></vl-pager>
`;
