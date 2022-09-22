import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from './styles.scss';
import { SIZE } from './enums/index.js';

export class VlSpotlight extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  constructor() {
    super();

    this.alt = false;
  }

  static get properties() {
    return {
      link: {
        type: String,
        attribute: 'data-vl-link',
      },
      alt: {
        type: Boolean,
        attribute: 'data-vl-alt',
        reflect: true,
      },
      size: {
        type: String,
        attribute: 'data-vl-size',
        reflect: true,
      },
      imgSrc: {
        type: String,
        attribute: 'data-vl-img-src',
      },
      imgAlt: {
        type: String,
        attribute: 'data-vl-img-alt',
      },
    };
  }

  __getSlotsArray(slotName) {
    const slots = this.querySelectorAll(`[slot="${slotName}"]`);
    if (slots && slots.length > 0) {
      const spotlightSlots = [];
      [...slots].forEach((element) => spotlightSlots.push(element));
      return spotlightSlots;
    }
    return html``;
  }

  __processSlotTitle() {
    if (this.imgSrc) return html``;
    return this._getTitleTemplateWithValue(this.__getSlotsArray('title'));
  }

  __processSlotSubTitle() {
    if (this.imgSrc) return html``;
    return this._getSubTitleTemplateWithValue(this.__getSlotsArray('subtitle'));
  }

  __processSlotTitleInHeader() {
    return this._getTitleTemplateWithValue(this.__getSlotsArray('title'));
  }

  __processSlotContent() {
    return this._getContentTemplateWithValue(this.__getSlotsArray('content'));
  }

  __processSlotText() {
    return this._getTextTemplateWithValue(this.__getSlotsArray('text'));
  }

  _getTitleTemplateWithValue(value) {
    return this.__fallbackIfEmpty(value, html`<h3 class="vl-spotlight__title">${value}</h3>`);
  }

  _getSubTitleTemplateWithValue(value) {
    return this.__fallbackIfEmpty(value, html`<p class="vl-spotlight__subtitle">${value}</p>`);
  }

  _getContentTemplateWithValue(value) {
    return this.__fallbackIfEmpty(value, html`<div class="vl-spotlight__content">${value}</div>`);
  }

  _getTextTemplateWithValue(value) {
    return this.__fallbackIfEmpty(value, html`<p class="vl-spotlight__text">${value}</p>`);
  }

  __fallbackIfEmpty(value, templateResult) {
    console.log({ value });
    if (value && value.length > 0) {
      return templateResult;
    }
    return ``;
  }

  render() {
    if (this.link) {
      return html`<a href="${this.link}" class="${this.__applySpotlightStyling()}">
        <article role="none">
          ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
          ${this.__processSlotContent()} ${this.__processSlotText()}
        </article>
      </a>`;
    } else {
      return html`<article class="${this.__applySpotlightStyling()}" role="none">
        ${this.__processHeader()} ${this.__processSlotTitle()} ${this.__processSlotSubTitle()}
        ${this.__processSlotContent()} ${this.__processSlotText()}
      </article>`;
    }
  }

  __applySpotlightStyling() {
    const small = this.size === SIZE.S;
    const xSmall = this.size === SIZE.XS;
    const large = this.size === SIZE.L;
    return `vl-spotlight ${this.alt ? 'vl-spotlight--alt' : ''} ${xSmall ? 'vl-spotlight--xs' : ''} 
    ${small ? 'vl-spotlight--s' : ''} ${large ? 'vl-spotlight--l' : ''}`;
  }

  __processHeader() {
    if (!this.imgSrc) return html``;
    return html`<header role="none" class="vl-spotlight__header">
      <div class="vl-spotlight__image vl-spotlight__image--focus-center-center">
        <img class="vl-spotlight__image__img" src="${this.imgSrc}" alt="${this.imgAlt}" />
      </div>
      <div class="vl-spotlight__title-wrapper">${this.__processSlotTitleInHeader()}</div>
    </header>`;
  }
}

customElements.define('vl-spotlight', VlSpotlight);
