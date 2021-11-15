import { html } from "lit-html";
import "../../../icon";
import "../../../text";
import "../button-input-addon";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-input-addon/vl-button-input-addon",
  decorators: [(story) => html`${stylesheet(`${styles}`)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["input-addon"],
          root: "input-addon",
          intro:
            "Gebruik de vl-button-input-addon in combinatie met de vl-input-group webcomponent. Deze combinatie zorgt er voor dat men een button heeft die naast de input in vl-input-group staat.",
        }),
      },
    },
  },
};

export const Default = () => html`
  <button is="vl-button-input-addon" type="button">
    <span is="vl-icon" icon="location"></span>
    <span is="vl-text" data-vl-visually-hidden>Kies locatie</span>
  </button>
`;
