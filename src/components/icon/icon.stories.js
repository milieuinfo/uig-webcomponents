import { html } from "lit-html";
import "../icon";
import styles from "./styles.scss";

export default {
  title: "native-elements/vl-icon",
};

const stylesheet = html`<style>
  ${styles}
</style>`;

export const Default = () => html`${stylesheet}
  <p>
    <span id="icon" is="vl-icon" data-vl-icon="calendar"></span>
  </p>`;
