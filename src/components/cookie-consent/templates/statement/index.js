import { html } from 'lit';
import '../../../cookie-statement';
import { backButton } from '../backButton';

export const statement = (reference) => html`
  <div slot="content">
    ${backButton(reference)}
    <vl-cookie-statement
      .extraCookies=${reference.extraCookies}
      .inModal=${true}
      .withoutFunctionalHeader=${true}
    ></vl-cookie-statement>
  </div>
`;
