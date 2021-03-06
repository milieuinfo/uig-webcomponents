import {vlElement, define} from '../../../utils/core';

export class VlRichDataField extends vlElement(HTMLElement) {
  static get headerAttributes() {
    return ['name', 'label', 'sortable', 'sorting-direction', 'sorting-priority'];
  }

  static get bodyAttributes() {
    return ['selector', 'renderer'];
  }

  static get _observedAttributes() {
    return this.headerAttributes.concat(this.bodyAttributes);
  }

  static get is() {
    return 'vl-rich-data-field';
  }

  headerTemplate() {
    const th = document.createElement('th');
    const headerContent = this.__getHeaderContentElement();
    if (headerContent) {
      th.appendChild(headerContent);
    }
    if (this.sortable) {
      th.setAttribute('data-vl-sortable', '');
    }
    return th;
  }

  valueTemplate(rowData) {
    const td = document.createElement('td');
    if (this.label) {
      td.setAttribute('data-title', this.label);
    }
    const element = this.__getValueContentElement(rowData);
    if (element) {
      td.appendChild(element);
    } else if (this._renderer) {
      this._renderer(td, rowData);
    }
    return td;
  }

  /**
   * Geeft de naam terug die gebruikt wordt om het veld te identificeren.
   * @return {string}
   */
  get name() {
    return this.dataset.vlName;
  }

  /**
   * Geeft de selector terug die gebruikt wordt om de juiste waarde uit de data te halen.
   * @return {string}
   */
  get selector() {
    return this.dataset.vlSelector;
  }

  /**
   * Geeft de naam terug die getoond kan worden aan de gebruiker.
   * @return {string}
   */
  get label() {
    return this.dataset.vlLabel;
  }

  /**
   * Geeft terug of er op het veld gesorteerd kan worden.
   * @return {boolean}
   */
  get sortable() {
    return this.dataset.vlSortable !== undefined;
  }

  /**
   * Geeft de sorteerrichting terug.
   * @return {asc | desc}
   */
  get sortingDirection() {
    return this.dataset.vlSortingDirection;
  }

  /**
   * Geeft de prioriteit van het sorteren terug.
   * @return {number}
   */
  get sortingPriority() {
    return this.dataset.vlSortingPriority;
  }

  get _labelSlotElement() {
    return this.querySelector('template[slot="label"]');
  }

  get _contentSlotElement() {
    return this.querySelector('template[slot="content"]');
  }

  set renderer(renderer) {
    this._renderer = renderer;
    this._changed(['renderer']);
  }

  _nameChangedCallback(oldValue, newValue) {
    if (oldValue !== newValue) {
      this._changed(['name']);
    }
  }

  _selectorChangedCallback(oldValue, newValue) {
    if (oldValue !== newValue) {
      this._changed(['selector']);
    }
  }

  _labelChangedCallback(oldValue, newValue) {
    if (oldValue !== newValue) {
      this._changed(['label']);
    }
  }

  _sortableChangedCallback(oldValue, newValue) {
    if (oldValue !== newValue) {
      this._changed(['sortable']);
    }
  }

  _sortingDirectionChangedCallback(oldValue, newValue) {
    if (oldValue !== newValue) {
      this._changed(['sorting-direction']);
    }
  }

  _sortingPriorityChangedCallback(oldValue, newValue) {
    if (oldValue !== newValue) {
      this._changed(['sorting-priority']);
    }
  }

  _changed(properties) {
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        properties: properties,
      },
    }));
  }

  get __headerContent() {
    return this.label || (this._labelSlotElement ? this._labelSlotElement.innerHTML : undefined);
  }

  __getHeaderContentElement() {
    const content = this.__headerContent;
    if (content) {
      if (this.sortable) {
        const direction = this.sortingDirection ? `data-vl-direction="${this.sortingDirection}"` : '';
        const priority = this.sortingPriority ? `data-vl-priority="${this.sortingPriority}"` : '';
        const sorter = `<vl-rich-data-sorter data-vl-for="${this.name}" ${direction} ${priority}></vl-rich-data-sorter>`;
        return this._template(`<a>${content}${sorter}</a>`);
      } else {
        return this._template(`${content}`);
      }
    } else {
      return undefined;
    }
  }

  __getValueContentElement(data) {
    if (this.selector) {
      return this._template(`${this.selector.split('.').reduce((prev, curr) => prev ? prev[curr] : null, data)}`);
    } else if (this._contentSlotElement) {
      const literal = `${this.querySelector('template[slot="content"]').innerHTML}`;
      const template = ((literal, item) => new Function('item', 'return `' + literal + '`')(item)).call(this, literal, data);
      return this._template(template);
    } else {
      return null;
    }
  }
}

/**
 * VlRichDataField change event
 * @event VlRichDataField#change
 * @property {string[]} properties - De eigenschappen die veranderd zijn.
 */

define(VlRichDataField.is, VlRichDataField);
