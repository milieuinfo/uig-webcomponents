import { html } from 'lit-html';
import '.';
import { docsIntro } from '../../../.storybook/utils.js';

const defaultArgs = {
  toggleText: 'Lees meer over de onderwijsdoelstelling',
  content: `Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.`,
};

export default {
  title: 'custom-elements/vl-accordion',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'accordion',
          intro:
            'De accordion component kan gebruikt worden om informatie te tonen of te verbergen aan de hand van een toggle.',
        }),
      },
    },
  },
  args: { ...defaultArgs },
  argTypes: {
    toggleText: {
      name: 'data-vl-toggle-text',
      type: { summary: 'string' },
      description:
        'Attribuut wordt gebruikt als tekst waarop de gebruiker kan klikken om de accordion te openen en te sluiten.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    openToggleText: {
      name: 'data-vl-open-toggle-text',
      type: { summary: 'string' },
      description: 'Attribuut wordt gebruikt als tekst wanneer de gebruiker de accordion geopend heeft.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    closedToggleText: {
      name: 'data-vl-close-toggle-text',
      type: { summary: 'string' },
      description: 'Attribuut wordt gebruikt als tekst wanneer de gebruiker de accordion gesloten heeft.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    content: {
      name: 'content (for demo purposes)',
      type: { summary: 'string' },
    },
  },
};

export const Default = ({ toggleText, content }) => html`<vl-accordion data-vl-toggle-text=${toggleText}>
  <span>${content}</span>
</vl-accordion>`;

Default.argTypes = {
  openToggleText: { control: false },
  closedToggleText: { control: false },
};

export const WithTitleSlot = ({ toggleText, content }) => html`
  <vl-accordion>
    <span slot="title">${toggleText}</span>
    <span>${content}</span>
  </vl-accordion>
`;

WithTitleSlot.argTypes = {
  openToggleText: { control: false },
  closedToggleText: { control: false },
  toggleText: {
    name: 'title (slot)',
  },
};

export const DynamicToggle = ({ toggleText, content, openToggleText, closedToggleText }) => html`
  <vl-accordion
    data-vl-toggle-text=${toggleText}
    data-vl-open-toggle-text=${openToggleText}
    data-vl-close-toggle-text=${closedToggleText}
  >
    <span>${content}</span>
  </vl-accordion>
`;

DynamicToggle.args = {
  ...defaultArgs,
  openToggleText: 'Open de onderwijsdoelstelling',
  closedToggleText: 'Sluit de onderwijsdoelstelling',
};
