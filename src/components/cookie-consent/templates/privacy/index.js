import { html } from 'lit';
import { VIEWS } from '../../enums';

export const privacy = (reference) => html`<vl-privacy
  .inModal=${true}
  @vl-back=${() => {
    reference.view = VIEWS.COOKIE_CONSENT;
  }}
  slot="content"
></vl-privacy>`;
