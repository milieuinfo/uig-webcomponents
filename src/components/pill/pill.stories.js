import { html } from 'lit-html';
import '../pill';
import styles from './styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import { args, argTypes } from './config';

export default {
  title: 'custom-elements/vl-pill',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'pill',
          intro: 'Use the pill component to visualize keywords (filters or tags).',
        }),
      },
    },
  },
  args,
  argTypes,
};

export const Default = ({ closable, checkable, checked, type, disabled, close, check }) => html`
  <vl-pill
    ?data-vl-closable=${closable}
    ?data-vl-checkable=${checkable}
    data-vl-type=${type}
    ?data-vl-disabled=${disabled}
    ?data-vl-checked=${checked}
    @close=${(event) => close(event)}
    @check=${(event) => check(event.detail)}
  >
    Optie 1
  </vl-pill>
`;
