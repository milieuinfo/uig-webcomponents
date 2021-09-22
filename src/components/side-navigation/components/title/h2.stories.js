import { html } from "lit-html";
import "../../../side-navigation";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-side-navigation/vl-side-navigation-h2",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["side-navigation"],
          root: "side-navigation",
          intro: "Het navigatie titel element.",
        }),
      },
    },
  },
};

export { Default } from "../../side-navigation.stories.js";
