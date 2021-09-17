import { html } from "lit-html";
import "../text";

export default {
  title: "native-elements/vl-text",
  args: { hidden: false, content: "Text" },
  argTypes: {
    hidden: {
      name: "data-vl-visually-hidden",
      type: { summary: "boolean" },
      description: "Attribuut wordt gebruikt om de text te verbergen.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    content: {
      name: "content (for demo purposes)",
    },
  },
};

export const Default = ({ hidden, content }) =>
  html`<span ?data-vl-visually-hidden=${hidden} is="vl-text">${content}</span>`;
