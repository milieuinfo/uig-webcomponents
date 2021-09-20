import { html } from "lit-html";
import "../../../button";
import { args, argTypes } from "../../config";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-button/vl-link-button",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["button"],
          root: "button",
          intro: "Gebruik de vl-link-button om een CTA toe te voegen.",
        }),
      },
    },
  },
};

export const Default = (props) =>
  html`<a
    is="vl-link-button"
    href="#"
    ?disabled=${props.disabled}
    ?data-vl-error=${props.error}
    ?data-vl-block=${props.block}
    ?data-vl-large=${props.large}
    ?data-vl-wide=${props.wide}
    ?data-vl-narrow=${props.narrow}
    ?data-vl-loading=${props.loading}
    ?data-vl-secondary=${props.secondary}
    ?data-vl-tertiary=${props.tertiary}
    >${props.content}</a
  >`;

Default.args = { content: "Link button" };
