import { html } from 'lit-html';
import '../data-table';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import { args, argTypes } from './config';
import styles from './styles.scss';
import '../icon';
import '../button';

export default {
  title: 'native-elements/vl-data-table',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['data-table'],
          root: 'data-table',
          intro:
            'Gebruik een data table om op een gestructureerde manier (grote hoeveelheden) relationele data te tonen.',
        }),
      },
    },
  },
};

export const Default = ({ hover, matrix, grid, zebra, collapsedM, collapsedS, collapsedXS }) => html`
  <table
    is="vl-data-table"
    ?data-vl-hover=${hover}
    ?data-vl-matrix=${matrix}
    ?data-vl-grid=${grid}
    ?data-vl-uig-zebra=${zebra}
    ?data-vl-collapsed-m=${collapsedM}
    ?data-vl-collapsed-s=${collapsedS}
    ?data-vl-collapsed-xs=${collapsedXS}
  >
    <caption>
      Data table
    </caption>
    <thead>
      <tr>
        <th>Entry Header 1</th>
        <th>Entry Header 2</th>
        <th>Entry Header 3</th>
        <th>Entry Header 4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="Entry Header 1">Entry line 1</td>
        <td data-title="Entry Header 2">Entry line 2</td>
        <td data-title="Entry Header 3">Entry line 3</td>
        <td data-title="Entry Header 4">Entry line 4</td>
      </tr>
      <tr>
        <td data-title="Entry Header 1">Entry line 1</td>
        <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
        <td data-title="Entry Header 3">Entry line 3</td>
      </tr>
      <tr>
        <td data-title="Entry Header 1">Entry line 1</td>
        <td data-title="Entry Header 2">Entry line 2</td>
        <td data-title="Entry Header 3">Entry line 3</td>
        <td data-title="Entry Header 4">Entry line 4</td>
      </tr>
    </tbody>
  </table>
`;

export const MatrixWithJoinedRowTitles = ({ hover, matrix, grid, zebra, collapsedM, collapsedS, collapsedXS }) => html`
  <table
    is="vl-data-table"
    ?data-vl-hover=${hover}
    ?data-vl-matrix=${matrix}
    ?data-vl-grid=${grid}
    ?data-vl-zebra=${zebra}
    ?data-vl-collapsed-m=${collapsedM}
    ?data-vl-collapsed-s=${collapsedS}
    ?data-vl-collapsed-xs=${collapsedXS}
  >
    <caption>
      Data table Matrix - Joined row titles
    </caption>
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th rowspan="3" scope="rowgroup">Entry line 1</th>
        <td>Entry line 2</td>
        <td>Entry line 3</td>
        <td>Entry line 4</td>
      </tr>
      <tr>
        <td>Entry line 1</td>
        <td colspan="2">Entry line 2</td>
      </tr>
      <tr>
        <td>Entry line 2</td>
        <td>Entry line 3</td>
        <td>Entry line 4</td>
      </tr>
      <tr>
        <th rowspan="3" scope="rowgroup">Entry line 2</th>
        <td>Entry line 2</td>
        <td>Entry line 3</td>
        <td>Entry line 4</td>
      </tr>
      <tr>
        <td>Entry line 1</td>
        <td colspan="2">Entry line 2</td>
      </tr>
      <tr>
        <td>Entry line 2</td>
        <td>Entry line 3</td>
        <td>Entry line 4</td>
      </tr>
    </tbody>
  </table>
`;

