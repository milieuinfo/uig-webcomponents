import { nativeVlElement, define } from "../../../../utils/core";

/**
 * VlLinkListItem
 * @class
 * @classdesc Class die een item uit de {@link VlLinkList} weergeeft.
 *
 * @extends HTMLLIElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link-list/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link-list/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-link-list.html|Demo}
 */
export class VlLinkListItem extends nativeVlElement(HTMLLIElement) {
  connectedCallback() {
    this.classList.add("vl-link-list__item");
    this._links.forEach((link) => {
      link.insertAdjacentHTML(
        "afterBegin",
        '<i class="vl-link__icon vl-link__icon--before vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>'
      );
    });
  }

  get _links() {
    return this.querySelectorAll('[is="vl-link"]');
  }
}

define("vl-link-list-item", VlLinkListItem, { extends: "li" });
