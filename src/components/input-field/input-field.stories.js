import { html } from "lit-html";
import "../input-field";
import styles from "./styles.scss";
import {
  stylesheet,
  docsIntro,
  CATEGORIES,
} from "../../../.storybook/utils.js";

const defaultArgs = {
  block: false,
  disabled: false,
  error: false,
  small: false,
  success: false,
};

export default {
  title: "native-elements/vl-input-field",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["input-field"],
          root: "input-field",
          intro:
            "The input field allows the user to enter information in your application: for example an email address or a password.",
        }),
      },
    },
  },
  args: { ...defaultArgs },
  argTypes: {
    block: {
      name: "data-vl-block",
      description: "The input field will take the width of its parent.",
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      name: "data-vl-disabled",
      description: "Disables user interaction.",
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      name: "data-vl-error",
      description: "Causes a red border to appear around the input field.",
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    small: {
      name: "data-vl-small",
      description: "Small variant of the input field.",
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    success: {
      name: "data-vl-success",
      description: "Causes a green border to appear around the input field.",
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: "string" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

export const Default = (props) => html`
  <input
    is="vl-input-field"
    ?data-vl-block=${props.block}
    ?data-vl-error=${props.error}
    ?data-vl-success=${props.success}
    ?data-vl-disabled=${props.disabled}
    ?data-vl-small=${props.small}
  />
`;
