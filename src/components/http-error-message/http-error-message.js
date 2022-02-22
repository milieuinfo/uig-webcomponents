import { vlElement } from '../../utils/core';
import styles from './styles.scss';

export class VlHttpErrorMessage extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['title', 'image', 'image-alt'];
  }

  constructor(defaults) {
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
              <vl-typography id="text"></vl-typography>
            </div>
            <div id="actions" is="vl-column" data-vl-size="12"></div>
          </div>
        </div>
        <div is="vl-column" data-vl-size="6" data-vl-medium-size="6" data-vl-small-size="6" class="vl-u-hidden--s">
          <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
            <img id="image-normal"/>
          </div>
        </div>
      </div>
    `);

    this._defaults = defaults || {};
  }

  connectedCallback() {
    this.__processAttributes();
    this.__processSlotElements();
    this._observer = this.__observeSlotElements(() => this.__processSlotElements());
  }

  disconnectedCallback() {
    this._observer.disconnect();
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

  get _textSlotElement() {
    return this.querySelector('[slot="text"]') || VlHttpErrorMessage.__createDivWithContent(this._defaults.text);
  }

  get _actionsSlotElement() {
    return this.querySelector('[slot="actions"]') || VlHttpErrorMessage.__createDivWithContent(this._defaults.actions);
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

  __processSlotElements() {
    this.__processTextSlot();
    this.__processActionsSlot();
  }

  __observeSlotElements(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(this, { attributes: true, childList: true, characterData: true, subtree: true });
    return observer;
  }

  __processTextSlot() {
    VlHttpErrorMessage.__clearChildren(this.__textElement);

    if (this._textSlotElement) {
      this.__textElement.appendChild(this._textSlotElement.cloneNode(true));
    }
  }

  __processActionsSlot() {
    VlHttpErrorMessage.__clearChildren(this.__actionsElement);

    if (this._actionsSlotElement) {
      this.__actionsElement.appendChild(this._actionsSlotElement.cloneNode(true));
    }
  }

  static __clearChildren(element) {
    while (element.hasChildNodes()) {
      element.firstChild.remove();
    }
  }

  static __createDivWithContent(content) {
    const element = document.createElement('div');
    element.innerHTML = content;
    return element;
  }
}
