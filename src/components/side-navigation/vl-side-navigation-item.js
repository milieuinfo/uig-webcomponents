import { nativeVlElement, define } from "../../utils/vl-core";

/**
 * VlSideNavigationItem
 * @class
 * @classdesc Het navigatie item element.
 *
 * @extends HTMLLIElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-parent - Attribuut wordt gebruikt op de navigatie menu list elementen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-navigation.html|Demo}
 *
 */
export class VlSideNavigationItem extends nativeVlElement(HTMLLIElement) {
  static get _observedAttributes() {
    return ["parent"];
  }

  constructor() {
    super();
    this._processClasses();
  }

  _processClasses() {
    this.classList.add("vl-side-navigation__item");
  }

  _parentChangedCallback(oldValue, newValue) {
    const clazz = "vl-side-navigation__item--parent";
    if (newValue != undefined) {
      this.classList.add(clazz);
    } else {
      this.classList.remove(clazz);
    }
  }
}

define("vl-side-navigation-item", VlSideNavigationItem, { extends: "li" });
