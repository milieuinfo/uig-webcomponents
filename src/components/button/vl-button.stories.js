import { html } from "lit-html";
import "../button";
import styles from "./styles.scss";

export default {
  title: "native-elements/vl-button",
};

const stylesheet = html`<style>
  ${styles}
</style>`;

const Template = ({
  text,
  error,
  disabled,
  block,
  large,
  wide,
  narrow,
  loading,
  secondary,
  tertiary,
  icon,
}) =>
  html` ${stylesheet}
    <button
      @click=${() => alert("click!")}
      is="vl-button"
      ?disabled=${disabled}
      ?data-vl-error=${error}
      ?data-vl-block=${block}
      ?data-vl-large=${large}
      ?data-vl-wide=${wide}
      ?data-vl-narrow=${narrow}
      ?data-vl-loading=${loading}
      ?data-vl-secondary=${secondary}
      ?data-vl-tertiary=${tertiary}
    >
      ${text}
      ${icon
        ? html`<span is="vl-icon" data-vl-icon="location" data-vl-after></span>`
        : null}
    </button>`;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const Icon = Template.bind();

const defaultArgs = {
  text: "Button",
  loading: false,
  disabled: false,
  error: false,
  block: false,
  large: false,
  wide: false,
  narrow: false,
  secondary: false,
  tertiary: false,
};

Default.args = { ...defaultArgs, text: "Primary Button" };

Secondary.args = {
  ...defaultArgs,
  text: "Secondary Button",
  secondary: true,
};

Tertiary.args = {
  ...defaultArgs,
  text: "Tertiary Button",
  tertiary: true,
};

Icon.args = {
  ...defaultArgs,
  text: "Icon Button",
  icon: true,
};

Icon.argTypes = {
  icon: { control: { disable: true } },
};
