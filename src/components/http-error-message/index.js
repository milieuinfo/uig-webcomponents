import { vlElement, define } from '../../utils/core';
import styles from './styles.scss';

import './components/vl-http-400-message';
import './components/vl-http-401-message';
import './components/vl-http-403-message';
import './components/vl-http-404-message';
import './components/vl-http-405-message';
import './components/vl-http-408-message';
import './components/vl-http-410-message';
import './components/vl-http-411-message';
import './components/vl-http-412-message';
import './components/vl-http-413-message';
import './components/vl-http-414-message';
import './components/vl-http-500-message';
import './components/vl-http-501-message';
import './components/vl-http-502-message';
import './components/vl-http-503-message';
import './components/vl-http-504-message';
import './components/vl-http-505-message';
import './components/vl-http-506-message';

export class VlHttpErrorMessage extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['title', 'image', 'image-alt'];
  }

  constructor() {
    super(`
      <style>
        ${styles}
      </style>
      <div is="vl-grid" data-vl-is-stacked data-vl-align-center data-vl-v-center>
        <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" data-vl-extra-small-size="6" class="vl-u-hidden vl-u-visible--s">
          <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
            <img id="image-small"/>
          </div>
        </div>
        <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="8">
          <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="12">
              <h2 id="title" is="vl-h2"></h2>
              <vl-typography id="text"><slot slot="text" name="text"></slot></vl-typography>
            </div>
            <div id="actions" is="vl-column" data-vl-size="12"><slot name="actions"></slot></div>
          </div>
        </div>
        <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" class="vl-u-hidden--s">
          <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
            <img id="image-normal"/>
          </div>
        </div>
      </div>
    `);
  }

  connectedCallback() {
    this.__processAttributes();
  }

  get _title() {
    return this.dataset.vlTitle || this._defaults.title;
  }

  get _image() {
    return this.dataset.vlImage || this._defaults.image;
  }

  get _imageAlt() {
    return this.dataset.vlImageAlt || this._defaults.imageAlt;
  }

  _titleChangedCallback() {
    this.__processTitle();
  }

  _imageChangedCallback() {
    this.__processImage();
  }

  _imageAltChangedCallback() {
    this.__processImageAlt();
  }

  __setImageAttribute(attribute, value) {
    this.__imageForSmallScreensElement.setAttribute(attribute, value);
    this.__imageForNormalScreensElement.setAttribute(attribute, value);
  }

  get __titleElement() {
    return this._element.querySelector('#title');
  }

  get __textElement() {
    return this._element.querySelector('#text');
  }

  get __actionsElement() {
    return this._element.querySelector('#actions');
  }

  get __actionElement() {
    return this._element.querySelector('#actions > *');
  }

  get __imageForSmallScreensElement() {
    return this._element.querySelector('#image-small');
  }

  get __imageForNormalScreensElement() {
    return this._element.querySelector('#image-normal');
  }

  __processTitle() {
    this.__titleElement.textContent = this._title;
  }

  __processImage() {
    this.__setImageAttribute('src', this._image);
  }

  __processImageAlt() {
    this.__setImageAttribute('alt', this._imageAlt);
  }

  __processAttributes() {
    this.__processTitle();
    this.__processImage();
    this.__processImageAlt();
  }
}

define('vl-http-error-message', VlHttpErrorMessage);
