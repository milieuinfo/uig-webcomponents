import { html } from "lit-html";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";
import "../wizard";
import "../titles";
import "../grid";
import "../button";
import "../form-grid";
import "../form-message";
import "../input-field";
import "../action-group";
import "../link";
import "../icon";
import "../checkbox";
import titleStyles from "../titles/styles.scss";
import gridStyles from "../grid/styles.scss";
import buttonStyles from "../button/styles.scss";
import formGridStyles from "../form-grid/styles.scss";
import formMessageStyles from "../form-message/styles.scss";
import inputFieldStyles from "../input-field/styles.scss";
import actionGroupStyles from "../action-group/styles.scss";
import linkStyles from "../link/styles.scss";
import iconStyles from "../icon/styles.scss";
import "../wizard";
import "./example";

export default {
  title: "custom-elements/vl-wizard",
  decorators: [
    (story) =>
      html`${stylesheet(
        `${titleStyles}${gridStyles}${buttonStyles}${formGridStyles}${formMessageStyles}${inputFieldStyles}${actionGroupStyles}${linkStyles}${iconStyles}`
      )}${story()}`,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "wizard",
          intro: "",
        }),
      },
    },
  },
};

export const Default = () => {
  const steps = ["Stap 1", "Stap 2"];
  return html`<vl-wizard>
    <h2 slot="title" is="vl-h2">Wizard title</h2>
    <p slot="header">You're a wizard Harry</p>
    <vl-progress-bar
      slot="progress-bar"
      data-vl-numeric
      .steps=${steps}
    ></vl-progress-bar>
    <div slot="pane">
      <h3 is="vl-h3">Stap 1</h3>
      <div is="vl-grid" data-vl-is-stacked>
        <div is="vl-column" data-vl-size="12">
          <div is="vl-form-grid" data-vl-is-stacked>
            <div is="vl-form-column" data-vl-size="12">
              <label is="vl-form-label" for="naam" data-vl-block>Naam</label>
              <input id="naam" is="vl-input-field" data-vl-block />
            </div>
          </div>
        </div>
        <div is="vl-column">
          <button is="vl-button" type="button">Volgende</button>
        </div>
      </div>
    </div>
  </vl-wizard>`;
};

export const Example = () => html`<vl-wizard-example></vl-wizard-example>`;
