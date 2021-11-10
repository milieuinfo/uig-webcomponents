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
          intro:
            "Use a wizard to guide a user through a multi-step process. A wizard allows you to split up an advanced process into bite-size actions. A wizard also enables you to make options in a wizard step dependent on the choices a user makes in a previous step.",
        }),
      },
    },
  },
  args: { name: "Stap 1" },
  argTypes: {
    name: {
      name: "data-vl-name",
      description:
        "Sets the name of the pane. The name is visible in de tooltip of the step.",
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
  return html`<div style="max-width: 780px">
    <vl-wizard>
      <vl-wizard-pane data-vl-name=${name}><p>Pane content</p></vl-wizard-pane>
    </vl-wizard>
  </div>`;
};
