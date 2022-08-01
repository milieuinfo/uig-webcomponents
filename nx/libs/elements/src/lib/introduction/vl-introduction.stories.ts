import { html } from "lit-html";
import "./vl-introduction.element";

export default {
  title: "Elements/vl-introduction",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    content:
      "Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
  },
  argTypes: { content: { name: "content (for demo purposes)" } },
};

interface DefaultInterface {
    content: any
}

export const Default = ({ content }: DefaultInterface) => html`<p is="vl-introduction">
  ${content}
</p>`;
