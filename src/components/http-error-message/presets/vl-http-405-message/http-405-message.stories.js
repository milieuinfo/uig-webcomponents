import { html } from 'lit-html';
import { stylesheet, wrapWidth } from '../../../../../.storybook/utils';
import { parameters, args, argTypes } from '../../config';
import './index';

import styles from '../../styles.scss';

export default {
  title: 'native-elements/vl-http-error-message/vl-http-405-message',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: parameters('405'),
  args,
  argTypes,
};

export const Default = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-405-message id="error-405"></vl-http-405-message>
</div>`;
