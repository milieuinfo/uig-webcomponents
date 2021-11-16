import { nativeVlElement } from "../../../utils/core/";

/**
 * Gebruik de input addon mixin in combinatie met een input addon elementen.
 * @mixin vlInputAddonElement
 *
 * @param {Object} SuperClass
 * @return {Object} SuperClass
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-addon.html|Demo}
 */
export const vlInputAddonElement = (SuperClass) => {
  return class extends nativeVlElement(SuperClass) {
    connectedCallback() {
      this.classList.add("vl-input-addon");
    }
  };
};
