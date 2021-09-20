import { html } from "lit-html";
import "../../../side-navigation";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-side-navigation/vl-side-navigation-h5",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheet: true,
          root: "side-navigation",
          intro: "Het navigatie titel element.",
        }),
      },
    },
  },
};

export { Default } from "../../side-navigation.stories.js";
