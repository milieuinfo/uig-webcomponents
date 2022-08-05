import { vlElement, define } from "@uig/common/utilities";
import "./vl-search-result.element";

/**
 * VlSearchResults
 * @class
 * @classdesc De zoekresultaten worden als een lijst met links getoond.
 *
 * @extends HTMLElement
 * @mixes vlElement
 */
export class VlSearchResults extends vlElement(HTMLUListElement) {
  connectedCallback() {
    this._addClass();
  }

  _addClass() {
    this.classList.add("vl-search-results");
  }
}

define("vl-search-results", VlSearchResults, { extends: "ul" });
