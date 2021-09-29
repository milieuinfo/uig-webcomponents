import { html } from "lit-html";
import "../icon";
import styles from "./styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-icon/vl-icon-wrapper",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["icon"],
          root: "icon",
          intro:
            "Gebruik de vl-icon-wrapper als parent element om al de iconen verticaal te aligneren.",
        }),
      },
    },
  },
  args: {
    wrappersAmount: 3,
  },
  argTypes: {
    wrappersAmount: {
      name: "amount of wrappers (for demo purposes)",
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
  },
};

export const Default = ({ wrappersAmount }) => {
  const wrappers = Array.apply(null, Array(wrappersAmount));
  return wrappers.map(
    () =>
      html`<p is="vl-icon-wrapper">
        <span is="vl-icon" data-vl-icon="calendar"></span>
      </p>`
  );
};
