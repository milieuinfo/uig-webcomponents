import { html } from 'lit-html';
import './vl-form-message.element';

export default {
    title: 'Elements`/vl-form-label',
    args: {
        light: false,
        block: false,
    },
    argTypes: {
        block: {
            name: 'data-vl-block',
            type: { summary: 'Boolean' },
            description: 'Attribute to create a block variant of a label',
            table: {
                defaultValue: { summary: false },
                category: 'Attributes',
            },
        },
        light: {
            name: 'data-vl-light',
            type: { summary: 'Boolean' },
            description: 'Attribute to create a light variant of a label',
            table: {
                defaultValue: { summary: false },
                category: 'Attributes',
            },
        },
    },
};

interface DefaultInterface {
    light: string,
    block: string,
}

export const Default = ({ light, block }: DefaultInterface) => html`
    <label is="vl-form-label" for="demo-label" ?data-vl-light=${light} ?data-vl-block=${block} data-cy="form-label">foobar</label>
`;