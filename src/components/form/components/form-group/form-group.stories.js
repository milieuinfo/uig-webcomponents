import { html } from 'lit-html';
import '../../../form';
import '../../../form-grid';
import '../../../input-field';
import '../../../button';
import '../../../form-message';
import styles from '../.././styles.scss';
import inputFieldStyles from '../../../input-field/styles.scss';
import formGridStyles from '../../../form-grid/styles.scss';
import buttonStyles from '../../../button/styles.scss';
import formMessageStyle from '../../../form-message/styles.scss';
import { stylesheet, docsIntro } from '../../../../../.storybook/utils.js';

export default {
  title: 'native-elements/vl-form/vl-form-group',
  decorators: [
    (story) =>
      html`
        ${stylesheet(`${styles}${inputFieldStyles}${formGridStyles}${buttonStyles}${formMessageStyle}`)}${story()}
      `,
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['form'],
          root: 'form',
          intro: 'Form group element is used to group form elements together.',
        }),
      },
    },
  },
};

export { Default } from '../../form.stories.js';
