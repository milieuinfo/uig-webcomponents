import { html } from 'lit-html';
import '../cookie-consent';
import { resetCookieConsent } from '../cookie-consent/utils';
import { args, argTypes } from './config';
import '../button';
import buttonStyles from '../button/styles.scss';
import '../action-group';
import actionGroupStyles from '../action-group/styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-cookie-consent',
  decorators: [(story) => html`${stylesheet(buttonStyles)}${stylesheet(actionGroupStyles)}${story()}`],
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

const getConsent = () => {
  const [lastItem] = [...document.querySelectorAll('vl-cookie-consent')].slice(-1);
  return lastItem;
};

const Template = ({ submitted, analytics, extraOptIns, projectName, extraCookies, open }) => html` <div
    is="vl-action-group"
  >
    <button
      is="vl-button"
      @click=${() => {
        getConsent().open = true;
      }}
    >
      Open consent</button
    ><button data-vl-secondary is="vl-button" @click=${resetCookieConsent}>Reset consent</button>
  </div>
  <vl-cookie-consent
    ?data-vl-analytics=${analytics}
    .extraOptIns=${extraOptIns}
    .extraCookies=${extraCookies}
    .open=${open}
    @vl-submitted=${(event) => {
      submitted(event.detail);
      getConsent().open = false;
    }}
    data-vl-project-name=${projectName}
  ></vl-cookie-consent>`;

export const Default = Template.bind({});

export const WithExtraOptIns = Template.bind({});
WithExtraOptIns.args = {
  extraOptIns: [
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
  ],
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
