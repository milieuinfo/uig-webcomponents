import { vlElement, define } from "@uig/common/utilities";
import styles from "./style/vl-content-header.scss";

/**
 * VlContentHeader
 * @class
 * @classdesc
 *
 * @extends HTMLElement
 * @mixes vlElement
 */
export class VlContentHeaderComponent extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
        ${styles}
      </style>
      <header class="vl-content-header vl-content-header--large vl-content-header--show-mobile vl-content-header--has-context">
        <div class="vl-content-header__wrapper">
          <picture id="picture" class="vl-content-header__bg"></picture>
          <div class="vl-layout">
            <div class="vl-content-header__content">
            <div id="context" class="vl-content-header__context vl-content-header__context--has-link"></div>
              <h2 id="title" class="vl-content-header__title vl-content-header__title--has-link"></h2>
            </div>
          </div>
        </div>
      </header>
    `);
  }

  connectedCallback() {
    this.__processSlotElements();
    this._observer = this.__observeSlotElements(() =>
      this.__processSlotElements()
    );
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  get pictureElement() {
    return this._shadow.querySelector("#picture");
  }

  get pictureSlotElement() {
    return this.querySelector('img[slot="image"]');
  }

  get contextElement() {
    return this._shadow.querySelector("#context");
  }

  get contextSlotElement() {
    return this.querySelector('a[slot="context-link"]');
  }

  get titleElement() {
    return this._shadow.querySelector("#title");
  }

  get titleSlotElement() {
    return this.querySelector('a[slot="title-link"]');
  }

  __processSlotElements() {
    this.__processSlot(this.pictureElement, this.pictureSlotElement);

    const contextSlot = this.__processSlot(
      this.contextElement,
      this.contextSlotElement
    );
    contextSlot.classList.add("vl-content-header__context__link");

    const titleSlot = this.__processSlot(
      this.titleElement,
      this.titleSlotElement
    );
    titleSlot.classList.add("vl-content-header__title__link");
  }

  __clearChildren(element: Element) {
    while (element.hasChildNodes()) {
      element.firstChild?.remove();
    }
  }

  __processSlot(container: any, slotElement: any) {
    this.__clearChildren(container);
    const slotClone = slotElement.cloneNode(true);
    container.appendChild(slotClone);
    return slotClone;
  }

  __observeSlotElements(callback: MutationCallback) {
    const node = this as unknown as Node;
    const observer = new MutationObserver(callback);
    observer.observe(node, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
    return observer;
  }
}

define("vl-content-header", VlContentHeaderComponent);
