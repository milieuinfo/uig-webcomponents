import { html } from "lit-html";
import "../progress-bar";
import { CATEGORIES, docsIntro } from "../../../.storybook/utils.js";
import { action } from "@storybook/addon-actions";

export default {
  title: "custom-elements/vl-progress-bar",
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "progress-bar",
          intro:
            "Use the progress bar component to show the progress for a specific or multi-step process.",
        }),
      },
    },
  },
  args: {
    numeric: false,
    activeStep: 1,
    focusOnChange: false,
    steps: ["Stap 1/3: Aanvraag", "Stap 2/3: Gegevens", "Stap 3/3: Bevestigen"],
    onClickStep: action("vl-click-step"),
  },
  argTypes: {
    numeric: {
      name: "data-vl-numeric",
      description: "Replaces the bullets by numbers.",
      table: {
        type: {
          summary: "boolean",
        },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: false },
      },
    },
    activeStep: {
      name: "data-vl-active-step",
      description: "Sets the active step of the progress bar.",
      control: { type: "range", min: 1, max: 3, step: 1 },
      table: {
        type: {
          summary: "number",
        },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 1 },
      },
    },
    focusOnChange: {
      name: "data-vl-focus-on-change",
      description: "Sets whether the step must be focused on on change or not.",
      table: {
        type: {
          summary: "boolean",
        },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: false },
      },
    },
    onClickStep: {
      name: "vl-click-step",
      description:
        "The custom event fired on click of a step. In the detail of the event, you can find the number and name of the clicked step.",
      table: { category: CATEGORIES.EVENTS },
    },
    steps: {
      description: "Sets the steps with an array of strings.",
      type: { summary: "array" },
      table: {
        category: CATEGORIES.PROPERTIES,
        defaultValue: { summary: "[]" },
      },
    },
  },
};

export const Default = ({
  numeric,
  activeStep,
  steps,
  focusOnChange,
  onClickStep,
}) => {
  return html`<vl-progress-bar
    ?data-vl-numeric=${numeric}
    ?data-vl-focus-on-change=${focusOnChange}
    data-vl-active-step=${activeStep}
    .steps=${steps}
    @vl-click-step=${(event) => onClickStep(event.detail)}
  >
  </vl-progress-bar>`;
};
