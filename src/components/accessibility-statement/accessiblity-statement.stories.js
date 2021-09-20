import { html } from "lit-html";
import "../accessibility-statement";
import { COMPLIANCE_STATUS, EVALUATION_STATUS } from "./enums";
import { docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-accessibility-statement",
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "accessibility-statement",
          intro: "Toegankelijkheidspagina.",
        }),
      },
    },
  },
  args: {
    application: "deze applicatie",
    version: "1.0.0",
    date: "20 juli 2021",
    dateModified: "20 juli 2021",
    compliance: COMPLIANCE_STATUS.PARTIALLY_COMPLIANT,
    limitations: "limitations-01",
    evaluation: EVALUATION_STATUS.SELF_EVALUATED,
  },
  argTypes: {
    application: {
      name: "data-vl-application",
      type: { summary: "string" },
      description: "description",
      table: {
        defaultValue: { summary: '"deze applicatie"' },
      },
    },
    version: {
      name: "data-vl-version",
      type: { summary: "string" },
      description: "description",
      table: {
        defaultValue: { summary: '"1.0.0"' },
      },
    },
    date: {
      name: "data-vl-date",
      type: { summary: "string" },
      description: "description",
      table: {
        defaultValue: { summary: '"20 juli 2021"' },
      },
    },
    dateModified: {
      name: "data-vl-date-modified",
      type: { summary: "string" },
      description: "description",
      table: {
        defaultValue: { summary: '"20 juli 2021"' },
      },
    },
    compliance: {
      name: "data-vl-compliance",
      type: { summary: "string" },
      description: "description",
      control: {
        type: "select",
        options: [
          COMPLIANCE_STATUS.FULLY_COMPLIANT,
          COMPLIANCE_STATUS.PARTIALLY_COMPLIANT,
          COMPLIANCE_STATUS.NOT_COMPLIANT,
        ],
      },
      table: {
        defaultValue: { summary: `"${COMPLIANCE_STATUS.PARTIALLY_COMPLIANT}"` },
      },
    },
    limitations: {
      name: "data-vl-limitations",
      type: { summary: "string" },
      description: "description",
      control: {
        type: "select",
        options: ["limitations-01", "limitations-02"],
      },
      table: {
        defaultValue: { summary: "" },
      },
    },
    evaluation: {
      name: "data-vl-evaluation",
      type: { summary: "string" },
      description: "description",
      control: {
        type: "select",
        options: [
          EVALUATION_STATUS.EXPERT_EVALUATED,
          EVALUATION_STATUS.SELF_EVALUATED,
          EVALUATION_STATUS.NOT_EVALUATED,
        ],
      },
      table: {
        defaultValue: { summary: `"${EVALUATION_STATUS.SELF_EVALUATED}"` },
      },
    },
  },
};

// export const Default = () =>
//   html`<vl-accessibility-statement></vl-accessibility-statement>`;

export const Default = ({
  application,
  version,
  date,
  dateModified,
  compliance,
  limitations,
  evaluation,
}) => {
  return html` <script id="limitations-01" type="application/json">
      [
        {
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "alternative": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
          "timing": "Lorem ipsum dolor sit amet"
        },
        {
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "alternative": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
        }
      ]
    </script>
    <script id="limitations-02" type="application/json">
      [
        {
          "description": "Limitations 2 issue",
          "alternative": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
          "timing": "Lorem ipsum dolor sit amet"
        },
        {
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "alternative": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
        }
      ]
    </script>
    <vl-accessibility-statement
      data-vl-application=${application}
      data-vl-version=${version}
      data-vl-date=${date}
      data-vl-date-modified=${dateModified}
      data-vl-compliance=${compliance}
      data-vl-limitations=${limitations}
      data-vl-evaluation=${evaluation}
    ></vl-accessibility-statement>`;
};
