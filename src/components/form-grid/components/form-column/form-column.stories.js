import { html } from "lit-html";
import "../../../form";
import "../../../form-grid";
import "../../../input-field";
import "../../../button";
import "../../../form-message";
import styles from "../.././styles.scss";
import formStyling from "../../../form/styles.scss";
import inputFieldStyling from "../../../input-field/styles.scss";
import buttonStyling from "../../../button/styles.scss";
import formMessageStyle from "../../../form-message/styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";
import { args, argTypes } from "../../../grid/components/column/config";

export default {
  title: "native-elements/vl-form-grid/vl-form-column",
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
          intro: "Class that represents a column in a form grid layout.",
        }),
      },
    },
  },
  args: { ...args },
  argTypes: { ...argTypes },
};

export const Default = ({
  size,
  maxSize,
  mediumSize,
  mediumMaxSize,
  smallSize,
  smallMaxSize,
  extraSmallSize,
  extraSmallMaxSize,
  push,
}) => html`
  <form is="vl-form">
    <div is="vl-form-grid">
      <div
        is="vl-form-column"
        data-vl-size=${size}
        data-vl-max-size=${maxSize}
        data-vl-medium-size=${mediumSize}
        data-vl-medium-max-size=${mediumMaxSize}
        data-vl-small-size=${smallSize}
        data-vl-small-max-size=${smallMaxSize}
        data-vl-extra-small-size=${extraSmallSize}
        data-vl-extra-small-max-size=${extraSmallMaxSize}
        data-vl-push=${push}
      >
        <input
          name="surname"
          is="vl-input-field"
          placeholder="Doe"
          data-vl-block
        />
      </div>
    </div>
  </form>
`;
