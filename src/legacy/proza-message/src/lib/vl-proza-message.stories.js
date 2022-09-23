import { html } from 'lit-html';
import {docsIntro, stylesheet} from '../../../../../.storybook/utils.js';
import withMock from 'storybook-addon-mock';

import {VlProzaMessage} from "../../../../legacy/proza-message/src/index.js";

import linkStyles from "../../../../components/link/styles.scss";
import buttonStyles from "../../../../components/button/styles.scss";
import gridStyles from "../../../../components/grid/styles.scss";
import titleStyles from "../../../../components/titles/styles.scss";

import '../../../../components/button'
import '../../../../components/link'
import '../../../../components/grid'
import '../../../../components/titles'

import '../index.js';

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
        url: '/proza/domein/default/inline',
        method: 'GET',
        status: 200,
        response: {
          'code': 'inline',
          'tekst': 'Inline',
        }
      },
      {
        url: '/proza/domein/default/action',
        method: 'GET',
        status: 200,
        response: {
          'code': 'action',
          'tekst': 'Action',
        }
      },
      {
        url: '/proza/domein/default/block',
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
        url: '/proza/domein/default/toegelatenoperaties',
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
        url: '/proza/domein/edit/inline',
        method: 'GET',
        status: 200,
        response: {
          'code': 'inline',
          'tekst': 'Inline',
        }
      },
      {
        url: '/proza/domein/edit/action',
        method: 'GET',
        status: 200,
        response: {
          code: 'action',
          tekst: 'Action'
        }
      },
      {
        url: '/proza/domein/edit/block',
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
        url: '/proza/domein/edit/toegelatenoperaties',
        method: 'GET',
        status: 200,
        response: {
          create: true,
          read: true,
          update: true,
          delete: true,
        }
      },
      {
        url: '/proza/domein/edit/bar',
        method: 'PUT',
        status: 200,
        response: ({body}) => new Object({
          code: 'bar',
          tekst: body
        })
      }
    ]
  },
};

export const Readonly = () => {
  delete VlProzaMessage.__cache;
  return html`
    <div is="vl-grid" data-vl-is-stacked-small>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">Als een inline element:</h6>
        <vl-proza-message data-vl-domain="default" data-vl-code="inline"></vl-proza-message>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">Als een block element:</h6>
        <vl-proza-message data-vl-domain="default" data-vl-code="block"></vl-proza-message>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">In een knop:</h6>
        <button is="vl-button">
          <vl-proza-message data-vl-domain="default" data-vl-code="action"></vl-proza-message>
        </button>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">In een link:</h6>
        <a is="vl-link" href="" target="_blank">
          <vl-proza-message data-vl-domain="default" data-vl-code="action"></vl-proza-message>
        </a>
      </div>
    </div>`
}

export const Edit = () => {
  delete VlProzaMessage.__cache;
  return html`
    <div is="vl-grid" data-vl-is-stacked-small>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">Als een inline element:</h6>
        <vl-proza-message data-vl-domain="edit" data-vl-code="inline"></vl-proza-message>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">Als een block element:</h6>
        <vl-proza-message data-vl-domain="edit" data-vl-code="block"></vl-proza-message>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">In een knop:</h6>
        <button is="vl-button">
          <vl-proza-message data-vl-domain="edit" data-vl-code="action"></vl-proza-message>
        </button>
      </div>
      <div is="vl-column" data-vl-size="12">
        <h6 is="vl-h6">In een link:</h6>
        <a is="vl-link" href="" target="_blank">
          <vl-proza-message data-vl-domain="edit" data-vl-code="action"></vl-proza-message>
        </a>
      </div>
    </div>`;
}
