import { html } from 'lit-html';
import '../functional-header';
import '../../legacy/tabs';
import styles from './stories-styles.scss';
import { CATEGORIES, docsIntro, stylesheet } from '../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-functional-header',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'functional-header',
          intro:
            'Toont bovenaan de pagina generieke informatie zonder af te leiden zoals bijvoorgeeld titel, acties, tab navigatie of zoek input.',
        }),
      },
    },
  },
  args: {
    title: 'School- en studietoelagen',
    subTitle: 'Voor lager, middelbaar en hoger onderwijs',
    link: '#',
    backLink: '#',
    back: 'Terug',
  },
  argTypes: {
    title: {
      name: 'data-vl-title',
      type: { summary: 'string' },
      description: 'Attribuut wordt gebruikt om de tekst van de titel te bepalen.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    subTitle: {
      name: 'data-vl-sub-title',
      type: { summary: 'string' },
      description: 'Attribuut wordt gebruikt om de tekst van de sub titel te bepalen.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    link: {
      name: 'data-vl-link',
      type: { summary: 'string' },
      description: 'Attribuut wordt gebruikt om de link van de titel te bepalen.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    backLink: {
      name: 'data-vl-back-link',
      type: { summary: 'string' },
      description: 'Attribuut wordt gebruikt om de terug link te bepalen.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    back: {
      name: 'data-vl-back',
      type: { summary: 'string' },
      description: 'Attribuut wordt gebruikt om de terug link tekst te bepalen.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    titleSlot: {
      name: 'title',
      description: 'Slot wordt gebruikt om de tekst van de titel te bepalen.',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
    subTitleSlot: {
      name: 'sub-title',
      description: 'Slot wordt gebruikt om de tekst van de sub titel te bepalen.',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
    backLinkSlot: {
      name: 'back-link',
      description:
        'Defines the complete back link section that is displayed in the default sub header (section below the horizontal line)',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
    backSlot: {
      name: 'back',
      description: 'Slot wordt gebruikt om de terug link tekst te bepalen.',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
    actionsSlot: {
      name: 'actions',
      description:
        'Defines what is displayed in the actions section in the top-left corner (right below the top-right slot) of the functional-header',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
    topLeftSlot: {
      name: 'top-left',
      description: 'Defines what is displayed in the top-left corner of the functional-header',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
    topRightSlot: {
      name: 'top-right',
      description: 'Defines what is displayed in the top-right corner of the functional-header',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
    subHeaderSlot: {
      name: 'sub-header',
      description:
        'Defines what is displayed in the sub-header (section below the horizontal line). If this slot is defines, the sub-title slot and the data-vl-sub-title, data-vl-link, data-vl-back-link attributes are ignored.',
      table: {
        category: CATEGORIES.SLOTS,
        defaultValue: { summary: undefined },
      },
    },
  },
};

export const Default = ({ title, subTitle, link, backLink, back }) =>
  html`<vl-functional-header
    data-vl-back=${back}
    data-vl-back-link=${backLink}
    data-vl-title=${title}
    data-vl-sub-title=${subTitle}
    data-vl-link=${link}
  ></vl-functional-header>`;

export const WithSlotElements = ({ title, subTitle, link, backLink, back }) =>
  html`<vl-functional-header data-vl-link=${link} data-vl-back-link=${backLink} data-vl-back=${back}>
    <span slot="title">${title}</span>
    <span slot="sub-title">${subTitle}</span>
    <span slot="back">${back}</span>
  </vl-functional-header>`;

WithSlotElements.argTypes = {
  title: {
    name: 'title (slot)',
  },
  subTitle: {
    name: 'sub-title (slot)',
  },
  back: {
    name: 'back (slot)',
  },
};

export const WithUserInteraction = ({ title, subTitle, link, backLink, back, content }) => html`
  <vl-functional-header data-vl-link=${link} data-vl-back-link=${backLink} data-vl-back=${back}>
    <span slot="title">${title}</span>
    <span slot="sub-title">${subTitle}</span>
    <span slot="back">${back}</span>
    <div slot="actions">
      <a href="#">${content}</a>
    </div>
  </vl-functional-header>
`;

WithUserInteraction.args = {
  content: 'Koen Peeters',
};

WithUserInteraction.argTypes = {
  content: {
    name: 'actions (slot)',
    type: 'string',
  },
  title: {
    name: 'title (slot)',
  },
  subTitle: {
    name: 'sub-title (slot)',
  },
  back: {
    name: 'back (slot)',
  },
};

export const InzageFunctionalHeader = ({ title, topLeft, topRight, subHeader }) => html`
  <vl-functional-header>
    <span slot="top-left" class="super-title">${topLeft}</span>

    <span slot="title">${title}</span>

    <div slot="top-right">${topRight}</div>

    <span slot="sub-header">${subHeader}</span>
  </vl-functional-header>
`;

InzageFunctionalHeader.args = {
  title: 'Project overzicht',
  topLeft: html`<h2 class="vl-title vl-title--h2">
    2458963498
    <span class="vl-annotation vl-annotation--small">(MILIEUBEDRIJF - RINGVAART - OCGT)</span>
  </h2>`,
  topRight: html`<p><span>Toestand: In beroepsperiode tot 01.02.2023</span></p>`,
  subHeader: html`<a id="back-link" is="vl-link" href="${document.referrer}" tabindex="0">
    <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
    <span id="back-link-text">Eén stap terug</span>
  </a>`,
};

InzageFunctionalHeader.argTypes = {
  title: {
    name: 'title (slot)',
  },
  topLeft: {
    name: 'top-left (slot)',
  },
  topRight: {
    name: 'top-right (slot)',
  },
  subHeader: {
    name: 'sub-header (slot)',
  },
};
