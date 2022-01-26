import { nativeVlElement, define } from '../../utils/core';

/**
 * VlDescriptionData
 * @class
 * @classdesc Gebruik de description data component om meer informatie te geven over de inhoud op de pagina, bvb over een contactpersoon, een entiteit of een publicatie.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-description-data/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-description-data/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-description-data.html|Demo}
 *
 */
export class VlDescriptionData extends nativeVlElement(HTMLDivElement) {
  connectedCallback() {
    this.classList.add('vl-description-data');
    this.__labels.forEach((label) => {
      label.classList.add('vl-description-data__label');
      label.parentElement.classList.add('vl-description-data-block');
    });
    this.__values.forEach((label) => {
      label.classList.add('vl-description-data__value');
      label.parentElement.classList.add('vl-description-data-block');
    });
  }

  get __descriptionDataBlocks() {
    return this.querySelectorAll('.vl-description-data-block');
  }

  get __labels() {
    return this.querySelectorAll('[data-vl-label]');
  }

  get __values() {
    return this.querySelectorAll('[data-vl-value]');
  }
}

define('vl-description-data', VlDescriptionData, { extends: 'div' });
