import { html } from 'lit-html';
import withMock from 'storybook-addon-mock';
import {docsIntro, stylesheet} from '../../../../../.storybook/utils.js';

import {VlProzaMessage} from '../../../../legacy/proza-message/src/index.js';

import linkStyles from '../../../../components/link/styles.scss';
import buttonStyles from '../../../../components/button/styles.scss';
import gridStyles from '../../../../components/grid/styles.scss';
import titleStyles from '../../../../components/titles/styles.scss';

import '../../../../components/button';
import '../../../../components/link';
import '../../../../components/grid';
import '../../../../components/titles';

export default {
  title: 'legacy/vl-proza-message',
  decorators: [
    (story) => html`${stylesheet(linkStyles)}${story()}`,
    (story) => html`${stylesheet(buttonStyles)}${story()}`,
    (story) => html`${stylesheet(gridStyles)}${story()}`,
    (story) => html`${stylesheet(titleStyles)}${story()}`,
    withMock
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'proza-message/src',
          isLegacy: true,
        }),
      },
    },
    mockData: [
      {
        url: '/proza/domein/noneditable/inline',
        method: 'GET',
        status: 200,
        response: {
          'code': 'inline',
          'tekst': 'Inline',
        }
      },
      {
        url: '/proza/domein/noneditable/action',
        method: 'GET',
        status: 200,
        response: {
          'code': 'action',
          'tekst': 'Action',
        }
      },
      {
        url: '/proza/domein/noneditable/block',
        method: 'GET',
        status: 200,
        response: {
          code: 'block',
          tekst: `
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. <b>Duis aute irure dolor</b> in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        `
        }
      },
      {
        url: '/proza/domein/noneditable/toegelatenoperaties',
        method: 'GET',
        status: 200,
        response: {
          'create': false,
          'read': true,
          'update': false,
          'delete': false,
        }
      },
      {
        url: '/proza/domein/editable/inline',
        method: 'GET',
        status: 200,
        response: {
          'code': 'inline',
          'tekst': 'Inline',
        }
      },
      {
        url: '/proza/domein/editable/action',
        method: 'GET',
        status: 200,
        response: {
          code: 'action',
          tekst: 'Action'
        }
      },
      {
        url: '/proza/domein/editable/block',
        method: 'GET',
        status: 200,
        response: {
          code: 'block',
          tekst: `<div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. <b>Duis aute irure dolor</b> in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>`
        }
      },
      {
        url: '/proza/domein/editable/toegelatenoperaties',
        method: 'GET',
        status: 200,
        response: {
          create: true,
          read: true,
          update: true,
          delete: true,
        }
      }
    ]
  },
};

export const NonEditable = () => {
  delete VlProzaMessage.__cache;
  return html`
    <div is="vl-grid" data-vl-is-stacked-small>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">Als een inline element:</h6>
        <vl-proza-message data-vl-domain="noneditable" data-vl-code="inline"></vl-proza-message>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">Als een block element:</h6>
        <vl-proza-message data-vl-domain="noneditable" data-vl-code="block"></vl-proza-message>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">In een knop:</h6>
        <button is="vl-button">
          <vl-proza-message data-vl-domain="noneditable" data-vl-code="action"></vl-proza-message>
        </button>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">In een link:</h6>
        <a is="vl-link" href="#" target="_blank">
          <vl-proza-message data-vl-domain="noneditable" data-vl-code="action"></vl-proza-message>
        </a>
      </div>
    </div>`
}

export const Editable = () => {
  delete VlProzaMessage.__cache;
  return html`
    <div is="vl-grid" data-vl-is-stacked-small>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">Als een inline element:</h6>
        <vl-proza-message data-vl-domain="editable" data-vl-code="inline"></vl-proza-message>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">Als een block element:</h6>
        <vl-proza-message data-vl-domain="editable" data-vl-code="block"></vl-proza-message>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">In een knop:</h6>
        <button is="vl-button">
          <vl-proza-message data-vl-domain="editable" data-vl-code="action"></vl-proza-message>
        </button>
        <button is="vl-button" data-vl-secondary>
            <vl-proza-message data-vl-domain="editable" data-vl-code="action"></vl-proza-message>
        </button>
        <button is="vl-button" data-vl-tertiary>
            <vl-proza-message data-vl-domain="editable" data-vl-code="action"></vl-proza-message>
        </button>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">In een link:</h6>
        <a is="vl-link" href="#" target="_blank">
          <vl-proza-message data-vl-domain="editable" data-vl-code="action"></vl-proza-message>
        </a>
      </div>
    </div>`;
}
