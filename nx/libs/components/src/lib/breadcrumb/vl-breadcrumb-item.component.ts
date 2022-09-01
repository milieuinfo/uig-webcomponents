import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './style/vl-breadcrumb.scss';

@customElement('vl-breadcrumb-item')
export class VlBreadcrumbItem extends LitElement {
    @property({ type: String, attribute: 'data-vl-href', reflect: true })
    public href = '';

    // static get properties() {
    //     return {
    //         href: { type: String, attribute: 'data-vl-href', reflect: true },
    //     };
    // }

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

declare global {
    interface HTMLElementTagNameMap {
        'vl-breadcrumb-item': VlBreadcrumbItem;
    }
}
