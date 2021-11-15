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
            "Gebruik de pager component om het aantal beschikbare pagina's weer te geven, markeer de huidige pagina en voeg navigatie knoppen toe.",
        }),
      },
    },
  },
};

const Template = ({
  totalItems,
  itemsPerPage,
  currentPage,
  paginationDisabled,
  alignCenter,
  alignRight,
  change,
}) => html`
  <vl-pager
    data-vl-total-items=${totalItems}
    data-vl-items-per-page=${itemsPerPage}
    data-vl-current-page=${currentPage}
    ?data-vl-pagination-disabled=${paginationDisabled}
    ?data-vl-align-center=${alignCenter}
    ?data-vl-align-right=${alignRight}
    @change=${(event) => change(event.detail)}
  ></vl-pager>
`;

export const Default = Template.bind({});
export const SinglePage = Template.bind({});
export const WithoutPageItems = Template.bind({});

SinglePage.args = {
  totalItems: 10,
  itemsPerPage: 10,
  currentPage: 1,
  paginationDisabled: false,
};

WithoutPageItems.args = {
  totalItems: 100,
  itemsPerPage: 10,
  currentPage: 1,
  paginationDisabled: true,
};
