import { html } from "lit-html";
import "../datepicker";
import styles from "./styles.scss";
import { args, argTypes } from "./config/index";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-datepicker",
  decorators: [(story) => html`${stylesheet(`${styles}`)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "datepicker",
          intro:
            "Gebruik de vl-datepicker om de gebruiker op een gebruiksvriendelijke manier een datum of tijd te laten selecteren.",
        }),
      },
    },
  },
  args: { ...args },
  argTypes: { ...argTypes },
};

export const Default = ({
  type,
  format,
  visualFormat,
  selectedDate,
  minDate,
  maxDate,
  minTime,
  maxTime,
  amPm,
  error,
  success,
  value,
  pattern,
  name,
}) =>
  html`
    <vl-datepicker
      data-vl-type=${type}
      data-vl-format=${format}
      data-vl-visualFormat=${visualFormat}
      data-vl-selected-date=${selectedDate}
      data-vl-min-date=${minDate}
      data-vl-max-date=${maxDate}
      data-vl-min-time=${minTime}
      data-vl-max-time=${maxTime}
      ?data-vl-am-pm=${amPm}
      ?data-vl-error=${error}
      ?data-vl-success=${success}
      data-vl-value=${value}
      data-vl-pattern=${pattern}
      data-vl-name=${name}
    ></vl-datepicker>
  `;
