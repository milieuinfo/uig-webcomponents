import { html } from 'lit-html';
import '../form';
import '../form-grid';
import '../input-field';
import '../button';
import '../form-message';
import styles from './styles.scss';
import formStyling from '../form/styles.scss';
import inputFieldStyling from '../input-field/styles.scss';
import buttonStyling from '../button/styles.scss';
import formMessageStyle from '../form-message/styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import { args, argTypes } from '../grid/config';
import { CATEGORIES } from '../../../.storybook/utils.js';

export default {
  title: 'native-elements/vl-form-grid',
  decorators: [
    (story) =>
      html` ${stylesheet(`${styles}${formStyling}${inputFieldStyling}${buttonStyling}${formMessageStyle}`)}${story()} `,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['form-grid'],
          root: 'form-grid',
          intro: 'Class that enables a grid layout in a form.',
        }),
      },
    },
  },
  args: {
    ...args,
    columnSize: 4,
    columnsAmount: 7,
    label: 'Dit is een label',
  },
  argTypes: {
    ...argTypes,
    columnsAmount: {
      name: 'amount of columns (for demo purposes)',
      control: { type: 'range', min: 1, max: 12, step: 1 },
      table: {
        type: { summary: 'string' },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    columnSize: {
      name: 'size of the columns (for demo purposes)',
      table: {
        type: { summary: 'string' },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    label: {
      name: 'label of the input field (for demo purposes)',
      table: {
        type: { summary: 'string' },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
  },
};

export const Default = ({
  stacked,
  stackedSmall,
  stackedLarge,
  alignStart,
  alignCenter,
  alignEnd,
  alignSpaceBetween,
  alignSpaceAround,
  vTop,
  vCenter,
  vBottom,
  vStretch,
  columnsAmount,
  columnSize,
  label,
}) => {
  const column = html`
    <div is="vl-form-column" data-vl-size=${columnSize}>
      <div
        is="vl-form-grid"
        ?data-vl-v-top=${vTop}
        ?data-vl-v-center=${vCenter}
        ?data-vl-v-bottom=${vBottom}
        ?data-vl-v-stretch=${vStretch}
      >
        <div is="vl-form-column" data-vl-size="4">
          <label is="vl-form-label" for="text" data-vl-block>${label}</label>
        </div>
        <div is="vl-form-column" data-vl-size="8">
          <input name="email" is="vl-input-field" placeholder="Bijv. naam@voorbeeld.be" data-vl-block />
        </div>
      </div>
    </div>
  `;
  const columns = Array.apply(null, Array(columnsAmount));
  return html`
    <section is="vl-region">
      <div is="vl-layout">
        <form is="vl-form">
          <div
            is="vl-form-grid"
            ?data-vl-is-stacked=${stacked}
            ?data-vl-is-stacked-small=${stackedSmall}
            ?data-vl-is-stacked-large=${stackedLarge}
            ?data-vl-align-start=${alignStart}
            ?data-vl-align-center=${alignCenter}
            ?data-vl-align-end=${alignEnd}
            ?data-vl-align-space-between=${alignSpaceBetween}
            ?data-vl-align-space-around=${alignSpaceAround}
          >
            ${columns.map(() => column)}

            <div is="vl-form-column" data-vl-size=${columnSize}>
              <div
                is="vl-form-grid"
                ?data-vl-v-top=${vTop}
                ?data-vl-v-center=${vCenter}
                ?data-vl-v-bottom=${vBottom}
                ?data-vl-v-stretch=${vStretch}
              >
                <div is="vl-form-column" data-vl-size="4">
                  <label is="vl-form-label" for="text" data-vl-block>${label}</label>
                </div>
                <div is="vl-form-column" data-vl-size="8">
                  <input name="email" is="vl-input-field" placeholder="Bijv. naam@voorbeeld.be" data-vl-block />
                  <p>lorem ipsumn dolor set lorem ipsum dolor set</p>
                </div>
              </div>
            </div>

            <div is="vl-form-column" data-vl-size="12">
              <button is="vl-button" type="submit">Inschrijven</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  `;
};
