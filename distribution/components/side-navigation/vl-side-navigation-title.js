import { nativeVlElement, define } from "../../utils/vl-core";

/**
 * VlSideNavigationTitle
 * @class
 * @classdesc Het navigatie titel element.
 *
 * @extends HTMLHeadingElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-navigation.html|Demo}
 *
 */
export class VlSideNavigationTitle extends nativeVlElement(HTMLHeadingElement) {
  constructor() {
    super();
    this._processClasses();
  }

  _processClasses() {
    this.classList.add("vl-side-navigation__title");
  }
}

class VlSideNavigationH1 extends VlSideNavigationTitle {}
class VlSideNavigationH2 extends VlSideNavigationTitle {}
class VlSideNavigationH3 extends VlSideNavigationTitle {}
class VlSideNavigationH4 extends VlSideNavigationTitle {}
class VlSideNavigationH5 extends VlSideNavigationTitle {}
class VlSideNavigationH6 extends VlSideNavigationTitle {}

define("vl-side-navigation-h1", VlSideNavigationH1, { extends: "h1" });
define("vl-side-navigation-h2", VlSideNavigationH2, { extends: "h2" });
define("vl-side-navigation-h3", VlSideNavigationH3, { extends: "h3" });
define("vl-side-navigation-h4", VlSideNavigationH4, { extends: "h4" });
define("vl-side-navigation-h5", VlSideNavigationH5, { extends: "h5" });
define("vl-side-navigation-h6", VlSideNavigationH6, { extends: "h6" });
