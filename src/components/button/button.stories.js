import { html } from "lit-html";
import "../button";
import { defaultArgs, argTypes } from "./config";
import styles from "./styles.scss";

export default {
  title: "native-elements/vl-button",
  args: { ...defaultArgs },
  argTypes,
};

const stylesheet = html`<style>
  ${styles}
</style>`;

const buttonWrap = (props, children) => {
  return html`
    ${stylesheet}
    <button
      is="vl-button"
      type="button"
      ?disabled=${props.disabled}
      ?data-vl-error=${props.error}
      ?data-vl-block=${props.block}
      ?data-vl-large=${props.large}
      ?data-vl-wide=${props.wide}
      ?data-vl-narrow=${props.narrow}
      ?data-vl-loading=${props.loading}
      ?data-vl-secondary=${props.secondary}
      ?data-vl-tertiary=${props.tertiary}
    >
      ${children}
    </button>
  `;
};

export const Default = (props) => html`${buttonWrap(props, props.content)}`;

export const IconButton = (props) => {
  if (props.type === "before") {
    return html`
      ${buttonWrap(
        props,
        html`<span is="vl-icon" data-vl-icon="location" data-vl-before></span
          >${props.content}`
      )}
    `;
  }
  if (props.type === "hidden text") {
    return html`${buttonWrap(
      props,
      html`<span is="vl-icon" data-vl-icon="location"></span>
        <span is="vl-text" data-vl-visually-hidden="">${props.content}</span>`
    )}`;
  }
  return html`
    ${buttonWrap(
      props,
      html`${props.content}
        <span is="vl-icon" data-vl-icon="location" data-vl-after></span>`
    )}
  `;
};

IconButton.args = {
  ...defaultArgs,
  content: "Icon button",
  type: "after",
};
IconButton.argTypes = {
  type: {
    name: "type (for demo purposes)",
    control: {
      type: "select",
      options: ["before", "after", "hidden text"],
    },
  },
};
