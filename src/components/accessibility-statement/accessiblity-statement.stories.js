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
          intro: "Toegankelijkheid pagina.",
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
    evaluation: EVALUATION_STATUS.EXPERT_EVALUATED,
  },
  argTypes: {
    application: {
      name: "data-vl-application",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om te duiden over welke applicatie de verklaring gaat.",
      table: {
        defaultValue: { summary: '"deze applicatie"' },
      },
    },
    version: {
      name: "data-vl-version",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om de huidige versie van de verklaring aan te geven.",
      table: {
        defaultValue: { summary: '"1.0.0"' },
      },
    },
    date: {
      name: "data-vl-date",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om de aanmaakdatum van de verklaring te beschrijven.",
      table: {
        defaultValue: { summary: '"20 juli 2021"' },
      },
    },
    dateModified: {
      name: "data-vl-date-modified",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om de datum van de laatste wijziging van de verklaring te beschrijven.",
      table: {
        defaultValue: { summary: '"20 juli 2021"' },
      },
    },
    compliance: {
      name: "data-vl-compliance",
      type: {
        summary: `${COMPLIANCE_STATUS.FULLY_COMPLIANT} |
      ${COMPLIANCE_STATUS.PARTIALLY_COMPLIANT} |
      ${COMPLIANCE_STATUS.NOT_COMPLIANT}`,
      },
      description: "Attribuut om de nalevingsstatus aan te geven.",
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
      description:
        "Attribuut om limitaties mee te geven aan de verklaring. De string die verwacht wordt is de `id` van een script dat aanwezig is op de pagina waarin een object zit. Voorbeeld van zo'n object: `{withTiming: ['limitatie 1', 'limitatie 2'], withoutTiming: ['limitatie 3']}`. Met de property `withTiming` geef je tijdelijke limitaties mee, met de property `withoutTiming` permanente limitaties. Bekijk de broncode van deze story voor een praktisch voorbeeld.",
      control: {
        type: "select",
        options: ["limitations-01", "limitations-02"],
      },
    },
    evaluation: {
      name: "data-vl-evaluation",
      type: {
        summary: `${EVALUATION_STATUS.EXPERT_EVALUATED} |
      ${EVALUATION_STATUS.SELF_EVALUATED} |
      ${EVALUATION_STATUS.NOT_EVALUATED}`,
      },
      description:
        "Attribuut om de evaluatiestatus van de verklaring aan te geven.",
      control: {
        type: "select",
        options: [
          EVALUATION_STATUS.EXPERT_EVALUATED,
          EVALUATION_STATUS.SELF_EVALUATED,
          EVALUATION_STATUS.NOT_EVALUATED,
        ],
      },
      table: {
        defaultValue: { summary: `"${EVALUATION_STATUS.EXPERT_EVALUATED}"` },
      },
    },
  },
};

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
      {
        "withTiming": [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ],
        "withoutTiming": [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ]
      }
    </script>
    <script id="limitations-02" type="application/json">
      {
        "withTiming": [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ],
        "withoutTiming": [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ]
      }
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
