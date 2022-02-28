import { html } from 'lit-html';
import { nothing } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined';
import { stylesheet, wrapWidth } from '../../../../../.storybook/utils';
import { parameters, args, argTypes } from '../../config';
import './index';

import styles from '../../styles.scss';

export default {
  title: 'custom-elements/vl-http-error-message/vl-http-405-message',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: parameters('405'),
  args,
  argTypes,
};

export const Default = ({ title, image, alt, textSlotText, actionsSlotText }) => html`<div
  style="max-width: ${wrapWidth}"
>
  <vl-http-405-message
    data-vl-title="${ifDefined(title)}"
    data-vl-image="${ifDefined(image)}"
    data-vl-image-alt="${ifDefined(alt)}"
  >
    ${textSlotText ? html`<p slot="text">${textSlotText}</p>` : nothing}
    ${actionsSlotText
      ? html`<div slot="actions">
          <a is="vl-link-button" href="#">${actionsSlotText}</a>
        </div>`
      : nothing}
  </vl-http-405-message>
</div>`;
