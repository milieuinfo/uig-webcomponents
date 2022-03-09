import { html } from 'lit-html';
import '../cookie-statement';

export default {
  title: 'custom-elements/vl-cookie-statement',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    cookies: [
      {
        title: 'title',
        name: 'name',
        purpose: 'purpose',
        domain: 'domain',
        processor: 'processor',
        validity: 'validity',
      },
    ],
  },
};

export const Default = ({ cookies }) => html`<vl-cookie-statement .cookies=${cookies}></vl-cookie-statement>`;
