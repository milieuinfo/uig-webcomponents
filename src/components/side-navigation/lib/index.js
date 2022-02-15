(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : (global['side-navigation'] = factory());
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

  const commonjsGlobal =
    typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {};

  function createCommonjsModule(fn, module) {
    return (module = { exports: {} }), fn(module, module.exports), module.exports;
  }

  const ResizeSensor_min = createCommonjsModule((module, exports) => {
    !(function (a, b) {
      module.exports = b();
    })(commonjsGlobal, () => {
      const a = (function () {
        function a() {
          (this.q = []),
            (this.add = function (a) {
              this.q.push(a);
            });
          let a;
          let b;

          this.call = function () {
            for (a = 0, b = this.q.length; b > a; a++) {
              this.q[a].call();
            }
          };
        }

        function b(a, b) {
          return a.currentStyle
            ? a.currentStyle[b]
            : window.getComputedStyle
            ? window.getComputedStyle(a, null).getPropertyValue(b)
            : a.style[b];
        }

        function c(c, e) {
          if (c.resizedAttached) {
            if (c.resizedAttached) return void c.resizedAttached.add(e);
          } else (c.resizedAttached = new a()), c.resizedAttached.add(e);

          (c.resizeSensor = document.createElement('div')), (c.resizeSensor.className = 'resize-sensor');
          const f =
            'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;';
          const g = 'position: absolute; left: 0; top: 0; transition: 0s;';
          (c.resizeSensor.style.cssText = f),
            (c.resizeSensor.innerHTML = `<div class="resize-sensor-expand" style="${f}"><div style="${g}"></div></div><div class="resize-sensor-shrink" style="${f}"><div style="${g} width: 200%; height: 200%"></div></div>`),
            c.appendChild(c.resizeSensor),
            b(c, 'position') == 'static' && (c.style.position = 'relative');

          const h = c.resizeSensor.childNodes[0];
          const i = h.childNodes[0];
          const j = c.resizeSensor.childNodes[1];
          const k = function k() {
            (i.style.width = `${1e5}px`),
              (i.style.height = `${1e5}px`),
              (h.scrollLeft = 1e5),
              (h.scrollTop = 1e5),
              (j.scrollLeft = 1e5),
              (j.scrollTop = 1e5);
          };

          k();

          let l = !1;
          const m = function m() {
            c.resizedAttached && (l && (c.resizedAttached.call(), (l = !1)), d(m));
          };

          d(m);

          let n;
          let o;
          let p;
          let q;
          const r = function r() {
            ((p = c.offsetWidth) != n || (q = c.offsetHeight) != o) && ((l = !0), (n = p), (o = q)), k();
          };
          const s = function s(a, b, c) {
            a.attachEvent ? a.attachEvent(`on${b}`, c) : a.addEventListener(b, c);
          };

          s(h, 'scroll', r), s(j, 'scroll', r);
        }

        var d =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          function (a) {
            return window.setTimeout(a, 20);
          };
        const e = function e(a, b) {
          const d = this;
          const e = Object.prototype.toString.call(a);
          const f = (d._isCollectionTyped =
            e === '[object Array]' ||
            e === '[object NodeList]' ||
            e === '[object HTMLCollection]' ||
            (typeof jQuery !== 'undefined' && a instanceof window.jQuery) ||
            (typeof Elements !== 'undefined' && a instanceof window.Elements));
          if (((d._element = a), f))
            for (let g = 0, h = a.length; h > g; g++) {
              c(a[g], b);
            }
          else c(a, b);
        };

        return (
          (e.prototype.detach = function () {
            const a = this;
            const b = a._isCollectionTyped;
            const c = a._element;
            if (b)
              for (let d = 0, f = c.length; f > d; d++) {
                e.detach(c[d]);
              }
            else e.detach(c);
          }),
          (e.detach = function (a) {
            a.resizeSensor && (a.removeChild(a.resizeSensor), delete a.resizeSensor, delete a.resizedAttached);
          }),
          e
        );
      })();

      return a;
    });
  });

  const stiClass = 'js-'.concat(vl.ns, 'sticky');
  const stiAtt = 'data-'.concat(vl.ns, 'sticky');
  const stiFixedClass = ''.concat(stiClass, '--fixed');
  const stiPlaceholderClass = ''.concat(stiClass, '--placeholder');
  const regionClass = ''.concat(vl.ns, 'region');
  const stiStaticClass = ''.concat(stiClass, '--static');
  const stiViewportTopClass = ''.concat(stiClass, '--viewport-top');
  const stiViewportBottomClass = ''.concat(stiClass, '--viewport-bottom');
  const stiViewportUnbottom = ''.concat(stiClass, '--viewport-unbottom');
  const stiViewportContainerBottom = ''.concat(stiClass, '--container-bottom');
  const stiDressedAttr = 'data-'.concat(vl.ns, 'sticky-dressed');
  const stiOffsetAttr = 'data-'.concat(vl.ns, 'sticky-offset-top');
  const layoutClass = ''.concat(vl.ns, 'layout');

  const Sticky = /* #__PURE__ */ (function () {
    /**
     * Initialize sticky component
     */
    function Sticky() {
      const _this = this;

      _classCallCheck(this, Sticky);

      // Set default values for affixedType and direction
      this.affixedType = 'STATIC';
      this.direction = 'down'; // Set initialized and restyle flags to false

      this._initialized = false;
      this._reStyle = false; // Default dimensions

      this.dimensions = {
        translateY: 0,
        topSpacing: 0,
        lastTopSpacing: 0,
        bottomSpacing: 0,
        lastBottomSpacing: 0,
        sidebarHeight: 0,
        sidebarWidth: 0,
        containerTop: 0,
        containerHeight: 0,
        viewportHeight: 0,
        viewportTop: 0,
        lastViewportTop: 0,
      }; // Breakpoint stuff

      this._breakpoint = false;
      this.minWidth = ['xsmall', 'small']; // Loop over vl.util.each event and bind 'this'

      vl.util.each(['handleEvent'], (method) => {
        _this[method] = _this[method].bind(_this);
      });
    }
    /**
     * Breakdown stick if breakpoint is small
     * @method _widthBreakpoint
     * @return {[type]}
     */

    _createClass(Sticky, [
      {
        key: '_widthBreakpoint',
        value: function _widthBreakpoint() {
          if (vl.util.exists(vl.breakpoint)) {
            if (this.minWidth.indexOf(vl.breakpoint.value) >= 0) {
              this._breakpoint = true;
              this.affixedType = 'STATIC';
              this.sidebar.removeAttribute('style');
              vl.util.removeClass(this.sidebarInner, stiFixedClass);
              this.sidebarInner.removeAttribute('style');
            } else {
              this._breakpoint = false;
            }
          } else {
            this._breakpoint = false;
          }
        },
        /**
         * Recalculate dimensions if needed on scroll
         * @method _calcDimensionsWithScroll
         */
      },
      {
        key: '_calcDimensionsWithScroll',
        value: function _calcDimensionsWithScroll() {
          const dims = this.dimensions;
          dims.sidebarLeft = this._offsetRelative(this.sidebar).left;
          dims.viewportTop = document.documentElement.scrollTop || document.body.scrollTop;
          dims.viewportBottom = dims.viewportTop + dims.viewportHeight;
          dims.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

          if (typeof dims.topSpacing === 'function') {
            dims.topSpacing = parseInt(dims.topSpacing(this.sidebarInner), 10) || 0;
          }

          if (typeof dims.bottomSpacing === 'function') {
            dims.bottomSpacing = parseInt(dims.bottomSpacing(this.sidebarInner), 10) || 0;
          }

          if (this.affixType === 'VIEWPORT-TOP') {
            // Adjust translate Y in the case decrease top spacing value
            if (dims.topSpacing < dims.lastTopSpacing) {
              dims.translateY += dims.lastTopSpacing - dims.topSpacing;
              this._reStyle = true;
            }
          } else if (this.affixedType === 'VIEWPORT-BOTTOM') {
            // Adjust translateY in the case decrease bottom spacing value
            if (dims.bottomSpacing < dims.lastBottomSpacing) {
              dims.translateY += dims.lastTopSpacing - dims.topSpacing;
              this._reStyle = true;
            }
          }

          dims.lastTopSpacing = dims.topSpacing;
          dims.lastBottomSpacing = dims.bottomSpacing;
        },
        /**
         * Is the sidebar-height smaller than the viewport
         * @method _isSidebarFitsViewport
         * @return {Boolean}
         */
      },
      {
        key: '_isSidebarFitsViewport',
        value: function _isSidebarFitsViewport() {
          return this.dimensions.sidebarHeight < this.dimensions.viewportHeight;
        },
        /**
         * Determine the (desired) state of the sidebar
         * @method _getAffixType
         * @return {affixType}
         */
      },
      {
        key: '_getAffixType',
        value: function _getAffixType() {
          const dims = this.dimensions;
          let affixType = false;
          let sidebarBottom;
          let colliderTop;
          let colliderBottom;

          this._calcDimensionsWithScroll();

          sidebarBottom = dims.sidebarHeight + dims.containerTop;
          colliderTop = dims.viewportTop + dims.topSpacing;
          colliderBottom = dims.viewportBottom - dims.bottomSpacing;

          switch (this.direction) {
            case 'up':
              if (colliderTop <= dims.containerTop) {
                dims.translateY = 0;
                affixType = 'STATIC';
              } else if (colliderTop <= dims.translateY + dims.containerTop) {
                dims.translateY = colliderTop - dims.containerTop;
                affixType = 'VIEWPORT-TOP';
              } else if (!this._isSidebarFitsViewport() && dims.containerTop <= colliderTop) {
                affixType = 'VIEWPORT-UNBOTTOM';
              } else {
                affixType = 'CONTAINER-BOTTOM';
              }

              break;

            case 'down':
              // When sidebar element is not bigger tham screen viewport
              if (this._isSidebarFitsViewport()) {
                if (dims.sidebarHeight + colliderTop >= dims.containerBottom) {
                  dims.translateY = dims.containerBottom - sidebarBottom;
                  affixType = 'CONTAINER-BOTTOM';
                } else if (colliderTop >= dims.containerTop) {
                  dims.translateY = colliderTop - dims.containerTop;
                  affixType = 'VIEWPORT-TOP';
                }
              } else if (dims.containerBottom <= colliderBottom) {
                dims.translateY = colliderTop - dims.containerTop;
                affixType = 'CONTAINER-BOTTOM';
              } else if (sidebarBottom + dims.translateY <= colliderBottom) {
                dims.translateY = colliderBottom - sidebarBottom;
                affixType = 'VIEWPORT-BOTTOM';
              } else if (dims.containerTop + dims.translateY <= colliderTop) {
                affixType = 'VIEWPORT-UNBOTTOM';
              }

              break;
          } // Make sure the translate Y is not bigger than container height.

          dims.translateY = Math.max(0, dims.translateY);
          dims.translateY = Math.min(dims.containerHeight, dims.translateY);
          dims.lastViewportTop = dims.viewportTop;
          return affixType;
        },
        /**
         * Determine direction of scroll
         * @method _observeScrollDir
         */
      },
      {
        key: '_observeScrollDir',
        value: function _observeScrollDir() {
          const dims = this.dimensions;
          let furthest;

          if (dims.lastViewportTop === dims.viewportTop) {
            return;
          }

          furthest = this.direction === 'down' ? Math.min : Math.max; // If the browser is scrolling not in the same direction.

          if (dims.viewportTop === furthest(dims.viewportTop, dims.lastViewportTop)) {
            this.direction = this.direction === 'down' ? 'up' : 'down';
          }
        },
        /**
         * Updates sticky with requestAnimationFrame for performance
         * @method _updateSticky
         * @param  {event}
         */
      },
      {
        key: '_updateSticky',
        value: function _updateSticky() {
          const _this2 = this;

          const event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (this._running) {
            return;
          }

          this._running = true;

          (function (eventType) {
            window.requestAnimationFrame(() => {
              switch (eventType) {
                // When browser is scrolling only recalculate soms dimensions within scroll
                case 'scroll':
                  _this2._calcDimensionsWithScroll();

                  _this2._observeScrollDir();

                  _this2._stickyPosition();

                  break;
                // Force _stickyPosition, calc all dimensions, check breakpoint

                case 'resize':
                default:
                  _this2._widthBreakpoint();

                  _this2._calcDimensions();

                  _this2._stickyPosition(true);

                  break;
              }

              _this2._running = false;
            });
          })(event.type);
        },
        /**
         * Get formatted translateString
         * @method _getTranslate
         * @param  {Number}      [y=0]
         * @param  {Number}      [x=0]
         * @param  {Number}      [z=0]
         * @return {[type]}
         */
      },
      {
        key: '_getTranslate',
        value: function _getTranslate() {
          const y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          const x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          const z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          return 'translate3d('.concat(y, ', ').concat(x, ', ').concat(z, ')');
        },
        /**
         * Returns styles to return for vl.util.each affixType
         * @method _getStyle
         * @param  {affixType}
         * @return {style}
         */
      },
      {
        key: '_getStyle',
        value: function _getStyle(affixType) {
          let style;
          let dims;
          let translate; // If no affixType exist function

          if (!vl.util.exists(affixType)) {
            return;
          }

          style = {
            inner: {},
            outer: {},
          };
          dims = this.dimensions; // Set different style props for the appropriate affixType

          switch (affixType) {
            case 'VIEWPORT-TOP':
              style.inner = {
                top: dims.topSpacing,
                left: dims.sidebarLeft - dims.viewportLeft,
                width: dims.sidebarWidth,
              };
              break;

            case 'VIEWPORT-BOTTOM':
              style.inner = {
                top: 'auto',
                left: dims.sidebarLeft,
                bottom: dims.bottomSpacing,
                width: dims.sidebarWidth,
              };
              break;

            case 'CONTAINER-BOTTOM':
            case 'VIEWPORT-UNBOTTOM':
              translate = this._getTranslate(0, `${dims.translateY}px`);
              style.inner = {
                display: 'block',
                transform: translate,
              };
              break;
          }

          switch (affixType) {
            case 'VIEWPORT-TOP':
            case 'VIEWPORT-BOTTOM':
            case 'VIEWPORT-UNBOTTOM':
            case 'CONTAINER-BOTTOM':
              style.outer = {
                height: dims.sidebarHeight,
              };
              break;
          }

          style.outer = this._extend(
            {
              height: '',
            },
            style.outer,
          );
          style.inner = this._extend(
            {
              top: '',
              left: '',
              bottom: '',
              width: '',
              transform: this._getTranslate(),
            },
            style.inner,
          );
          return style;
        }, // Extend options object with defaults.
      },
      {
        key: '_extend',
        value: function _extend(defaults, options) {
          const results = {};

          for (const key in defaults) {
            if (vl.util.exists(options[key])) {
              results[key] = options[key];
            } else {
              results[key] = defaults[key];
            }
          }

          return results;
        }, // make sticky
      },
      {
        key: '_stickyPosition',
        value: function _stickyPosition(force) {
          let affixType;
          let style;

          if (this._breakpoint) {
            return;
          }

          force = this._reStyle || force || false;
          affixType = this._getAffixType();
          style = this._getStyle(affixType);

          if ((this.affixedType !== affixType || force) && affixType) {
            for (const key in style.outer) {
              if (Object.prototype.hasOwnProperty.call(style.outer, key)) {
                const _unit = typeof style.outer[key] === 'number' ? 'px' : '';

                this.sidebar.style[key] = style.outer[key] + _unit;
              }
            }

            this.sidebarInner.classList.remove(
              stiStaticClass,
              stiViewportTopClass,
              stiViewportBottomClass,
              stiViewportUnbottom,
              stiViewportContainerBottom,
            );
            vl.util.addClass(this.sidebarInner, ''.concat(stiClass, '--').concat(affixType.toLowerCase()));

            for (const _key in style.inner) {
              if (Object.prototype.hasOwnProperty.call(style.inner, _key)) {
                const _unit2 = typeof style.inner[_key] === 'number' ? 'px' : '';

                this.sidebarInner.style[_key] = style.inner[_key] + _unit2;
              }
            }
          } else if (this._initialized) {
            this.sidebarInner.style.left = style.inner.left;
          }

          this.affixedType = affixType;
        }, // Bind eventlisteners
      },
      {
        key: '_bindEvents',
        value: function _bindEvents() {
          window.addEventListener('resize', this, {
            passive: true,
            capture: false,
          });
          window.addEventListener('scroll', this, {
            passive: true,
            capture: false,
          });
          this.sidebar.addEventListener('update.sticky', this);

          if (vl.util.exists(ResizeSensor_min)) {
            new ResizeSensor_min(this.sidebarInner, this.handleEvent);
          }
        }, // Handle events
      },
      {
        key: 'handleEvent',
        value: function handleEvent(event) {
          this._updateSticky(event);
        },
        /**
         * Calculate top and left offset
         * @method _offsetRelative
         * @param  {element}=
         * @return {result}
         */
      },
      {
        key: '_offsetRelative',
        value: function _offsetRelative(element) {
          const result = {
            left: 0,
            top: 0,
          };
          let offsetTop;
          let offsetLeft;

          do {
            offsetTop = element.offsetTop;
            offsetLeft = element.offsetLeft;

            if (!isNaN(offsetTop)) {
              result.top += offsetTop;
            }

            if (!isNaN(offsetLeft)) {
              result.left += offsetLeft;
            }

            element = element.tagName === 'body' ? element.parentElement : element.offsetParent;
          } while (element);

          return result;
        },
        /**
         * Calculate dimensions of sticky and container
         * @method _calcDimensions
         */
      },
      {
        key: '_calcDimensions',
        value: function _calcDimensions() {
          let dims;

          if (this._breakpoint) {
            return;
          }

          dims = this.dimensions; // Container of sticky sidebar dimensions.

          dims.containerTop = this._offsetRelative(this.container).top;
          dims.containerHeight = this.container.clientHeight;
          dims.containerBottom = dims.containerTop + dims.containerHeight; // Sidebar dimensions.

          dims.sidebarHeight = this.sidebarInner.offsetHeight;
          dims.sidebarWidth = this.sidebarInner.offsetWidth; // Screen viewport dimensions.

          dims.viewportHeight = window.innerHeight;

          this._calcDimensionsWithScroll();
        },
        /**
         * Initiate single element, add classes and methods
         * @method dress
         * @param  {element} stickyContent
         */
      },
      {
        key: 'dress',
        value: function dress(stickyContent) {
          this.placeholder = document.createElement('div');
          stickyContent.setAttribute(stiDressedAttr, true); // Put placeholder around sticky content

          vl.util.addClass(this.placeholder, stiPlaceholderClass);
          vl.util.wrap(stickyContent, this.placeholder); // Set placeholder height fixed

          this.placeholder.style.height = ''.concat(this.placeholder.offsetHeight, 'px'); // Set specified offsetTop if defined

          if (stickyContent.hasAttribute(stiOffsetAttr)) {
            this.dimensions.topSpacing = parseInt(stickyContent.getAttribute(stiOffsetAttr), 10);
          }

          this.sidebar = stickyContent.parentNode;
          this.sidebarInner = stickyContent;
          this.container = this.sidebar.closest('.'.concat(layoutClass, ', .').concat(regionClass));

          this._widthBreakpoint();

          this._calcDimensions();

          this._stickyPosition();

          this._bindEvents();

          this._initialized = true;
        },
        /**
         * Initiate elements and sets vl.breakpoint is available
         * @method dressAll
         * @return {[type]}
         */
      },
      {
        key: 'dressAll',
        value: function dressAll() {
          const _this3 = this;

          let elements;

          if (vl.util.exists(vl.breakpoint)) {
            if (this.minWidth.indexOf(vl.breakpoint.value) >= 0) {
              this._breakpoint = false;
            }
          }

          elements = document.querySelectorAll('['.concat(stiAtt, ']:not([').concat(stiDressedAttr, '])'));
          vl.util.each(elements, (stickyContent) => {
            _this3.dress(stickyContent);
          });
        },
        /**
         * Destroy the slider instance
         * @method destroy
         */
      },
      {
        key: 'destroy',
        value: function destroy() {
          const styleReset = {
            inner: {},
            outer: {},
          }; // Remove eventlisteners

          window.removeEventListener('resize', this, {
            capture: false,
          });
          window.removeEventListener('scroll', this, {
            capture: false,
          });
          this.sidebar.removeEventListener('update.sticky', this); // Remove classes

          vl.util.removeClass(this.sidebarInner, stiFixedClass); // Remove attributes

          this.sidebarInner.removeAttribute(stiDressedAttr); // Remove sidebar inner-style

          styleReset.inner = {
            position: '',
            top: '',
            left: '',
            bottom: '',
            width: '',
            transform: '',
          }; // Remove sidebar outer style

          styleReset.outer = {
            height: '',
            position: '',
          };

          for (const key in styleReset.outer) {
            if (Object.prototype.hasOwnProperty.call(styleReset.outer, key)) {
              this.sidebar.style[key] = styleReset.outer[key];
            }
          }

          for (const _key2 in styleReset.inner) {
            if (Object.prototype.hasOwnProperty.call(styleReset.inner, _key2)) {
              this.sidebarInner.style[_key2] = styleReset.inner[_key2];
            }
          } // Remove all state classes

          this.sidebarInner.classList.remove(
            stiStaticClass,
            stiViewportTopClass,
            stiViewportBottomClass,
            stiViewportUnbottom,
            stiViewportContainerBottom,
          );
          this._initialized = false; // Remove sticky-placeholder

          if (vl.util.exists(this.placeholder)) {
            this.placeholder.outerHTML = this.placeholder.innerHTML;
          } // Detach ResizeSensor

          if (vl.util.exists(ResizeSensor_min)) {
            ResizeSensor_min.detach(this.sidebarInner, this.handleEvent);
          }
        },
      },
    ]);

    return Sticky;
  })();

  /**
   * Scrollspy navigation
   * We assume that in a sticky element items with an anchor link should have a scrollspy functionality
   */
  // Private variables
  const ssClass = 'js-'.concat(vl.ns, 'scrollspy');
  const ssAtt = 'data-'.concat(vl.ns, 'scrollspy');
  const ssActiveClass = ''.concat(ssClass, '-active');
  const ssActiveMobileClass = ''.concat(ssClass, '-mobile--active');
  const ssPlaceholderClass = ''.concat(ssClass, '-placeholder');
  const ssCloseClass = ''.concat(ssClass, '__close');
  const ssToggleClass = ''.concat(ssClass, '__toggle');
  const ssToggleFixedClass = ''.concat(ssClass, '__toggle--fixed');
  const ssContentClass = ''.concat(ssClass, '__content');
  const ssContentAtt = 'data-'.concat(vl.ns, '-scrollspy-content');
  const regionClass$1 = ''.concat(vl.ns, 'region');
  const snItemClass = ''.concat(vl.ns, 'side-navigation__item');
  const globalHvisibleClass = 'js-iwgh3-bc--visible';
  const { body } = document;
  const ssIDAtt = 'data-'.concat(vl.ns, 'scrollspy-id');
  const ssDressedAtt = 'data-'.concat(vl.ns, 'scrollspy-dressed');
  const ssChildAtt = 'data-'.concat(vl.ns, 'child');
  const ssParentAtt = 'data-'.concat(vl.ns, 'parent');
  const ssMobileAtt = 'data-'.concat(vl.ns, 'scrollspy-mobile');
  const stickyOffsetTopAtt = 'data-'.concat(vl.ns, 'sticky-offset-top');
  const sideNavigation = ''.concat(vl.ns, 'side-navigation'); // Private functions

  const _closePopup = function _closePopup(placeholder, button) {
    vl.util.removeClass(placeholder, ssActiveMobileClass);
    vl.util.removeClass(body, `${vl.ns}u-no-overflow`);

    if (vl.util.exists(button, true, false)) {
      button.setAttribute('aria-expanded', false);
    }
  }; // Gets an element height

  const _getHeight = function _getHeight(element) {
    return Math.max(element.scrollHeight, element.offsetHeight, element.clientHeight);
  };

  const _scrollSpyMobile = function _scrollSpyMobile(elements, wrapper, contentWrapper) {
    const placeholder = document.createElement('div');
    const closeButton = document.createElement('button');
    const openButton = document.createElement('button');
    let wrapperHeight;
    const scrollSpyBtnLabel = wrapper.getAttribute(ssMobileAtt); // Generate close button

    vl.util.addClass(placeholder, ssPlaceholderClass);
    vl.util.wrap(wrapper, placeholder);

    if (vl.util.exists(placeholder)) {
      closeButton.setAttribute('type', 'button');
      closeButton.setAttribute('tabindex', '0');
      closeButton.innerHTML = 'Navigatie sluiten';
      vl.util.addClass(closeButton, ssCloseClass);
      placeholder.insertBefore(closeButton, placeholder.firstChild); // Generate toggle button

      wrapperHeight = _getHeight(contentWrapper);
      closeButton.addEventListener('click', (event) => {
        event.stopPropagation();

        _closePopup(placeholder, openButton);
      });

      if (vl.util.exists(contentWrapper)) {
        let openButtonOffsetHeight = 0;
        let bt;
        let otherParents;
        openButton.setAttribute('type', 'button');
        openButton.setAttribute('tabindex', '0');
        openButton.setAttribute('aria-expanded', 'false');
        openButton.innerHTML = scrollSpyBtnLabel || 'Navigatie';
        vl.util.addClass(openButton, ssToggleClass);
        vl.util.addClass(openButton, ''.concat(vl.ns, 'button'));
        vl.util.addClass(openButton, ''.concat(vl.ns, 'button--block'));
        contentWrapper.appendChild(openButton);
        openButton.addEventListener('click', (event) => {
          event.stopPropagation();
          event.target.setAttribute('aria-expanded', true);
          placeholder.setAttribute('tabindex', '1');
          vl.util.addClass(placeholder, ssActiveMobileClass);
          vl.util.addClass(body, ''.concat(vl.ns, 'u-no-overflow'));
          closeButton.focus();
        }); // Shady way to get offset

        bt = openButton;

        while (bt) {
          openButtonOffsetHeight = 0;
          bt = bt.offsetParent;
        } // Add height to offset

        openButtonOffsetHeight += 30; // Toggle fixed class to toggle

        window.addEventListener(
          'scroll',
          vl.util.debounce(() => {
            if (
              window.pageYOffset > openButtonOffsetHeight &&
              window.pageYOffset < openButtonOffsetHeight + wrapperHeight - document.documentElement.clientHeight
            ) {
              vl.util.addClass(openButton, ssToggleFixedClass);
            } else {
              vl.util.removeClass(openButton, ssToggleFixedClass);
            }
          }, 50),
          false,
        );
        vl.util.each(elements, (element) => {
          element.addEventListener('click', (event) => {
            if (element.hasAttribute(ssChildAtt)) {
              // Close all others
              otherParents = wrapper.querySelectorAll('['.concat(ssChildAtt, ']'));
              vl.util.each(otherParents, (parent) => {
                parent.setAttribute('aria-expanded', 'false');
              });
              element.setAttribute('aria-expanded', 'true');
            } else {
              _closePopup(placeholder, openButton);
            }

            event.stopPropagation();
          });
        });
        document.addEventListener('click', _closePopup(placeholder, openButton));
      }
    }
  };

  const ScrollSpy = /* #__PURE__ */ (function () {
    function ScrollSpy() {
      _classCallCheck(this, ScrollSpy);

      this.latestKnownScrollY = 0;
      this.ticking = false;
      this.parameters = {
        offset: 100,
      };
    }

    _createClass(ScrollSpy, [
      {
        key: '_requestTick',
        value: function _requestTick() {
          if (!this.ticking) {
            const self = this;
            window.requestAnimationFrame(() => {
              self._update();
            });
          }

          this.ticking = true;
        },
      },
      {
        key: '_scrollSpy',
        value: function _scrollSpy() {
          this.latestKnownScrollY = window.pageYOffset;

          this._requestTick();
        },
      },
      {
        key: '_update',
        value: function _update() {
          const _this = this;

          this.ticking = false;
          vl.util.each(this.elements, (element) => {
            _this._checkScrollSpy(element);
          });
        },
      },
      {
        key: '_checkScrollSpy',
        value: function _checkScrollSpy(element) {
          const hasBreadcrumb = element.getRootNode().querySelector('.'.concat(globalHvisibleClass));
          const initialOffset = this.scrollSpyWrapper.getAttribute(stickyOffsetTopAtt) || 75;
          let target;
          let currentScrollPosition;
          let bounds;
          let dataParent;
          let parent;
          const href = element.getAttribute('href'); // If the link is an empty # end here

          if (href === '#' && vl.util.exists(href)) {
            return;
          } // Check if global header breadcrumb is shown

          if (!vl.util.hasClass(this.scrollSpyWrapper, sideNavigation)) {
            if (vl.util.exists(hasBreadcrumb)) {
              this.scrollSpyWrapper.style.top = ''.concat(parseInt(initialOffset, 10) + 41, 'px');
            } else {
              this.scrollSpyWrapper.style.top = ''.concat(initialOffset, 'px');
            }
          } // Check if global header breadcrumb is shown

          target = element.getRootNode().querySelector(href);
          currentScrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
          bounds = {
            min: this._getOffsetTop(target),
            max: _getHeight(target) + this._getOffsetTop(target),
          };

          if (currentScrollPosition > bounds.min && currentScrollPosition < bounds.max) {
            const otherItems = this.scrollSpyWrapper.querySelectorAll('.'.concat(snItemClass, ' a'));
            vl.util.each(otherItems, (el) => {
              if (element !== el) {
                vl.util.removeClass(el, ssActiveClass);

                if (el.hasAttribute(ssChildAtt)) {
                  el.setAttribute('aria-expanded', false);
                }
              }
            });
            vl.util.addClass(element, ssActiveClass); // Parent detection

            dataParent = element.getAttribute(ssParentAtt);
            parent = this.scrollSpyWrapper.querySelector('['.concat(ssChildAtt, '="').concat(dataParent, '"]'));

            if (vl.util.exists(parent)) {
              parent.setAttribute('aria-expanded', true);
            }
          }
        },
        /**
         * Get an element's distance from the top of the Document.
         * @param  {Node} elem The element
         * @return {Number}    Distance from the top in pixels
         */
      },
      {
        key: '_getOffsetTop',
        value: function _getOffsetTop(element) {
          let location = 0;

          if (element.offsetParent) {
            do {
              location += element.offsetTop;
              element = element.offsetParent;
            } while (element);
          } else {
            location = element.offsetTop;
          }

          location -= this.parameters.offset;
          return location >= 0 ? location : 0;
        },
      },
      {
        key: 'dress',
        value: function dress(wrapper) {
          const _this2 = this;

          const id = vl.util.uniqueId();
          const correspondingRegion = wrapper.closest('.'.concat(regionClass$1));
          let scrollSpyContentWrapper = correspondingRegion.querySelector('['.concat(ssContentAtt, ']'));

          if (!vl.util.exists(scrollSpyContentWrapper)) {
            scrollSpyContentWrapper = correspondingRegion.querySelector('.'.concat(ssContentClass));
          }

          this.scrollSpyWrapper = wrapper;
          this.elements = wrapper.querySelectorAll('a[href^="#"]');
          wrapper.setAttribute(ssIDAtt, id);
          vl.util.addClass(wrapper, ssClass); // Only add scrollspy if all content is loaded

          vl.util.each(this.elements, (element) => {
            if (element.hasAttribute(ssChildAtt)) {
              element.setAttribute('aria-expanded', 'false');
            }
          }); // Initiate on small/xsmall breakpoints

          if (vl.util.exists(vl.breakpoint)) {
            if (vl.breakpoint.value === 'small' || vl.breakpoint.value === 'xsmall') {
              _scrollSpyMobile(this.elements, wrapper, scrollSpyContentWrapper);
            }
          }

          window.addEventListener(
            'scroll',
            () => {
              _this2._scrollSpy();
            },
            false,
          );

          this._scrollSpy();
        },
      },
      {
        key: 'dressAll',
        value: function dressAll() {
          const _this3 = this;

          const scrollSpies = document.querySelectorAll('['.concat(ssAtt, ']:not([').concat(ssDressedAtt, '])'));
          vl.util.each(scrollSpies, (scrollSpy) => {
            vl.util.addClass(scrollSpy, ssClass);

            _this3.dress(scrollSpy);
          });
        },
      },
    ]);

    return ScrollSpy;
  })();

  const snAtt = 'data-'.concat(vl.ns, 'side-navigation');
  const snClass = 'js-'.concat(vl.ns, 'side-navigation');
  const snScrollableAtt = 'data-'.concat(vl.ns, 'side-navigation-scrollable');
  const snScrollSpyAtt = 'data-'.concat(vl.ns, 'scrollspy');
  const snScrollSpyContentAtt = 'data-'.concat(vl.ns, 'scrollspy-content');
  const snScrollSpyClass = 'js-'.concat(vl.ns, 'scrollspy');
  const snStickyAtt = 'data-'.concat(vl.ns, 'sticky');
  const snStickyClass = 'js-'.concat(vl.ns, 'sticky');
  const snStickyOffsetHeight = 'data-'.concat(vl.ns, 'sticky-offset-top');

  const _setNavMinHeight = function _setNavMinHeight(element) {
    const viewportHeight = window.innerHeight;
    const maxHeight = viewportHeight - element.getAttribute(snStickyOffsetHeight) * 2;
    element.style.maxHeight = ''.concat(maxHeight, 'px');
  };

  const SideNavigation = /* #__PURE__ */ (function () {
    function SideNavigation() {
      _classCallCheck(this, SideNavigation);
    }

    _createClass(SideNavigation, [
      {
        key: 'dress',
        value: function dress(sideNav) {
          if (sideNav.hasAttribute(snScrollSpyAtt) || vl.util.hasClass(sideNav, snScrollSpyClass)) {
            vl.scrollspy = new ScrollSpy();
            vl.scrollspy.dress(sideNav);
          }

          if (sideNav.hasAttribute(snStickyAtt) || vl.util.hasClass(sideNav, snStickyClass)) {
            vl.sticky = new Sticky();
            vl.sticky.dress(sideNav);
          }

          if (vl.util.exists(ResizeSensor_min) && vl.util.exists(vl.sticky)) {
            new ResizeSensor_min(
              sideNav.getRootNode().querySelectorAll('['.concat(snScrollSpyContentAtt, ']')),
              vl.util.debounce(vl.sticky.handleEvent, 50),
            );
          }

          if (!sideNav.hasAttribute(snScrollableAtt) && sideNav.hasAttribute(snStickyOffsetHeight)) {
            _setNavMinHeight(sideNav);

            window.addEventListener(
              'resize',
              vl.util.debounce(() => {
                _setNavMinHeight(sideNav);
              }, 200),
            );
          }
        },
      },
      {
        key: 'dressAll',
        value: function dressAll() {
          const _this = this;

          let allSideNavigations = document.querySelectorAll(
            '['.concat(snAtt, ']:not([data-').concat(vl.ns, 'js-dress="false"])'),
          );

          if (!vl.util.exists(allSideNavigations)) {
            allSideNavigations = document.querySelectorAll(
              '.'.concat(snClass, ':not([data-').concat(vl.ns, 'js-dress="false"])'),
            );
          }

          vl.util.each(allSideNavigations, (sideNav) => {
            _this.dress(sideNav);
          });
        },
      },
    ]);

    return SideNavigation;
  })();

  if (!('sideNavigation' in vl)) {
    vl.sideNavigation = new SideNavigation();
    window.addEventListener('load', () => {
      vl.sideNavigation.dressAll();
    });
  }

  return SideNavigation;
});
