import { html } from 'lit-html';
import { docsIntro, stylesheet, TYPES } from '../../../.storybook/utils';
import styles from './styles.scss';

import '.';

import './utils/mock-api';

export default {
  title: 'custom-elements/vl-proza-message',
  decorators: [(story) => html`${stylesheet(`${styles}`)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['proza-message'],
          root: 'proza-message',
          intro:
            'The Proza Message component can be used to manage texts. Edit mode gets activated by clicking the pencil icon, and deactivated by pushing enter or focusing another element on the page. By pushing escape, the edit modus will be deactivated and the changes will be undone.',
        }),
      },
    },
  },
  args: { block: false, parameters: `{"key1": "tempus", "key2" : "ipsum" }` },
  argTypes: {
    domain: {
      name: 'data-vl-domain',
      type: { summary: TYPES.STRING },
      description: 'The Proza domain containing the Proza message.',
      control: { disable: true },
    },
    code: {
      name: 'data-vl-code',
      type: { summary: TYPES.STRING },
      description: 'The code that identifies the Proza message.',
      control: { disable: true },
    },
    block: {
      name: 'data-vl-block',
      type: { summary: 'boolean' },
      description: 'Used to indicate that the content of the Proza message is a block element.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    parameters: {
      name: 'data-vl-parameters',
      type: { summary: TYPES.STRING },
      description: 'The key/value parameters that will be processed and displayed in the content element.',
      control: { disable: true },
    },
  },
};

export const Default = ({ domain, code, block }) => html`<vl-proza-message
  data-vl-domain=${domain}
  data-vl-code=${code}
  ?data-vl-block=${block}
></vl-proza-message>`;

Default.args = {
  domain: 'foo',
  code: 'bar',
};

export const WithMarkup = ({ domain, code, block }) =>
  html`<vl-proza-message data-vl-domain=${domain} data-vl-code=${code} ?data-vl-block=${block}></vl-proza-message>`;

WithMarkup.args = {
  domain: 'foo',
  code: 'markup',
};

export const InButton = ({ domain, code, block }) => html`<button is="vl-button" secondary>
  <vl-proza-message
    id="message-8"
    data-vl-domain=${domain}
    data-vl-code=${code}
    ?data-vl-block=${block}
  ></vl-proza-message>
</button>`;

InButton.args = {
  domain: 'foo',
  code: 'bar',
};

export const WithUploadError = ({ domain, code, block }) =>
  html`<vl-proza-message data-vl-domain=${domain} data-vl-code=${code} ?data-vl-block=${block}></vl-proza-message> `;

WithUploadError.args = {
  domain: 'foo',
  code: 'fout',
};

export const Parameters = ({ domain, code, block, parameters }) => html`<vl-proza-message
  data-vl-domain=${domain}
  data-vl-code=${code}
  ?data-vl-block=${block}
  data-vl-parameters=${parameters}
></vl-proza-message>`;

Parameters.args = {
  domain: 'foo',
  code: 'parameters',
};

Parameters.argTypes = {
  parameters: { control: { disable: false } },
};
