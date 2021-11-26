import { html } from 'lit-html';
import { docsIntro, CATEGORIES } from '../../../.storybook/utils';
import '../share-buttons';

export default {
  title: 'custom-elements/vl-share-buttons',
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
  args: { alt: false },
  argTypes: {
    alt: {
      name: 'data-vl-alt',
      description: 'Removes the gray border top.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export const Default = ({ alt }) => html`<vl-share-buttons ?data-vl-alt=${alt}>
  <vl-share-button href="#" data-vl-medium="facebook"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="twitter"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="linkedin"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="googleplus"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="mail"></vl-share-button>
</vl-share-buttons>`;
