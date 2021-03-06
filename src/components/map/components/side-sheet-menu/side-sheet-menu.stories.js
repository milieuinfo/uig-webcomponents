import "../../../map";
import { docsIntro } from "../../../../../.storybook/utils.js";

export default {
  title: "custom-elements/vl-map/vl-map-side-sheet-menu",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: "map",
          intro: "De menu die verbonden is aan een side sheet.",
        }),
      },
    },
  },
};

export { Default } from "../side-sheet/side-sheet.stories.js";
