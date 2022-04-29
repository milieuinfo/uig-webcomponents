import { html } from 'lit-html';
import '../cookie-consent';
import { args, argTypes } from './config';
import '../button';
import buttonStyles from '../button/styles.scss';
import '../action-group';
import actionGroupStyles from '../action-group/styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import { getVlCookies } from './utils';

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
          utils: [{ name: 'getVlCookies', description: '' }],
        }),
      },
    },
  },
};

const getConsent = () => {
  const [lastItem] = [...document.querySelectorAll('vl-cookie-consent')].slice(-1);
  return lastItem;
};

const Template = ({
  submitted,
  analytics,
  extraOptIns,
  projectName,
  extraCookies,
  open,
  opened,
  closed,
  getVlCookiesAction,
}) => html` <div is="vl-action-group">
    <button
      is="vl-button"
      @click=${() => {
        getConsent().open = true;
      }}
    >
      Open consent
    </button>
    <button
      data-vl-secondary
      is="vl-button"
      @click=${() => {
        getVlCookiesAction(getVlCookies());
      }}
    >
      Get cookies
    </button>
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
    @vl-opened=${(event) => opened(event)}
    @vl-closed=${(event) => closed(event)}
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
