import { html } from 'lit-html';
import '../input-group';
import '../button';
import '../input-field';
import '../input-addon';
import '../icon';
import '../text';
import styles from './styles.scss';
import buttonStyles from '../button/styles.scss';
import inputFieldStyles from '../input-field/styles.scss';
import inputAddonStyles from '../input-addon/styles.scss';
import iconStyles from '../icon/styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';

export default {
  title: 'native-elements/vl-input-group',
  decorators: [
    (story) =>
      html`${stylesheet(`${styles}${inputFieldStyles}${iconStyles}${inputAddonStyles}${buttonStyles}`)}${story()}`,
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['input-group'],
          root: 'input-group',
          intro:
            "Gebruik vl-ui-input-group om een 'input field' en een 'input add-on' te combineren. Bijvoorbeeld: de 'vl-datepicker' component combineert een 'input field' en een 'input add-on' in een 'input group'.",
        }),
      },
    },
  },
};

export const Default = () => html`
  <div is="vl-input-group">
    <button is="vl-button-input-addon" type="button">
      <span is="vl-icon" data-vl-icon="location"></span>
      <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
    </button>
    <input is="vl-input-field" type="text" />
  </div>
`;

export const WithInputAddonRight = () => html`
  <div is="vl-input-group">
    <input is="vl-input-field" type="text" />
    <button is="vl-button-input-addon" type="button">
      <span is="vl-icon" data-vl-icon="location"></span>
      <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
    </button>
  </div>
`;

export const WithTextAddonLeft = () => html`
  <div is="vl-input-group">
    <button is="vl-button" type="button">Locatie kiezen</button>
    <input is="vl-input-field" type="text" />
  </div>
`;

export const WithTextAddonRight = () => html`
  <div is="vl-input-group">
    <input is="vl-input-field" type="text" />
    <button is="vl-button" type="button">Locatie kiezen</button>
  </div>
`;

export const WithButtonLeft = () => html`
  <div is="vl-input-group">
    <button is="vl-button" type="button">
      <span is="vl-icon" data-vl-icon="location"></span>
      <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
    </button>
    <input is="vl-input-field" type="text" />
  </div>
`;
