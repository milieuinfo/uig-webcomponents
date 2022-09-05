import { html, css, LitElement, unsafeCSS } from 'lit';
import { define } from '@uig/common/utilities';
import styles from './style/vl-breadcrumb.scss';

export class VlBreadcrumbItemComponent extends LitElement {
    public href = '';

    static get properties() {
        return {
            href: { type: String, attribute: 'data-vl-href', reflect: true },
        };
    }

    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    render() {
        return html`
            <a href=${this.href} class="vl-breadcrumb__list__item__cta">
                <slot></slot>
            </a>
        `;
    }
}

define('vl-breadcrumb-item', VlBreadcrumbItemComponent);

declare global {
    interface HTMLElementTagNameMap {
        'vl-breadcrumb-item': VlBreadcrumbItemComponent;
    }
}
