import { html } from "lit-html";
import "../../../properties";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-properties/vl-properties-list",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheet: true,
          root: "properties",
          intro:
            "De properties lijst webcomponent toont een lijst van kenmerken van een onderwerp.",
        }),
      },
    },
  },
};

export { Default } from "../../properties.stories.js";
