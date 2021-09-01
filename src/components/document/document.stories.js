import { html } from "lit-html";
import "../grid";
import "../document";

export default {
  title: "custom-elements/vl-document",
  args: {
    href: "",
    type: "PDF",
    title: "Hubert en Jan van Eyck, Vlaamse Primitieven",
    metadata: "PDF - 580 kB",
  },
  argTypes: {
    href: {
      name: "data-vl-href",
      type: { summary: "string" },
      description: "Attribuut wordt gebruikt om de download link te bepalen.",
      table: {
        defaultValue: { summary: "#" },
      },
    },
    type: { name: "type (for demo purposes)" },
    title: { name: "title (for demo purposes)" },
    metadata: { name: "metadata (for demo purposes)" },
  },
};

export const Default = ({ href, type, title, metadata }) => html`<div
  is="vl-grid"
>
  <div is="vl-column" data-vl-size="3" data-vl-medium-size="6">
    <vl-document data-vl-href=${href}>
      <span slot="type">${type}</span>
      <span slot="title">${title}</span>
      <span slot="metadata">${metadata}</span>
    </vl-document>
  </div>
</div>`;
