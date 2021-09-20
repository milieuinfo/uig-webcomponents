import { html } from "lit-html";
import "../../../side-navigation";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-side-navigation/vl-side-navigation-item",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheet: true,
          root: "side-navigation",
          intro: "Het navigatie item element.",
        }),
      },
    },
  },
  argTypes: {
    parent: {
      name: "data-vl-parent",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt op de navigatie menu list elementen. De koppeling gebeurt via het `data-vl-child` attribuut van `vl-navigation-toggle`.",
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
