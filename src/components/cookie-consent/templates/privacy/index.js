import { html } from 'lit';
import { VIEWS } from '../../enums';
import { backButton } from '../backButton';

export const privacy = (reference) => html`<div slot="content">
  ${backButton(reference)}
  <vl-privacy
    .withoutFunctionalHeader=${true}
    @vl-back=${() => {
      reference.view = VIEWS.COOKIE_CONSENT;
    }}
  ></vl-privacy>
</div>`;
