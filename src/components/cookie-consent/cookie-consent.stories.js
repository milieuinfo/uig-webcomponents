import { html } from 'lit-html';
import '../cookie-consent';
import '../cookie-consent/new';
import { action } from '@storybook/addon-actions';
import { CATEGORIES } from '../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-cookie-consent',
  args: {
    functionalOptinDisabled: false,
    owner: 'Departement Omgeving',
    autoOpenDisabled: false,
    link: 'https://www.omgevingvlaanderen.be/privacy',
    analytics: false,
    extraOptIns: [],
    submitted: action('vl-submitted'),
    reset: action('vl-reset'),
  },
  argTypes: {
    functionalOptinDisabled: {
      name: 'data-vl-auto-opt-in-functional-disabled',
      table: {
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    analytics: { table: { category: CATEGORIES.ATTRIBUTES } },
    owner: { table: { category: CATEGORIES.ATTRIBUTES } },
    autoOpenDisabled: { table: { category: CATEGORIES.ATTRIBUTES } },
    link: { table: { category: CATEGORIES.ATTRIBUTES } },
    extraOptIns: { table: { category: CATEGORIES.PROPERTIES } },
    submitted: { name: 'vl-submitted', table: { category: CATEGORIES.EVENTS } },
    reset: { name: 'vl-reset', table: { category: CATEGORIES.EVENTS } },
  },
};

const Template = ({
  functionalOptinDisabled,
  owner,
  autoOpenDisabled,
  link,
  submitted,
  reset,
  analytics,
  extraOptIns,
}) => html`<vl-cookie-consent-new
  ?data-vl-auto-opt-in-functional-disabled=${functionalOptinDisabled}
  data-vl-owner=${owner}
  ?data-vl-auto-open-disabled=${autoOpenDisabled}
  ?data-vl-analytics=${analytics}
  data-vl-link=${link}
  .extraOptIns=${extraOptIns}
  @vl-submitted=${(event) => submitted(event.detail)}
  @vl-reset=${(event) => reset(event.detail)}
></vl-cookie-consent-new>`;

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

export const Old = () =>
  html`<vl-cookie-consent data-vl-auto-open-disabled>
    <vl-cookie-consent-opt-in
      id="socialmedia"
      data-vl-label="Sociale media"
      data-vl-description="Beschrijving van de sociale media cookies."
      data-vl-checked
    ></vl-cookie-consent-opt-in
  ></vl-cookie-consent>`;
