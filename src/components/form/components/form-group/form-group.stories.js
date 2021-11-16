import { html } from "lit-html";
import "../../../form";
import "../../../form-grid";
import "../../../input-field";
import "../../../button";
import "../../../form-message";
import styles from "../.././styles.scss";
import inputFieldStyles from "../../../input-field/styles.scss";
import formGridStyles from "../../../form-grid/styles.scss";
import buttonStyles from "../../../button/styles.scss";
import formMessageStyle from "../../../form-message/styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-form/vl-form-group",
  controls: { hideNoControlsWarning: true },
  decorators: [
    (story) =>
      html`
        <div style="max-width: 800px">
          ${stylesheet(
        `${styles}${inputFieldStyles}${formGridStyles}${buttonStyles}${formMessageStyle}`
      )}${story()}
        </div>
      `,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["form"],
          root: "form",
          intro: "Form group element is used to group form elements together.",
        }),
      },
    },
  },
};

export const Default = ({ validate }) => html`
  <form is="vl-form" ?data-vl-validate=${validate}>
    <div is="vl-form-group">
      <div is="vl-form-grid" data-vl-is-stacked>
        <div is="vl-form-column" data-vl-size="3">
          <label is="vl-form-label" for="name" data-vl-block>
            Naam
            <span is="vl-form-annotation-span">(verplicht)</span>
          </label>
        </div>
        <div is="vl-form-column" data-vl-size="9">
          <input
            name="name"
            autocomplete="name"
            is="vl-input-field"
            data-vl-block
            data-vl-required
          />
          <p
            is="vl-form-validation-message"
            data-vl-error
            data-vl-error-id="name-error"
          ></p>
        </div>

        <div is="vl-form-column" data-vl-size="3">
          <label is="vl-form-label" for="phone" data-vl-block>Telefoon</label>
        </div>
        <div is="vl-form-column" data-vl-size="9">
          <input
            name="phone"
            autocomplete="tel"
            is="vl-input-field"
            data-vl-block
          />
          <p is="vl-form-annotation">Formaat 000/ 00 00 00</p>
        </div>

        <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
          <div is="vl-action-group">
            <button is="vl-button" type="submit">Versturen</button>
            <a is="vl-link" href="#">
              <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
              Annuleren
            </a>
          </div>
        </div>
      </div>
    </div>
  </form>
`;
