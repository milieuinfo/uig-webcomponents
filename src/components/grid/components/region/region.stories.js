import { html } from "lit-html";
import "../../../grid";
import styles from "../../../grid/styles.scss";
import { stylesheet, docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-grid/vl-region",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: "grid",
          intro:
            'Het region element wordt gebruikt om secties te definiëren op je website. Het zorgt ervoor dat er consistente spacing is tussen verschillende secties beschikbaar op een pagina. Als een voorbeeld: een pagina die de modules "intro", "portfolio", "nieuws" en "contact" bevat, zal in vier verschillende regions worden gewrapped.',
        }),
      },
    },
  },
  args: {
    alt: false,
    noSpace: false,
    noSpaceBottom: false,
    noSpaceTop: false,
    small: false,
    medium: false,
    bordered: false,
    overlap: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?",
  },
  argTypes: {
    alt: {
      name: "data-vl-alt",
      type: { summary: "boolean" },
      description: "Maakt de achtergrond lichtgrijs.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    noSpace: {
      name: "data-vl-no-space",
      type: { summary: "boolean" },
      description: "Gebruik geen marges.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    noSpaceBottom: {
      name: "data-vl-no-space-bottom",
      type: { summary: "boolean" },
      description: "Gebruik geen marges onderaan.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    noSpaceTop: {
      name: "data-vl-no-space-top",
      type: { summary: "boolean" },
      description: "Gebruik geen marges bovenaan.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    small: {
      name: "data-vl-small",
      type: { summary: "boolean" },
      description: "Gebruik kleinere marges.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    medium: {
      name: "data-vl-medium",
      type: { summary: "boolean" },
      description: "Gebruik middelgrote marges.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    bordered: {
      name: "data-vl-bordered (deprecated?)",
      type: { summary: "boolean" },
      description: "Teken een rand.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    overlap: {
      name: "data-vl-overlap",
      type: { summary: "boolean" },
      description: "Region overlap",
      control: {
        disable: true,
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    content: {
      name: "content (for demo purposes)",
      type: { summary: "string" },
    },
  },
};

export const Default = ({
  alt,
  noSpace,
  noSpaceBottom,
  noSpaceTop,
  small,
  medium,
  bordered,
  content,
}) =>
  html`<section
    is="vl-region"
    ?data-vl-alt=${alt}
    ?data-vl-no-space=${noSpace}
    ?data-vl-no-space-bottom=${noSpaceBottom}
    ?data-vl-no-space-top=${noSpaceTop}
    ?data-vl-small=${small}
    ?data-vl-medium=${medium}
    ?data-vl-bordered=${bordered}
  >
    <div is="vl-layout" class="vl-layout">
      <div is="vl-grid">
        <div is="vl-column">${content}</div>
      </div>
    </div>
  </section>`;

export const Overlap = ({
  alt,
  noSpace,
  noSpaceBottom,
  noSpaceTop,
  small,
  medium,
  bordered,
  overlap,
  content,
}) =>
  html`<section
    is="vl-region"
    ?data-vl-alt=${alt}
    ?data-vl-no-space=${noSpace}
    ?data-vl-no-space-bottom=${noSpaceBottom}
    ?data-vl-no-space-top=${noSpaceTop}
    ?data-vl-small=${small}
    ?data-vl-medium=${medium}
    ?data-vl-bordered=${bordered}
    ?data-vl-overlap=${overlap}
  >
    <div is="vl-layout" class="vl-layout">
      <div is="vl-grid">
        <div is="vl-column">${content}</div>
      </div>
    </div>
  </section>`;

Overlap.argTypes = {
  overlap: {
    control: {
      disable: false,
    },
  },
};
