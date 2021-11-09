import { html } from "lit-html";
import "../input-field";
import styles from "./styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

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
          root: "input-field",
          intro:
            "Het input field laat de gebruiker toe om een informatie in te vullen in uw applicatie: bijvoorbeeld een email adres of een wachtwoord.",
        }),
      },
    },
  },
  args: { ...defaultArgs },
  argTypes: {
    block: {
      name: "data-vl-block",
      type: { summary: "boolean" },
      description: "Het input-veld zal de breedte van zijn parent aannemen",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      name: "data-vl-disabled",
      type: { summary: "boolean" },
      description: "Schakelt interactie door de gebruiker uit",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    error: {
      name: "data-vl-error",
      type: { summary: "boolean" },
      description:
        "Zorgt ervoor da er een rode rand rond het input-veld verschijnt",
      table: {
        defaultValue: { summary: "" },
      },
    },
    small: {
      name: "data-vl-small",
      type: { summary: "boolean" },
      description: "Kleine variant van het input-field",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    success: {
      name: "data-vl-success",
      type: { summary: "string" },
      description:
        "Zorgt ervoor dat er een groene rand rond het input-veld verschijnt",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export const Default = (props) => html`
  <input
    is="vl-input-field"
    id="input-field"
    ?data-vl-block=${props.block}
    ?data-vl-error=${props.error}
    ?data-vl-success=${props.success}
    ?data-vl-disabled=${props.disabled}
    ?data-vl-small=${props.small}
  />
`;
