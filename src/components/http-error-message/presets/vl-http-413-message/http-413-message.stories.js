import { html } from 'lit-html';
import { stylesheet, wrapWidth } from '../../../../../.storybook/utils';
import { parameters, args, argTypes } from '../../config';
import './index';

import styles from '../../styles.scss';

export default {
  title: 'native-elements/vl-http-error-message/vl-http-413-message',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: parameters('413'),
  args,
  argTypes,
};

export const Default = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-413-message id="error-413"></vl-http-413-message>
</div>`;
