import { version } from "../package.json";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [`UIG-${version}`, "custom-elements", "native-elements"],
    },
  },
};
