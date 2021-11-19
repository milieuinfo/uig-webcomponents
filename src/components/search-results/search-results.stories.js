import { html } from "lit-html";
import "../search-results";
import styles from "../search-results/styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-search-results",
  controls: { hideNoControlsWarning: true },
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["search-results"],
          root: "search-results",
          intro: "The search results are shown as a list of links.",
        }),
      },
    },
  },
};

export const Default = () => html`
  <ul is="vl-search-results">
    <li is="vl-search-result">
      <a href="#">Vlaanderenkiest.be</a>
      <time>Maandag 22 oktober 2018</time>
      <dl>
        <dt>Vlaanderenkiest.be</dt>
        <dd>Verkiezingsresultaten op Vlaanderenkiest.be...</dd>
        <dt>Vlaanderen intern</dt>
        <dd>Werkt u bij de Vlaamse overheid...</dd>
      </dl>
    </li>
    <li is="vl-search-result">
      <a href="#">Vlaanderenkiest.be</a>
      <time>Maandag 22 oktober 2018</time>
      <dl>
        <dt>Vlaanderenkiest.be</dt>
        <dd>Verkiezingsresultaten op Vlaanderenkiest.be...</dd>
        <dt>Vlaanderen intern</dt>
        <dd>Werkt u bij de Vlaamse overheid...</dd>
      </dl>
    </li>
  </ul>
`;
