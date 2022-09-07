import { html } from 'lit-html';
import '../../icon/vl-icon.element';
import '../../text/vl-text.element';
import '../../button/vl-button.element';
import '../vl-button-input-addon.element';

export default {
    title: 'Elements/vl-input-addon/vl-button-input-addon',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const Default = () => html`
    <button is="vl-button-input-addon" type="button" data-cy="button-input-addon">
        <span is="vl-icon" icon="location"></span>
        <span is="vl-text" data-vl-visually-hidden>Kies locatie</span>
    </button>
`;
