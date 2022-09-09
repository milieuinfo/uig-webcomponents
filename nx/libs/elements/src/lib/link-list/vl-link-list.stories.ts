import { html } from "lit-html";
import { args, argTypes } from "./helper/vl-link-list.stories-helper";
import "../link/vl-link.element";
import "./vl-link-list.element";

export default {
  title: "Elements/vl-link-list",
  args,
  argTypes,
};

interface DefaultInterface {
  small: string,
  inline: string,
  bordered: string,
}

export const Default = ({ small, inline, bordered }: DefaultInterface) => html`
  <ul
    is="vl-link-list"
    ?data-vl-small=${small}
    ?data-vl-inline=${inline}
    ?data-vl-bordered=${bordered}
    data-cy="link-list"
  >
    <li is="vl-link-list-item">
      <a is="vl-link" href="#"> Ga naar index</a>
    </li>
    <li is="vl-link-list-item">
      <a is="vl-link" href="#"> Terug naar overzicht</a>
    </li>
  </ul>
`;
