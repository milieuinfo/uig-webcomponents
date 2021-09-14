import { html } from "lit-html";
import { version } from "../../../package.json";
import "../introduction";

export default {
  title: `UIG-${version}/Introduction`,
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
    controls: { hideNoControlsWarning: true },
  },
};

export const Introduction = () => html`<docs-introduction></docs-introduction>`;
