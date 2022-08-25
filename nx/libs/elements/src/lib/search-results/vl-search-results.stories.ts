import { html } from 'lit-html';
import './vl-search-results.element';

export default {
  title: 'Elements/vl-search-results',
  parameters: {
    controls: { hideNoControlsWarning: true },
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
