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
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["input-addon"],
          root: "input-addon",
          intro:
            "Gebruik de input-addon in combinatie met de vl-ui-input-group webcomponent. Deze combinatie zorgt ervoor dat de gebruiker extra informatie ontvangt over de inhoud of de vorm van de inhoud dat ingevuld moet worden.",
        }),
      },
    },
  },
};

export const Default = () => html` <p is="vl-input-addon">€</p> `;

export const WithTooltip = () => html`
  <p is="vl-input-addon">
    €
    <vl-tooltip placement="top">Euro</vl-tooltip>
  </p>
`;
