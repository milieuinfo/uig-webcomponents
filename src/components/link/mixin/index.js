import { nativeVlElement } from "../../../utils/core";

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
      return ["block", "inline", "small", "bold", "large"];
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
