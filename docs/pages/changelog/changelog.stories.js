import { html } from "lit-html";
import { version } from "../../../package.json";
import ".";

export default {
  title: `UIG-${version}/Changelog`,
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};

export const Changelog = () => html`<docs-changelog></docs-changelog>`;
