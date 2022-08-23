import './vl-button.element';
import { html } from 'lit-html';
import { buttonArgs, buttonArgTypes } from './helper/vl-button.stories-helper';
// TODO vl-icon en vl-text

export default {
    title: 'Elements/vl-button',
    args: buttonArgs,
    argTypes: buttonArgTypes,
    parameters: {},
};

export const Default = (args: typeof buttonArgs) => html` <button
    is="vl-button"
    ?disabled=${args.disabled}
    ?data-vl-error=${args.error}
    ?data-vl-block=${args.block}
    ?data-vl-large=${args.large}
    ?data-vl-wide=${args.wide}
    ?data-vl-narrow=${args.narrow}
    ?data-vl-loading=${args.loading}
    ?data-vl-secondary=${args.secondary}
    ?data-vl-tertiary=${args.tertiary}
    data-cy="button-default"
>
    ${args.content}
</button>`;

export const IconButton = (props: any) => {
    const buttonWrap = (wrapProps: any, children: any) =>
        html`
            <button
                is="vl-button"
                ?disabled=${wrapProps.disabled}
                ?data-vl-error=${wrapProps.error}
                ?data-vl-block=${wrapProps.block}
                ?data-vl-large=${wrapProps.large}
                ?data-vl-wide=${wrapProps.wide}
                ?data-vl-narrow=${wrapProps.narrow}
                ?data-vl-loading=${wrapProps.loading}
                ?data-vl-secondary=${wrapProps.secondary}
                ?data-vl-tertiary=${wrapProps.tertiary}
                data-cy="button-with-icon"
            >
                ${children}
            </button>
        `;
    if (props.type === 'before') {
        return html`
            ${buttonWrap(
                props,
                html`<span is="vl-icon" data-vl-icon="location" data-vl-before></span>${props.content}`
            )}
        `;
    }
    if (props.type === 'hidden text') {
        return html`${buttonWrap(
            props,
            html`<span is="vl-icon" data-vl-icon="location"></span>
                <span is="vl-text" data-vl-visually-hidden>${props.content}</span>`
        )}`;
    }
    return html`
        ${buttonWrap(props, html`${props.content} <span is="vl-icon" data-vl-icon="location" data-vl-after></span>`)}
    `;
};

IconButton.args = {
    content: 'Icon button',
    type: 'after',
};

IconButton.argTypes = {
    type: {
        name: 'type (for demo purposes)',
        control: {
            type: 'select',
            options: ['before', 'after', 'hidden text'],
        },
    },
};
