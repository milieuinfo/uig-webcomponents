import { html } from "lit-html";
import "../../../side-navigation";
import styles from "../../styles.scss";
import { stylesheet } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-side-navigation/vl-side-navigation-group",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export { Default } from "../../side-navigation.stories.js";
