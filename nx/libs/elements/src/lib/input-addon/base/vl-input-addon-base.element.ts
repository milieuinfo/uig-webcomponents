import { Class, vlElement } from '@uig/common/utilities';

/**
 * Gebruik de input addon mixin in combinatie met een input addon elementen.
 * @mixin vlInputAddonElement
 *
 * @param {Object} SuperClass
 * @return {Object} SuperClass
 */
export const vlInputAddonBaseElement = (SuperClass: Class): Class => {
    return class extends vlElement(SuperClass) {
        connectedCallback() {
            this.classList.add('vl-input-addon');
        }
    };
};
