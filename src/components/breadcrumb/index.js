import { nativeVlElement, define } from '../../utils/core';

export class VlBreadcrumb extends nativeVlElement(HTMLElement) {
  connectedCallback() {
    this._processStyle();
    this._processAriaLabel();
  }

  get _olElements() {
    return [...this.querySelectorAll('ol')];
  }

  get _liElements() {
    return this._olElements.flatMap((ol) => [...ol.querySelectorAll('li')]);
  }

  get _aElements() {
    return this._liElements.flatMap((li) => [...li.querySelectorAll('a')]);
  }

  get _separatorTemplate() {
    return this._template(`<span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>`);
  }

  _processStyle() {
    this._addClasses();
    this._addSeparators();
  }

  _processAriaLabel() {
    if (!this.getAttribute('aria-label')) {
      this.setAttribute('aria-label', 'U bent hier: ');
    }
  }

  _addClasses() {
    this.classList.add('vl-breadcrumb');
    this._olElements.forEach((ol) => ol.classList.add('vl-breadcrumb__list'));
    this._liElements.forEach((li) => li.classList.add('vl-breadcrumb__list__item'));
    this._aElements.forEach((a) => a.classList.add('vl-breadcrumb__list__item__cta'));
  }

  _addSeparators() {
    // changed 1 to 0
    this._liElements.slice(0, this._liElements.length).forEach((li) => li.prepend(this._separatorTemplate));
  }
}

define('vl-breadcrumb', VlBreadcrumb, { extends: 'nav' });
