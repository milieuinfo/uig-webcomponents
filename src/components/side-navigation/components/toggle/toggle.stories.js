import { html } from "lit-html";
import "../../../side-navigation";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-side-navigation/vl-side-navigation-toggle",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["side-navigation"],
          root: "side-navigation",
          intro: "Het navigatie toggle element.",
        }),
      },
    },
  },
  argTypes: {
    child: {
      name: "data-vl-child",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om aan te geven dat het een menu item is. De koppeling gebeurt via het `data-vl-parent` attribuut van `vl-navigation-item`.",
      table: {
        defaultValue: { summary: `""` },
      },
      control: {
        disable: true,
      },
    },
  },
};

export { Default } from "../../side-navigation.stories.js";
