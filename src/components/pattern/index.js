import { awaitUntil } from "../../utils/vl-core";
import "../../../node_modules/@govflanders/vl-ui-util/dist/js/util.js";
// import "../../../node_modules/@govflanders/vl-ui-util/dist/js/core.js";
import "./lib/pattern.js";

/**
 * Gebruik de pattern mixin in combinatie met een input field om de gebruiker te verplichten om informatie in een bepaald formaat op te geven.
 * @mixin vlPattern
 *
 * @property {(iban | phone | date | price | rrn | uuid | numerical)} data-vl-pattern - Attribuut wordt gebruikt om aan te duiden welk patroon van toepassing is.
 * @property {string} data-vl-pattern-prefix - Attribuut bepaalt de prefix die de gebruiker zal zien. In het geval van iban en phone pattern type wordt de prefix toegevoegd aan de value. Bij price pattern type is de prefix puur visueel.
 * @property {number} [2] data-vl-numerical-decimal-scale - Attribuut bepaalt hoeveel getallen er achter de komma ingevoerd kunnen worden.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-pattern/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-pattern/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-pattern.html|Demo}
 */
export const vlPattern = {
  /**
   * Wacht tot de pattern initialisatie klaar is.
   *
   * @return {Promise}
   */
  ready() {
    return awaitUntil(() => window.vl && window.vl.pattern);
  },

  getRawValue() {
    const patternInstanceForThisElement = vl.pattern.patternInstances.find(
      (patternInstance) => patternInstance.element == this
    );
    if (patternInstanceForThisElement) {
      return patternInstanceForThisElement.instance.getRawValue();
    } else {
      console.log("Pattern instance for " + this + " not found");
      return undefined;
    }
  },

  /**
   * Initialiseer de pattern.
   *
   * @param {HTMLElement} element
   */
  dress(element) {
    const pattern = element.getAttribute("data-vl-pattern");
    if (pattern) {
      vl.pattern.dress(element);
    }
  },
};
