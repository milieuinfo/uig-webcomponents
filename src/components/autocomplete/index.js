import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from './styles.scss';
import { CAPTION_FORMAT } from './enums';
import '../icon';

export const DEFAULT_MAX_MATCHES = 15;
export const DEFAULT_MIN_CHARS = 3;
export const DEFAULT_CAPTION_FORMAT = CAPTION_FORMAT.TITLE_SUBTITLE_VERTICAL;

export class VlAutocomplete extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  static get properties() {
    return {
      minChars: {
        type: Number,
        attribute: 'data-vl-min-chars',
        reflect: true,
      },
      items: Array,
      loading: { type: Boolean, reflect: true },
      opened: { type: Boolean, reflect: true },
      firstValidItemIndex: { type: Number, reflect: true },
      maxSuggestions: {
        type: Number,
        attribute: 'data-vl-max-suggestions',
      },
      groupBy: {
        type: String,
        attribute: 'data-vl-group-by',
      },
      captionFormat: {
        type: String,
        attribute: 'data-vl-caption-format',
      },
      placeholder: {
        type: String,
        attribute: 'placeholder',
      },
      initialValue: { type: String, attribute: 'data-vl-initial-value', reflect: true },
      showClear: { type: Boolean, attribute: 'data-vl-show-clear', reflect: true },
      label: { type: String, attribute: 'data-vl-label', reflect: true },
    };
  }

  get contentElement() {
    if (this._inputEl) {
      return this._inputEl;
    }

    if (this.shadowRoot) {
      this._inputEl = this.shadowRoot.getElementById('defaultInput');
      return this._inputEl;
    }

    return null;
  }

  set dataMinChars(value) {
    this.minChars = value;
  }

  constructor() {
    super();

    this.initialised = false;

    this._eventReferences = {};

    this._matches = [];
    this._groupedMatches = new Map();
    this.firstValidItemIndex = null;

    this.minChars = DEFAULT_MIN_CHARS;

    this.items = [];

    this.initialValue = '';

    this.loading = false;
    this.opened = false;
    this.showClear = false;

    this.maxSuggestions = DEFAULT_MAX_MATCHES;
    this.captionFormat = DEFAULT_CAPTION_FORMAT;
  }

  firstUpdated() {
    this._suggestionEl = this.shadowRoot.getElementById('suggestions');
    this._suggestionEl.style.width = `100%`;

    this._eventReferences.onFocus = this._onFocus.bind(this);
    this._eventReferences.onBlur = this._onBlur.bind(this);

    this._eventReferences.onKeyDown = this._onKeyDown.bind(this);
    this._eventReferences.onKeyUp = this._onKeyUp.bind(this);

    this.contentElement.addEventListener('focus', this._eventReferences.onFocus);
    this.contentElement.addEventListener('blur', this._eventReferences.onBlur);

    this.contentElement.addEventListener('keydown', this._eventReferences.onKeyDown);
    this.contentElement.addEventListener('keyup', this._eventReferences.onKeyUp);
  }

  updated(changed) {
    if (
      (changed.has('opened') || changed.has('firstValidItemIndex')) &&
      this.opened &&
      this._suggestionEl.childElementCount
    ) {
      for (const item of this._suggestionEl.children) {
        item.classList.remove('vl-autocomplete__cta--focus');
      }

      if (this.firstValidItemIndex != null) {
        this._highlightedEl = this._suggestionEl.children[this.firstValidItemIndex];
        if (this._highlightedEl) this._highlightedEl.classList.add('vl-autocomplete__cta--focus');
      }
    }
  }

  disconnectedCallback() {
    if (!this.contentElement) {
      return;
    }

    this.contentElement.removeEventListener('keydown', this._eventReferences.onKeyDown);
    this.contentElement.removeEventListener('keyup', this._eventReferences.onKeyUp);
    this.contentElement.removeEventListener('focus', this._eventReferences.onFocus);
    this.contentElement.removeEventListener('blur', this._eventReferences.onBlur);
  }

  _onKeyDown(ev) {
    if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  _onKeyUp(ev) {
    switch (ev.key) {
      case 'ArrowUp':
        ev.preventDefault();
        ev.stopPropagation();
        this._markPreviousElement();
        break;

      case 'ArrowDown':
        ev.preventDefault();
        ev.stopPropagation();

        this._markNextElement();
        break;

      case 'Enter':
        if (this._highlightedEl) {
          this._highlightedEl.click();
        }
        break;
      default:
    }
  }

  formatCaption(item) {
    switch (this.captionFormat) {
      case CAPTION_FORMAT.TITLE:
        return html`<span class="uig-autocomplete_title">${item.title}</span>`;
      case CAPTION_FORMAT.SUBTITLE:
        return html`<span class="uig-autocomplete_subtitle">${item.subtitle}</span>`;
      case CAPTION_FORMAT.VALUE:
        return html`<span class="uig-autocomplete_value">${item.value}</span>`;
      default:
    }

    if (item.subtitle != null) {
      if (this.captionFormat === CAPTION_FORMAT.TITLE_SUBTITLE_VERTICAL || this.captionFormat == null) {
        return html`<span class="uig-autocomplete_title uig-autocomplete_title">${item.title}</span
          ><span class="uig-autocomplete_subtitle vl-autocomplete__cta__sub">${item.subtitle}</span>`;
      }
      if (this.captionFormat === CAPTION_FORMAT.TITLE_SUBTITLE_HORIZONTAL) {
        return html`<span class="uig-autocomplete_title">${item.title}</span>:
          <span class="uig-autocomplete_subtitle">${item.subtitle}</span>`;
      }
      if (this.captionFormat === CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL) {
        return html`<span class="uig-autocomplete_subtitle">${item.subtitle}</span>:
          <span class="uig-autocomplete_title">${item.title}</span>`;
      }
    }
    return html`<span class="uig-autocomplete_title vl-autocomplete__cta__title">${item.title}</span>`;
  }

  filterAndSuggest(searchTerm, items) {
    let suggestions = [];
    suggestions =
      searchTerm &&
      items
        .filter(
          (item) =>
            item.title
              .replace(',', '')
              .replace(/\s/g, '')
              .toLowerCase()
              .search(searchTerm.replace(',', '').replace(/\s/g, '').toLowerCase()) !== -1,
        )

        .slice(0, this.maxSuggestions); // Limit results
    this.suggest(suggestions);
  }

  _markPreviousElement() {
    if (!this._highlightedEl || !this._highlightedEl.previousElementSibling) {
      return;
    }

    this._highlightedEl.classList.remove('vl-autocomplete__cta--focus');
    this._highlightedEl = this._highlightedEl.previousElementSibling;
    this._highlightedEl.classList.add('vl-autocomplete__cta--focus');
    this._highlightedEl.scrollIntoView();
  }

  _markNextElement() {
    if (!this._highlightedEl || !this._highlightedEl.nextElementSibling) {
      return;
    }

    this._highlightedEl.classList.remove('vl-autocomplete__cta--focus');
    this._highlightedEl = this._highlightedEl.nextElementSibling;
    this._highlightedEl.classList.add('vl-autocomplete__cta--focus');
    this._highlightedEl.scrollIntoView();
  }

  _onFocus() {
    this._blur = false;
  }

  _onBlur() {
    this._blur = true;
    if (!this._mouseEnter) {
      this.close();
    }
  }

  _handleItemMouseEnter() {
    this._mouseEnter = true;
  }

  _handleItemMouseLeave() {
    this._mouseEnter = false;
    if (this._blur) {
      setTimeout(() => this.close(), 500);
    }
  }

  open() {
    if (this._matches.length) {
      this.opened = true;
    }
  }

  close() {
    this.opened = false;
    this._highlightedEl = null;
  }

  set matches(items) {
    this.suggest(items);
  }

  suggest(suggestions) {
    const { contentElement } = this;
    const searchTerm = contentElement ? this.contentElement.value : null;

    if (searchTerm && searchTerm.length >= this.minChars) {
      this._matches = suggestions || [];

      this._groupedMatches = new Map();
      if (this._matches.length > 0) {
        if (this.groupBy != null) {
          this._matches.forEach((item) => {
            const groupByValue = item[this.groupBy];
            let group = this._groupedMatches.get(groupByValue);
            if (group == null) {
              group = [];
              this._groupedMatches.set(groupByValue, group);
            }
            group[group.length] = item;
          });
          this.firstValidItemIndex = 1;
        } else {
          this.firstValidItemIndex = 0;
        }
      } else {
        this._matches = [];
        this._matches.push({ value: null, title: 'Sorry, No matches' });
        this.firstValidItemIndex = null;
      }
    } else {
      this._matches = [];
    }

    if (this._matches.length) {
      this.open();
    } else {
      this.close();
    }

    this.loading = false;

    this.requestUpdate();
  }

  generateItems() {
    let groupIndex = 0;
    if (this.groupBy && this._groupedMatches.size > 0) {
      const liElements = [];

      this._groupedMatches.forEach((items, groupName) => {
        liElements.push(html` <li class="vl-autocomplete__cta uig-autocomplete-group" groupindex="${groupIndex}">
          ${groupName}
        </li>`);
        items.forEach((item) => liElements.push(this.generateItem(item, groupIndex)));
        groupIndex += 1;
      });

      return html`${liElements}`;
    }

    return html`${this._matches.map((item) => this.generateItem(item, groupIndex))}`;
  }

  generateItem(item, groupIndex) {
    return html` <li
      @click=${() => this.autocomplete(item.title, item.value ? item.value : null)}
      class="vl-autocomplete__cta uig-autocomplete-item"
      groupindex="${groupIndex}"
      role="option"
      tabindex="-1"
    >
      ${this.formatCaption(item)}
    </li>`;
  }

  autocomplete(title, value) {
    if (value == null) return;

    this.contentElement.value = title;

    this.close();

    this.dispatchEvent(
      new CustomEvent('selected-autocomplete', {
        detail: { title, value },
        composed: true,
        bubbles: true,
      }),
    );
  }

  _hasSearchTerm() {
    return this.contentElement && this.contentElement.value && this.contentElement.value.length > 0;
  }

  async _notify() {
    this.loading = true;

    try {
      const searchTerm = this.contentElement.value;
      if (searchTerm.length >= this.minChars) {
        if (this.items && this.items.length) {
          this.filterAndSuggest(searchTerm, this.items);
        } else {
          const options = {
            detail: { searchTerm },
            bubbles: true,
            composed: true,
          };
          this.dispatchEvent(new CustomEvent('search', options));
        }
      } else {
        this.suggest([]);
      }
    } catch (e) {
      this.loading = false;
      throw e;
    }
  }

  _clear() {
    this.contentElement.value = '';
    this.suggest([]);
    const options = {
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('clear', options));
  }

  _generateClear() {
    if (this.showClear && (this._hasSearchTerm() || (!this.initialised && this.initialValue))) {
      return html` <div class="uig-autocomplete__clear" aria-hidden="true">
        <span class="uig-autocomplete__clear-icon" is="vl-icon" icon="close" @click="${this._clear}"></span>
      </div>`;
    }
    return ``;
  }

  _wrapInLabel(content) {
    if (!this.label || this.label.length === 0) return content;
    return html`<label>${this.label}${content}</label>`;
  }

  render() {
    const rendered = this._wrapInLabel(html`
      <div class="js-vl-autocomplete">
        <slot id="dropdown-input">
          <input
            type="text"
            name="vl-autocomplete-1-input-name"
            id="defaultInput"
            placeholder="${this.placeholder}"
            class="vl-input-field vl-input-field--block"
            aria-describedby="vl-autocomplete-1-hint"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="off"
            aria-autocomplete="list"
            aria-owns="autocomplete-n_l4ccf1zt_60ntk4812m6ubixdrvocg"
            aria-controls="autocomplete-n_l4ccf1zt_60ntk4812m6ubixdrvocg"
            aria-haspopup="listbox"
            .value=${this.initialValue}
            @input=${this._notify}
          />
        </slot>
        <div
          class="vl-autocomplete__loader ${this._hasSearchTerm() ? 'ui-autocomplete__loader-with-clear' : ''}"
          aria-hidden="true"
          ?hidden=${!this.loading}
        ></div>
        ${this._generateClear()}
        <div
          class="vl-autocomplete"
          ?hidden=${!this.opened}
          @mouseenter=${this._handleItemMouseEnter}
          @mouseleave=${this._handleItemMouseLeave}
          aria-hidden="false"
          aria-labelledby="vl-autocomplete-1-input"
        >
          <div class="vl-autocomplete__list-wrapper uig-autocomplete__list-wrapper">
            <ul id="suggestions" class="vl-autocomplete__list" role="listbox">
              ${this.generateItems()}
            </ul>
          </div>
        </div>
      </div>
    `);

    this.initialised = true;

    return rendered;
  }
}

window.customElements.define('vl-autocomplete', VlAutocomplete);
