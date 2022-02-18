import { html } from 'lit';
import { VIEWS } from '../../enums';

export const privacy = (reference) => html`<vl-privacy
  data-vl-inline
  @vl-back=${() => {
    reference.view = VIEWS.COOKIE_CONSENT;
  }}
  slot="content"
></vl-privacy>`;
