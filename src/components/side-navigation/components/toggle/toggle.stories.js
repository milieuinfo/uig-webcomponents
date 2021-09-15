import "../../../side-navigation";

export default {
  title: "native-elements/vl-side-navigation/vl-side-navigation-toggle",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    child: {
      name: "data-vl-child",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om aan te geven dat het een menu item is. De koppeling gebeurt via het `data-vl-parent` attribuut van `vl-navigation-item`.",
      table: {
        defaultValue: { summary: `""` },
      },
      control: {
        disable: true,
      },
    },
  },
};

export { Default } from "../../side-navigation.stories.js";
