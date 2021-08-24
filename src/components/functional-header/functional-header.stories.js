import { html } from "lit-html";
import "../functional-header";

export default {
  title: "custom-elements/vl-functional-header",
};

export const Default = () =>
  html`<vl-functional-header
    id="functional-header"
    data-vl-title="School- en studietoelagen"
    data-vl-sub-title="Voor lager, middelbaar en hoger onderwijs"
    data-vl-link="#"
  ></vl-functional-header>`;
