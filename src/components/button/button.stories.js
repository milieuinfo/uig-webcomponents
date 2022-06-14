import { html } from 'lit-html';
import '../button';
import '../text';
import { buttonArgs, buttonArgTypes } from './config';
import styles from './styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';

export default {
  title: 'native-elements/vl-button',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args: buttonArgs,
  argTypes: buttonArgTypes,
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['button'],
          root: 'button',
          intro: 'Use the vl button to add a CTA. The type of call to action is determined by the label or icon.',
        }),
      },
    },
  },
};

export const Default = ({
  disabled,
  error,
  block,
  large,
  wide,
  narrow,
  loading,
  secondary,
  tertiary,
  content,
}) => html`<button
  is="vl-button"
  ?disabled=${disabled}
  ?data-vl-error=${error}
  ?data-vl-block=${block}
  ?data-vl-large=${large}
  ?data-vl-wide=${wide}
  ?data-vl-narrow=${narrow}
  ?data-vl-loading=${loading}
  ?data-vl-secondary=${secondary}
  ?data-vl-tertiary=${tertiary}
>
  ${content}
</button>`;

export const IconButton = (props) => {
  const buttonWrap = (wrapProps, children) =>
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
      >
        ${children}
      </button>
    `;
  if (props.type === 'before') {
    return html`
      ${buttonWrap(props, html`<span is="vl-icon" data-vl-icon="location" data-vl-before></span>${props.content}`)}
    `;
  }
  if (props.type === 'hidden text') {
    return html`${buttonWrap(
      props,
      html`<span is="vl-icon" data-vl-icon="location"></span>
        <span is="vl-text" data-vl-visually-hidden="">${props.content}</span>`,
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
