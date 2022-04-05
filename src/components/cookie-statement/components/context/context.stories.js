import { html } from 'lit-html';
import '../context';

export default {
  title: 'custom-elements/vl-cookie-statement/vl-cookie-statement-context',
  args: {
    extraCookies: [],
  },
};

export const Default = () =>
  html`<vl-cookie-statement-context
    .extraCookies=${[
      {
        title: 'This is a extra cookie',
        names: ['name one', 'name two'],
        purpose: 'purpose',
        domain: 'domain',
        processor: 'processor',
        validity: 'validity',
      },
    ]}
  >
    <vl-cookie-consent
      .extraOptIns=${[
        {
          name: 'withoutDescription',
          label: 'Without description',
        },
        {
          name: 'withDescription',
          label: 'With description',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ]}
      .projectName=${'Voortoets'}
    ></vl-cookie-consent>
    <vl-cookie-statement></vl-cookie-statement>
  </vl-cookie-statement-context>`;
