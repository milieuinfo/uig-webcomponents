import { nativeVlElement, define } from "../../../../utils/core";

/**
 * VlSideNavigationGroup
 * @class
 * @classdesc Het navigatie groep element.
 *
 * @extends HTMLUListElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-navigation.html|Demo}
 *
 */
export class VlSideNavigationGroup extends nativeVlElement(HTMLUListElement) {
  constructor() {
    super();
    this._processClasses();
  }

  _processClasses() {
    this.classList.add("vl-side-navigation__group");
  }
}

define("vl-side-navigation-group", VlSideNavigationGroup, { extends: "ul" });
