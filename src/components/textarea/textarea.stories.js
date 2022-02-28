import { html } from 'lit-html';
import { docsIntro, stylesheet, CATEGORIES, TYPES } from '../../../.storybook/utils';
import styles from './styles.scss';
import './';

export default {
  title: 'native-elements/vl-textarea',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'textarea',
          stylesheets: ['textarea'],
          intro: 'Use the text area component to add a text field that can contain multiple lines of text.',
        }),
      },
    },
  },
  args: {
    block: false,
    error: false,
    success: false,
    disabled: false,
    focus: false,
    rich: false,
    richToolbar:
      'undo redo | bold italic underline strikethrough | h1 h2 h3 h4 h5 h6 | vlLink blockquote hr | numlist bullist',
  },
  argTypes: {
    block: {
      name: 'data-vl-block',
      description:
        'Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: TYPES.BOOLEAN },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      name: 'data-vl-error',
      description: 'Attribuut wordt gebruikt om aan te duiden dat de textarea verplicht is of ongeldige tekst bevat.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: TYPES.BOOLEAN },
        defaultValue: { summary: 'false' },
      },
    },
    success: {
      name: 'data-vl-success',
      description: 'Attribuut wordt gebruikt om aan te duiden dat de textarea correct werd ingevuld.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: TYPES.BOOLEAN },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      name: 'disabled',
      description: 'Attribuut wordt gebruikt om te voorkomen dat de gebruiker tekst in de textarea kan ingeven.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: TYPES.BOOLEAN },
        defaultValue: { summary: 'false' },
      },
    },
    focus: {
      name: 'data-vl-focus',
      description: 'Attribuut wordt gebruikt om de textarea focus te geven.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: TYPES.BOOLEAN },
        defaultValue: { summary: 'false' },
      },
    },
    rich: {
      name: 'data-vl-rich',
      description: 'Used to make the textarea support richt text using the WYSIWYG toolbar.',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: TYPES.BOOLEAN },
        defaultValue: { summary: 'false' },
      },
    },
    richToolbar: {
      name: 'data-vl-toolbar',
      description:
        'Attribuut bepaalt welke WYSIWYG toolbar items gevisualiseerd worden zodat de toolbar naar wens samengesteld kan worden. Toolbar items kunnen visueel gescheiden worden door een | character. All options: [undo redo | bold italic underline strikethrough | h1 h2 h3 h4 h5 h6 | vlLink blockquote hr | numlist bullist]',
      table: {
        category: CATEGORIES.ATTRIBUTES,
        type: { summary: TYPES.STRING },
        defaultValue: { summary: 'undo redo | bold italic underline strikethrough' },
      },
    },
  },
};

export const Default = ({ block, error, success, disabled, focus, rich, richToolbar }) => html`<textarea
  id="textarea"
  is="vl-textarea"
  ?data-vl-block=${block}
  ?data-vl-error=${error}
  ?data-vl-success=${success}
  ?disabled=${disabled}
  ?data-vl-focus=${focus}
  ?data-vl-rich=${rich}
  data-vl-toolbar=${richToolbar}
  cols="40"
  rows="4"
></textarea> `;

Default.argTypes = {
  rich: {
    control: {
      disable: true,
    },
  },
  richToolbar: {
    control: {
      disable: true,
    },
  },
};

export const RichTextarea = ({ block, error, success, disabled, focus, rich, richToolbar }) => html`<textarea
  id="textarea"
  is="vl-textarea"
  ?data-vl-block=${block}
  ?data-vl-error=${error}
  ?data-vl-success=${success}
  ?disabled=${disabled}
  ?data-vl-focus=${focus}
  ?data-vl-rich=${rich}
  data-vl-toolbar=${richToolbar}
  cols="40"
  rows="20"
>
  <h1>h1 title</h1>
  <h2>h2 title</h2>
  <h3>h3 title</h3>
  <h4>h4 title</h4>
  <h5>h5 title</h5>
  <h6>h6 title</h6>
  </p>
  <p><b>b-tag</b></p>
  <p><i>i-tag</i></p>
  <p><u>u-tag</u></p>
  <p><hr/></p>
  <p><s>s-tag</s></p>
  <p><blockquote>blockquote-tag</blockquote></p>
  <p><hr/></p>
  <p>
  <ul>
      <li>unsorted list item</li>
      <li>unsorted list item</li>
      <ul>
          <li>unsorted list subitem</li>
          <li>unsorted list subitem</li>
      </ul>
      <li>unsorted list item</li>
  </ul>
  </p>
  <p><hr/></p>
  <p>
  <ol>
      <li>ordered list item</li>
      <li>ordered list item</li>
      <ol>
          <li>ordered list subitem</li>
          <li>ordered list subitem</li>
      </ol>
      <li>ordered list item</li>
  </ol>
  </p>
</textarea> `;

RichTextarea.args = {
  rich: true,
};

RichTextarea.argTypes = {
  block: {
    control: {
      disable: true,
    },
  },
  disabled: {
    control: { disable: true },
  },
  focus: {
    control: { disable: true },
  },
};
