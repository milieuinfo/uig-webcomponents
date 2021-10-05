import { html } from "lit-html";
import "../code-preview";
import { docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-code-preview",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "code-preview",
          intro: "De code preview visualiseert de broncode.",
        }),
      },
    },
  },
};

export const Default = () =>
  html` <vl-code-preview>
    <h3>This is a title</h3>
    <h2>This is a subtitle</h2>
    <div>
      <div>
        <div>
          <p>test</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          impedit dolor maxime incidunt eos labore aut delectus, omnis repellat
          officia id dolores, magni velit beatae similique ex optio enim, nulla.
        </p>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  </vl-code-preview>`;
