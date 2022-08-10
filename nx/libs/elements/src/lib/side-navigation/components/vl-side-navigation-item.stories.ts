import "../vl-side-navigation.element";

export default {
  title: "native-elements/vl-side-navigation/vl-side-navigation-item",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    parent: {
      name: "data-vl-parent",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt op de navigatie menu list elementen. De koppeling gebeurt via het `data-vl-child` attribuut van `vl-navigation-toggle`.",
      table: {
        defaultValue: { summary: `""` },
      },
      control: {
        disable: true,
      },
    },
  },
};

export { Default } from "../vl-side-navigation.stories";
