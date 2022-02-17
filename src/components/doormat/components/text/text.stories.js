import { html } from 'lit-html';
import '../..';
import styles from '../../styles.scss';
import { stylesheet, docsIntro } from '../../../../../.storybook/utils';

export default {
  title: 'native-elements/vl-doormat/vl-doormat-text',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'doormat',
          stylesheets: ['doormat'],
        }),
      },
    },
  },
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
};

export { Default } from '../../doormat.stories';
