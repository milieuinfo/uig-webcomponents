import { html } from "lit-html";
import "../../../properties";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-properties/vl-property-value",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["properties"],
          root: "properties",
          intro:
            "De property waarde webcomponent toont de waarde van een onderwerp kenmerk.",
        }),
      },
    },
  },
};

export { Default } from "../../properties.stories.js";
