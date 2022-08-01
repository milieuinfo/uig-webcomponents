import { html } from "lit-html";
import "./vl-h4.element";
import { args, argTypes } from "./helper/vl-title.stories-helper";

export default {
  title: "Elements/vl-titles/vl-h4",
  args,
  argTypes,
};

interface DefaultInterface {
    border: string,
    content: any,
    sans: string,
    alt: string,
    noSpaceBottom: string,
}

export const Default = ({ border, content, sans, alt, noSpaceBottom }: DefaultInterface) =>
  html`<h4
    is="vl-h4"
    ?data-vl-has-border=${border}
    ?data-vl-sans=${sans}
    ?data-vl-alt=${alt}
    ?data-vl-no-space-bottom=${noSpaceBottom}
    data-cy="h4"
  >
    ${content}
  </h4>`;
