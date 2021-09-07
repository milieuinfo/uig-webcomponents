import { vlElement, define } from "../../utils/core";
import "../icon";
import styles from "./styles.scss";

/**
 * VlInfoblock
 * @class
 * @classdesc Gebruik de infoblock om een sectie met een nieuwe content te starten.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} data-vl-title - Attribuut dat wordt gebruikt om de titel van de infoblock te zetten.
 * @property {string} data-vl-icon - Attribuut dat wordt gebruikt om een icoon vooraan aan de titel toe te voegen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.
 * @property {string} data-vl-type - Er kan een vast icoon gekozen worden (contact, publications, faq, news, timeline, question)
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infoblock/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infoblock/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-infoblock.html|Demo}
 *
 */
export class VlInfoblock extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ["title", "icon", "type"];
  }

  constructor() {
    super(`
      <style>
        ${styles}
      </style>
      <section id="infoblock-element" class="vl-infoblock">
        <header class="vl-infoblock__header" role="presentation">
          <span is="vl-icon" id="infoblock_icon" class="vl-infoblock__header__icon"></span>
          <slot name="title" class="vl-infoblock__title"></slot>
        </header>
        <div class="vl-infoblock__content" id="infoblock_content">
          <slot></slot>
        </div>  
      </section>
    `);
  }

  _titleChangedCallback(oldValue, newValue) {
    const currentSlot = this.querySelector('[slot="title"]');
    if (currentSlot) {
      currentSlot.remove();
    }
    this.append(this._template(`<h2 slot='title'>${newValue}</h2>`));
  }

  _iconChangedCallback(oldValue, newValue) {
    this._iconElement.setAttribute("data-vl-icon", newValue);
  }

  _typeChangedCallback(oldValue, newValue) {
    const classPrefix = "vl-infoblock--";
    if (oldValue) {
      this._element.classList.remove(classPrefix + oldValue);
    }
    if (newValue) {
      this._element.classList.add(classPrefix + newValue);
    }
  }

  get _iconElement() {
    return this._element.querySelector("#infoblock_icon");
  }
}

define("vl-infoblock", VlInfoblock);
