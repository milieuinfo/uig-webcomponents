import { html } from 'lit-html';
import { CATEGORIES, docsIntro, stylesheet, TYPES } from '../../../.storybook/utils.js';
import { SIZE } from './enums/index.js';
import styles from './stories-styles.scss';
import '.';

export default {
  title: 'custom-elements/vl-spotlight',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'spotlight',
          intro:
            'Use the spotlight component to create a visual link to another page. The spotlight is shown as a block with an optional background image. By default, the complete spotlight is clickable. However, you can modify the spotlight component to be non-clickable..',
        }),
      },
    },
  },
  args: {
    link: '',
    alt: false,
    size: SIZE.S,
    imgSrc: '',
    imgAlt: '',
    title: 'Premies voor renovatie',
    subtitle: '',
    text: '',
    content: '',
  },
  argTypes: {
    link: {
      name: 'data-vl-link',
      type: { summary: TYPES.STRING, required: false },
      description:
        'De component wordt een link. Door te klikken op de component wordt de gebruiker doorgestuurd naar de link die gezet is in dit attribuut.',
      table: {
        defaultValue: { summary: '' },

        category: CATEGORIES.ATTRIBUTES,
      },
    },
    alt: {
      name: 'data-vl-alt',
      type: { summary: TYPES.BOOLEAN, required: false },
      description: 'Geeft de component een alternatieve stijl. De achtergrond wordt grijs.',
      table: {
        defaultValue: { summary: false },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    size: {
      name: 'data-vl-size',
      type: {
        summary: `${SIZE.XS} | ${SIZE.S} | ${SIZE.L}`,
        required: false,
      },
      description: 'Dit attribuut bepaalt de grootte van de component.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: `${SIZE.S}` },
      },
      control: {
        type: 'select',
        options: [SIZE.XS, SIZE.S, SIZE.L],
      },
    },
    imgSrc: {
      name: 'data-vl-img-src',
      type: { summary: TYPES.STRING, required: false },
      description: 'Het path van de image dat getoond moet worden in de spotlight.',
      table: {
        defaultValue: { summary: false },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    imgAlt: {
      name: 'data-vl-img-alt',
      type: { summary: TYPES.STRING, required: false },
      description: 'De alternatieve tekst van de image dat getoond moet worden in de spotlight.',
      table: {
        defaultValue: { summary: false },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    title: {
      name: 'title',
      type: { summary: TYPES.STRING, required: false },
      description: 'Titel van de spotlight.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.SLOTS,
      },
    },
    subtitle: {
      name: 'subtitle',
      type: { summary: TYPES.STRING, required: false },
      description: 'Subtitle van de spotlight.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.SLOTS,
      },
    },
    text: {
      name: 'text',
      type: { summary: TYPES.STRING, required: false },
      description: 'Text van de spotlight.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.SLOTS,
      },
    },
    content: {
      name: 'content',
      type: { summary: TYPES.STRING, required: false },
      description: 'Content van de spotlight.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.SLOTS,
      },
    },
  },
};

const Template = ({ link, alt, size, imgSrc, imgAlt, title, subtitle, text, content }) => html`
  <vl-spotlight
    data-vl-link=${link}
    ?data-vl-alt=${alt}
    data-vl-size=${size}
    data-vl-img-src=${imgSrc}
    data-vl-img-alt=${imgAlt}
  >
    ${title ? html`<span slot="title"> ${title} </span>` : ``}
    ${subtitle ? html`<span slot="subtitle"> ${subtitle} </span>` : ``}
    ${text ? html`<span slot="text"> ${text} </span>` : ``}
    ${content ? html`<span slot="content"> ${content} </span>` : ``}
  </vl-spotlight>
`;
export const Default = Template.bind({});
Default.storyName = 'spotlight - default';

export const WithLink = () => html`
  <vl-spotlight data-vl-link="http://www.google.com">
    <span slot="title">
      Premies voor renovatie
      <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
      <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
    </span>
  </vl-spotlight>
`;
WithLink.storyName = 'spotlight - with link';

export const NoLink = () => html`
  <vl-spotlight>
    <span slot="title"> Premies voor renovatie </span>
  </vl-spotlight>
`;
NoLink.storyName = 'spotlight - no link';

export const WithContent = () => html`
  <vl-spotlight data-vl-link="https://google.be" data-vl-alt data-vl-size="${SIZE.S}">
    <span slot="title">
      Verslag bestuursvergadering
      <br />
      <br />
      <br />
      <br />
    </span>
    <vl-document slot="content">
      <span slot="type">DOCX</span>
      <span slot="title">document</span>
      <span slot="metadata">DOCX-112kb</span>
    </vl-document>
  </vl-spotlight>
`;
WithContent.storyName = 'spotlight - with content';

export const WithText = () => html`
  <vl-spotlight data-vl-link="https://google.be">
    <span slot="title">
      Premies voor renovatie
      <span class="vl-icon vl-icon--light vl-vi vl-vi-external"></span>
      <span class="vl-u-visually-hidden">Opent in nieuw venster</span>
    </span>
    <span slot="text"
      >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
      energiefactuur.</span
    >
  </vl-spotlight>
`;
WithText.storyName = 'spotlight - with text';

export const WithImage = () => html`
  <vl-spotlight
    data-vl-img-src="//d201gzvprbtpxy.cloudfront.net/sites/default/files/styles/medium/public/images/vla_themateaser_350_dakisolatie.jpg?itok=cKDE21Pe"
    data-vl-img-alt="spotlight image"
  >
    <span slot="title"> Premies voor renovatie </span>
    <span slot="text"
      >Gaat u bouwen of verbouwen? Investeer in energiebesparende maatregelen en bespaar heel wat op uw
      energiefactuur.</span
    >
  </vl-spotlight>
`;
WithImage.storyName = 'spotlight - with image';

export const WithSubtitle = () => html`
  <vl-spotlight data-vl-link="https://google.be">
    <span slot="title">Communicatiespecialist te Willebroek - contract 1 jaar</span>
    <span slot="subtitle">Niveau A (universitair diploma)</span>
    <span slot="text">
      <ul class="vl-icon-list">
        <li class="vl-icon-list__item">Waterwegen en Zeekanaal NV in Brussel</li>
        <li class="vl-icon-list__item">Natuur en bos</li>
        <li class="vl-icon-list__item"></li>
      </ul>
    </span>
  </vl-spotlight>
`;
WithSubtitle.storyName = 'spotlight - with subtitle';
