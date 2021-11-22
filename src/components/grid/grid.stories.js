import { html } from 'lit-html';
import '../grid';
import styles from './styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import { sharedArgs, sharedArgTypes } from './config';
import { CATEGORIES } from '../../../.storybook/utils.js';

export default {
  title: 'native-elements/vl-grid',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'grid',
          intro:
            'The grid serves to arrange the layout of your page. You can compare vl-grid with the Row element in Bootstrap.',
        }),
      },
    },
  },
  args: {
    ...sharedArgs,
    stackedSmall: false,
    stackedLarge: false,
    background: '#f7f9fc',
    columnSize: 3,
    columnsAmount: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?',
  },
  argTypes: {
    ...sharedArgTypes,
    stackedSmall: {
      name: 'data-vl-is-stacked-small',
      description:
        'Add a little less margin between stacked columns. The use of `data-vl-is-stacked` is unnecessary in this case.',
      table: {
        type: { summary: 'boolean' },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    stackedLarge: {
      name: 'data-vl-is-stacked-large',
      description:
        'Add some more margin between stacked columns. The use of `data-vl-is-stacked` is unnecessary in this case.',
      table: {
        type: { summary: 'boolean' },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 'false' },
      },
    },
    content: {
      name: 'content (for demo purposes)',
      table: {
        type: { summary: 'string' },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
    background: {
      name: 'background (for demo purposes)',
      table: {
        type: { summary: 'string' },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '' },
      },
    },
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
  },
};

const Template = ({
  background,
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
  content,
  columnsAmount,
  columnSize,
}) => {
  const column = html`<div is="vl-column" data-vl-size=${columnSize}>
    <div style="background: ${background}">
      <p>${content}</p>
    </div>
  </div>`;
  const columns = Array.apply(null, Array(columnsAmount));
  return html`<section is="vl-region">
    <div is="vl-layout">
      <div
        is="vl-grid"
        ?data-vl-is-stacked=${stacked}
        ?data-vl-is-stacked-small=${stackedSmall}
        ?data-vl-is-stacked-large=${stackedLarge}
        ?data-vl-align-start=${alignStart}
        ?data-vl-align-center=${alignCenter}
        ?data-vl-align-end=${alignEnd}
        ?data-vl-align-space-between=${alignSpaceBetween}
        ?data-vl-align-space-around=${alignSpaceAround}
        ?data-vl-v-top=${vTop}
        ?data-vl-v-center=${vCenter}
        ?data-vl-v-bottom=${vBottom}
        ?data-vl-v-stretch=${vStretch}
      >
        ${columns.map(() => column)}
      </div>
    </div>
  </section>`;
};

export const Default = Template.bind({});
