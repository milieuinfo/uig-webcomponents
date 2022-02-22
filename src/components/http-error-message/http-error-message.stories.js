import { html } from 'lit-html';
import { stylesheet, wrapWidth, docsIntro, TYPES, CATEGORIES } from '../../../.storybook/utils';
import '../http-error-message';
import './presets/vl-http-400-message';
import './presets/vl-http-401-message';
import './presets/vl-http-403-message';
import './presets/vl-http-404-message';
import './presets/vl-http-405-message';
import './presets/vl-http-408-message';
import './presets/vl-http-410-message';
import './presets/vl-http-411-message';
import './presets/vl-http-412-message';
import './presets/vl-http-413-message';
import './presets/vl-http-414-message';
import './presets/vl-http-415-message';
import './presets/vl-http-500-message';
import './presets/vl-http-501-message';
import './presets/vl-http-502-message';
import './presets/vl-http-503-message';
import './presets/vl-http-504-message';
import './presets/vl-http-505-message';
import './presets/vl-http-506-message';

import styles from './styles.scss';

export default {
  title: 'native-elements/vl-http-error-message',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'http-error-message',
          intro: 'Use the HTTP error message to show an explanatory message for a HTTP error.',
        }),
      },
    },
  },
  args: {
    title: 'Niets gevonden hiervoor.',
    // TODO: Change to other url
    image: 'https://webcomponenten.omgeving.vlaanderen.be/demo/error-404.png',
    alt: 'Niets gevonden',
    textSlotText: 'Sorry, er liep iets onverwachts mis.',
    actionsSlotText: 'Opnieuw opstarten',
  },
  argTypes: {
    title: {
      name: 'data-vl-title',
      description: 'Changes the title of the error message.',
      table: {
        type: { summary: TYPES.STRING },
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    image: {
      name: 'data-vl-image',
      description: 'Changes the URL of the image that is shown.',
      table: {
        type: { summary: TYPES.STRING },
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    alt: {
      name: 'data-vl-image-alt',
      description: 'Changes the alternative text of the image.',
      table: {
        type: { summary: TYPES.STRING },
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    textSlotText: {
      name: 'text',
      description: '',
      table: {
        category: CATEGORIES.SLOTS,
      },
      control: {
        disable: true,
      },
    },
    actionsSlotText: {
      name: 'actions',
      description: '',
      table: {
        category: CATEGORIES.SLOTS,
      },
      control: {
        disable: true,
      },
    },
  },
};

export const Custom = ({ title, image, alt, textSlotText, actionsSlotText }) => html` <div
  style="max-width: ${wrapWidth}"
>
  <vl-http-error-message
    id="custom-message"
    data-vl-title="${title}"
    data-vl-image="${image}"
    data-vl-image-alt="${alt}"
  >
    <p slot="text">${textSlotText}</p>
    <div slot="actions">
      <a is="vl-link-button" href="#">${actionsSlotText}</a>
    </div>
  </vl-http-error-message>
</div>`;

Custom.argTypes = {
  textSlotText: {
    control: {
      disable: false,
    },
  },
  actionsSlotText: {
    control: {
      disable: false,
    },
  },
};

export const Error400 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-400-message id="error-400"></vl-http-400-message>
</div>`;

export const Error401 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-401-message id="error-401"></vl-http-401-message>
</div>`;

export const Error403 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-403-message id="error-403"></vl-http-403-message>
</div>`;

export const Error404 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-404-message id="error-404"></vl-http-404-message>
</div>`;

export const Error405 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-405-message id="error-405"></vl-http-405-message>
</div>`;

export const Error408 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-408-message id="error-408"></vl-http-408-message>
</div>`;

export const Error410 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-410-message id="error-410"></vl-http-410-message>
</div>`;

export const Error411 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-411-message id="error-411"></vl-http-411-message>
</div>`;

export const Error412 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-412-message id="error-412"></vl-http-412-message>
</div>`;

export const Error413 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-413-message id="error-413"></vl-http-413-message>
</div>`;

export const Error414 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-414-message id="error-414"></vl-http-414-message>
</div>`;

export const Error415 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-415-message id="error-415"></vl-http-415-message>
</div>`;

export const Error500 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-500-message id="error-500"></vl-http-500-message>
</div>`;

export const Error501 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-501-message id="error-501"></vl-http-501-message>
</div>`;

export const Error502 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-502-message id="error-502"></vl-http-502-message>
</div>`;

export const Error503 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-503-message id="error-503"></vl-http-503-message>
</div>`;

export const Error504 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-504-message id="error-504"></vl-http-504-message>
</div>`;

export const Error505 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-505-message id="error-505"></vl-http-505-message>
</div>`;

export const Error506 = () => html` <div style="max-width: ${wrapWidth}">
  <vl-http-506-message id="error-506"></vl-http-506-message>
</div>`;
