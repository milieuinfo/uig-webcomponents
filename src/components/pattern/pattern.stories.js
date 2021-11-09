import { html } from "lit-html";
import "../pattern";
import "../input-field";
import inputStyles from "../input-field/styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";
import { args, argTypes } from "./config";

export default {
  title: "custom-elements/vl-pattern",
  decorators: [(story) => html`${stylesheet(inputStyles)}${story()}`],
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "pattern",
          intro:
            "Gebruik de pattern mixin in combinatie met een input field om de gebruiker te verplichten om informatie in een bepaald formaat op te geven.",
        }),
      },
    },
  },
};

export const Default = ({ pattern, patternPrefix, dressed }) => html`
  <input
    is="vl-input-field"
    type="text"
    value=""
    data-vl-pattern=${pattern}
    data-vl-pattern-prefix=${patternPrefix}
    ?data-vl-pattern-dressed=${dressed}
  />
`;
