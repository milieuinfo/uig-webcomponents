import { vlElement, define } from "@uig/common/utilities";
import "./lib/side-navigation-lib.js";
import "./components/vl-side-navigation-reference.element";
import "./components/vl-side-navigation-title.element";
import "./components/vl-side-navigation-content.element";
import "./components/vl-side-navigation-group.element";
import "./components/vl-side-navigation-item.element";
import "./components/vl-side-navigation-toggle.elements";

declare const vl: any;

/**
 * VlSideNavigation
 * @class
 * @classdesc Een compact navigatie element dat je aan een pagina kan toevoegen. Het vat de inhoud van lange pagina's samen, leidt de gebruiker door de pagina inhoud en kan ook naar externe pagina's verwijzen.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 */
export class VlSideNavigation extends vlElement(HTMLElement) {
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
