import { html } from 'lit-html';
import './vl-link-button.element';
import { buttonArgs, buttonArgTypes } from './helper/vl-button.stories-helper';

export default {
  title: 'Elements/vl-button/vl-link-button',
  args: buttonArgs,
  argTypes: buttonArgTypes,
};

// TODO gertjame: Vervang any door juiste object.
export const Default = (props: any) =>
  html`<a
    is="vl-link-button"
    href="#"
    ?disabled=${props.disabled}
    ?data-vl-error=${props.error}
    ?data-vl-block=${props.block}
    ?data-vl-large=${props.large}
    ?data-vl-wide=${props.wide}
    ?data-vl-narrow=${props.narrow}
    ?data-vl-loading=${props.loading}
    ?data-vl-secondary=${props.secondary}
    ?data-vl-tertiary=${props.tertiary}
    >${props.content}</a
  >`;

Default.args = { content: 'Link button' };
