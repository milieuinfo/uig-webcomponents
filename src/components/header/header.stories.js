import { html } from "lit-html";
import "../header";

export default {
  title: "custom-elements/vl-header",
  args: {
    identifier: "59188ff6-662b-45b9-b23a-964ad48c2bfb",
    development: true,
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
        defaultValue: { summary: true },
      },
    },
  },
};

export const Default = ({ identifier, development }) =>
  html`
    <vl-header
      data-vl-identifier=${identifier}
      ?data-vl-development=${development}
    ></vl-header>
  `;