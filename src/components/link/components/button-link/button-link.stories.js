import { html } from "lit-html";
import { args, argTypes, iconArgs, iconArgTypes } from "../../config";
import "../../../link";
import "../../../icon";
import styles from "../../styles.scss";

export default {
  title: "native-elements/vl-link/vl-button-link",
  args,
  argTypes,
};

const stylesheet = html`<style>
  ${styles}
</style>`;

export const Default = ({ block, error, content }) =>
  html`${stylesheet}
    <button is="vl-button-link" ?data-vl-block=${block} ?data-vl-error=${error}>
      ${content}
    </button>`;

export const WithIcon = ({ block, error, content, type, icon }) => {
  if (type === "before") {
    return html`${stylesheet}
      <button
        is="vl-button-link"
        ?data-vl-block=${block}
        ?data-vl-error=${error}
      >
        <span is="vl-icon" data-vl-icon=${icon} data-vl-before></span>${content}
      </button>`;
  }
  return html`${stylesheet}
    <button is="vl-button-link" ?data-vl-block=${block} ?data-vl-error=${error}>
      ${content}
      <span is="vl-icon" data-vl-icon=${icon} data-vl-after></span>
    </button>`;
};

WithIcon.args = iconArgs;
WithIcon.argTypes = iconArgTypes;
