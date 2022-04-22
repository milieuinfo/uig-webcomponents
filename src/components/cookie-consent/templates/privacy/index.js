import { html } from 'lit';
import { backButton } from '../backButton';

export const privacy = (reference) => html`<div slot="content">
  <div is="vl-layout" class="back-button-wrap">${backButton(reference)}</div>
  <vl-privacy .withoutFunctionalHeader=${true} .isInConsent=${true}></vl-privacy>
</div>`;
