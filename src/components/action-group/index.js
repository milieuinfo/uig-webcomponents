import { nativeVlElement, define } from "../../utils/core";

/**
 * VLActionGroup
 * @class
 * @classdesc Toon meerdere knoppen of links. De groep zorgt ervoor dat ze correct zijn uitgelijnd.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {string} data-vl-align - Attribuut wordt gebruikt om ervoor te zorgen dat de onderliggende elementen worden gealigneerd. Mogelijkheden: align="center" of align="right".
 * @property {boolean} data-vl-space-between - Attribuut wordt gebruikt om aan te duiden dat de ruimte tussen de elementen volledig moet worden opgevuld.
 * @property {boolean} data-vl-bordered - Attribuut wordt gebruikt om aan te duiden dat de tussenliggende elementen een rand krijgen.
 * @property {boolean} data-vl-collapse-l - Attribuut wordt gebruikt om de button bij large schermen als block element te tonen.
 * @property {boolean} data-vl-collapse-m - Attribuut wordt gebruikt om de button bij medium schermen als block element te tonen.
 * @property {boolean} data-vl-collapse-s - Attribuut wordt gebruikt om de button bij small schermen als block element te tonen.
 * @property {boolean} data-vl-collapse-xs - Attribuut wordt gebruikt om de button bij extra small schermen als block element te tonen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-action-group/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-action-group/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-action-group.html|Demo}
 */
export class VlActionGroup extends nativeVlElement(HTMLDivElement) {
  static get _observedClassAttributes() {
    return [
      "align",
      "space-between",
      "bordered",
      "collapse-l",
      "collapse-m",
      "collapse-s",
      "collapse-xs",
    ];
  }

  connectedCallback() {
    this.classList.add("vl-action-group");
  }

  get _classPrefix() {
    return "vl-action-group--";
  }

  _alignChangedCallback(oldValue, newValue) {
    this._changeClass(
      this,
      "align-" + oldValue,
      "align-" + newValue,
      this._classPrefix
    );
  }

  _collapseLChangedCallback(oldValue, newValue) {
    this._toggleCollapseClass(newValue, "l");
  }

  _collapseMChangedCallback(oldValue, newValue) {
    this._toggleCollapseClass(newValue, "m");
  }

  _collapseSChangedCallback(oldValue, newValue) {
    this._toggleCollapseClass(newValue, "s");
  }

  _collapseXsChangedCallback(oldValue, newValue) {
    this._toggleCollapseClass(newValue, "xs");
  }

  _toggleCollapseClass(value, type) {
    this._toggleClass(this, value, `${this._classPrefix}collapse--${type}`);
  }
}

define("vl-action-group", VlActionGroup, { extends: "div" });
