import { nativeVlElement, define } from "../../utils/core";
import "./lib";
import "./components/reference";
import "./components/title";
import "./components/content";
import "./components/group";
import "./components/item";
import "./components/toggle";

/**
 * VlSideNavigation
 * @class
 * @classdesc Een compact navigatie element dat je aan een pagina kan toevoegen. Het vat de inhoud van lange pagina's samen, leidt de gebruiker door de pagina inhoud en kan ook naar externe pagina's verwijzen.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-navigation.html|Demo}
 *
 */
export class VlSideNavigation extends nativeVlElement(HTMLElement) {
  constructor() {
    super();
    this._processAttributes();
    this._processClasses();
    this._dress();
  }

  _dress() {
    setTimeout(() => {
      vl.sideNavigation.dress(this._element);
      this.style.position = "";
    });
  }

  _processAttributes() {
    this.setAttribute("data-vl-side-navigation", "");
    this.setAttribute("data-vl-side-navigation-scrollable", "");
    this.setAttribute("data-vl-scrollspy", "");
    this.setAttribute("data-vl-scrollspy-mobile", "Navigatie");
    this.setAttribute("data-vl-sticky", "");
    this.setAttribute("data-vl-sticky-offset-top", "43");
  }

  _processClasses() {
    this.classList.add("vl-side-navigation");
    this.classList.add("js-vl-side-navigation");
    this.classList.add("js-vl-sticky");
    this.classList.add("js-vl-scrollspy");
  }
}

define("vl-side-navigation", VlSideNavigation, { extends: "nav" });
