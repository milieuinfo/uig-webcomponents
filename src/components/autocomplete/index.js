import { html, css, LitElement, unsafeCSS, nothing} from "lit";
import styles from './styles.scss';

const MAX_MATCHES = 15;

const NO_RESULTS_MESSAGE_TIME = 5;

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
      maxSuggestions: Number,
      dataFetcher: {
        type: Function,
      },
      captionFormatter: {
        type: Function,
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

    this.minChars = 3;

    this.items = [];

    this.opened = false;

    this.maxSuggestions = MAX_MATCHES;

    this.dataFetcher = (searchTerm, autocomplete) => {
      console.log(`Default dataFetcher: ${  searchTerm}`);
    };

    this.captionFormatter = (item) => item.title;
  }

  firstUpdated() {
    this._suggestionEl = this.shadowRoot.getElementById("suggestions");
    //this._suggestionEl.style.width =
    //    this.contentElement.getBoundingClientRect().width + "px";

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
        changed.has("opened") &&
        this.opened &&
        this._suggestionEl.childElementCount
    ) {
      for (let item of this._suggestionEl.children) {
        item.classList.remove("vl-autocomplete__cta--focus");
      }
      this._highlightedEl = this._suggestionEl.children[0];
      this._highlightedEl.classList.add("vl-autocomplete__cta--focus");
      this._highlightedEl.scrollIntoView();
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

    if (suggestions.length === 0) {
      suggestions = [];
      suggestions.push({ value: null, title: "Sorry, No matches" });
    }

    this.suggest(suggestions);
  }

  fetchDataResult(suggestions) {
    console.log(suggestions);

    if (suggestions.length === 0) {
      suggestions = [];
      suggestions.push({ value: null, title: "Sorry, No matches" });
    }

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
    this._matches.length ? this.open() : this.close();
    this.requestUpdate();
  }

  autocomplete(value, title) {
    this.contentElement.value = value;

    this.close();

    this.dispatchEvent(
        new CustomEvent("selected-autocomplete", {
          detail: { value, title },
          composed: true,
          bubbles: true
        })
    );
  }

  render() {

    return html`
      
      <!--
      <style>
        ul {
          position: absolute;
          margin: 0;
          padding: 0;
          z-index: 5000;
          background: white;
          display: block;
          list-style-type: none;
          width: 100% !important;
          border: 1px solid black;
        }

        li {
          padding: 10px;
        }

        li.active {
          background: gray;
        }

        [hidden] {
          display: none;
        }
      </style>
      -->
      <!--
     

      <slot id="dropdown-input">
        <input id="defaultInput" type="text" />
      </slot>

      <ul
          id="suggestions"
          ?hidden=${!this.opened}
          @mouseenter=${this._handleItemMouseEnter}
          @mouseleave=${this._handleItemMouseLeave}
      >
        ${this._matches.map(item => html`<li @click=${ev =>
            this.autocomplete(item.title, item.value ? item.value : null)}> ${this.formatCaption(item)}</li>`
        )}
      </ul>
      -->

      <div class="js-vl-autocomplete" id="vl-autocomplete-1" data-vl-autocomplete="" data-vl-min-chars="3" 
           data-vl-id="n_l4ccf1zt_60ntk4812m6ubixdrvocg" data-vl-autocomplete-dressed="true" data-vl-loading="false">
        <slot id="dropdown-input">
            <input type="text" name="vl-autocomplete-1-input-name" id="defaultInput" placeholder="Programmeertaal" class="vl-input-field vl-input-field--block" aria-describedby="vl-autocomplete-1-hint" autocomplete="off" data-vl-focus="" data-vl-input="" autocapitalize="off" spellcheck="off" aria-autocomplete="list" aria-owns="autocomplete-n_l4ccf1zt_60ntk4812m6ubixdrvocg" aria-controls="autocomplete-n_l4ccf1zt_60ntk4812m6ubixdrvocg" aria-haspopup="listbox">
        </slot>
        <div class="vl-autocomplete__loader" data-vl-show="false" data-vl-loader="" aria-hidden="true"></div>
        <div class="vl-autocomplete"
             ?hidden=${!this.opened}
             @mouseenter=${this._handleItemMouseEnter}
             @mouseleave=${this._handleItemMouseLeave} 
             data-vl-content="" aria-hidden="false" data-vl-show="true" aria-labelledby="vl-autocomplete-1-input">
          <div class="vl-autocomplete__list-wrapper">
            <ul id="suggestions" class="vl-autocomplete__list" data-vl-records="" role="listbox">
              ${this._matches.map(item => html`<li @click=${ev =>
                  this.autocomplete(item.title, item.value ? item.value : null)} class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="1" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een zonder subtitel" id="vl-autocomplete__cta-1">
                <span class="vl-autocomplete__cta__title">${this.formatCaption(item)}</span>
              </li>`
              )}
            </ul>
          </div>
        </div>
        <!--
        <div class="vl-autocomplete" data-vl-content="" aria-hidden="false" data-vl-show="true" aria-labelledby="vl-autocomplete-1-input">
        </div>
        <div class="vl-autocomplete__a11y__wrapper vl-u-visually-hidden" aria-live="polite" role="status">Er zijn 6 resultaten beschikbaar</div>
        -->
      </div>
    `;
  }
}
/*



<div class="vl-autocomplete" data-vl-content="" aria-hidden="false" data-vl-show="true" aria-labelledby="vl-autocomplete-1-input">
<div class="vl-autocomplete__list-wrapper"><ul class="vl-autocomplete__list" data-vl-records="" role="listbox" id="autocomplete-m_l4ce24xa_lgw2j7g8f2ovfhjafyfbc"><li class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="1" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een zonder subtitel" id="vl-autocomplete__cta-1"><span class="vl-autocomplete__cta__title"><mark>Dit</mark> is zonder subtitel</span></li><li class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="2" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een programmeertaal 2" id="vl-autocomplete__cta-2"><span class="vl-autocomplete__cta__title"><mark>Dit</mark> is een programmeertaal 2</span><span class="vl-autocomplete__cta__sub">Dit is een subtitel van de programmeertaal</span></li><li class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="3" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een programmeertaal 3" id="vl-autocomplete__cta-3"><span class="vl-autocomplete__cta__title"><mark>Dit</mark> is een programmeertaal 3</span><span class="vl-autocomplete__cta__sub">Dit is een subtitel van de programmeertaal</span></li><li class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="4" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een programmeertaal 4" id="vl-autocomplete__cta-4"><span class="vl-autocomplete__cta__title"><mark>Dit</mark> is een programmeertaal 4</span><span class="vl-autocomplete__cta__sub">Dit is een subtitel van de programmeertaal</span></li><li class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="5" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een programmeertaal 5" id="vl-autocomplete__cta-5"><span class="vl-autocomplete__cta__title"><mark>Dit</mark> is een programmeertaal 5</span><span class="vl-autocomplete__cta__sub">Dit is een subtitel van de programmeertaal</span></li><li class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="6" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een programmeertaal 6" id="vl-autocomplete__cta-6"><span class="vl-autocomplete__cta__title"><mark>Dit</mark> is een programmeertaal 6</span><span class="vl-autocomplete__cta__sub">Dit is een subtitel van de programmeertaal</span></li></ul></div></div>



<div class="js-vl-autocomplete" id="vl-autocomplete-1" data-vl-autocomplete="" data-vl-min-chars="3" data-vl-id="n_l4ccf1zt_60ntk4812m6ubixdrvocg" data-vl-autocomplete-dressed="true" data-vl-loading="false">
  <input type="text" name="vl-autocomplete-1-input-name" id="vl-autocomplete-1-input" placeholder="Programmeertaal" class="vl-input-field vl-input-field--block" aria-describedby="vl-autocomplete-1-hint" autocomplete="off" data-vl-focus="" data-vl-input="" autocapitalize="off" spellcheck="off" aria-autocomplete="list" aria-owns="autocomplete-n_l4ccf1zt_60ntk4812m6ubixdrvocg" aria-controls="autocomplete-n_l4ccf1zt_60ntk4812m6ubixdrvocg" aria-haspopup="listbox">
  <div class="vl-autocomplete__loader" data-vl-show="false" data-vl-loader="" aria-hidden="true"></div>
  <div class="vl-autocomplete__list-wrapper">
    <ul class="vl-autocomplete__list" data-vl-records="" role="listbox" id="autocomplete-n_l4ccf1zt_60ntk4812m6ubixdrvocg">
      <li class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="1" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een zonder subtitel" id="vl-autocomplete__cta-1">
        <span class="vl-autocomplete__cta__title"><mark>Dit</mark> is zonder subtitel</span>
      </li>
      <li class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="2" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een programmeertaal 2" id="vl-autocomplete__cta-2">
        <span class="vl-autocomplete__cta__title"><mark>Dit</mark> is een programmeertaal 2</span>
        <span class="vl-autocomplete__cta__sub">Dit is een subtitel van de programmeertaal</span>
      </li>
      <li class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="3" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een programmeertaal 3" id="vl-autocomplete__cta-3">
        <span class="vl-autocomplete__cta__title"><mark>Dit</mark> is een programmeertaal 3</span>
        <span class="vl-autocomplete__cta__sub">Dit is een subtitel van de programmeertaal</span>
      </li>
    </ul>
  </div>
  <div class="vl-autocomplete" data-vl-content="" aria-hidden="false" data-vl-show="true" aria-labelledby="vl-autocomplete-1-input">
  </div>
  <div class="vl-autocomplete__a11y__wrapper vl-u-visually-hidden" aria-live="polite" role="status">Er zijn 6 resultaten beschikbaar</div>
</div>




 */




