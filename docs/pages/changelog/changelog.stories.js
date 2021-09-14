import { html } from "lit-html";
import { version } from "../../../package.json";
import "../changelog";

export default {
  title: `UIG-${version}/Changelog`,
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
    controls: { hideNoControlsWarning: true },
  },
};

export const Changelog = () => html`<docs-changelog></docs-changelog>`;
