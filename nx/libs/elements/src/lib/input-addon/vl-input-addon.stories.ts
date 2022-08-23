import { html } from "lit-html";
import "../input-addon/vl-input-addon.element";
// import "../tooltip";
// import tooltipStyles from "../tooltip/styles.scss";

export default {
  title: "Elements/vl-input-addon",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () => html` <p is="vl-input-addon" data-cy="input-addon">€</p> `;

export const WithTooltip = () => html`
  <p is="vl-input-addon" data-cy="input-addon-with-tooltip">
    €
    <vl-tooltip placement="top">Euro</vl-tooltip> -->
  
`;
