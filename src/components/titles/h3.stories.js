import { html } from "lit-html";
import "../titles";
import styles from "./styles.scss";
import { args, argTypes, parameters } from "./config";
import { stylesheet } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-titles/vl-h3",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args,
  argTypes,
  parameters,
};

export const Default = ({ border, content, sans, alt, noSpaceBottom }) =>
  html`<h3
    is="vl-h3"
    ?data-vl-has-border=${border}
    ?data-vl-sans=${sans}
    ?data-vl-alt=${alt}
    ?data-vl-no-space-bottom=${noSpaceBottom}
  >
    ${content}
  </h3>`;
