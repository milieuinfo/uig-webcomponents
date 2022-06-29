import {vlElement, define} from '../../utils/core';
import './components/step';
import './components/duration-step';
import styles from './style.scss';

/**
 * VlSteps
 * @class
 * @classdesc De steps component bevat een verticale lijst van genummerde stappen. Stappen kunnen gebruikt worden om de gebruiker stap voor stap door een procedure te begeleiden.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-timeline - Attribuut wordt gebruikt om aan te geven dat de stappen een tijdlijn voorstellen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html|Demo}
 */
export class VlSteps extends vlElement(HTMLElement) {
  static get _observedChildClassAttributes() {
    return ['timeline'];
  }

  constructor() {
    super(`
      <style>
        ${styles}
      </style>
      <ul id="steps" class="vl-steps"></ul>
    `);
  }

  connectedCallback() {
    this._observer = this.__observeChildElements(() => this._processSteps());
    this._processSteps();
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  get _stepsElement() {
    return this._shadow.querySelector('#steps');
  }

  get _classPrefix() {
    return 'vl-steps--';
  }

  _processSteps() {
    customElements.whenDefined('vl-step').then(() => {
      customElements.whenDefined('vl-duration-step').then(() => {
        this._stepsElement.innerHTML = ``;
        this.querySelectorAll('vl-step, vl-duration-step').forEach((item) => this._stepsElement.append(item.template));
      });
    });
  }

  __observeChildElements(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(this, {childList: true, attributes: true, subtree: true, characterData: true});
    return observer;
  }
}

define('vl-steps', VlSteps);
