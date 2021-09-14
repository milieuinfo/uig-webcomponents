import { nativeVlElement, define } from "../../../../utils/core";

/**
 * VlColumn
 * @class
 * @classdesc De parent van een VlColumn is altijd een VlGrid.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {number} [8] data-vl-size - Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij grote schermen, typisch desktop.
 * @property {number} [12] data-vl-max-size - Het maximum (noemer) waartegen zal geevalueerd worden bij grote schermen, typisch desktop.
 * @property {number} [10] data-vl-medium-size - Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij medium schermen, typisch tablet.
 * @property {number} [12] data-vl-medium-max-size - Het maximum (noemer) waartegen zal geevalueerd worden bij medium schermen, typisch tablet.
 * @property {number} [12] data-vl-small-size - Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij kleine schermen, typisch mobiel.
 * @property {number} [12] data-vl-small-max-size - Het maximum (noemer) waartegen zal geevalueerd worden bij kleine schermen, typisch mobiel.
 * @property {number} [12] data-vl-extra-small-size - Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij zeer kleine schermen.
 * @property {number} [12] data-vl-extra-small-max-size - Het maximum (noemer) waartegen zal geevalueerd worden bij zeer kleine schermen.
 * @property {number} data-vl-push - aantal partities te verschuiven.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-grid/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-grid.html|Demo}
 */

export class VlColumn extends nativeVlElement(HTMLDivElement) {
  static get _observedAttributes() {
    return [
      "size",
      "max-size",
      "medium-size",
      "medium-max-size",
      "small-size",
      "small-max-size",
      "extra-small-size",
      "extra-small-max-size",
      "push",
    ];
  }

  connectedCallback() {
    this._configureDefaults();
  }

  get _defaultSize() {
    return 8;
  }

  get _defaultMediumSize() {
    return 10;
  }

  get _defaultSmallSize() {
    return 12;
  }

  get _defaultExtraSmallSize() {
    return 12;
  }

  get _defaultMaxSize() {
    return 12;
  }

  get _size() {
    return this.getAttribute("size") || this._defaultSize;
  }

  get _maxSize() {
    return this.getAttribute("max-size") || this._defaultMaxSize;
  }

  get _mediumSize() {
    return this.getAttribute("medium-size") || this._defaultMediumSize;
  }

  get _mediumMaxSize() {
    return this.getAttribute("medium-max-size") || this._defaultMaxSize;
  }

  get _smallSize() {
    return this.getAttribute("small-size") || this._defaultSmallSize;
  }

  get _smallMaxSize() {
    return this.getAttribute("small-max-size") || this._defaultMaxSize;
  }

  get _extraSmallSize() {
    return this.getAttribute("extra-small-size") || this._defaultExtraSmallSize;
  }

  get _extraSmallMaxSize() {
    return this.getAttribute("extra-small-max-size") || this._defaultMaxSize;
  }

  get _columnClassPrefix() {
    return "vl-col--";
  }

  get _pushClassPrefix() {
    return "vl-push--";
  }

  static __sizeClass(minSize, maxSize, responsiveModifier) {
    return (
      `${minSize}-${maxSize}` +
      (responsiveModifier ? `--${responsiveModifier}` : "")
    );
  }

  __changeColumnClass(oldValue, newValue) {
    this._changeClass(this, oldValue, newValue, this._columnClassPrefix);
  }

  __changePushClass(oldValue, newValue) {
    this._changeClass(this, oldValue, newValue, this._pushClassPrefix);
  }

  _sizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultSize;
    this.__changeColumnClass(
      VlColumn.__sizeClass(oldValue, this._maxSize),
      VlColumn.__sizeClass(newValue, this._maxSize)
    );
  }

  _maxSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultMaxSize;
    this.__changeColumnClass(
      VlColumn.__sizeClass(this._size, oldValue),
      VlColumn.__sizeClass(this._size, newValue)
    );
  }

  _mediumSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultMediumSize;
    this.__changeColumnClass(
      VlColumn.__sizeClass(oldValue, this._mediumMaxSize, "m"),
      VlColumn.__sizeClass(newValue, this._mediumMaxSize, "m")
    );
  }

  _mediumMaxSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultMaxSize;
    this.__changeColumnClass(
      VlColumn.__sizeClass(this._mediumSize, oldValue, "m"),
      VlColumn.__sizeClass(this._mediumSize, newValue, "m")
    );
  }

  _smallSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultSmallSize;
    this.__changeColumnClass(
      VlColumn.__sizeClass(oldValue, this._smallMaxSize, "s"),
      VlColumn.__sizeClass(newValue, this._smallMaxSize, "s")
    );
  }

  _smallMaxSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultMaxSize;
    this.__changeColumnClass(
      VlColumn.__sizeClass(this._smallSize, oldValue, "s"),
      VlColumn.__sizeClass(this._smallSize, newValue, "s")
    );
  }

  _extraSmallSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultExtraSmallSize;
    this.__changeColumnClass(
      VlColumn.__sizeClass(oldValue, this._extraSmallMaxSize, "xs"),
      VlColumn.__sizeClass(newValue, this._extraSmallMaxSize, "xs")
    );
  }

  _extraSmallMaxSizeChangedCallback(oldValue, newValue) {
    oldValue = oldValue || this._defaultMaxSize;
    this.__changeColumnClass(
      VlColumn.__sizeClass(this._extraSmallSize, oldValue, "xs"),
      VlColumn.__sizeClass(this._extraSmallSize, newValue, "xs")
    );
  }

  _pushChangedCallback(oldValue, newValue) {
    this.__changePushClass(
      VlColumn.__sizeClass(oldValue, this._maxSize),
      VlColumn.__sizeClass(newValue, this._maxSize)
    );
  }

  _configureDefaults() {
    if (!this.hasAttribute("size")) {
      this._sizeChangedCallback(null, this._size);
    }

    if (!this.hasAttribute("medium-size")) {
      this._mediumSizeChangedCallback(null, this._mediumSize);
    }

    if (!this.hasAttribute("small-size")) {
      this._smallSizeChangedCallback(null, this._smallSize);
    }

    if (!this.hasAttribute("extra-small-size")) {
      this._extraSmallSizeChangedCallback(null, this._extraSmallSize);
    }
  }
}

define("vl-column", VlColumn, { extends: "div" });
