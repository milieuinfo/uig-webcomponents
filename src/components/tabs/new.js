import { html, css, LitElement, unsafeCSS } from 'lit';
import './components/vl-tabs-pane/new';
import styles from './styles.scss';

export class VlTabsNew extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(styles)}
      `,
    ];
  }

  constructor() {
    super();
    this.currentTabIndex = -1;
    this.breakpointValue = null;
    this.useHash = false;
    this._responsiveNavigationOpen = false;
  }

  _debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  _getBreakpoint() {
    // Transfer css breakpoints to JS
    return window.getComputedStyle(document.body, ':before').getPropertyValue('content').replace(/"/g, '');
  }

  _getTabIndex(tabId) {
    const children = [...this.children];
    return children.findIndex((child) => child.tabId === tabId);
  }

  _activateTab(tabId, index) {
    if (this.currentTabIndex !== index) {
      this.activeTab = tabId;

      if (index) {
        this.currentTabIndex = index;
      } else {
        this.currentTabIndex = this._getTabIndex(tabId);
      }
    }
  }

  _deactivateTab() {
    this.activeTab = undefined;
    this.currentTabIndex = -1;
  }

  _handleResize() {
    this.breakpointValue = this._getBreakpoint();
  }

  _handleHashChange() {
    const windowObject = window.location !== window.parent.location ? window.parent : window;
    const hash = windowObject.location.hash.replace('#', '');

    if (hash !== this.activeTab) {
      const child = this._getChild(hash);
      if (child) {
        this._activateTab(child.tabId);
      } else {
        this._deactivateTab();
      }
    }
  }

  firstUpdated() {
    if (this.useHash) {
      const windowObject = window.location !== window.parent.location ? window.parent : window;

      // Check if url has hash on load and open corresponding tab
      const hashTab = this.shadowRoot.querySelector(`[href='${windowObject.location.hash}']`);
      if (hashTab) {
        this._activateTab(hashTab.id);
      }
    }

    this.breakpointValue = this._getBreakpoint();
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener(
      'resize',
      this._debounce(() => {
        this._handleResize();
      }),
      50,
    );
  }

  disconnectedCallback() {
    window.removeEventListener(
      'resize',
      this._debounce(() => {
        this._handleResize();
      }),
      50,
    );
    window.removeEventListener('hashchange', () => this._handleHashChange(), false);

    super.disconnectedCallback();
  }

  _getChild(tabId) {
    const children = [...this.children];
    return children.find((child) => child.tabId === tabId);
  }

  _handleClick(event, tabId, index) {
    event.preventDefault();
    this._activateTab(tabId, index);
    this._responsiveNavigationOpen = !this._responsiveNavigationOpen;
  }

  _handleFocus(event, tabId, index) {
    if (!this.useHash) {
      event.preventDefault();
    }
    this._activateTab(tabId, index);
  }

  _handleKeyDown(event) {
    const tabs = this.shadowRoot.querySelectorAll('[data-vl-tab]');

    switch (event.keyCode) {
      case 37:
      case 38: {
        this._handleLeftArrow(tabs);
        break;
      }
      case 39:
      case 40: {
        this._handleRightArrow(tabs);
        break;
      }
      default:
        break;
    }
  }

  _handleLeftArrow(tabs) {
    let i = this.currentTabIndex - 1;

    if (i < 0) {
      i = tabs.length - 1;
    }

    const prevTabEl = tabs[i];

    if (prevTabEl) {
      prevTabEl.focus();
    }
  }

  _handleRightArrow(tabs) {
    let _i = this.currentTabIndex + 1;

    if (_i >= tabs.length) {
      _i = 0;
    }

    const nextTabEl = tabs[_i];

    if (nextTabEl) {
      nextTabEl.focus();
    }
  }

  static get properties() {
    return {
      responsiveLabel: { type: String, attribute: 'data-vl-responsive-label', reflect: true },
      activeTab: { type: String, attribute: 'data-vl-active-tab', reflect: true },
      useHash: { type: Boolean, attribute: 'data-vl-use-hash', reflect: true },
      alt: { type: Boolean, attribute: 'data-vl-alt', reflect: true },
      _responsiveNavigationOpen: { state: true },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      const windowObject = window.location !== window.parent.location ? window.parent : window;

      switch (propName) {
        case 'activeTab':
          this.dispatchEvent(new CustomEvent('change', { detail: { activeTab: this.activeTab }, composed: true }));

          if (this.useHash && this.activeTab) {
            windowObject.location.hash = this.activeTab;
          }

          break;

        case 'useHash':
          if (this.useHash) {
            windowObject.addEventListener('hashchange', () => this._handleHashChange(), false);
          } else {
            window.removeEventListener('hashchange', () => this._handleHashChange(), false);
          }
          break;
        default:
          break;
      }
    });
  }

  render() {
    const children = [...this.children];
    const noDefaultActiveTab = !this.activeTab || this.activeTab === 'undefined';
    const activeTabChild = this.activeTab && this._getChild(this.activeTab);

    return html`<div data-vl-tabs data-vl-tabs-responsive-label="${this.responsiveLabel}">
      <div class="vl-tabs__wrapper">
        <ul
          class="vl-tabs ${this.alt ? 'vl-tabs--alt' : ''}"
          data-vl-tabs-list
          data-vl-show=${this._responsiveNavigationOpen}
          aria-hidden=${!this._responsiveNavigationOpen}
          role="tablist"
        >
          ${children.map((child, index) => {
            const isActive = child.tabId === this.activeTab;

            return html`
              <li class="vl-tab ${isActive ? 'vl-tab--active' : ''}" data-vl-id=${child.tabId}>
                <a
                  href=${`#${child.tabId}`}
                  class="vl-tab__link"
                  data-vl-tab
                  role="tab"
                  id=${child.tabId}
                  tabindex=${(noDefaultActiveTab && index === 0) || isActive ? '0' : '-1'}
                  aria-selected=${isActive}
                  @click=${(e) => this._handleClick(e, child.tabId, index)}
                  @focus=${(e) => this._handleFocus(e, child.tabId, index)}
                  @keydown=${(e) => this._handleKeyDown(e)}
                  >${child.title ? child.title : html`<slot name="title"></slot>`}</a
                >
              </li>
            `;
          })}
        </ul>
        <button
          type="button"
          data-vl-tabs-toggle
          aria-expanded=${!this._responsiveNavigationOpen}
          class="vl-tabs__toggle"
          data-vl-close=${this._responsiveNavigationOpen}
          @click=${() => {
            if (this.breakpointValue === 'xsmall' || this.breakpointValue === 'small') {
              this._responsiveNavigationOpen = !this._responsiveNavigationOpen;
            }
          }}
        >
          <span>${activeTabChild ? activeTabChild.title : this.responsiveLabel || 'Navigatie'}</span>
        </button>
      </div>

      ${children.map((child) => {
        const name = `item-${child.tabId}`;
        child.setAttribute('slot', name);
        return html`
          <section
            class="vl-col--1-1 vl-tab__pane"
            data-vl-tab-pane
            tabindex="0"
            role="tabpanel"
            id=${`${child.tabId}-pane`}
            hidden="${child.tabId === this.activeTab ? '' : 'hidden'}"
            data-vl-show="${child.tabId === this.activeTab}"
            aria-labelledby=${`${child.tabId}-pane-tab`}
          >
            <div class="vl-typography">
              <slot name=${name}></slot>
            </div>
          </section>
        `;
      })}
    </div> `;
  }
}

customElements.define('vl-tabs-new', VlTabsNew);
