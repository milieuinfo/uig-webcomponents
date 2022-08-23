import { html } from "lit-html";
import "./vl-text.element";

export default {
  title: "Elements/vl-text",
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

interface DefaultInterface {
  hidden: string,
  content: any,
}

export const Default = ({ hidden, content }: DefaultInterface) =>
  html`<span ?data-vl-visually-hidden=${hidden} is="vl-text" data-cy="text-default">${content}</span>`;
