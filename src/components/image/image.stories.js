import { html } from "lit-html";
import styles from "./styles.scss";

export default {
  title: "native-elements/vl-image",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const imageUrl =
  "https://images.unsplash.com/photo-1631097574841-b20e9b94bff9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1870&q=80";

const stylesheet = html`<style>
  ${styles}
</style>`;

export const Default = () =>
  html`${stylesheet}
    <div style="max-width: 400px">
      <img
        is="vl-image"
        sizes="100vw"
        src=${imageUrl}
        srcset="${imageUrl} 320w, ${imageUrl} 1024w, ${imageUrl} 1600w"
        alt="Autoloze zondag in Brussel"
      />
    </div>`;
