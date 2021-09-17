import { html } from "lit-html";
import "../titles";
import styles from "./styles.scss";
import { args, argTypes } from "./config";
import { stylesheet } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-titles/vl-h3",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args,
  argTypes,
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
