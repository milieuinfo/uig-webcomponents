import { html } from "lit-html";
import { args, argTypes, iconArgs, iconArgTypes } from "./config";
import "../link";
import "../icon";
import styles from "./styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-link",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["link"],
          root: "link",
          intro:
            "Gebruik de vl-link om de gebruiker door te verwijzen naar een andere URL, bijvoorbeeld een nieuwe pagina of een document.",
        }),
      },
    },
  },
  args,
  argTypes,
};

const hrefArgs = { href: "#" };
const hrefArgTypes = { href: { name: "href (for demo purposes)" } };

export const Default = ({
  block,
  error,
  href,
  content,
  inline,
  small,
  large,
  bold,
}) =>
  html`<a
    is="vl-link"
    href=${href}
    ?data-vl-block=${block}
    ?data-vl-error=${error}
    ?data-vl-inline=${inline}
    ?data-vl-small=${small}
    ?data-vl-large=${large}
    ?data-vl-bold=${bold}
    >${content}</a
  >`;

Default.args = hrefArgs;
Default.argTypes = hrefArgTypes;

export const WithIcon = ({
  block,
  error,
  type,
  href,
  content,
  icon,
  inline,
  small,
  large,
  bold,
}) => {
  if (type === "before") {
    return html`<a
      is="vl-link"
      href=${href}
      ?data-vl-block=${block}
      ?data-vl-error=${error}
      ?data-vl-inline=${inline}
      ?data-vl-small=${small}
      ?data-vl-large=${large}
      ?data-vl-bold=${bold}
      ><span
        is="vl-icon"
        data-vl-icon=${icon}
        data-vl-before
        data-vl-link
      ></span>
      ${content}</a
    >`;
  }
  return html`<a
    is="vl-link"
    href=${href}
    ?data-vl-block=${block}
    ?data-vl-error=${error}
    ?data-vl-inline=${inline}
    ?data-vl-small=${small}
    ?data-vl-large=${large}
    ?data-vl-bold=${bold}
  >
    ${content}<span
      is="vl-icon"
      data-vl-icon=${icon}
      data-vl-after
      data-vl-link
    ></span
  ></a>`;
};

WithIcon.args = { ...iconArgs, ...hrefArgs };
WithIcon.argTypes = { ...iconArgTypes, ...hrefArgs };
