import { html } from 'lit-html';
import '../infotext';
import styles from './styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import { args, argTypes } from './config';

export default {
  title: 'native-elements/vl-infotext',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['infotext'],
          root: 'infotext',
          intro: 'Use the infotext to clearly visualize important numbers.',
        }),
      },
    },
  },
  args,
  argTypes,
};

export const Default = ({ badge }) => html`
  <div is="vl-infotext" ?data-vl-badge=${badge}>
    <div>
      <div data-vl-value>3200</div>
      <div data-vl-text>Bezoekers per dag</div>
    </div>
  </div>
`;

export const WithLink = ({ badge }) => html`
  <div is="vl-infotext" ?data-vl-badge=${badge}>
    <a href="#">
      <div data-vl-value>3200</div>
      <div data-vl-text>Bezoekers per dag</div>
    </a>
  </div>
`;
