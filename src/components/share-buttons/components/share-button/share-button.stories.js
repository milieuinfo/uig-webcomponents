import { html } from 'lit-html';
import { docsIntro } from '../../../../../.storybook/utils';
import { MEDIA } from '../../enums';
import '../../../share-buttons';

export default {
  title: 'custom-elements/vl-share-buttons/vl-share-button',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'share-buttons',
          intro: 'Allow users to share content on social media.',
        }),
      },
    },
  },
  args: { href: '#', medium: MEDIA.FACEBOOK },
  argTypes: {
    medium: {
      name: 'data-vl-medium',
      type: 'select',
      options: [MEDIA.FACEBOOK, MEDIA.TWITTER, MEDIA.LINKED_IN, MEDIA.GOOGLE_PLUS, MEDIA.MAIL],
      description: 'This attribute is used to pass the medium.',
      table: {
        type: {
          summary: `${MEDIA.FACEBOOK} | ${MEDIA.TWITTER} | ${MEDIA.LINKED_IN} | ${MEDIA.GOOGLE_PLUS} | ${MEDIA.MAIL}`,
        },
      },
    },
    href: { type: 'string', description: "The href attribute specifies the link's destination." },
  },
};

export const Default = ({ href, medium }) =>
  html`<vl-share-buttons>
    <vl-share-button href=${href} data-vl-medium=${medium}></vl-share-button>
  </vl-share-buttons>`;
