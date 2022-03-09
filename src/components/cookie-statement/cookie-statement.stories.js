import { html } from 'lit-html';
import '../cookie-statement';
import './components/cookie';

export default {
  title: 'custom-elements/vl-cookie-statement',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    extraCookies: [
      {
        title: 'title',
        names: ['name one', 'name two'],
        purpose: 'purpose',
        domain: 'domain',
        processor: 'processor',
        validity: 'validity',
      },
    ],
  },
};

export const Default = ({ extraCookies }) =>
  html`<vl-cookie-statement .extraCookies=${extraCookies}
    ><vl-cookie .title=${'test'}></vl-cookie
  ></vl-cookie-statement>`;
