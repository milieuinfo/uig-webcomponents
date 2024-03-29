import { html } from "lit-html";
import "./vl-data-table.element";
import { args, argTypes } from "./helper/vl-data-table.stories-helper";

export default {
  title: "Elements/vl-data-table",
  args,
  argTypes,
};

interface TableInterface {
  hover: string,
  matrix: string,
  grid: string,
  zebra: string,
  collapsedM: string,
  collapsedS: string,
  collapsedXS: string,
}

export const Default = ({
  hover,
  matrix,
  grid,
  zebra,
  collapsedM,
  collapsedS,
  collapsedXS,
}: TableInterface) => html`
  <table
    is="vl-data-table"
    ?data-vl-hover=${hover}
    ?data-vl-matrix=${matrix}
    ?data-vl-grid=${grid}
    ?data-vl-zebra=${zebra}
    ?data-vl-collapsed-m=${collapsedM}
    ?data-vl-collapsed-s=${collapsedS}
    ?data-vl-collapsed-xs=${collapsedXS}
    data-cy="data-table"
  >
    <caption>
      Data table
    </caption>
    <thead>
      <tr>
        <th data-cy="data-table-header-1">Entry Header 1</th>
        <th data-cy="data-table-header-2">Entry Header 2</th>
        <th data-cy="data-table-header-3">Entry Header 3</th>
        <th data-cy="data-table-header-4">Entry Header 4</th>
      </tr>
    </thead>
    <tbody>
      <tr data-cy="data-table-body-row-1">
        <td>Entry line 1</td>
        <td>Entry line 2</td>
        <td>Entry line 3</td>
        <td>Entry line 4</td>
      </tr>
      <tr data-cy="data-table-body-row-2">
        <td>Entry line 1</td>
        <td colspan="2">Entry line 2</td>
        <td>Entry line 3</td>
      </tr>
      <tr data-cy="data-table-body-row-3">
        <td>Entry line 1</td>
        <td>Entry line 2</td>
        <td>Entry line 3</td>
        <td>Entry line 4</td>
      </tr>
    </tbody>
  </table>
`;

export const MatrixWithJoinedRowTitles = ({
  hover,
  matrix,
  grid,
  zebra,
  collapsedM,
  collapsedS,
  collapsedXS,
}: TableInterface) => html`
  <table
    is="vl-data-table"
    ?data-vl-hover=${hover}
    ?data-vl-matrix=${matrix}
    ?data-vl-grid=${grid}
    ?data-vl-zebra=${zebra}
    ?data-vl-collapsed-m=${collapsedM}
    ?data-vl-collapsed-s=${collapsedS}
    ?data-vl-collapsed-xs=${collapsedXS}
    data-cy="data-table-joined-row-titles"
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
