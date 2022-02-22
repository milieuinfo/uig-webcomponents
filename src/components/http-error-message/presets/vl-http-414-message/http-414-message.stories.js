import { html } from 'lit-html';
import { stylesheet, wrapWidth } from '../../../../../.storybook/utils';
import { parameters, args, argTypes } from '../../config';
import './index';

import styles from '../../styles.scss';

export default {
  title: 'native-elements/vl-http-error-message/vl-http-414-message',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: parameters('414'),
  args,
  argTypes,
};

export const Default = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-414-message id="error-414"></vl-http-414-message>
</div>`;
