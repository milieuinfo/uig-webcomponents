import { html } from "lit-html";

export const bodySimulation = (component, withClass) => html`<div
  is="vl-body"
  class=${withClass ? "vl-u-sticky-gf" : ""}
>
  ${component}
</div>`;
