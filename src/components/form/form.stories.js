import { html } from 'lit-html';
import '../form';
import styles from './styles.scss';
import inputFieldStyles from '../input-field/styles.scss';
import formGridStyles from '../form-grid/styles.scss';
import buttonStyles from '../button/styles.scss';
import formMessageStyle from '../form-message/styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import { args, argTypes } from './config';
import { formContent } from './helpers';

export default {
  title: 'native-elements/vl-form',
  decorators: [
    (story) =>
      html`
        ${stylesheet(`${styles}${inputFieldStyles}${formGridStyles}${buttonStyles}${formMessageStyle}`)}${story()}
      `,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['form'],
          root: 'form',
          intro: 'Form element.',
        }),
      },
    },
  },
  args,
  argTypes,
};

export const Default = ({ validate }) => html`
  <div style="max-width: 800px">
    <form is="vl-form" ?data-vl-validate=${validate}>${formContent}</form>
  </div>
`;
