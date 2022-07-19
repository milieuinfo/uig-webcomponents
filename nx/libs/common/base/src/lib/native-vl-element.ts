import '@ungap/custom-elements/min.js';
import '@govflanders/vl-ui-util/dist/js/util.js';
import '@govflanders/vl-ui-core/dist/js/core.js';

export const nativeVlElement = (SuperClass: Class) => {
  /**
   * NativeVlElement
   * @class
   * @classdesc De root element class voor native HTML elementen.
   */
  class NativeVlElement extends vlElement(SuperClass) {
    /**
     * NativeVlElement constructor. Deze geeft geen html mee zoals bij {VlElement},
     * aangezien {NativeVlElement}en geen shadow dom mogen aanmaken.
     *
     * @return {void}
     */
    constructor() {
      super();
    }

    /**
     * DOM element getter.
     *
     * @return {Element}
     */
    get _element() {
      return this;
    }
  }

  return NativeVlElement;
};
