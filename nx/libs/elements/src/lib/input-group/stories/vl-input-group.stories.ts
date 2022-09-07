import { html } from 'lit-html';
import '../vl-input-group.element';
import '../../button/vl-button.element';
import '../../input-field/vl-input-field.element';
import '../../input-addon/vl-input-addon.element';
import '../../icon/vl-icon.element';
import '../../text/vl-text.element';

export default {
    title: 'Elements/vl-input-group',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const Default = () => html`
    <div is="vl-input-group" data-cy="input-group">
        <button is="vl-button-input-addon" type="button">
            <span is="vl-icon" data-vl-icon="location"></span>
            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
        </button>
        <input is="vl-input-field" type="text" />
    </div>
`;

export const WithInputAddonRight = () => html`
    <div is="vl-input-group" data-cy="input-group">
        <input is="vl-input-field" type="text" />
        <button is="vl-button-input-addon" type="button">
            <span is="vl-icon" data-vl-icon="location"></span>
            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
        </button>
    </div>
`;

export const WithTextAddonLeft = () => html`
    <div is="vl-input-group" data-cy="input-group">
        <button is="vl-button" type="button">Locatie kiezen</button>
        <input is="vl-input-field" type="text" />
    </div>
`;

export const WithTextAddonRight = () => html`
    <div is="vl-input-group" data-cy="input-group">
        <input is="vl-input-field" type="text" />
        <button is="vl-button" type="button">Locatie kiezen</button>
    </div>
`;

export const WithButtonLeft = () => html`
    <div is="vl-input-group" data-cy="input-group">
        <button is="vl-button" type="button">
            <span is="vl-icon" data-vl-icon="location"></span>
            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
        </button>
        <input is="vl-input-field" type="text" />
    </div>
`;
