import { awaitUntil, define, vlElement } from '../../utils/core';
import { VlTabsPane } from './components/vl-tabs-pane';
import './components/vl-tab';
import './components/vl-tab-section';
import './lib';

import styles from './styles.scss';

export class VlTabs extends vlElement(HTMLElement) {
  static get is() {
    return 'vl-tabs';
  }

  static get _observedAttributes() {
    return ['alt', 'responsive-label', 'active-tab', 'href'];
  }

  constructor() {
    super(`
    <style>
      ${styles}
    </style>
    <div id="tabs" data-vl-tabs data-vl-tabs-responsive-label="Navigatie">
      <div id="tabs-wrapper" class="vl-tabs__wrapper">
        <ul id="tab-list" class="vl-tabs" data-vl-tabs-list role="tablist"></ul>  
        <button type="button" data-vl-tabs-toggle aria-expanded="false" class="vl-tabs__toggle" data-vl-close="false">
          <span id="data-vl-tabs-responsive-label">Navigatie</span>  
        </button>
      </div>
    </div>`);
  }

  connectedCallback() {
    this._renderTabs();
    this._renderSections();
    this.__dress();
    this._observer = this.__observeTabPanes((mutations) => this.__processTabPane(mutations));
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  get _dressed() {
    return this.hasAttribute(VlTabs._dressedAttributeName);
  }

  static get _dressedAttributeName() {
    return 'data-vl-tabs-dressed';
  }

  async __dress(forced) {
    if (!this._dressed || forced) {
      await customElements.whenDefined('vl-tab');
      await customElements.whenDefined('vl-tab-section');
      window.vl.tabs.dress(this.shadowRoot);
      this.setAttribute(VlTabs._dressedAttributeName, '');
    }
  }

  async ready() {
    return awaitUntil(() => this._dressed);
  }

  get __tabs() {
    return this.shadowRoot.getElementById('tabs');
  }

  get __tabList() {
    return this.shadowRoot.getElementById('tab-list');
  }

  get __responsiveLabel() {
    return this.shadowRoot.getElementById('data-vl-tabs-responsive-label');
  }

  get __tabPanes() {
    return [...this.querySelectorAll(VlTabsPane.is)];
  }

  __getTabTemplate({ id, title }) {
    return this._template(`
      <li is="vl-tab" data-vl-href="${this.__href}#${id}" data-vl-id="${id}">
        <slot name="${id}-title-slot">${title}</slot>
      </li>
    `);
  }

  __getTabSectionTemplate({ id }) {
    return this._template(`
      <section id="${id}-pane" is="vl-tab-section">
        <slot name="${id}-slot"></slot>
      </section>
    `);
  }

  _addTab({ tabPane, index }, tabIndex) {
    const { id, title } = tabPane;
    const element = this.__getTabTemplate({ id, title });

    // Set first tab as active on loading the component if no active tab attribute is given and there is no active tab hash in the url
    if (tabIndex === 0 && !this.hasAttribute('data-vl-active-tab') && !this.__hasTabHash()) {
      this.setAttribute('data-vl-active-tab', id);
    }

    if (index && index >= 0) {
      this.__tabList.insertBefore(element, this.__tabList.children[index]);
    } else {
      this.__tabList.appendChild(element);
    }
  }

  _removeTab(id) {
    const element = this.__tabList.querySelector(`[data-vl-id="${id}"]`);
    if (element) {
      this.__tabList.removeChild(element);
    }
  }

  _addTabSection({ id, index }) {
    this.__tabPanes[index].setAttribute('slot', `${id}-slot`);
    const element = this.__getTabSectionTemplate({ id });
    if (index && index >= 0) {
      this.__tabs.insertBefore(element, this.__tabs.children[index + 1]);
    } else {
      this.__tabs.appendChild(element);
    }
  }

  _removeTabSection(id) {
    const element = this.__tabs.querySelector(`#${id}-pane`);
    if (element) {
      this.__tabs.removeChild(element);
    }
  }

  _renderTabs() {
    this.__tabList.innerHTML = '';
    this.__tabPanes.forEach((tabPane, tabIndex) => {
      this._addTab({ tabPane }, tabIndex);
    });
  }

  _renderSections() {
    this.__tabPanes.forEach((tabPane, index) => this._addTabSection({ id: tabPane.id, index }));
  }

  _altChangedCallback(oldValue, newValue) {
    if (newValue !== null) {
      this.__tabList.classList.add('vl-tabs--alt');
    } else {
      this.__tabList.classList.remove('vl-tabs--alt');
    }
  }

  _responsiveLabelChangedCallback(oldValue, newValue) {
    const value = newValue || 'Navigatie';
    this.__tabs.setAttribute('data-vl-tabs-responsive-label', value);
    this.__responsiveLabel.innerHTML = value;
  }

  async _activeTabChangedCallback(oldValue, newValue) {
    await this.ready();
    const tab = [...this.__tabList.children].find((child) => child.id === newValue);
    if (tab && !tab.isActive) {
      tab.activate();
    }
  }

  _hrefChangedCallback() {
    this.__updateHrefs();
  }

  get __href() {
    const windowObject = window.location !== window.parent.location ? window.parent : window;
    return this.getAttribute('data-vl-href') || windowObject.location.pathname + windowObject.location.search;
  }

  __updateHrefs() {
    [...this.__tabList.children].forEach((tab) => tab.setAttribute('data-vl-href', `${this.__href}#${tab.id}`));
  }

  __hasTabHash() {
    const tabIds = this.__tabPanes.map((pane) => {
      const { id } = pane;
      return id;
    });

    const windowObject = window.location !== window.parent.location ? window.parent : window;
    return tabIds.some((tabId) => windowObject.location.hash === `#${tabId}`);
  }

  __observeTabPanes(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(this, { childList: true });
    return observer;
  }

  __processTabPane(mutations) {
    const tabPanesToAdd = mutations
      .flatMap((mutation) => [...mutation.addedNodes])
      .filter((node) => node instanceof VlTabsPane);
    tabPanesToAdd.forEach((tabPane) => this.__addTabAndSection(tabPane));

    const tabPanesToDelete = mutations
      .flatMap((mutation) => [...mutation.removedNodes])
      .filter((node) => node instanceof VlTabsPane);
    tabPanesToDelete.forEach((tabPane) => this.__removeTabAndSection(tabPane));

    this.__dress();
  }

  __addTabAndSection(tabPane) {
    const index = this.__tabPanes.indexOf(tabPane);
    this._addTab({ tabPane, index });
    this._addTabSection({ id: tabPane.id, index });
  }

  __removeTabAndSection(tabPane) {
    this._removeTab(tabPane.id);
    this._removeTabSection(tabPane.id);
  }
}

awaitUntil(() => window.vl && window.vl.tabs).then(() => define(VlTabs.is, VlTabs));
