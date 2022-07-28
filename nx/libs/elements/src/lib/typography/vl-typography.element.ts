import { vlElement, define } from '@uig/common/utilities';

/**
 * VlTypography
 * @class
 * @classdesc Gebruik de typograhpy component om de standaard elementen te visualiseren binnen een container. De typography component wordt voornamelijk gebruikt om de stijl van de inhoud van een wysiwyg-editor correct te renderen.
 *
 * @extends HTMLDivElement 
 * @mixes vlElement
 *
 * @property {string} data-vl-parameters - De key/value parameters die verwerkt en getoond zullen worden in het content element.
 */
export class VlTypographyElement extends vlElement(HTMLDivElement) {
    static get _observedAttributes() {
        return ['parameters'];
    }

    // TODO gertjame: Parameter functionaliteit werkt nog niet.
    constructor() {
        super();
        // this._observer = this.__observeSlotElements(() => this.__processSlotElements());
    }

    connectedCallback() {
      this.classList.add('vl-typography');
      // this.__processSlotElements();
    }

    // disconnectedCallback() {
    //     // this._observer.disconnect();
    // }

    // _parametersChangedCallback() {
    //     this.__processSlotElements();
    // }

    // __processSlotElements() {
    //     this.__clearChildren();
    //     const parameters = this.dataset.vlParameters ? JSON.parse(this.dataset.vlParameters) : {};
    //     const template = VlTypography.replaceTemplateParameters(this.innerHTML, parameters);
    //     this.insertAdjacentHTML('afterbegin', template);
    // }

    // __clearChildren() {
    //     while (this.hasChildNodes()) {
    //         this.firstChild.remove();
    //     }
    // }

    // __observeSlotElements(callback: MutationCallback) {
    //     const node = this as unknown as Node;
    //     const observer = new MutationObserver(callback);
    //     observer.observe(node, {
    //         attributes: true,
    //         childList: true,
    //         characterData: true,
    //         subtree: true,
    //     });
    //     return observer;
    // }

    /**
     * Dit vormt een template met placeholders voor parameters om in een tekst waarin deze placeholders vervangen
     * zijn met hun waarden.
     *
     * @param {string} template De template waarin placeholders zitten in de vorm van "${parameter.parameterNaam}"
     * @param {object} params Een object met keys die de naam van de parameter voorstellen (bv. "parameterNaam") en hun waarden
     * @return {string} De resulterende tekst
     */
    // static replaceTemplateParameters(template, params) {
    //     Object.keys(params).forEach((key) => (template = template.replaceAll('${parameter.' + key + '}', params[key])));
    //     template = template.replace(/\${parameter.\w+}/g, '');
    //     return template;
    // }
}

define('vl-typography', VlTypographyElement, { extends: 'div' });
