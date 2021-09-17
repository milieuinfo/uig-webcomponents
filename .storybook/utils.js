import { html } from "lit-html";

export const bodySimulation = (component, withClass) => html`<div
  is="vl-body"
  class=${withClass ? "vl-u-sticky-gf" : ""}
>
  ${component}
</div>`;

export const stylesheet = (styles) =>
  html`<style>
    ${styles}
  </style>`;

export const removeStorybooksDefaultStyling = () => {
  document.querySelector(".sbdocs-p").classList = "sbdocs sbdocs-p";
  document.querySelector(".sbdocs-content").style.maxWidth = "initial";
  document.querySelector(".sbdocs-wrapper").style.padding = "0";
};
