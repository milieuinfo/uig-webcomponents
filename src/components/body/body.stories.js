import { html } from "lit-html";
import "../body";
import { docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-body",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["body"],
          root: "body",
          intro:
            "Door gebruik te maken van het native vl-body element incl. stijl zal er een minimum aan huisstijl geladen worden.",
        }),
      },
    },
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
