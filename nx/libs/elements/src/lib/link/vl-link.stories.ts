import { html } from "lit-html";
import { args, argTypes, iconArgs, iconArgTypes } from "./helper/vl-link.stories-helper";
import "./vl-link.element";
import "../icon/vl-icon.element";

export default {
  title: "Elements/vl-link",
  args,
  argTypes,
};

const hrefArgs = { href: "#" };
const hrefArgTypes = { href: { name: "href (for demo purposes)" } };

interface DefaultInterface {
  block: string
  error:  string
  href:  string
  content:  string
  inline:  string
  small:  string
  large:  string
  bold:  string
}

export const Default = ({
  block,
  error,
  href,
  content,
  inline,
  small,
  large,
  bold,
}: DefaultInterface) =>
  html`<a
    is="vl-link"
    href=${href}
    ?data-vl-block=${block}
    ?data-vl-error=${error}
    ?data-vl-inline=${inline}
    ?data-vl-small=${small}
    ?data-vl-large=${large}
    ?data-vl-bold=${bold}
    data-cy="link-default"
    >${content}</a
  >`;

Default.args = hrefArgs;
Default.argTypes = hrefArgTypes;

interface WithIconInterface extends DefaultInterface {
    icon: string
    type: string
}

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
}: WithIconInterface) => {
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
      data-cy="link-with-icon"
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