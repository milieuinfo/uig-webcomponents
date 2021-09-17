import { html } from "lit-html";
import "../grid";
import styles from "./styles.scss";
import { stylesheet, docsIntro } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-grid",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheet: true,
          root: "grid",
          intro:
            "De grid dient om de lay-out van jouw pagina in orde te brengen. Je kan vl-grid vergelijken met de Row element in Bootstrap.",
        }),
      },
    },
  },
  args: {
    background: "#f7f9fc",
    stacked: true,
    stackedSmall: false,
    stackedLarge: false,
    alignStart: false,
    alignCenter: false,
    alignEnd: false,
    alignSpaceBetween: false,
    alignSpaceAround: false,
    vTop: false,
    vCenter: false,
    vBottom: false,
    vStretch: false,
    columnSize: 3,
    columnsAmount: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?",
  },
  argTypes: {
    stacked: {
      name: "data-vl-is-stacked",
      type: { summary: "boolean" },
      description: "Voeg marge toe tussen gestapelde kolommen.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    stackedSmall: {
      name: "data-vl-is-stacked-small",
      type: { summary: "boolean" },
      description:
        "Voeg wat minder marge toe tussen gestapelde kolommen. Het gebruik van `data-vl-is-stacked` is in dit geval overbodig.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    stackedLarge: {
      name: "data-vl-is-stacked-large",
      type: { summary: "boolean" },
      description:
        "Voeg wat meer marge toe tussen gestapelde kolommen. Het gebruik van `data-vl-is-stacked` is in dit geval overbodig.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    alignStart: {
      name: "data-vl-align-start",
      type: { summary: "boolean" },
      description: "Aligneer een of meerdere kolommen links.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    alignCenter: {
      name: "data-vl-align-center",
      type: { summary: "boolean" },
      description: "Centreer een of meerdere kolommen horizontaal.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    alignEnd: {
      name: "data-vl-align-end",
      type: { summary: "boolean" },
      description: "Aligneer een of meerdere kolommen rechts.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    alignSpaceBetween: {
      name: "data-vl-align-space-between",
      type: { summary: "boolean" },
      description: "Laat zoveel mogelijke ruimte tussen kolommen.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    alignSpaceAround: {
      name: "data-vl-align-space-around",
      type: { summary: "boolean" },
      description: "Laat zoveel mogelijke ruimte rond kolommen.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    vTop: {
      name: "data-vl-v-top",
      type: { summary: "boolean" },
      description: "Aligneer een of meerdere kolommen bovenaan.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    vCenter: {
      name: "data-vl-v-center",
      type: { summary: "boolean" },
      description: "Centreer een of meerdere kolommen verticaal.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    vBottom: {
      name: "data-vl-v-bottom",
      type: { summary: "boolean" },
      description: "Aligneer een of meerdere kolommen onderaan.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    vStretch: {
      name: "data-vl-v-stretch",
      type: { summary: "boolean" },
      description: "Rek de kolommen tot aan hun maximum hoogte.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    content: {
      name: "content (for demo purposes)",
      type: { summary: "string" },
    },
    background: {
      name: "background (for demo purposes)",
    },
    columnsAmount: {
      name: "amount of columns (for demo purposes)",
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
    columnSize: {
      name: "size of the columns (for demo purposes)",
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
