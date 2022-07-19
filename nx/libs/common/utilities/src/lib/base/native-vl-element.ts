import { vlElement } from './vl-element';
import { Class } from '../type/types';

export const nativeVlElement = (SuperClass: Class) => {
    /**
     * NativeVlElement
     * @class
     * @classdesc De root element class voor native HTML elementen.
     */
    return class NativeVlElement extends vlElement(SuperClass) {
        /**
         * NativeVlElement constructor. Deze geeft geen html mee zoals bij {VlElement},
         * aangezien {NativeVlElement}en geen shadow dom mogen aanmaken.
         *
         * @return {void}
         */
        constructor() {
            super(null);
        }

        /**
         * DOM element getter.
         *
         * @return {Element}
         */
        get _element() {
            return this;
        }
    };
};