/*
<ul
          id="suggestions"
          ?hidden=${!this.opened}
          @mouseenter=${this._handleItemMouseEnter}
          @mouseleave=${this._handleItemMouseLeave}
      >
        <!--50-->
        ${this._matches.map(item => html`<li @click=${ev =>
            this.autocomplete(item.title, item.value ? item.value : null)}> ${this.formatCaption(item)}</li>`
        )}
      </ul>


<slot id="dropdown-input" class="js-vl-autocomplete">
        <input id="defaultInput"  type="text" class="vl-input-field vl-input-field--block">
      </slot>
      <div class="vl-autocomplete">
            <div class="vl-autocomplete__list-wrapper">
              <ul id="suggestions"
                  ?hidden=${!this.opened}
                  @mouseenter=${this._handleItemMouseEnter}
                  @mouseleave=${this._handleItemMouseLeave} class="vl-autocomplete__list">


                ${this._matches.map(item => html`<li @click=${ev =>
                    this.autocomplete(item.title, item.value ? item.value : null)} class="vl-autocomplete__cta" role="option" tabindex="-1" data-vl-index="1" data-vl-record="" data-vl-focus="" data-vl-value="Dit is een zonder subtitel" id="vl-autocomplete__cta-1">
                  <span class="vl-autocomplete__cta__title">
                    ${this.formatCaption(item)}
                  </span>
                </li>`)}


              </ul>
            </div>
        </div>

 */



/*item => html`
            <li @click=${ev =>
            this.autocomplete(item.title, item.value ? item.value : null)}
            >
                ${this.formatCaption(item)}
            </li>
          `*/

/*${this.formatCaption(item)}*/
/*html`${item.subtitle}<br>${item.title}`*/

window.customElements.define("vl-autocomplete", VlAutocomplete);
