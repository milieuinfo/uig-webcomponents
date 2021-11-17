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
import { args, argTypes } from "../grid/config";

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
          stylesheets: ["form-grid"],
          root: "form-grid",
          intro: "Class that enables a grid layout in a form.",
        }),
      },
    },
  },
  args: { ...args },
  argTypes: { ...argTypes },
};

export const Default = ({
  stacked,
  stackedSmall,
  stackedLarge,
  alignStart,
  alignCenter,
  alignEnd,
  alignSpaceBetween,
  alignSpaceAround,
  vTop,
  vCenter,
  vBottom,
  vStretch,
}) => html`
  <form>
    <div
      is="vl-form-grid"
      ?data-vl-is-stacked=${stacked}
      ?data-vl-is-stacked-small=${stackedSmall}
      ?data-vl-is-stacked-large=${stackedLarge}
      ?data-vl-align-start=${alignStart}
      ?data-vl-align-center=${alignCenter}
      ?data-vl-align-end=${alignEnd}
      ?data-vl-align-space-between=${alignSpaceBetween}
      ?data-vl-align-space-around=${alignSpaceAround}
      ?data-vl-v-top=${vTop}
      ?data-vl-v-center=${vCenter}
      ?data-vl-v-bottom=${vBottom}
      ?data-vl-v-stretch=${vStretch}
    >
      <div is="vl-form-column" data-vl-size="2">
        <label is="vl-form-label" for="text" data-vl-block>Email</label>
      </div>
      <div is="vl-form-column" data-vl-size="10">
        <input
          name="email"
          is="vl-input-field"
          placeholder="Bijv. naam@voorbeeld.be"
          data-vl-block
        />
      </div>

      <div is="vl-form-column" data-vl-size="2">
        <label is="vl-form-label" for="text" data-vl-block>Voornaam</label>
      </div>
      <div is="vl-form-column" data-vl-size="10">
        <input
          name="name"
          is="vl-input-field"
          placeholder="John"
          data-vl-block
        />
      </div>

      <div is="vl-form-column" data-vl-size="2">
        <label is="vl-form-label" for="url" data-vl-block>Naam</label>
      </div>
      <div is="vl-form-column" data-vl-size="10">
        <input
          name="surname"
          is="vl-input-field"
          placeholder="Doe"
          data-vl-block
        />
      </div>

      <div is="vl-form-column" data-vl-size="10" data-vl-push="2">
        <button is="vl-button" type="submit">Inschrijven</button>
      </div>
    </div>
  </form>
`;
