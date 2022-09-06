import { html } from 'lit-html';
import './vl-form-message.element';

export default {
    title: 'Elements`/vl-form-validation-message',
    args: {
        error: true,
        success: false,
    },
    argTypes: {
        error: {
            name: 'data-vl-error',
            type: { summary: 'Boolean' },
            description: 'Attribute to create an error type form validation message',
            table: {
                defaultValue: { summary: true},
                category: 'Attributes',
            },
        },
        success: {
            name: 'data-vl-success',
            type: { summary: 'Boolean' },
            description: 'Attribute to create an success type form validation message',
            table: {
                defaultValue: { summary: false },
                category: 'Attributes',
            },
        },
    },
};

interface DefaultInterface {
    error: string,
    success: string,
}

export const Default = ({ error, success}: DefaultInterface) => html`
    <p is="vl-form-validation-message" ?data-vl-error=${error} ?data-vl-success=${success} data-cy="form-validation-message">
        Het veld 'Naam evenement' is een verplicht veld.
    </p>

`;