import { awaitUntil } from "../../../utils/core";
import "@govflanders/vl-ui-util/dist/js/util.js";
import "@govflanders/vl-ui-core/dist/js/core.js";
import "../lib";

/**
 * De formulier validatie mixin in combinatie met een input field verzekert dat bij het invullen van het formulier de input van de gebruiker geldig is.
 * @mixin vlFormValidation
 *
 * @property {(email | date | rrn | uuid | phone | iban | select | numerical)} data-vl-validation-type - Attribuut wordt gebruikt om aan te duiden welke validatie van toepassing is.
 * @property {string} data-vl-required - Attribuut wordt gebruikt om aan te duiden dat het veld verplicht is.
 * @property {string} data-vl-error-message - Attribuut wordt gebruikt om de tekst die verschijnt in de vl-form-validation component te bepalen.
 * @property {string} data-vl-error-placeholder - Attribuut wordt gebruikt om de koppeling met de bijhorende vl-form-validation component te maken met id attribuut `data-vl-error-id`.
 * @property {string} data-vl-success-class - Attribuut wordt gebruikt om de klasse te zetten als een vl-form-validation component succesvol gevalideerd is.
 * @property {string} data-vl-error-class - Attribuut wordt gebruikt om de klasse te zetten als een vl-form-validation component foutief gevalideerd is.
 * @property {boolean} data-vl-numerical-only-integer - Attribuut wordt gebruikt om aan te geven dat voor de numerical validatie enkel gehele getallen geldig zijn.
 * @property {number} data-vl-numerical-greater-than - Attribuut wordt gebruikt om aan te geven dat voor de numerical validatie het getal groter moet zijn dan het getal in dit attribuut.
 * @property {number} data-vl-numerical-greater-than-or-equal-to - Attribuut wordt gebruikt om aan te geven dat voor de numerical validatie het getal groter of gelijk moet zijn aan het getal in dit attribuut.
 * @property {number} data-vl-numerical-less-than - Attribuut wordt gebruikt om aan te geven dat voor de numerical validatie het getal kleiner moet zijn dan het getal in dit attribuut.
 * @property {number} data-vl-numerical-less-than-or-equal-to - Attribuut wordt gebruikt om aan te geven dat voor de numerical validatie het getal kleiner of gelijk moet zijn aan het getal in dit attribuut.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-validation/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-validation/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-form-validation.html|Demo}
 */
export const vlFormValidation = {
  /**
   * Wacht tot de form validatie initialisatie klaar is.
   *
   * @return {Promise}
   */
  ready() {
    return awaitUntil(() => window.vl && window.vl.formValidation);
  },

  /**
   * Initialiseer de form validatie.
   *
   * @param {HTMLElement} element
   */
  dress(element) {
    if (
      element &&
      element.hasAttribute("data-vl-validate") &&
      !element.hasAttribute("data-vl-formvalidation-dressed")
    ) {
      vl.formValidation.dress(element);
    }
  },

  _observedAttributes() {
    return ["name", "required", "data-required", "error-placeholder"];
  },
};

export const VlFormValidation = vlFormValidation;

/**
 * Gebruik de form validation element mixin in combinatie met elementen die formulier validatie bevatten.
 * @mixin vlFormValidationElement
 *
 * @param {Object} SuperClass - Class die als base class gebruikt zal worden.
 * @return {Object} class
 */
export const vlFormValidationElement = (SuperClass) => {
  return class extends SuperClass {
    static get formAssociated() {
      return true;
    }

    constructor(html) {
      super(html);
      if (this.attachInternals && customElements.get(this.localName)) {
        this._internals = this.attachInternals();
      }
    }

    disconnectedCallback() {
      if (this._observer) {
        this._observer.disconnect();
      }
    }

    /**
     * Sets a custom validity message for the element.
     *
     * @param {string} message
     */
    setCustomValidity(message) {
      if (this._inputElement) {
        this._inputElement.setCustomValidity(message);
      } else if (this._internals) {
        if (message) {
          this._internals.setValidity({ customError: true }, message);
        } else {
          this._internals.setValidity({});
        }
      } else if (super.setCustomValidity) {
        super.setCustomValidity(message);
      }
    }

    /**
     * Returns true if the element's child controls are subject to constraint validation and satisfy those contraints; returns false if some controls do not satisfy their constraints. Fires an event named invalid at any control that does not satisfy its constraints; such controls are considered invalid if the event is not canceled. It is up to the programmer to decide how to respond to false.
     *
     * @return {boolean}
     */
    checkValidity() {
      if (this._inputElement) {
        return this._inputElement.checkValidity();
      } else if (this._internals) {
        return this._internals.checkValidity();
      } else if (super.checkValidity) {
        return super.checkValidity();
      } else {
        return true;
      }
    }

    _dressFormValidation() {
      if (this.form && this.form.hasAttribute("data-vl-validate")) {
        this._setClassAttributes();
        this._observer = this._observeFormValidationClasses();
        Object.assign(this, vlFormValidation);
        this.dress(this.form);
        this.addEventListener("focus", () => this.focus());
      }
    }

    get _inputElement() {
      if (this.shadowRoot) {
        return this.shadowRoot.querySelector("input");
      }
    }

    _observeFormValidationClasses() {
      const observer = new MutationObserver((mutations) => {
        ["error", "success"].forEach((type) => {
          if (
            mutations.find((mutation) =>
              [...mutation.target.classList].find((clazz) =>
                clazz.includes(this.getAttribute(`data-vl-${type}-class`))
              )
            )
          ) {
            if (!this.hasAttribute(`data-vl-${type}`)) {
              this.setAttribute(`data-vl-${type}`, "");
            }
          } else {
            this.removeAttribute(`data-vl-${type}`);
          }
        });
      });
      observer.observe(this, { attributes: true, attributeFilter: ["class"] });
      return observer;
    }

    _nameChangedCallback(oldValue, newValue) {
      if (this._inputElement && this._inputElement.name != newValue) {
        this._inputElement.name = newValue;
        this.setAttribute("name", newValue);
      }
    }

    _requiredChangedCallback(oldValue, newValue) {
      const attributes = ["data-required", "required", "aria-required"];
      if (newValue == undefined) {
        attributes.forEach((attribute) => {
          this.removeAttribute(attribute);
          if (this._inputElement) {
            this._inputElement.removeAttribute(attribute);
          }
        });
      } else if (newValue != undefined && oldValue == undefined) {
        attributes.forEach((attribute) => {
          const value = attribute === "required" ? "" : "true";
          this.setAttribute(attribute, value);
          if (this._inputElement) {
            this._inputElement.setAttribute(attribute, value);
          }
        });
      }
    }

    _dataRequiredChangedCallback(oldValue, newValue) {
      this._requiredChangedCallback(oldValue, newValue);
    }

    _errorPlaceholderChangedCallback(oldValue, newValue) {
      this.setAttribute("aria-describedby", newValue);
    }

    _setClassAttributes() {
      this.setAttribute("data-vl-success-class", `vl-input-field--success`);
      this.setAttribute("data-vl-error-class", `vl-input-field--error`);
    }
  };
};
