import { nativeVlElement, define } from "../../utils/core";

/**
 * VlFormLabel
 * @class
 * @classdesc Gebruik de vl-form-label om labels toe te voegen aan een formulier.
 *
 * @extends HTMLLabelElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-light - Attribuut wordt gebruikt om het label in een lichte kleur te tonen.
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-message/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-message/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-form-message.html|Demo}
 */
export class VlFormLabel extends nativeVlElement(HTMLLabelElement) {
  static get _observedClassAttributes() {
    return ["light", "block"];
  }

  connectedCallback() {
    this.classList.add("vl-form__label");
  }

  get _classPrefix() {
    return "vl-form__label--";
  }
}

/**
 * VlFormValidationMessage
 * @class
 * @classdesc Gebruik de vl-form-validation-message om een validatie boodschap toe te voegen aan een formulier.
 *
 * @extends HTMLParagraphElement
 * @mixes nativeVlElement
 *
 * @property {boolean} data-vl-error - Attribuut wordt gebruikt om foutboodschap te tonen bij validatiefouten.
 * @property {boolean} data-vl-success - Attribuut wordt gebruikt om boodschap te tonen bij een succesvolle validatie.
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-message/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-message/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-form-message.html|Demo}
 */
export class VlFormValidationMessage extends nativeVlElement(
  HTMLParagraphElement
) {
  constructor() {
    super();
    if (this.hasAttribute("data-vl-error-id")) {
      this.setAttribute("hidden", "");
    }
  }

  static get _observedAttributes() {
    return ["block", "success"];
  }

  static get _observedClassAttributes() {
    return ["error", "success"];
  }

  get success() {
    return this.getAttribute("success") != undefined;
  }

  get error() {
    return this.getAttribute("error") != undefined;
  }

  get _validationType() {
    return this.success ? "success" : "error";
  }

  get _checkElement() {
    return this._element.querySelector(".vl-vi-check");
  }

  _getCheckTemplate() {
    return this._template(
      '<span class="vl-vi vl-vi-check" aria-hidden="true"></span>'
    );
  }

  get _classPrefix() {
    return `vl-form__`;
  }

  _successChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      this._element.append(this._getCheckTemplate());
    } else if (this._checkElement) {
      this._checkElement.remove();
    }
  }

  _blockChangedCallback(oldValue, newValue) {
    this._toggleClass(
      this,
      newValue,
      this._classPrefix + this._validationType + "--block"
    );
  }
}

/**
 * Gebruik de form-annotation mixin in combinatie met HTML elementen.
 * @mixin vlFormAnnotationElement
 *
 * @param {Object} SuperClass - Class die als base class gebruikt zal worden.
 * @return {Object} class
 */
const vlFormAnnotationElement = (SuperClass) => {
  return class extends nativeVlElement(SuperClass) {
    static get _observedClassAttributes() {
      return ["block"];
    }

    connectedCallback() {
      this.classList.add("vl-form__annotation");
    }

    get _classPrefix() {
      return "vl-form__annotation--";
    }
  };
};

/**
 * VlFormAnnotation
 * @class
 * @classdesc Gebruik de vl-form-annotation om invoerinstructies toe te voegen aan een formulier.
 *
 * @extends HTMLParagraphElement
 * @mixes vlFormAnnotationElement
 *
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-message/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-message/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-form-message.html|Demo}
 */
export class VlFormAnnotationParagraph extends vlFormAnnotationElement(
  HTMLParagraphElement
) {}

/**
 * VlFormAnnotation
 * @class
 * @classdesc Gebruik de vl-form-annotation om invoerinstructies toe te voegen aan een formulier.
 *
 * @extends HTMLParagraphElement
 * @mixes vlFormAnnotationElement
 *
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-message/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-message/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-form-message.html|Demo}
 */
export class VlFormAnnotationSpan extends vlFormAnnotationElement(
  HTMLSpanElement
) {}

define("vl-form-label", VlFormLabel, { extends: "label" });
define("vl-form-validation-message", VlFormValidationMessage, { extends: "p" });
define("vl-form-annotation", VlFormAnnotationParagraph, { extends: "p" });
define("vl-form-annotation-span", VlFormAnnotationSpan, { extends: "span" });
