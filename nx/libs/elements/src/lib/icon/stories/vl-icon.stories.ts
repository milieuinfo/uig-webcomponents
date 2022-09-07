import { html } from 'lit-html';
import '../vl-icon.element';
import { iconArgs, iconArgTypes } from './vl-icon.stories-arg';
import { formDefault } from '../../form/stories/vl-form.stories';

export default {
    title: 'Elements/icon',
    args: iconArgs,
    argTypes: iconArgTypes,
};

export const iconDefault = ({ icon, size, light, rotate, fullRotate }: typeof iconArgs) => html`<span
    is="vl-icon"
    data-vl-size=${size}
    data-vl-icon=${icon}
    ?data-vl-light=${light}
    ?data-vl-90deg=${rotate}
    ?data-vl-180deg=${fullRotate}
    data-cy="icon-default"
></span>`;
iconDefault.storyName = 'vl-icon - default';
iconDefault.argTypes = { content: { control: false } };

export const iconBefore = ({ size, icon, light, rotate, fullRotate, content, before }: typeof iconArgs) => html`<p
    is="vl-icon-wrapper"
>
    <span
        is="vl-icon"
        ?data-vl-before=${before}
        data-vl-icon=${icon}
        data-vl-size=${size}
        ?data-vl-light=${light}
        ?data-vl-90deg=${rotate}
        ?data-vl-180deg=${fullRotate}
        data-cy="icon-before-element"
    ></span
    ><span>${content}</span>
</p>`;
iconBefore.storyName = 'vl-icon - before';
iconBefore.args = {
    before: true,
};

export const iconAfter = ({ size, icon, light, rotate, fullRotate, content, after }: typeof iconArgs) => html`<p
    is="vl-icon-wrapper"
>
    <span>${content}</span
    ><span
        is="vl-icon"
        ?data-vl-after=${after}
        data-vl-icon=${icon}
        data-vl-size=${size}
        ?data-vl-light=${light}
        ?data-vl-90deg=${rotate}
        ?data-vl-180deg=${fullRotate}
        data-cy="icon-after-element"
    ></span>
</p>`;
iconAfter.storyName = 'vl-icon - after';
iconAfter.args = {
    after: true,
};
