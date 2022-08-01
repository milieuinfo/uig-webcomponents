import { html } from "lit-html";
import "./vl-h6.element";
import { args, argTypes } from "./helper/vl-title.stories-helper";

export default {
  title: "Elements/vl-titles/vl-h6",
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
  html`<h6
    is="vl-h6"
    ?data-vl-has-border=${border}
    ?data-vl-sans=${sans}
    ?data-vl-alt=${alt}
    ?data-vl-no-space-bottom=${noSpaceBottom}
  >
    ${content}
  </h6>`;
