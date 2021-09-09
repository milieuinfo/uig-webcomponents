import { html } from "lit-html";
import "../content-header";

export default {
  title: "custom-elements/vl-content-header",
  args: {
    image:
      "https://images.unsplash.com/photo-1631097574841-b20e9b94bff9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1870&q=80",
    contextLink: "Context",
    titleLink: "Vlaanderen",
  },
  argTypes: {
    image: {
      name: "image (slot)",
      description: "",
    },
    contextLink: {
      name: "context-link (slot)",
      description: "",
    },
    titleLink: {
      name: "title-link (slot)",
      description: "",
    },
  },
};

const imageUrl = "";

export const Default = ({
  image,
  contextLink,
  titleLink,
}) => html`<vl-content-header>
  <img
    is="vl-image"
    slot="image"
    sizes="100vw"
    src=${image}
    srcset="${image} 320w, ${image} 1024w, ${image} 1600w"
    alt=""
  />
  <a slot="context-link" href="https://www.vlaanderen.be">${contextLink}</a>
  <a slot="title-link" href="https://www.vlaanderen.be">${titleLink}</a>
</vl-content-header>`;
