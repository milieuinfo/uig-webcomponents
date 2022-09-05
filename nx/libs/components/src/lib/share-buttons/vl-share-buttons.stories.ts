import { html } from 'lit-html';
import './vl-share-buttons.component';
import './components/share-button/vl-share-button.component';

export default {
  title: 'Components/vl-share-buttons',
  args: { alt: false },
  argTypes: {
    alt: {
      name: 'data-vl-alt',
      description: 'Removes the gray border top.',
      table: {
        category: 'Attributes',
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

interface DefaultInterface {
  alt: string
}

export const Default = ({ alt }: DefaultInterface) => html`<vl-share-buttons ?data-vl-alt=${alt}>
  <vl-share-button href="#" data-vl-medium="facebook"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="twitter"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="linkedin"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="googleplus"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="mail"></vl-share-button>
</vl-share-buttons>`;
