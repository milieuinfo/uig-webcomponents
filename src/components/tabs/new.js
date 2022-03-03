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
  }

  firstUpdated() {
    if (this.useHash) {
      // Check if url has hash and open corresponding tab
      const windowObject = window.location !== window.parent.location ? window.parent : window;
      const hashTab = this.shadowRoot.querySelector(`[href='${windowObject.location.hash}']`);
      if (hashTab) {
        hashTab.click();
      }

      // Open default active tab so hash shows in url
      if (this.activeTab) {
        const activeTabComponent = this.shadowRoot.querySelector(`[href='#${this.activeTab}']`);
        if (activeTabComponent) {
          activeTabComponent.click();
        }
      }
    }
  }

  _handleClick(event, tabId, index) {
    if (!this.useHash) {
      // Don't show hash in url
      event.preventDefault();
    }

    if (this.currentTabIndex !== index) {
      this.activeTab = tabId;
      this.currentTabIndex = index;

      // this.updateResponsiveBtnLabelForTabsContainerWithTab(tabsContainer, tab);

      // const toggleBtnEl = tabsContainer.querySelector(`[${tabToggleAtt}]`);
      // toggleBtnEl.click();
    }
  }

  _handleFocus(event, tabId, index) {
    if (this.currentTabIndex !== index) {
      if (this.useHash) {
        const tabs = this.shadowRoot.querySelectorAll('[data-vl-tab]');
        // Update hash in URL
        tabs[index].click();
      } else {
        event.preventDefault();
        this.activeTab = tabId;
        this.currentTabIndex = index;
      }
    }
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
    console.log('left arrow');
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
    console.log('right arrow');
    let _i = this.currentTabIndex + 1;

    if (_i >= tabs.length) {
      _i = 0;
    }

    const nextTabEl = tabs[_i];

    if (nextTabEl) {
      nextTabEl.focus();
    }
  }

  // updateResponsiveBtnLabelForTabsContainerWithTab(tabsContainer, tab) {
  //   const toggleBtnEl = tabsContainer.querySelector('['.concat(tabToggleAtt, '] span'));
  //   toggleBtnEl.innerHTML = tab.innerHTML;
  // }

  // setupResponsiveToggleBtnForTabsContainer(tabsContainer) {
  //   const toggleBtnEl = tabsContainer.querySelector('['.concat(tabToggleAtt, ']'));

  //   // const bp = breakpoint._getBreakpoint(); // setup responsive toggle btn

  //   // if (bp === 'xsmall' || bp === 'small') {
  //   //   toggleBtnEl.addEventListener('click', this.clickEvent, false);
  //   // }
  // }

  // clickEvent(event) {
  //   if (event.target && typeof event.target.closest === 'function') {
  //     // check for IE
  //     const tabsContainer = event.target.closest('['.concat(tabsAtt, ']'));
  //     const toggleBtnEl = tabsContainer.querySelector('['.concat(tabToggleAtt, ']'));
  //     const tabsList = tabsContainer.querySelector(''.concat(dataTabList));
  //     const isListOpen = tabsList.getAttribute(tabShowAtt) === 'true';
  //     tabsList.setAttribute(tabShowAtt, isListOpen ? 'false' : 'true');
  //     tabsList.setAttribute('aria-hidden', isListOpen ? 'true' : 'false');
  //     toggleBtnEl.setAttribute('aria-expanded', isListOpen ? 'true' : 'false');
  //     toggleBtnEl.setAttribute(tabCloseAtt, isListOpen ? 'false' : 'true');
  //   }
  // }

  static get properties() {
    return {
      activeTab: { type: String, attribute: 'data-vl-active-tab', reflect: true },
      useHash: { type: Boolean, attribute: 'data-vl-use-hash', reflect: true },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'activeTab':
          this.dispatchEvent(new CustomEvent('change', { detail: { activeTab: this.activeTab }, composed: true }));
          break;

        default:
          break;
      }
    });
  }

  render() {
    const children = [...this.children];
    const noDefaultActiveTab = !this.activeTab || this.activeTab === 'undefined';

    return html`<div data-vl-tabs data-vl-tabs-responsive-label="Navigatie">
      <div class="vl-tabs__wrapper">
        <ul class="vl-tabs" data-vl-tabs-list role="tablist">
          ${children.map(
            (child, index) =>
              html`
                <li class="vl-tab ${child.tabId === this.activeTab ? 'vl-tab--active' : ''}" data-vl-id=${child.tabId}>
                  <a
                    href=${`#${child.tabId}`}
                    class="vl-tab__link"
                    data-vl-tab
                    role="tab"
                    id=${child.tabId}
                    tabindex=${(noDefaultActiveTab && index === 0) || child.tabId === this.activeTab ? '0' : '-1'}
                    aria-selected=${child.tabId === this.activeTab}
                    @click=${(e) => this._handleClick(e, child.tabId, index)}
                    @focus=${(e) => this._handleFocus(e, child.tabId, index)}
                    @keydown=${(e) => this._handleKeyDown(e)}
                    >${child.title}</a
                  >
                </li>
              `,
          )}
        </ul>
        <button type="button" data-vl-tabs-toggle aria-expanded="false" class="vl-tabs__toggle" data-vl-close="false">
          <span>Navigatie</span>
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
            data-vl-show="true"
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
