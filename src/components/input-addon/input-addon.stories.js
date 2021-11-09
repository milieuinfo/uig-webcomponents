import { html } from "lit-html";
import "../input-addon";
import "../tooltip";
import styles from "./styles.scss";
import tooltipStyles from "../tooltip/styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-input-addon",
  decorators: [
    (story) => html`${stylesheet(`${styles}${tooltipStyles}`)}${story()}`,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "input-addon",
          intro:
            "Gebruik de input-addon in combinatie met de vl-ui-input-group webcomponent. Deze combinatie zorgt ervoor dat de gebruiker extra informatie ontvangt over de inhoud of de vorm van de inhoud dat ingevuld moet worden.",
        }),
      },
    },
  },
  args: {},
  argTypes: {},
};

export const Default = () => html`
  <p is="vl-input-addon" id="input-addon">€</p>
`;

export const WithTooltip = () => html`
  <p is="vl-input-addon">
    €
    <vl-tooltip placement="top">Euro</vl-tooltip>
  </p>
`;

export const ButtonInputAddonWithIcon = () => html`
  <button is="vl-button-input-addon" type="button">
    <span is="vl-icon" icon="location"></span>
    <span is="vl-text" data-vl-visually-hidden="">Kies locatie</span>
  </button>
`;
