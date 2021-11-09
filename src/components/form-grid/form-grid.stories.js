import { html } from "lit-html";
import "../form";
import "../form-grid";
import "../input-field";
import "../button";
import "../form-message";
import styles from "./styles.scss";
import formStyling from "../form/styles.scss";
import inputFieldStyling from "../input-field/styles.scss";
import buttonStyling from "../button/styles.scss";
import formMessageStyle from "../form-message/styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-form-grid",
  decorators: [
    (story) =>
      html`${stylesheet(
        `${styles}${formStyling}${inputFieldStyling}${buttonStyling}${formMessageStyle}`
      )}${story()}`,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "form-grid",
          intro: "Class die een grid layout mogelijk maakt in een formulier.",
        }),
      },
    },
  },
  args: {},
  argTypes: {},
};

export const Default = () => html`
  <form>
    <div is="vl-form-grid" data-vl-is-stacked="">
      <div is="vl-form-column" data-vl-size="2">
        <label is="vl-form-label" for="text" data-vl-block="">Email</label>
      </div>
      <div is="vl-form-column" data-vl-size="10">
        <input
          id="email"
          name="email"
          is="vl-input-field"
          placeholder="Bijv. naam@voorbeeld.be"
          data-vl-block=""
          data-required="true"
          data-vl-error-message="Gelieve een email in te vullen"
          data-vl-error-placeholder="email-error"
        />
        <p
          is="vl-form-validation-message"
          data-vl-error=""
          data-vl-error-id="email-error"
        ></p>
      </div>

      <div is="vl-form-column" data-vl-size="2">
        <label is="vl-form-label" for="text" data-vl-block="">Voornaam</label>
      </div>
      <div is="vl-form-column" data-vl-size="10">
        <input
          id="name"
          name="name"
          is="vl-input-field"
          placeholder="John"
          data-vl-block=""
          data-required="true"
          data-vl-error-message="Gelieve een voornaam in te vullen"
          data-vl-error-placeholder="name-error"
        />
        <p
          is="vl-form-validation-message"
          data-vl-error=""
          data-vl-error-id="name-error"
        ></p>
      </div>

      <div id="surname-label-column" is="vl-form-column" data-vl-size="2">
        <label is="vl-form-label" for="url" data-vl-block="">Naam</label>
      </div>
      <div id="surname-input-column" is="vl-form-column" data-vl-size="10">
        <input
          id="surname"
          name="surname"
          is="vl-input-field"
          placeholder="Doe"
          data-vl-block=""
          data-required="true"
          data-vl-error-message="Gelieve een naam in te vullen"
          data-vl-error-placeholder="surname-error"
        />
        <p
          is="vl-form-validation-message"
          data-vl-error=""
          data-vl-error-id="surname-error"
        ></p>
      </div>

      <div is="vl-form-column" data-vl-size="10" data-vl-push="2">
        <button is="vl-button" type="submit">Inschrijven</button>
      </div>
    </div>
  </form>
`;
