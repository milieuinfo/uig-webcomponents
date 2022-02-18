import { html } from 'lit';
import { VIEWS } from '../../enums';
import '../../../cookie-statement';

export const statement = (reference) => html`<vl-cookie-statement
  data-vl-inline
  @vl-back=${() => {
    reference.view = VIEWS.COOKIE_CONSENT;
  }}
  slot="content"
></vl-cookie-statement>`;
