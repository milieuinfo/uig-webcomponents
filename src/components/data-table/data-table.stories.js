import { html } from "lit-html";
import "../data-table";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";
import { args, argTypes } from "./config";
import styles from "./styles.scss";

export default {
  title: "native-elements/vl-data-table",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ["data-table"],
          root: "data-table",
          intro:
            "Gebruik een data table om op een gestructureerde manier (grote hoeveelheden) relationele data te tonen.",
        }),
      },
    },
  },
};

export const Default = ({
  hover,
  matrix,
  grid,
  zebra,
  collapsedM,
  collapsedS,
  collapsedXS,
}) => html`
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
        <td>Entry line 1</td>
        <td>Entry line 2</td>
        <td>Entry line 3</td>
        <td>Entry line 4</td>
      </tr>
      <tr>
        <td>Entry line 1</td>
        <td colspan="2">Entry line 2</td>
        <td>Entry line 3</td>
      </tr>
      <tr>
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
}) => html`
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
