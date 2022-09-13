import { html } from 'lit-html';
import { CATEGORIES, docsIntro, stylesheet, TYPES } from '../../../.storybook/utils.js';
import '.';
import '../icon';
import iconStyles from '../icon/styles.scss';
import '../titles';
import titlesStyles from '../titles/styles.scss';

export default {
  title: 'custom-elements/vl-annotation',
  decorators: [(story) => html` ${stylesheet(`${iconStyles}${titlesStyles}`)}${story()} `],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'annotation',
          intro: 'Use annotation to show annotations.',
        }),
      },
    },
  },
  args: {
    content: 'Inhoud',
    small: false,
  },
  argTypes: {
    content: {
      name: 'content',
      type: { summary: TYPES.STRING, required: false },
      description: 'Inhoud van de annotation.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.SLOTS,
      },
    },
    small: {
      name: 'small',
      type: { summary: TYPES.BOOLEAN, required: false },
      description: 'Zorgt ervoor zat de annotation klein getoond wordt.',
      table: {
        defaultValue: { summary: false },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
  },
};

//--------------------------

const Template = ({ content, small }) => html` <vl-annotation ?data-vl-small=${small}>${content}</vl-annotation> `;

export const Default = Template.bind({});

//--------------------------

const TemplateMetIcon = () =>
  html`<p is="vl-icon-wrapper">
    <span is="vl-icon" class="vl-icon--before vl-icon--light vl-vi" data-vl-icon="calendar"></span
    ><vl-annotation>Bevoegde instantie Werk en Sociale Economie • juli 2018 • Deel van collectie</vl-annotation>
  </p>`;

export const AnnotationWithIcon = TemplateMetIcon.bind({});

//--------------------------
const TemplateMetSmall = () =>
  html`<h2 is="vl-h2">
    Districtchef
    <vl-annotation data-vl-small="true">(6 vacatures)</vl-annotation>
  </h2>`;

export const AnnotationInSmallSmallStyle = TemplateMetSmall.bind({});
