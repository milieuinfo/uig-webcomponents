import { html } from "lit-html";
import "../../../link-list";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-link-list/vl-link-list-item",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["link-list"],
          root: "link-list",
          intro:
            "The link list item component is an item that's used inside of the link list component.",
        }),
      },
    },
  },
};

export { Default } from "../../link-list.stories.js";
