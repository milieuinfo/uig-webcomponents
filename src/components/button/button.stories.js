import { html } from 'lit-html';
import '../button';
import '../text';
import { args, argTypes } from './config';
import styles from './styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';

export default {
  title: 'native-elements/vl-button',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['button'],
          root: 'button',
          intro:
            'Gebruik de vl-button om een CTA toe te voegen. Het type call-to-action wordt bepaald door het label of de pictogram.',
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
  const buttonWrap = (props, children) =>
    html`
      <button
        is="vl-button"
        ?disabled=${props.disabled}
        ?data-vl-error=${props.error}
        ?data-vl-block=${props.block}
        ?data-vl-large=${props.large}
        ?data-vl-wide=${props.wide}
        ?data-vl-narrow=${props.narrow}
        ?data-vl-loading=${props.loading}
        ?data-vl-secondary=${props.secondary}
        ?data-vl-tertiary=${props.tertiary}
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
