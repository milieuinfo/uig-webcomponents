import { html } from "lit-html";
import { args, argTypes, iconArgs, iconArgTypes } from "../../config";
import "../../../link";
import "../../../icon";
import styles from "../../styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-link/vl-button-link",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["link"],
          root: "link",
          intro: "Een button gestyled als link.",
        }),
      },
    },
  },
  args,
  argTypes,
};

export const Default = ({
  block,
  error,
  content,
  inline,
  small,
  large,
  bold,
}) =>
  html`<button
    is="vl-button-link"
    ?data-vl-block=${block}
    ?data-vl-error=${error}
    ?data-vl-inline=${inline}
    ?data-vl-small=${small}
    ?data-vl-large=${large}
    ?data-vl-bold=${bold}
  >
    ${content}
  </button>`;

export const WithIcon = ({
  block,
  error,
  content,
  type,
  icon,
  inline,
  small,
  large,
  bold,
}) => {
  if (type === "before") {
    return html`<button
      is="vl-button-link"
      ?data-vl-block=${block}
      ?data-vl-error=${error}
      ?data-vl-inline=${inline}
      ?data-vl-small=${small}
      ?data-vl-large=${large}
      ?data-vl-bold=${bold}
    >
      <span is="vl-icon" data-vl-icon=${icon} data-vl-before></span>${content}
    </button>`;
  }
  return html`<button
    is="vl-button-link"
    ?data-vl-block=${block}
    ?data-vl-error=${error}
    ?data-vl-inline=${inline}
    ?data-vl-small=${small}
    ?data-vl-large=${large}
    ?data-vl-bold=${bold}
  >
    ${content}<span is="vl-icon" data-vl-icon=${icon} data-vl-after></span>
  </button>`;
};

WithIcon.args = iconArgs;
WithIcon.argTypes = iconArgTypes;
