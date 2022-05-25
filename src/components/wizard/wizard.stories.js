import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import { stylesheet, docsIntro, CATEGORIES, wrapWidth, TYPES } from '../../../.storybook/utils.js';
import '.';
import '../titles';
import '../grid';
import '../button';
import '../form-grid';
import '../form-message';
import '../input-field';
import '../action-group';
import '../link';
import '../icon';
import '../checkbox';
import titleStyles from '../titles/styles.scss';
import gridStyles from '../grid/styles.scss';
import buttonStyles from '../button/styles.scss';
import formGridStyles from '../form-grid/styles.scss';
import formMessageStyles from '../form-message/styles.scss';
import inputFieldStyles from '../input-field/styles.scss';
import actionGroupStyles from '../action-group/styles.scss';
import linkStyles from '../link/styles.scss';
import iconStyles from '../icon/styles.scss';
import { getLastElement } from '../../utils/stories/index.js';

export default {
  title: 'custom-elements/vl-wizard',
  decorators: [
    (story) =>
      html`${stylesheet(
        `${titleStyles}${gridStyles}${buttonStyles}${formGridStyles}${formMessageStyles}${inputFieldStyles}${actionGroupStyles}${linkStyles}${iconStyles}`,
      )}${story()}`,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'wizard',
          intro:
            'Use a wizard to guide a user through a multi-step process. A wizard allows you to split up an advanced process into bite-size actions. A wizard also enables you to make options in a wizard step dependent on the choices a user makes in a previous step.',
        }),
      },
    },
  },
  args: {
    activeStepSlider: 1,
    title: 'Wizard title',
    header: "You're a wizard Harry",
    onClickStep: action('vl-click-step'),
  },
  argTypes: {
    activeStepSlider: {
      name: 'data-vl-active-step',
      description: 'Sets the active step of the wizard.',
      control: { type: 'range', min: 1, max: 2, step: 1 },
      table: {
        type: {
          summary: TYPES.NUMBER,
        },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 1 },
      },
    },
    activeStep: {
      description: 'Sets the active step of the wizard.',
      table: {
        type: {
          summary: TYPES.NUMBER,
        },
        category: CATEGORIES.PROPERTIES,
        defaultValue: { summary: 1 },
      },
    },
    title: {
      description: 'Slot to place a title in the wizard.',
      table: {
        category: CATEGORIES.SLOTS,
      },
    },
    header: {
      description: 'Slot to place a header in the wizard.',
      table: {
        category: CATEGORIES.SLOTS,
      },
    },
    onClickStep: {
      name: 'vl-click-step',
      description:
        'The custom event fired on click of a step. In the detail of the event, you can find the number and name of the clicked step.',
      table: { category: CATEGORIES.EVENTS },
    },
  },
};

// get last wizard, because storybook can render Default multiple times
const getWizard = () => getLastElement('vl-wizard');

export const Default = ({ activeStepSlider, title, header, onClickStep }) => html`<div style="max-width: ${wrapWidth}">
  <vl-wizard
    data-vl-active-step=${activeStepSlider}
    @vl-click-step=${(event) => {
      onClickStep(event.detail);
      getWizard().activeStep = event.detail.number;
    }}
  >
    <h2 slot="title" is="vl-h2">${title}</h2>
    <p slot="header">${header}</p>
    <vl-wizard-pane data-vl-name="Stap 1">
      <h3 is="vl-h3">Stap 1</h3>
      <div is="vl-grid" data-vl-is-stacked>
        <div is="vl-column" data-vl-size="12">
          <div is="vl-form-grid" data-vl-is-stacked>
            <div is="vl-form-column" data-vl-size="12">
              <label is="vl-form-label" for="naam" data-vl-block> Naam </label>
              <input id="naam" is="vl-input-field" data-vl-block />
            </div>
          </div>
        </div>
        <div is="vl-column">
          <button @click=${() => (getWizard().activeStep += 1)} is="vl-button" type="button">Volgende</button>
        </div>
      </div>
    </vl-wizard-pane>
    <vl-wizard-pane data-vl-name="Stap 2">
      <h3 is="vl-h3">Stap 2</h3>
      <div is="vl-grid" data-vl-is-stacked>
        <div is="vl-column" data-vl-size="12">
          <div is="vl-form-grid" data-vl-is-stacked>
            <div is="vl-form-column" data-vl-size="12">
              <label is="vl-form-label" for="years" data-vl-block> Aantal jaren dienst </label>
              <input id="years" is="vl-input-field" data-vl-block />
            </div>
          </div>
        </div>
        <div is="vl-column">
          <button @click=${() => (getWizard().activeStep -= 1)} is="vl-button-link" type="button">
            <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
            Vorige
          </button>
        </div>
      </div>
    </vl-wizard-pane>
  </vl-wizard>
</div>`;
