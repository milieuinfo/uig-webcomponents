import { html } from "lit-html";
import { bodySimulation, docsIntro } from "../../../.storybook/utils.js";
import "../header";

export default {
  title: "custom-elements/vl-header",
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "header",
          intro: "De Vlaanderen header.",
        }),
      },
    },
  },
  args: {
    identifier: "59188ff6-662b-45b9-b23a-964ad48c2bfb",
    development: false,
  },
  argTypes: {
    identifier: {
      name: "data-vl-identifier",
      type: { summary: "string" },
      description:
        "De identifier die gebruikt wordt om bij AIV de footer op te halen.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    development: {
      name: "data-vl-development",
      type: { summary: "boolean" },
      description:
        "Attribuut geeft aan dat de AIV ontwikkel servers gebruikt moeten worden.",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export const Default = ({ identifier, development }) =>
  bodySimulation(
    html`
      <vl-header
        data-vl-identifier=${identifier}
        ?data-vl-development=${development}
      ></vl-header>
    `
  );
