import { html } from "lit-html";
import { args, argTypes } from "./config";
import "../link";
import "../link-list";
import styles from "./styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-link-list",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["link-list"],
          root: "link-list",
          intro:
            "Gebruik de vl-link-list om gelijkaardige items als een lijst te tonen aan de gebruiker. Elk item in de lijst linkt naar een andere pagina.",
        }),
      },
    },
  },
  args,
  argTypes,
};

export const Default = ({ small, inline, bordered }) => {
  console.log(styles);
  return html`
    <ul
      id="link-list"
      is="vl-link-list"
      ?data-vl-small=${small}
      ?data-vl-inline=${inline}
      ?data-vl-bordered=${bordered}
    >
      <li is="vl-link-list-item">
        <a is="vl-link" href="#"> Ga naar index</a>
      </li>
      <li is="vl-link-list-item">
        <a is="vl-link" href="#"> Terug naar overzicht</a>
      </li>
    </ul>
  `;
};
