import { html } from 'lit';
import { VIEWS } from '../../enums';

export const backButton = (reference) => html`<button
  is="vl-button-link"
  @click=${() => {
    reference.view = VIEWS.COOKIE_CONSENT;
  }}
>
  <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>Terug
</button>`;
