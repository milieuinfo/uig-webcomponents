import { nativeVlElement, define } from '../../../../utils/core';

/**
 * VlDoormatImage
 * @class
 * @classdesc De doormat image kan gebruikt worden in combinatie met de vl-doormat component.
 *
 * @extends HTMLImageElement
 *
 * @property {boolean} graphic - Attribuut zorgt ervoor dat de afbeelding in het groot boven de doormat gevisualiseerd wordt.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-doormat.html|Demo}
 *
 */

export class VlDoormatImage extends nativeVlElement(HTMLImageElement) {
  static get _observedClassAttributes() {
    return ['image', 'graphic'];
  }

  connectedCallback() {
    if (this.getAttribute('graphic') === null) {
      this.doormatElement.moveChildren();
      this.setAttribute('data-vl-image', '');
    }
  }

  get doormatElement() {
    return this.closest('[is="vl-doormat"]');
  }

  get wrapperElement() {
    return this.doormatElement.querySelector('[is="vl-doormat-graphic-wrapper"]');
  }

  get _wrapperTemplate() {
    return this._template(`<div is="vl-doormat-graphic-wrapper"></div>`);
  }

  get _hasWrapper() {
    return this.parentElement.classList.contains('vl-doormat__graphic-wrapper');
  }

  get _classPrefix() {
    return 'vl-doormat__';
  }

  _graphicChangedCallback(oldValue, newValue) {
    if (newValue !== null) {
      this.removeAttribute('data-vl-image');
      if (!this._hasWrapper) {
        this.doormatElement.setAttribute('data-vl-graphic', '');
        this.doormatElement.prepend(this._wrapperTemplate);
        this.wrapperElement.append(this);
      }
    } else {
      this.doormatElement.moveChildren();
      this.doormatElement.removeAttribute('data-vl-graphic');
      this.setAttribute('data-vl-image', '');
      if (this._hasWrapper) {
        this.doormatElement.append(this);
        this.wrapperElement.remove();
      }
    }
  }
}

define('vl-doormat-image', VlDoormatImage, { extends: 'img' });
