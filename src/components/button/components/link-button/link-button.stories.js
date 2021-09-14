import { html } from "lit-html";
import "../../../button";
import { defaultArgs, argTypes } from "../../config";
import styles from "../../styles.scss";

export default {
  title: "native-elements/vl-button/vl-button-link",
  args: { ...defaultArgs },
  argTypes,
};

const stylesheet = html`<style>
  ${styles}
</style>`;

export const Default = (props) =>
  html` ${stylesheet}
    <a
      is="vl-link-button"
      href="#"
      ?disabled=${props.disabled}
      ?data-vl-error=${props.error}
      ?data-vl-block=${props.block}
      ?data-vl-large=${props.large}
      ?data-vl-wide=${props.wide}
      ?data-vl-narrow=${props.narrow}
      ?data-vl-loading=${props.loading}
      ?data-vl-secondary=${props.secondary}
      ?data-vl-tertiary=${props.tertiary}
      >${props.content}</a
    >`;

Default.args = { ...defaultArgs, content: "Link button" };
