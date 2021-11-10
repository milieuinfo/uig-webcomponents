import { html } from "lit-html";
import "../search-results";
import styles from "../search-results/styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-search-results",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "search-results",
          intro: "De zoekresultaten worden als een lijst met links getoond.",
        }),
      },
    },
  },
  args: {},
  argTypes: {},
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
  </ul>
`;
