import { nativeVlElement, define } from "../../utils/core";

/**
 * Gebruik de link mixin in combinatie met link elementen.
 * @mixin vlLinkElement
 *
 * @param {Object} SuperClass - Class die als base class gebruikt zal worden.
 * @return {Object} class
 */
export const vlLinkElement = (SuperClass) => {
  return class extends nativeVlElement(SuperClass) {
    static get _observedAttributes() {
      return ["error"];
    }

    static get _observedClassAttributes() {
      return ["block"];
    }

    connectedCallback() {
      this.classList.add("vl-link");
      this._setIconLinkAttribute();
    }

    get _classPrefix() {
      return "vl-link--";
    }

    get _iconElementen() {
      return this.querySelectorAll('[is="vl-icon"]');
    }

    _setIconLinkAttribute() {
      this._iconElementen.forEach((icon) => {
        icon.setAttribute("link", "");
      });
    }

    _errorChangedCallback(oldValue, newValue) {
      this._toggleClass(this, newValue, "vl-u-text--error");
    }
  };
};

export const VlLinkElement = vlLinkElement;

/**
 * VlLink
 * @class
 * @classdesc Gebruik de vl-link om de gebruiker door te verwijzen naar een andere URL, bijvoorbeeld een nieuwe pagina of een document.
 *
 * @extends HTMLAnchorElement
 * @mixes vlLinkElement
 *
 * @property {string} data-vl-block - Attribuut zorgt ervoor dat het element als block getoond wordt.
 * @property {string} data-vl-error - Attribuut zorgt ervoor dat het element als error getoond wordt.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-link.html|Demo}
 */
export class VlLink extends vlLinkElement(HTMLAnchorElement) {}

/**
 * VlButtonLink
 * @class
 * @classdesc Een button gestyled als link.
 *
 * @extends HTMLButtonElement
 * @mixes vlLinkElement
 *
 * @property {string} data-vl-block - Attribuut zorgt ervoor dat het element als block getoond wordt.
 * @property {string} data-vl-error - Attribuut zorgt ervoor dat het element als error getoond wordt.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-link.html|Demo}
 */
export class VlButtonLink extends vlLinkElement(HTMLButtonElement) {}

define("vl-link", VlLink, { extends: "a" });
define("vl-button-link", VlButtonLink, { extends: "button" });
