import { nativeVlElement, define } from "../../utils/vl-core";

/**
 * VlSideNavigationContent
 * @class
 * @classdesc Het navigatie content element.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-navigation.html|Demo}
 *
 */
export class VlSideNavigationContent extends nativeVlElement(HTMLDivElement) {
  constructor() {
    super();
    this._processClasses();
  }

  _processClasses() {
    this.classList.add("vl-side-navigation__content");
  }
}

define("vl-side-navigation-content", VlSideNavigationContent, {
  extends: "div",
});
