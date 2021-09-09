import { nativeVlElement, vlElement, define } from "../../utils/core";
import styles from "./styles.scss";

/**
 * VlProperties
 * @class
 * @classdesc De properties webcomponent vormt de container van een lijst van kenmerken van een onderwerp. Deze component wordt meestal gebruikt om informatie te tonen dat ingevuld werd in een formulier.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-full-width - Attribuut wordt gebruikt om de maximale breedte van het label te benutten.
 *
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlProperties extends vlElement(HTMLElement) {
  static get _observedClassAttributes() {
    return ["full-width"];
  }

  constructor() {
    super(`
      <style>
        ${styles}
      </style>
      <div class="vl-properties">
        <slot></slot>
      </div>
    `);
  }

  connectedCallback() {
    this._setPropertiesTitle();
  }

  get _titles() {
    return this.querySelectorAll("h1,h2,h3,h4,h5,h6");
  }

  get _classPrefix() {
    return "vl-properties--";
  }

  _setPropertiesTitle() {
    this._titles.forEach((title) => {
      title.classList.add("vl-properties__title");
    });
  }
}

/**
 * VlPropertiesColumn
 * @class
 * @classdesc De properties kolom webcomponent wordt gebruikt om lijsten van kenmerken van een onderwerp te verdelen in verschillende kolommen.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-full - Attribuut wordt gebruikt om de kolom de volledige breedte te laten innemen.
 *
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertiesColumn extends nativeVlElement(HTMLDivElement) {
  static get _observedClassAttributes() {
    return ["full"];
  }

  connectedCallback() {
    this.classList.add("vl-properties__column");
  }

  get _classPrefix() {
    return "vl-properties__column--";
  }
}

/**
 * VlPropertiesList
 * @class
 * @classdesc De properties lijst webcomponent toont een lijst van kenmerken van een onderwerp.
 *
 * @extends HTMLDListElement
 * @mixes nativeVlElement
 *
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertiesList extends nativeVlElement(HTMLDListElement) {
  connectedCallback() {
    this.classList.add("vl-properties__list");
  }
}

/**
 * VlPropertyTerm
 * @class
 * @classdesc De property kenmerk webcomponent toont de beschrijving van een onderwerp kenmerk.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 *
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertyTerm extends nativeVlElement(HTMLElement) {
  connectedCallback() {
    this.classList.add("vl-properties__label");
  }
}

/**
 * VlPropertyValue
 * @class
 * @classdesc De property waarde webcomponent toont de waarde van een onderwerp kenmerk.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 *
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertyValue extends nativeVlElement(HTMLElement) {
  connectedCallback() {
    this.classList.add("vl-properties__data");
  }
}

define("vl-properties", VlProperties);
define("vl-properties-column", VlPropertiesColumn, { extends: "div" });
define("vl-properties-list", VlPropertiesList, { extends: "dl" });
define("vl-property-term", VlPropertyTerm, { extends: "dt" });
define("vl-property-value", VlPropertyValue, { extends: "dd" });
