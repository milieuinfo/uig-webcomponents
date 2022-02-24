(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : (global.tabs = factory());
})(typeof self !== 'undefined' ? self : this, () => {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  const Breakpoint = /* #__PURE__ */ (function () {
    function Breakpoint() {
      _classCallCheck(this, Breakpoint);

      this.value = null;
    } // Private functions

    _createClass(Breakpoint, [
      {
        key: '_getBreakpoint',
        value: function _getBreakpoint() {
          // transfer css breakpoints to JS
          return window.getComputedStyle(document.body, ':before').getPropertyValue('content').replace(/"/g, '');
        }, // Public functions
      },
      {
        key: 'dress',
        value: function dress() {
          const _this = this;

          this.value = this._getBreakpoint();
          /**
           * Add eventlisteners to window
           */

          window.addEventListener(
            'resize',
            vl.util.debounce(() => {
              _this.refreshValue();
            }),
            50,
          );
        },
      },
      {
        key: 'refreshValue',
        value: function refreshValue() {
          this.value = this._getBreakpoint();
        },
      },
    ]);

    return Breakpoint;
  })();

  if (!('breakpoint' in vl)) {
    vl.breakpoint = new Breakpoint();
    vl.breakpoint.dress();
  }

  const tabActiveClass = ''.concat(vl.ns, 'tab--active');
  const tabClass = ''.concat(vl.ns, 'tab');
  const dataTabList = '[data-'.concat(vl.ns, 'tabs-list]');
  const dataTab = '[data-'.concat(vl.ns, 'tab]');
  const dataTabPane = '[data-'.concat(vl.ns, 'tab-pane]');
  const tabToggleAtt = 'data-'.concat(vl.ns, 'tabs-toggle');
  const tabShowAtt = 'data-'.concat(vl.ns, 'show');
  const tabCloseAtt = 'data-'.concat(vl.ns, 'close');
  const tabsAtt = 'data-'.concat(vl.ns, 'tabs');
  const breakpoint = new Breakpoint();
  breakpoint.dress();

  const Tabs = /* #__PURE__ */ (function () {
    function Tabs() {
      _classCallCheck(this, Tabs);

      this.currentTabIndexForCurrentTabsContainer = -1;
    }

    _createClass(Tabs, [
      {
        key: 'resetTabIndexesForTabs',
        value: function resetTabIndexesForTabs(tabs) {
          vl.util.each(tabs, (tab) => {
            tab.setAttribute('tabindex', '-1');
            tab.setAttribute('aria-selected', 'false');

            if (typeof tab.closest === 'function') {
              // check for IE
              vl.util.removeClass(tab.closest('.'.concat(tabClass)), tabActiveClass);
            }
          });
        },
      },
      {
        key: 'resetTabPanes',
        value: function resetTabPanes(tabPanes) {
          vl.util.each(tabPanes, (pane) => {
            pane.setAttribute('hidden', 'hidden');
            pane.setAttribute(''.concat(tabShowAtt), 'false');
          });
        },
      },
      {
        key: 'showTabPaneForTab',
        value: function showTabPaneForTab(tab, tabPane) {
          // hightlight tab
          tab.setAttribute('tabindex', '0');

          if (typeof tab.closest === 'function') {
            // check for IE
            vl.util.addClass(tab.closest('.'.concat(tabClass)), tabActiveClass);
          }

          tab.setAttribute('aria-selected', true); // hightlight pane

          tabPane.setAttribute('hidden', '');
          tabPane.setAttribute(''.concat(tabShowAtt), 'true');
        },
      },
      {
        key: 'updateResponsiveBtnLabelForTabsContainerWithTab',
        value: function updateResponsiveBtnLabelForTabsContainerWithTab(tabsContainer, tab) {
          const toggleBtnEl = tabsContainer.querySelector('['.concat(tabToggleAtt, '] span'));
          toggleBtnEl.innerHTML = tab.innerHTML;
        },
      },
      {
        key: 'clickEvent',
        value: function clickEvent(event) {
          if (event.target && typeof event.target.closest === 'function') {
            // check for IE
            const tabsContainer = event.target.closest('['.concat(tabsAtt, ']'));
            const toggleBtnEl = tabsContainer.querySelector('['.concat(tabToggleAtt, ']'));
            const tabsList = tabsContainer.querySelector(''.concat(dataTabList));
            const isListOpen = tabsList.getAttribute(tabShowAtt) === 'true';
            tabsList.setAttribute(tabShowAtt, isListOpen ? 'false' : 'true');
            tabsList.setAttribute('aria-hidden', isListOpen ? 'true' : 'false');
            toggleBtnEl.setAttribute('aria-expanded', isListOpen ? 'true' : 'false');
            toggleBtnEl.setAttribute(tabCloseAtt, isListOpen ? 'false' : 'true');
          }
        },
      },
      {
        key: 'setupResponsiveToggleBtnForTabsContainer',
        value: function setupResponsiveToggleBtnForTabsContainer(tabsContainer) {
          const toggleBtnEl = tabsContainer.querySelector('['.concat(tabToggleAtt, ']'));

          const bp = breakpoint._getBreakpoint(); // setup responsive toggle btn

          if (bp === 'xsmall' || bp === 'small') {
            toggleBtnEl.addEventListener('click', this.clickEvent, false);
          }
        },
      },
      {
        key: 'dress',
        value: function dress(tabsContainer) {
          const _this = this;

          this.setupResponsiveToggleBtnForTabsContainer(tabsContainer);
          const tabs = tabsContainer.querySelectorAll(''.concat(dataTab));
          const tabPanes = tabsContainer.querySelectorAll(''.concat(dataTabPane));
          const currentTabHash = window.location.hash;
          const activeTab = tabsContainer.querySelector("[href$='".concat(currentTabHash, "']")); // only add click & focus listeners to tabs when there are panes to toggle

          if (tabPanes.length > 0) {
            vl.util.each(tabs, (tab, index) => {
              tab.addEventListener('focus', () => {
                _this.currentTabIndexForCurrentTabsContainer = index;
                tab.click();
              });
              tab.addEventListener('click', () => {
                // event.preventDefault();
                // reset tabs & panes
                _this.resetTabIndexesForTabs(tabs);

                _this.resetTabPanes(tabPanes); // set tab

                _this.showTabPaneForTab(tab, tabPanes[index]); // set responsive button label

                _this.updateResponsiveBtnLabelForTabsContainerWithTab(tabsContainer, tab);

                const toggleBtnEl = tabsContainer.querySelector('['.concat(tabToggleAtt, ']'));
                toggleBtnEl.click();
              });
            });
          }

          if (activeTab) {
            activeTab.click();
          } // Deteact arrow & spacebar usage on tabContainer

          tabsContainer.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
              case 37:
              // empty
              // fallsthrough

              case 38: {
                // left arrow
                let i = _this.currentTabIndexForCurrentTabsContainer - 1;

                if (i < 0) {
                  i = tabs.length - 1;
                }

                const prevTabEl = tabs[i];

                if (prevTabEl) {
                  prevTabEl.focus();
                }

                break;
              }
              // fallsthrough

              case 39:
              // empty
              // fallsthrough

              case 40: {
                // right arrow
                let _i = _this.currentTabIndexForCurrentTabsContainer + 1;

                if (_i >= tabs.length) {
                  _i = 0;
                }

                const nextTabEl = tabs[_i];

                if (nextTabEl) {
                  nextTabEl.focus();
                }

                break;
              }

              default:
                break;
            }
          });
          window.addEventListener(
            'resize',
            vl.util.debounce(() => {
              const bp = breakpoint._getBreakpoint(); // setup responsive toggle btn

              if (bp === 'xsmall' || bp === 'small') {
                const toggleBtnEl = tabsContainer.querySelector('['.concat(tabToggleAtt, ']'));
                toggleBtnEl.removeEventListener('click', _this.clickEvent, false);

                _this.setupResponsiveToggleBtnForTabsContainer(tabsContainer);
              }
            }, 0),
          );
        },
      },
      {
        key: 'dressAll',
        value: function dressAll() {
          const _this2 = this;

          const wrappers = document.querySelectorAll(
            '['.concat(tabsAtt, ']:not([data-').concat(vl.ns, 'js-dress="false"])'),
          );
          vl.util.each(wrappers, (tabsContainer) => {
            _this2.dress(tabsContainer);
          });
        },
      },
    ]);

    return Tabs;
  })();

  if (!('tabs' in vl)) {
    vl.tabs = new Tabs();
    vl.tabs.dressAll();
  }

  return Tabs;
});
