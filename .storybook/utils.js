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

export const docsIntro = ({ stylesheet, root, intro }) => {
  const componentImport = `${"`"}import "uig-webcomponents/lib/components/${root}"${"`"}`;
  const styleImport = `<br/>${"`"}import "uig-webcomponents/lib/components/${root}/styles.css"${"`"}`;
  const brIntro = `<br/><br/>${intro}`;
  return stylesheet
    ? `${componentImport}${styleImport}${brIntro}`
    : `${componentImport}${brIntro}`;
};
