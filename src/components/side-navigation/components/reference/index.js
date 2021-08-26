import { nativeVlElement, define } from "../../../../utils/vl-core";

/**
 * VlSideNavigationReference
 * @class
 * @classdesc Het content element waar het navigatie element naar verwijst.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-navigation.html|Demo}
 *
 */
export class VlSideNavigationReference extends nativeVlElement(HTMLDivElement) {
  constructor() {
    super();
    this._processAttributes();
    this._processClasses();
  }

  _processAttributes() {
    this.setAttribute("data-vl-scrollspy-content", "");
  }

  _processClasses() {
    this.classList.add("js-vl-scrollspy__content");
  }
}

define("vl-side-navigation-reference", VlSideNavigationReference, {
  extends: "div",
});
