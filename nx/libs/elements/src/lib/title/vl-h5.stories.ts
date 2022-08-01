import { html } from "lit-html";
import "./vl-h5.element";
import { args, argTypes } from "./helper/vl-title.stories-helper";

export default {
  title: "Elements/vl-titles/vl-h5",
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
  html`<h5
    is="vl-h5"
    ?data-vl-has-border=${border}
    ?data-vl-sans=${sans}
    ?data-vl-alt=${alt}
    ?data-vl-no-space-bottom=${noSpaceBottom}
  >
    ${content}
  </h5>`;

