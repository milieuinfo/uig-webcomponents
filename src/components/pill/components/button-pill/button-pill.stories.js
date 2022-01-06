import { html } from 'lit-html';
import '../button-pill';
import { ifDefined } from 'lit-html/directives/if-defined';
import styles from '../../styles.scss';
import { stylesheet, docsIntro } from '../../../../../.storybook/utils.js';
import { argTypes } from './config';

export default {
  title: 'custom-elements/vl-pill/vl-button-pill',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['pill'],
          root: 'pill',
          intro: 'Use the button-pill component to create buttons with the styling of pills.',
        }),
      },
    },
  },
  argTypes,
};

export const Default = ({ type }) =>
  html` <button is="vl-button-pill" type="button" data-vl-type=${ifDefined(type)}>Optie 1</button> `;
