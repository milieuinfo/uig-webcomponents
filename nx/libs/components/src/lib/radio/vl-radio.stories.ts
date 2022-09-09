import { html } from 'lit-html';
import './vl-radio.component';

export default {
  title: 'Components/vl-radio',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
    args: {
        block: false,
        checked: false,
        disabled: false,
        error: false,
        label: 'Ja',
        name: 'options',
        single: false,
        value: 'Ja'
    },
    argTypes: {
        block: {
            name: 'data-vl-block',
            description:
                'Attribute to show the checkbox as a block element',
            table: {
                type: { summary: 'boolean' },
                category: 'Attributes',
                defaultValue: { summary: 'false' },
            },
        },
        checked: {
            name: 'data-vl-checked',
            description:
                'Attribute to check the radio by default',
            table: {
                type: { summary: 'boolean' },
                category: 'Attributes',
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            name: 'data-vl-disabled',
            description:
                'Attribute to disable the checkbox',
            table: {
                type: { summary: 'boolean' },
                category: 'Attributes',
                defaultValue: { summary: 'false' },
            },
        },
        error: {
            name: 'data-vl-error',
            description:
                'Attribute to show an error state on the checkbox',
            table: {
                type: { summary: 'boolean' },
                category: 'Attributes',
                defaultValue: { summary: 'false' },
            },
        },
        label: {
            name: 'data-vl-label',
            description:
                'Attribute to set a label for the checkbox',
            table: {
                type: { summary: 'string' },
                category: 'Attributes',
                defaultValue: { summary: '' },
            },
        },
        name: {
            name: 'data-vl-name',
            description:
                'Attribute to the name of the checkbox',
            table: {
                type: { summary: 'string' },
                category: 'Attributes',
                defaultValue: { summary: '' },
            },
        },
        single: {
            name: 'data-vl-single',
            description:
                'Attribute to show a checkbox without label',
            table: {
                type: { summary: 'boolean' },
                category: 'Attributes',
                defaultValue: { summary: 'false' },
            },
        },
        value: {
            name: 'data-vl-value',
            description:
                'Attribute to determine the value of the checkbox',
            table: {
                type: { summary: 'string' },
                category: 'Attributes',
                defaultValue: { summary: '' },
            },
        },
    },
};

interface DefaultInterface {
    block: string,
    checked: string,
    disabled: string,
    error: string,
    label: string,
    name: string,
    single: string,
    value: string,
}

export const Default = ({ block, checked, disabled, error, label, name, single, value}: DefaultInterface) => html`
    <vl-radio
        ?data-vl-block=${block}
        ?data-vl-disabled=${disabled}
        ?data-vl-error=${error}
        data-vl-label=${label}
        data-vl-name=${name}
        data-vl-value=${value}
        ?data-vl-single=${single}
        ?data-vl-checked${checked}
        data-cy="radio"
    ></vl-radio>
`;
