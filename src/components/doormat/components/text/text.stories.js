import { html } from 'lit-html';
import '../..';
import styles from '../../styles.scss';
import { stylesheet } from '../../../../../.storybook/utils';

export default {
  title: 'native-elements/vl-doormat/vl-doormat-text',
  parameters: { controls: { hideNoControlsWarning: true } },
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
};

export { Default } from '../../doormat.stories';
