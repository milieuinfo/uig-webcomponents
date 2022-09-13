import { BaseElementOfType, define } from '@uig/common/utilities';
import styles from './style/vl-contact-card.scss';

/**
 * VlContactCard
 * @class
 * @classdesc Gebruik een contact card om contactgegevens van een overheidsdienst te tonen.
 *
 * @extends HTMLElement
 * @mixes vlElement
 */
export class VlContactCardComponent extends BaseElementOfType(HTMLElement) {
    constructor() {
        super(`
        <style>
            ${styles}
        </style>
        <div class="vl-contact-data">
            <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="3" data-vl-medium-size="12">
                    <slot name="info"></slot>
                </div>
                <div is="vl-column" data-vl-size="8" data-vl-medium-size="12" data-vl-push="1" class="vl-push--reset--m">
                    <slot name="properties"></slot>
                </div>
            </div>
        </div>
     `);
    }
}

define('vl-contact-card', VlContactCardComponent);
