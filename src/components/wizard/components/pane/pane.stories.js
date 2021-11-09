import { html } from "lit-html";
import "../../../wizard";
import { docsIntro, CATEGORIES } from "../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-wizard/vl-wizard-pane",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "wizard",
          intro: "",
        }),
      },
    },
  },
  args: { name: "Stap 1" },
  argTypes: {
    name: {
      name: "data-vl-name",
      description: "",
      table: {
        type: {
          summary: "string",
        },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
  },
};

export const Default = ({ name }) => {
  return html`<vl-wizard>
    <vl-wizard-pane data-vl-name=${name}><p>Pane content</p></vl-wizard-pane>
  </vl-wizard>`;
};
