import { nativeVlElement, define } from "../../utils/core";
import "./components/link-list-item";

/**
 * VlLinkList
 * @class
 * @classdesc Class die een lijst van links kan weergeven.
 *
 * @extends HTMLUListElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link-list/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link-list/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-link-list.html|Demo}
 */
export class VlLinkList extends nativeVlElement(HTMLUListElement) {
  connectedCallback() {
    this.classList.add("vl-link-list");
  }

  static get _observedClassAttributes() {
    return ["small", "inline", "bordered"];
  }

  get _classPrefix() {
    return "vl-link-list--";
  }
}

define("vl-link-list", VlLinkList, { extends: "ul" });
