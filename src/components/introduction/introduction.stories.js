import { html } from "lit-html";
import "../introduction";
import styles from "./styles.scss";

export default {
  title: "native-elements/vl-introduction",
};

const stylesheet = html`<style>
  ${styles}
</style>`;

export const Default = () => html`${stylesheet}
  <p id="introduction" is="vl-introduction">
    Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at
    lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
    nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est
    at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus
    sagittis lacus vel augue laoreet rutrum faucibus.
  </p>`;
