import { html } from 'lit-html';
import '../cookie-consent';
// import { resetCookieConsent } from '../cookie-consent/utils';
import { args, argTypes } from './config';

export default {
  title: 'custom-elements/vl-cookie-consent',
  args,
  argTypes,
};

const Template = ({
  functionalOptinDisabled,
  owner,
  autoOpenDisabled,
  link,
  submitted,
  analytics,
  extraOptIns,
}) => html`<vl-cookie-consent
  ?data-vl-auto-opt-in-functional-disabled=${functionalOptinDisabled}
  data-vl-owner=${owner}
  ?data-vl-auto-open-disabled=${autoOpenDisabled}
  ?data-vl-analytics=${analytics}
  data-vl-link=${link}
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

export const WithoutFuntionalOptIn = Template.bind({});
WithoutFuntionalOptIn.args = { functionalOptinDisabled: true };

const getConsent = () => {
  const [lastItem] = [...document.querySelectorAll('vl-cookie-consent')].slice(-1);
  return lastItem;
};

export const Controlled = ({
  functionalOptinDisabled,
  owner,
  autoOpenDisabled,
  link,
  submitted,
  analytics,
  extraOptIns,
  open,
}) => html`<vl-cookie-consent
  .open=${open}
  ?data-vl-auto-opt-in-functional-disabled=${functionalOptinDisabled}
  data-vl-owner=${owner}
  ?data-vl-auto-open-disabled=${autoOpenDisabled}
  ?data-vl-analytics=${analytics}
  data-vl-link=${link}
  .extraOptIns=${extraOptIns}
  @vl-submitted=${(event) => {
    submitted(event.detail);
    getConsent().open = false;
  }}
>
</vl-cookie-consent> `;

// resetCookieConsent() nog in docs
