import { html } from 'lit-html';
import '../..';
import styles from '../../styles.scss';
import { stylesheet } from '../../../../../.storybook/utils';

export default {
  title: 'native-elements/vl-breadcrumb/vl-breadcrumb-item',
  parameters: { controls: { hideNoControlsWarning: true } },
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
};

export const Default = () => html` <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>`;
