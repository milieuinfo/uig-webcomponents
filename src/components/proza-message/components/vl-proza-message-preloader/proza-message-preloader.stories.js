import { html } from 'lit-html';
import { docsIntro, stylesheet, TYPES } from '../../../../../.storybook/utils';
import styles from '../../styles.scss';

import '.';
import '../..';

export default {
  title: 'custom-elements/vl-proza-message/vl-proza-message-preloader',
  decorators: [(story) => html`${stylesheet(`${styles}`)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['proza-message'],
          root: 'proza-message',
          intro:
            'Proza preloader is used to fetch Proza codes in advance so that they can be displayed to the user faster.',
        }),
      },
    },
  },
  args: { domain: 'bar' },
  argTypes: {
    domain: {
      name: 'data-vl-domain',
      type: { summary: TYPES.STRING },
      description: 'The Proza domain containing the Proza message.',
      control: { disable: true },
    },
  },
};

export const Default = ({ domain }) => html`<vl-proza-message-preloader
    data-vl-domain=${domain}
  ></vl-proza-message-preloader>
  <vl-proza-message data-vl-domain=${domain} data-vl-code="foo"></vl-proza-message>
  <vl-proza-message data-vl-domain=${domain} data-vl-code="bar"></vl-proza-message>`;
