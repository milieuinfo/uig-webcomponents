import { html, css, LitElement, unsafeCSS} from "lit";
import styles from './styles.scss';

const MAX_MATCHES = 15;

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
        attribute: "data-min-chars",
        reflect: true,
      },
      fulllist: { type: Array },
      opened: { type: Boolean, reflect: true },
      firstValidItemIndex: { type: Number, reflect: true},
      maxSuggestions: {
        type: Number,
        attribute: "data-max-suggestions",
      },
      groupBy: {
        type: String,
        attribute: "data-group-by",
      },
      placeholder: {
        type: String,
        attribute: "placeholder"
      },
      dataFetcher: {
        type: Function,
      },
      captionFormatter: {
        type: Function
      }
    };
  }

  get contentElement() {
    if (this._inputEl) {
      return this._inputEl;
    }

    var slotInputList = this.shadowRoot
        .getElementById("dropdown-input")
        .assignedNodes()[1];

    this._inputEl = slotInputList
        ? slotInputList
        : this.shadowRoot.getElementById("defaultInput");

    return this._inputEl;
  }

  set fulllist(value) {
    this.items = value;
  }

  set dataMinChars(value) {
    this.minChars = value;
  }

  constructor() {
    super();

    this._eventReferences = {};

    this._matches = [];
    this._groupedMatches = new Map();
    this.firstValidItemIndex = null;

    this.minChars = 3;

    this.items = [];

    this.opened = false;

    this.maxSuggestions = MAX_MATCHES;

    this.dataFetcher = (searchTerm, autocomplete) => {
      console.log(`Default dataFetcher: ${  searchTerm}`);
    };

    this.captionFormatter = (item) => {
      if(item.subtitle != null) {
        return html`<span class="vl-autocomplete__cta__title">${item.title}</span><span
            class="vl-autocomplete__cta__sub">${item.subtitle}</span>`;
      }
      else {
        return html`<span class="vl-autocomplete__cta__title">${item.title}</span>`;
      }
    }
  }

  firstUpdated() {
    this._suggestionEl = this.shadowRoot.getElementById("suggestions");
    this._suggestionEl.style.width =
        this.contentElement.getBoundingClientRect().width + "px";

    this._eventReferences.onFocus = this._onFocus.bind(this);
    this._eventReferences.onBlur = this._onBlur.bind(this);

    this._eventReferences.onKeyDown = this._onKeyDown.bind(this);
    this._eventReferences.onKeyUp = this._onKeyUp.bind(this);

    this.contentElement.addEventListener(
        "focus",
        this._eventReferences.onFocus
    );
    this.contentElement.addEventListener("blur", this._eventReferences.onBlur);

    this.contentElement.addEventListener(
        "keydown",
        this._eventReferences.onKeyDown
    );
    this.contentElement.addEventListener(
        "keyup",
        this._eventReferences.onKeyUp
    );
  }

  updated(changed) {
    console.log("updated!!");
    if (
        (changed.has("opened") || changed.has("firstValidItemIndex")) &&
        this.opened &&
        this._suggestionEl.childElementCount
    ) {
      for (let item of this._suggestionEl.children) {
        item.classList.remove("vl-autocomplete__cta--focus");
      }

      console.log(`this.firstValidItemIndex: ${  this.firstValidItemIndex}`);

      if(this.firstValidItemIndex != null) {
        this._highlightedEl = this._suggestionEl.children[this.firstValidItemIndex];
        this._highlightedEl.classList.add("vl-autocomplete__cta--focus");
      }
    }
  }

  disconnectedCallback() {
    if (!this.contentElement) {
      return;
    }

    this.contentElement.removeEventListener(
        "keydown",
        this._eventReferences.onKeyDown
    );
    this.contentElement.removeEventListener(
        "keyup",
        this._eventReferences.onKeyUp
    );
    this.contentElement.removeEventListener(
        "focus",
        this._eventReferences.onFocus
    );
    this.contentElement.removeEventListener(
        "blur",
        this._eventReferences.onBlur
    );
  }

  _onKeyDown(ev) {
    if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  _onKeyUp(ev) {
    switch (ev.key) {
      case "ArrowUp":
        ev.preventDefault();
        ev.stopPropagation();
        this._markPreviousElement();
        break;

      case "ArrowDown":
        ev.preventDefault();
        ev.stopPropagation();

        this._markNextElement();
        break;

      case "Enter":
        this._highlightedEl && this._highlightedEl.click();
        break;
      default:
        var searchTerm = this.contentElement.value;
        if(searchTerm.length >= this.minChars) {
          if (this.items.length) {

            console.log(this.items);

            this.filterAndSuggest(searchTerm, this.items)
          } else {
            this.fetchData(searchTerm);
          }
        }
        else {
          this.suggest([]);
        }
    }
  }

  fetchData(searchTerm)
  {
    this.dataFetcher(searchTerm, this);
  }

  formatCaption(item)
  {
    return this.captionFormatter(item)
  }

  filterAndSuggest(searchTerm, items){
    var suggestions = [];
    suggestions =
        searchTerm &&
        items
            .filter(
                item =>
                    item.title
                        .replace(",", "")
                        .replace(/\s/g, "")
                        .toLowerCase()
                        .search(
                            searchTerm
                                .replace(",", "")
                                .replace(/\s/g, "")
                                .toLowerCase()
                        ) != -1
            )

            .slice(0, this.maxSuggestions); // Limit results
    this.suggest(suggestions);
  }

  fetchDataResult(suggestions) {
    this.suggest(suggestions);
  }

  _markPreviousElement() {
    if (!this._highlightedEl || !this._highlightedEl.previousElementSibling) {
      return;
    }

    this._highlightedEl.classList.remove("vl-autocomplete__cta--focus");
    this._highlightedEl = this._highlightedEl.previousElementSibling;
    this._highlightedEl.classList.add("vl-autocomplete__cta--focus");
    this._highlightedEl.scrollIntoView();
  }

  _markNextElement() {
    if (!this._highlightedEl || !this._highlightedEl.nextElementSibling) {
      return;
    }

    this._highlightedEl.classList.remove("vl-autocomplete__cta--focus");
    this._highlightedEl = this._highlightedEl.nextElementSibling;
    this._highlightedEl.classList.add("vl-autocomplete__cta--focus");
    this._highlightedEl.scrollIntoView();
  }

  _onFocus(ev) {
    console.log("on focus!");
    this._blur = false;
    this._matches.length && this.open();
  }

  _onBlur(ev) {
    this._blur = true;
    !this._mouseEnter && this.close();
  }

  _handleItemMouseEnter(ev) {
    this._mouseEnter = true;
  }

  _handleItemMouseLeave(ev) {
    this._mouseEnter = false;
    this._blur && setTimeout(_ => this.close(), 500);
  }

  open() {
    console.log("open()");
    if (this._matches.length) {
      this.opened = true;
    }
  }

  close() {
    console.log("close()");
    this.opened = false;
    this._highlightedEl = null;
  }

  suggest(suggestions) {
    console.log("suggest");
    console.log(`suggestions:${  suggestions}`);
    this._matches = suggestions || [];

    this._groupedMatches = new Map();
    if(this._matches.length > 0) {
      if (this.groupBy != null) {
        this._matches.forEach(item => {
          const groupByValue = item[this.groupBy];
          console.log("groupByValue: " + groupByValue);
          var group = this._groupedMatches.get(groupByValue);
          if (group == null) {
            group = [];
            this._groupedMatches.set(groupByValue, group);
          }
          group[group.length] = item;
        });
        console.log(`suggest - _groupedMatches: ${this._groupedMatches.size}`);
        this.firstValidItemIndex = 1;
      } else {
        this.firstValidItemIndex = 0;
      }
    }
    else
    {
      this._matches = [];
      this._matches.push({ value: null, title: "Sorry, No matches" });
      this.firstValidItemIndex = null;
    }

    this._matches.length ? this.open() : this.close();

    this.requestUpdate();
  }

  generateItems()
  {
    if(this.groupBy && this._groupedMatches.size > 0) {
      const liElements = [];

      this._groupedMatches.forEach((items, groupName, map) => {
        liElements.push(html`
        <li class="vl-autocomplete__cta group">
            ${groupName}
        </li>`);
        items.forEach(item => liElements.push(this.generateItem(item)));
      })

      return html`${liElements}`;
    }
    else {
      return html`${this._matches.map(item => this.generateItem(item))}`
    }
  }

  generateItem(item)
  {
    return html`
        <li @click=${ev =>
        this.autocomplete(item.title, item.value ? item.value : null)} class="vl-autocomplete__cta" role="option"
            tabindex="-1"
            data-vl-index="1" data-vl-record="" data-vl-focus="">
          ${this.formatCaption(item)}
        </li>`;
  }

  autocomplete(title, value) {

    if(value == null) return;

    this.contentElement.value = title;

    this.close();

    this.dispatchEvent(
        new CustomEvent("selected-autocomplete", {
          detail: { title, value },
          composed: true,
          bubbles: true
        })
    );
  }

  render() {
    return html`
      <style>
        li.group {
          font-weight: bold;
        }

        .js-vl-autocomplete div.vl-autocomplete__list-wrapper, .js-vl-autocomplete div.autocomplete__list-wrapper  {
          max-height: 100vh;
        }
      </style>
      <div class="js-vl-autocomplete" data-vl-autocomplete="" data-vl-min-chars="3" 
           data-vl-id="n_l4ccf1zt_60ntk4812m6ubixdrvocg" data-vl-autocomplete-dressed="true" data-vl-loading="false">
        <slot id="dropdown-input">
            <input type="text" name="vl-autocomplete-1-input-name" id="defaultInput" placeholder="${this.placeholder}" class="vl-input-field vl-input-field--block" 
                   aria-describedby="vl-autocomplete-1-hint" autocomplete="off" data-vl-focus="" data-vl-input="" autocapitalize="off" spellcheck="off" 
                   aria-autocomplete="list" aria-owns="autocomplete-n_l4ccf1zt_60ntk4812m6ubixdrvocg" aria-controls="autocomplete-n_l4ccf1zt_60ntk4812m6ubixdrvocg" 
                   aria-haspopup="listbox">
        </slot>
        <div class="vl-autocomplete__loader" data-vl-show="false" data-vl-loader="" aria-hidden="true"></div>
        <div class="vl-autocomplete"
             ?hidden=${!this.opened}
             @mouseenter=${this._handleItemMouseEnter}
             @mouseleave=${this._handleItemMouseLeave} 
             data-vl-content="" aria-hidden="false" data-vl-show="true" aria-labelledby="vl-autocomplete-1-input">
          <div class="vl-autocomplete__list-wrapper uig-autocomplete__list-wrapper">
            <ul id="suggestions" class="vl-autocomplete__list" data-vl-records="" role="listbox">
              ${this.generateItems()}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("vl-autocomplete", VlAutocomplete);
