import '@ungap/custom-elements/min.js';
import '@govflanders/vl-ui-util/dist/js/util.js';
import '@govflanders/vl-ui-core/dist/js/core.js';

export const VlElement = (SuperClass) => {
  /**
   * VlElement
   * @class
   * @classdesc De root element class voor custom HTML elementen.
   *
   * @property {boolean} data-vl-spacer-none - Attribuut wordt gebruikt om aan te geven dat er geen lege ruimte toegevoegd mag worden rond het element.
   *
   * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-core/releases/latest|Release notes}
   * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-core/issues|Issues}
   */
  class VlElement extends SuperClass {
    /**
     * VlElement constructor die een shadow DOM voorziet op basis van de HTML {Literal} parameter.
     *
     * @param {Literal} html - HTML literal die de DOM representeert
     * @return {void}
     */
    constructor(html) {
      super();
      if (html) {
        this.shadow(html);
      }
    }

    /**
     * Geeft de prefix die gebruikt kan worden voor attributen.
     *
     * @return {String} attribuut prefix
     */
    static get attributePrefix() {
      return 'data-vl-';
    }

    static get observedAttributes() {
      const spacer = [`${VlElement.attributePrefix}spacer-none`];
      const observedAttributes = [spacer].concat(this._observedAttributes.concat(this._observedPrefixAttributes));
      const observedClassAttributes = this._observedClassAttributes.concat(this._observedPrefixClassAttributes);
      const observedChildClassAttributes = this._observedChildClassAttributes.concat(
        this._observedPrefixChildClassAttributes,
      );
      return observedAttributes.concat(observedClassAttributes).concat(observedChildClassAttributes);
    }

    /**
     * Een lijst van attributen die geobserveerd zullen worden. Bij een wijziging van de attribuut waarde zal een functie (`_attribuutChangedCallback`) functie aangeroepen worden met de oude en nieuwe waarde als parameters. Indien de attribuut `-` bevat in de naam zal dit verwijderd worden gevolgd door een hoofdletter bij het aanroepen van de functie (`_attribuutNaamChangedCallback`).
     *
     * @protected
     * @return {Array} array van attributen waar naar geluisterd moet worden
     */
    static get _observedAttributes() {
      return [];
    }

    /**
     * Een lijst van attributen die geobserveerd zullen worden. Bij een wijziging van de attribuut waarde zal een class toegevoegd worden aan het root element. De naam van de class is gebaseerd op de element prefix (`_classPrefix`) en de naam van het attribuut.
     *
     * @protected
     * @return {Array} array van attributen waar naar geluisterd moet worden
     */
    static get _observedClassAttributes() {
      return [];
    }

    /**
     * Een lijst van attributen die geobserveerd zullen worden. Bij een wijziging van de attribuut waarde zal een class toegevoegd worden aan het eerste shadow DOM element. De naam van de class is gebaseerd op de element prefix (`_classPrefix`) en de naam van het attribuut.
     *
     * @protected
     * @return {Array} array van attributen waar naar geluisterd moet worden
     */
    static get _observedChildClassAttributes() {
      return [];
    }

    static get _observedPrefixAttributes() {
      return this._observedAttributes.map((attribute) => VlElement.attributePrefix + attribute);
    }

    static get _observedPrefixClassAttributes() {
      return this._observedClassAttributes.map((attribute) => VlElement.attributePrefix + attribute);
    }

    static get _observedPrefixChildClassAttributes() {
      return this._observedChildClassAttributes.map((attribute) => VlElement.attributePrefix + attribute);
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (attr.startsWith(VlElement.attributePrefix)) {
        attr = attr.replace(VlElement.attributePrefix, '');
      }

      this.constructor._observedClassAttributes
      .concat(this.constructor._observedPrefixClassAttributes)
      .filter((attribute) => attribute == attr || attribute == VlElement.attributePrefix + attr)
      .forEach((attribute) => {
        this.__changeAttribute(this, oldValue, newValue, attribute);
      });

      this.constructor._observedChildClassAttributes
      .concat(this.constructor._observedPrefixChildClassAttributes)
      .filter((attribute) => attribute == attr || attribute == VlElement.attributePrefix + attr)
      .forEach((attribute) => {
        this.__changeAttribute(this._element, oldValue, newValue, attribute);
      });

      const getDeprecatedCallbackFunction = (attribute) => this[`_${attribute.split('-').join('_')}ChangedCallback`];

      const getCallbackFunction = (attribute) => {
        const splittedAttribute = attribute.split('-');
        const changeFirstLetterToUpperCase = (item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`;
        return this[
          `_${splittedAttribute.shift()}${splittedAttribute.map(changeFirstLetterToUpperCase).join('')}ChangedCallback`
          ];
      };

      const callback =
        getCallbackFunction(attr) ||
        getDeprecatedCallbackFunction(attr) ||
        getCallbackFunction(`${VlElement.attributePrefix}${attr}`) ||
        getDeprecatedCallbackFunction(`${VlElement.attributePrefix}${attr}`);
      if (callback) {
        callback.call(this, oldValue, newValue);
      }
    }

    /**
     * Geeft de waarde van het naam attribuut terug.
     *
     * @return {string}
     */
    get name() {
      return this.getAttribute('name');
    }

    /**
     * Bepaal het name attribuut van het element en achterliggend input element.
     *
     * @param {string} value
     */
    set name(value) {
      this.setAttribute(`${VlElement.attributePrefix}name`, value);
    }

    /**
     * Geeft het form element terug.
     *
     * @return {HTMLFormElement}
     */
    get form() {
      return this.closest('form');
    }

    /**
     * De class prefix bepaalt de prefix van het class attribuut dat automatisch toegevoegd wordt op basis van attributen.
     *
     * @protected
     * @return {void}
     */
    get _classPrefix() {
      console.error('class prefix is undefined');
    }

    /**
     * DOM element getter.
     *
     * @protected
     * @return {Element}
     */
    get _element() {
      if (this._shadow) {
        return this._shadow.lastElementChild;
      }
      return this;
    }

    /**
     * Geeft de waarde van het attribuut rekening houdende met het feit dat de attribuut prefix {@link #attributePrefix} gebruikt wordt.
     *
     * @param {String} attribute
     * @return {String}
     */
    getAttribute(attribute) {
      if (super.hasAttribute(VlElement.attributePrefix + attribute)) {
        return super.getAttribute(VlElement.attributePrefix + attribute);
      }
      return super.getAttribute(attribute);
    }

    /**
     * Geeft de internationalisatie vertaling terug.
     *
     * @param {String} key
     * @return {String}
     */
    getTranslation(key) {
      return vl.i18n.i18n[key];
    }

    /**
     * Geeft terug of het attribuut bestaat rekening houdende met het feit dat de attribuut prefix {@link #attributePrefix} gebruikt wordt.
     *
     * @param {String} attribute
     * @return {Boolean}
     */
    hasAttribute(attribute) {
      return this.getAttribute(attribute) != undefined;
    }

    /**
     * Definieer shadow DOM.
     *
     * @protected
     * @param {Literal} html - HTML literal
     * @return {void}
     */
    shadow(html) {
      this._shadow = this.attachShadow({ mode: 'open' });
      this._shadow.innerHTML = html;
    }

    /**
     * Genereert een {HTMLTemplateElement} template met de HTML Literal.
     *
     * @protected
     * @param {Literal} html - HTML literal
     * @return {HTMLTemplateElement}
     */
    _template(html) {
      const template = document.createElement('template');
      template.innerHTML = html;
      return template.content;
    }

    /**
     * Het class attribuut op basis van de oude waarde zal vervangen worden door het class attribuut op basis van de nieuwe waarde.
     *
     * @protected
     * @param {Element} element - HTML element
     * @param {Object} oldValue - oude waarde
     * @param {Object} newValue - nieuwe waarde
     * @param {String} classPrefix - class prefix
     * @return {void}
     */
    _changeClass(element, oldValue, newValue, classPrefix) {
      if (element.classList.contains((classPrefix || this._classPrefix) + oldValue)) {
        element.classList.remove((classPrefix || this._classPrefix) + oldValue);
      }

      if (newValue != undefined) {
        element.classList.add((classPrefix || this._classPrefix) + newValue);
      }
    }

    /**
     * Zal op basis van de attribuut waarde de class verwijderen of toevoegen.
     *
     * @protected
     * @param {Element} element - HTML element
     * @param {Object} value - attribuut waarde
     * @param {String} clazz - class waarde
     * @return {void}
     */
    _toggleClass(element, value, clazz) {
      if (value != undefined || !!value) {
        element.classList.add(clazz);
      } else {
        element.classList.remove(clazz);
      }
    }

    _spacerNoneChangedCallback(oldValue, newValue) {
      this._toggleClass(this._element, newValue, 'vl-u-spacer--none');
    }

    /**
     * Wijzig de (standaard) tekst van een vertaling.
     *
     * @param {String} key
     * @param {String} value
     */
    _changeTranslation(key, value) {
      vl.i18n.i18n[key] = value;
    }

    __changeAttribute(element, oldValue, newValue, attribute, classPrefix) {
      if (oldValue != newValue) {
        if (this.getAttribute(attribute) != undefined) {
          element.classList.add((classPrefix || this._classPrefix) + attribute);
        } else {
          element.classList.remove((classPrefix || this._classPrefix) + attribute);
        }
      }
    }
  }

  return VlElement;
};
