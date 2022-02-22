import { html } from 'lit-html';
import { stylesheet, wrapWidth } from '../../../../../.storybook/utils';
import { parameters, args, argTypes } from '../../config';
import './index';

import styles from '../../styles.scss';

export default {
  title: 'native-elements/vl-http-error-message/vl-http-415-message',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: parameters('415'),
  args,
  argTypes,
};

export const Default = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-415-message id="error-415"></vl-http-415-message>
</div>`;
