import "../../../../../map";
import { argTypes } from "../../config.js";
import { docsIntro } from "../../../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-map/vl-map-features-layer",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "map",
          intro:
            "Deze kaartlaag staat je toe om een set van te tonen features in te stellen.",
        }),
      },
    },
  },
  argTypes: {
    ...argTypes,
    autoExtent: {
      name: "data-vl-auto-extent",
      control: { disable: true },
      type: { summary: "boolean" },
      description:
        "Attribuut geeft aan of er automatisch gezoomt wordt op de kaartlaag zodat al de features zichtbaar zijn.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    autoExtentMaxZoom: {
      name: "data-vl-max-zoom",
      control: { disable: true },
      type: { summary: "string" },
      description:
        "Attribuut geeft aan tot op welk niveau er maximaal automatisch gezoomd wordt bij een extent",
    },
    cluster: {
      name: "data-vl-cluster",
      control: { disable: true },
      type: { summary: "boolean" },
      description:
        "Attribuut geeft aan of de features geclusterd moeten worden of niet.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    clusterDistance: {
      name: "data-vl-cluster-distance",
      control: { disable: true },
      type: { summary: "string" },
      description:
        "Attribuut geeft aan vanaf welke afstand tussen features er geclusterd mag worden.",
    },
    features: {
      name: "data-vl-features",
      control: { disable: true },
      type: { summary: "string" },
      description: "Attribuut die de kaartlaag bevat.",
    },
  },
};

export { Default } from "../../../action/layer-action/delete-action/delete-action.stories.js";
