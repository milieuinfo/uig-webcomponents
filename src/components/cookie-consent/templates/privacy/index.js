import { html } from 'lit';
import '../../../privacy';
import { backButton } from '../backButton';

export const privacy = (reference) => html`<div slot="content">
  ${backButton(reference)}
  <vl-privacy .withoutFunctionalHeader=${true} .isInConsent=${true}></vl-privacy>
</div>`;
