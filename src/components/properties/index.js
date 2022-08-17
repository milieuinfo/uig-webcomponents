import { vlElement, define } from "../../utils/core";
import "./components/column";
import "./components/list";
import "./components/term";
import "./components/value";

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

define("vl-properties", VlProperties);
