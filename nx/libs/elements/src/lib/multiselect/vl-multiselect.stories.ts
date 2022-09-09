import { html } from 'lit-html';
import '../link/vl-link.element';
import './vl-multiselect.element';

// TODO: gertjame: Verder uitwerken van stories met controls.

export default {
  title: 'Elements/vl-multiselect',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () => html`
    <select is="vl-multiselect">
      <option value="Belgium">België</option>
      <option value="Germany">Duitsland</option>
      <option value="France">Frankrijk</option>
    </select>
`;

export const WithPredefinedOption= () => html`
  <select is="vl-multiselect">
    <option selected="" value="Bruges">Brugge</option>
    <option value="Brussels">Brussel</option>
    <option value="Ghent">Gent</option>
  </select>
`;

export const WithGroupedItems = () => html`
  <select is="vl-multiselect">
    <optgroup label="Landen">
      <option selected="" value="Belgium">België</option>
      <option value="Germany">Duitsland</option>
      <option value="France">Frankrijk</option>
    </optgroup>
    <optgroup label="Steden">
      <option selected="" value="Bruges">Brugge</option>
      <option value="Brussels">Brussel</option>
      <option value="Ghent">Gent</option>
    </optgroup>
  </select>
`;