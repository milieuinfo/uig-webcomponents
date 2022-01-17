import { html } from 'lit-html';
import '../cookie-consent';
import { resetCookieConsent } from '../cookie-consent/utils';
import { args, argTypes } from './config';
import '../button';
import buttonStyles from '../button/styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-cookie-consent',
  decorators: [(story) => html`${stylesheet(buttonStyles)}${story()}`],
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'cookie-consent',
          intro: 'The cookie consent can be used to inform the user about all the cookies that are used.',
          utils: [{ name: 'resetCookieConsent', description: 'Fire the function to reset the cookie consent.' }],
        }),
      },
    },
  },
};

const Template = ({ submitted, analytics, extraOptIns }) => html`<button is="vl-button" @click=${resetCookieConsent}>
    Reset consent
  </button>
  <vl-cookie-consent
    ?data-vl-analytics=${analytics}
    .extraOptIns=${extraOptIns}
    @vl-submitted=${(event) => submitted(event.detail)}
  ></vl-cookie-consent>`;

export const Default = Template.bind({});

export const WithExtraOptIns = Template.bind({});
WithExtraOptIns.args = {
  extraOptIns: [
    {
      name: 'defaultChecked',
      label: 'Default checked',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      defaultChecked: true,
    },
    {
      name: 'withoutDescription',
      label: 'Without description',
    },
    {
      name: 'mandatory',
      label: 'Mandatory one',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      mandatory: true,
    },
  ],
};

const getConsent = () => {
  const [lastItem] = [...document.querySelectorAll('vl-cookie-consent')].slice(-1);
  return lastItem;
};

export const Controlled = ({ submitted, analytics, extraOptIns, open }) => html`
  <button
    is="vl-button"
    @click=${() => {
      getConsent().open = true;
    }}
  >
    Open consent</button
  ><vl-cookie-consent
    .open=${open}
    ?data-vl-analytics=${analytics}
    .extraOptIns=${extraOptIns}
    @vl-submitted=${(event) => {
      submitted(event.detail);
      getConsent().open = false;
    }}
  >
  </vl-cookie-consent>
`;

Controlled.argTypes = {
  open: {
    control: {
      disable: false,
    },
  },
};

// resetCookieConsent() nog in docs
