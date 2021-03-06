import { html } from "lit-html";
import "../grid";
import "../document";
import { docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-document",
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "document",
          intro:
            "Gebruik de document component om een link naar een bestand toe te voegen dat de gebruiker kan bekijken in de browser of downloaden.",
        }),
      },
    },
  },
  args: {
    href: "#",
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
    type: { name: "type (slot)" },
    title: { name: "title (slot)" },
    metadata: { name: "metadata (slot)" },
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
