import { nativeVlElement, define } from "../../utils/core";

/**
 * VlTitle
 * @class
 * @classdesc Gebruik de vl-title om titels en subtitels als leidraad voor de gebruiker om door de content te gaan.
 *
 * @extends HTMLHeadingElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-sans - Attribuut wordt gebruikt om de font te wijzigen van Flanders Serif naar Flanders Sans.
 * @property {boolean} data-vl-has-border - Attribuut wordt gebruikt om een subtiele lijn toe te voegen onder de titel.
 * @property {boolean} data-vl-alt - Attribuut wordt gebruikt voor een alt titel en zal altijd een lijn toevoegen onder de titel.
 * @property {boolean} data-vl-no-space-bottom - Attribuut wordt gebruikt wanneer een titel gecombineerd wordt met de grid component.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-titles/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-titles/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-titles.html|Demo}
 */
export class VlTitle extends nativeVlElement(HTMLHeadingElement) {
  static get _observedClassAttributes() {
    return ["sans", "has-border", "alt", "no-space-bottom"];
  }

  connectedCallback() {
    this.classList.add("vl-title");
    this.classList.add("vl-title--" + this.tagName.toLowerCase());
  }

  get _classPrefix() {
    return "vl-title--";
  }
}

export class VlH1 extends VlTitle {}
export class VlH2 extends VlTitle {}
export class VlH3 extends VlTitle {}
export class VlH4 extends VlTitle {}
export class VlH5 extends VlTitle {}
export class VlH6 extends VlTitle {}

define("vl-h1", VlH1, { extends: "h1" });
define("vl-h2", VlH2, { extends: "h2" });
define("vl-h3", VlH3, { extends: "h3" });
define("vl-h4", VlH4, { extends: "h4" });
define("vl-h5", VlH5, { extends: "h5" });
define("vl-h6", VlH6, { extends: "h6" });
