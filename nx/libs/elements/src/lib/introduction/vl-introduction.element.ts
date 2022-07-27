import { vlElement, define } from '@uig/common/utilities';

/**
 * VlIntroduction
 * @class
 * @classdesc Gebruik deze component als introductie van de website. Deze component krijgt een opvallende layout zodat de gebruiker zijn aandacht getrokken wordt.
 *
 * @extends HTMLParagraphElement
 * @mixes vlElement 
 */
export class VlIntroduction extends vlElement(HTMLParagraphElement) {
    connectedCallback() {
        this.classList.add('vl-introduction');
    }
}

define("vl-introduction", VlIntroduction, { extends: "p" });
