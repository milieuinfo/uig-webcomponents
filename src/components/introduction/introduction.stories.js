import { html } from "lit-html";
import "../introduction";
import styles from "./styles.scss";
import { stylesheet } from "../../../.storybook/utils.js";

export default {
  title: "native-elements/vl-introduction",
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    content:
      "Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
  },
  argTypes: { content: { name: "content (for demo purposes)" } },
};

export const Default = ({ content }) => html`<p is="vl-introduction">
  ${content}
</p>`;
