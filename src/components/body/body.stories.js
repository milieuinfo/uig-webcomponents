import { html } from "lit-html";
import "../body";

export default {
  title: "native-elements/vl-body",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () =>
  html`
    <!-- just shows usage -->
    <body is="vl-body">
      <p>
        By using the native vl-body element incl. styling, a minimum of
        corporate identity will be loaded.
      </p>
    </body>
  `;
