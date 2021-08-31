import { html } from "lit-html";
import "../footer";

export default {
  title: "custom-elements/vl-footer",
  args: {
    identifier: "0337f8dc-3266-4e7a-8f4a-95fd65189e5b",
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
    <vl-footer
      data-vl-identifier=${identifier}
      ?data-vl-development=${development}
    ></vl-footer>
  `;
