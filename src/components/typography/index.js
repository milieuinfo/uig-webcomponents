import { vlElement, define } from "../../utils/core";
import styles from "./styles.scss";

/**
 * VlTypography
 * @class
 * @classdesc Gebruik de typograhpy component om de standaard elementen te visualiseren binnen een container. De typography component wordt voornamelijk gebruikt om de stijl van de inhoud van een wysiwyg-editor correct te renderen.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} data-vl-parameters - De key/value parameters die verwerkt en getoond zullen worden in het content element.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-typography/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-typography/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-typography.html|Demo}
 *
 */
export class VlTypography extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ["parameters"];
  }

  constructor() {
    super(`
      <style>
        ${styles}
      </style>
      <div id="content" class="vl-typography"></div>
    `);
    this._observer = this.__observeSlotElements(() =>
      this.__processSlotElements()
    );
  }

  connectedCallback() {
    this.__processSlotElements();
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  _parametersChangedCallback(oldValue, newValue) {
    this.__processSlotElements();
  }

  __processSlotElements() {
    this.__clearChildren();
    const parameters = this.dataset.vlParameters
      ? JSON.parse(this.dataset.vlParameters)
      : {};
    const template = VlTypography.replaceTemplateParameters(
      this.innerHTML,
      parameters
    );
    this._element.insertAdjacentHTML("afterbegin", template);
  }

  __clearChildren() {
    while (this._element.hasChildNodes()) {
      this._element.firstChild.remove();
    }
  }

  __observeSlotElements(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(this, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
    return observer;
  }

  /**
   * Dit vormt een template met placeholders voor parameters om in een tekst waarin deze placeholders vervangen
   * zijn met hun waarden.
   *
   * @param {string} template De template waarin placeholders zitten in de vorm van "${parameter.parameterNaam}"
   * @param {object} params Een object met keys die de naam van de parameter voorstellen (bv. "parameterNaam") en hun waarden
   * @return {string} De resulterende tekst
   */
  static replaceTemplateParameters(template, params) {
    Object.keys(params).forEach(
      (key) =>
        (template = template.replaceAll(
          "${parameter." + key + "}",
          params[key]
        ))
    );
    template = template.replace(/\${parameter.\w+}/g, "");
    return template;
  }
}

define("vl-typography", VlTypography);
