import { html } from "lit-html";
import { version } from "../../../package.json";
import "../contribute";

export default {
  title: `UIG-${version}/Contribute`,
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};

export const Contribute = () => html`<docs-contribute></docs-contribute>`;
