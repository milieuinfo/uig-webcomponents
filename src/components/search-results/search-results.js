import { nativeVlElement, define } from "../../utils/core/";

/**
 * VlSearchResults
 * @class
 * @classdesc De zoekresultaten worden als een lijst met links getoond.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-search-results/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-search-results/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-search-results.html|Demo}
 */
export class VlSearchResults extends nativeVlElement(HTMLUListElement) {
  connectedCallback() {
    this._addClass();
  }

  _addClass() {
    this.classList.add("vl-search-results");
  }
}

define("vl-search-results", VlSearchResults, { extends: "ul" });
