import { html } from "lit-html";
import "../../../properties";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-properties/vl-property-term",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheet: true,
          root: "properties",
          intro:
            "De property-term webcomponent toont de beschrijving van een onderwerp kenmerk.",
        }),
      },
    },
  },
};

export { Default } from "../../properties.stories.js";