export const Expandable = ({ hover, matrix, grid, zebra, collapsedM, collapsedS, collapsedXS }) => {
  let table;
  customElements.whenDefined('vl-data-table').then(() => {
    table = document.querySelector('#vl-data-table-with-expandable-details');
  });

  return html`<table
    is="vl-data-table"
    id="vl-data-table-with-expandable-details"
    ?data-vl-hover=${hover}
    ?data-vl-matrix=${matrix}
    ?data-vl-grid=${grid}
    ?data-vl-uig-zebra=${zebra}
    ?data-vl-collapsed-m=${collapsedM}
    ?data-vl-collapsed-s=${collapsedS}
    ?data-vl-collapsed-xs=${collapsedXS}
  >
    <caption>
      Data table
    </caption>
    <thead>
      <tr>
        <th>Entry Header 1</th>
        <th>Entry Header 2</th>
        <th>Entry Header 3</th>
        <th>Entry Header 4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="Entry Header 1">Entry line 1</td>
        <td data-title="Entry Header 2">Entry line 2</td>
        <td data-title="Entry Header 3">Entry line 3</td>
        <td data-title="Entry Header 4">Entry line 4</td>
      </tr>
      <tr data-details-id="details-row1">
        <td>Details 1</td>
      </tr>
      <tr>
        <td data-title="Entry Header 1">Entry line 1</td>
        <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
        <td data-title="Entry Header 3">Entry line 3</td>
      </tr>
      <tr data-details-id="details-row2">
        <td>Details 2</td>
      </tr>
      <tr>
        <td data-title="Entry Header 1">Entry line 1</td>
        <td data-title="Entry Header 2">Entry line 2</td>
        <td data-title="Entry Header 3">Entry line 3</td>
        <td data-title="Entry Header 4">Entry line 4</td>
      </tr>
      <tr data-details-id="details-row3">
        <td>Details 3</td>
      </tr>
    </tbody>
  </table> `;
};

export const ExpandableWithCustomToggleDetailsColumn = ({
  hover,
  matrix,
  grid,
  zebra,
  collapsedM,
  collapsedS,
  collapsedXS,
}) => {
  let table;
  customElements.whenDefined('vl-data-table').then(() => {
    table = document.querySelector('#vl-data-table-with-expandable-details');
  });

  return html`<table
    is="vl-data-table"
    id="vl-data-table-with-expandable-details"
    ?data-vl-hover=${hover}
    ?data-vl-matrix=${matrix}
    ?data-vl-grid=${grid}
    ?data-vl-uig-zebra=${zebra}
    ?data-vl-collapsed-m=${collapsedM}
    ?data-vl-collapsed-s=${collapsedS}
    ?data-vl-collapsed-xs=${collapsedXS}
  >
    <caption>
      Data table
    </caption>
    <thead>
      <tr>
        <th>Entry Header 1</th>
        <th>Entry Header 2</th>
        <th>Entry Header 3</th>
        <th>Entry Header 4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="Entry Header 1">Entry line 1</td>
        <td data-title="Entry Header 2">Entry line 2</td>
        <td data-title="Entry Header 3">Entry line 3</td>
        <td data-title="Entry Header 4">Entry line 4</td>
        <td with-expand-details>
          <span
            @click=${() => {
              table.toggleDetails('details-row1');
            }}
            >click to toggle details</span
          >
        </td>
      </tr>
      <tr data-details-id="details-row1">
        <td>Details 1</td>
      </tr>
      <tr>
        <td data-title="Entry Header 1">Entry line 1</td>
        <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
        <td data-title="Entry Header 3">Entry line 3</td>
        <td with-expand-details>
          <span
            @click=${() => {
              table.toggleDetails('details-row2');
            }}
            >click to toggle details</span
          >
        </td>
      </tr>
      <tr data-details-id="details-row2">
        <td>Details 2</td>
      </tr>
      <tr>
        <td data-title="Entry Header 1">Entry line 1</td>
        <td data-title="Entry Header 2">Entry line 2</td>
        <td data-title="Entry Header 3">Entry line 3</td>
        <td data-title="Entry Header 4">Entry line 4</td>
        <td with-expand-details>
          <span
            @click=${() => {
              table.toggleDetails('details-row3');
            }}
            >click to toggle details</span
          >
        </td>
      </tr>
      <tr data-details-id="details-row3">
        <td>Details 3</td>
      </tr>
    </tbody>
  </table> `;
};
