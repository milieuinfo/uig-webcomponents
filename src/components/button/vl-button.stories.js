import { html } from "lit-html";
import "../button";
import styles from "./styles.scss";

const defaultArgs = {
  content: "Button",
  secondary: false,
  tertiary: false,
  loading: false,
  disabled: false,
  error: false,
  block: false,
  large: false,
  wide: false,
  narrow: false,
};

export default {
  title: "native-elements/vl-button",
  args: { ...defaultArgs },
  argTypes: {
    secondary: {
      name: "data-vl-secondary",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt in combinatie met een gewone knop om alternatieve acties te voorzien.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    tertiary: {
      name: "data-vl-tertiary",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt in combinatie met gewone en secondary knoppen om alternatieve acties te voorzien.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      name: "data-vl-disabled",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om aan de gebruiker aan te duiden dat de functionaliteit niet actief is.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    error: {
      name: "data-vl-error",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om het belang of de gevolgen van een actie te benadrukken.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    block: {
      name: "data-vl-block",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om ervoor te zorgen dat de knop getoond wordt als een block element en bijgevol de breedte van de parent zal aannemen.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    large: {
      name: "data-vl-large",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om de aandacht van de gebruiker te trekken door de font-size te vergroten.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    wide: {
      name: "data-vl-wide",
      type: { summary: "boolean" },
      description:
        "Attribuut zorgt ervoor dat de knop breder op het scherm zal getoond worden.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    narrow: {
      name: "data-vl-narrow",
      type: { summary: "boolean" },
      description:
        "Attribuut zorgt ervoor dat de knop smaller op het scherm zal getoond worden.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      name: "data-vl-loading",
      type: { summary: "boolean" },
      description:
        "Attribuut wordt gebruikt om aan de gebruiker aan te geven dat zijn actie momenteel verwerkt wordt.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    content: {
      name: "content (for demo purposes)",
      type: { summary: "string" },
    },
  },
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

export const LinkButton = (props) =>
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

LinkButton.args = { ...defaultArgs, content: "Link button" };
