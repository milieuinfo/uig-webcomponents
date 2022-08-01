import { html } from "lit-html";
import { args, argTypes, iconArgs, iconArgTypes } from "./helper/vl-link.stories-helper";
import "./vl-button-link.element";
import "../icon/vl-icon.element";

export default {
  title: "Elements/vl-link/vl-button-link",
  args,
  argTypes,
};

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
  content,
  inline,
  small,
  large,
  bold,
}: DefaultInterface) =>
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


interface WithIconInterface extends DefaultInterface {
    icon: string
    type: string
}

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
}: WithIconInterface) => {
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
