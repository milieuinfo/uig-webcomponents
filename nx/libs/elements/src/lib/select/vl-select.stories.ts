import { html } from 'lit-html';
import './vl-select.element';

// TODO: Add better stories with controls.

export default {
    title: 'Elements/vl-select',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const Default = () => html`
    <select is="vl-select">
        <option value="Belgium">België</option>
        <option value="Germany">Duitsland</option>
        <option value="France">Frankrijk</option>
    </select>
`;

export const WithoutSearch = () => html`
    <select is="vl-select" id="select-not-searchable" tabindex="0" data-vl-select="" data-vl-select-search="false">
        <optgroup label="Landen">
            <option value="België">België</option>
            <option value="Duitsland">Duitsland</option>
            <option value="Frankrijk">Frankrijk</option>
        </optgroup>
        <optgroup label="Steden">
            <option value="Brugge">Brugge</option>
            <option value="Brussel">Brussel</option>
            <option value="Gent">Gent</option>
        </optgroup>
    </select>
`;
