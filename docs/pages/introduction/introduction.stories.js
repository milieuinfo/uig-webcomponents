import { html } from "lit-html";
import { version } from "../../../package.json";
import ".";

export default {
  title: `UIG-${version}/Introduction`,
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};

export const Introduction = () => html`<docs-introduction></docs-introduction>`;
