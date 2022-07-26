import {html, css, LitElement, unsafeCSS, nothing} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './style/vl-breadcrumb.scss';

@customElement('vl-breadcrumb')
export class VlBreadcrumb extends LitElement {
    static get styles() {
        // console.log('styles', styles);
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    firstUpdated() {
        const observer = new MutationObserver(() => {
            this.requestUpdate();
        });
        observer.observe(this, {subtree: true, childList: true});
    }

    render() {
        return html`
            <nav aria-label="U bent hier: " class="vl-breadcrumb">
                <ol class="vl-breadcrumb__list">
                    ${[...Array.from(this.children)].map((child, index) => {
            const name = `item-${index}`;
            child.setAttribute('slot', name);
            return html`
                            <li class="vl-breadcrumb__list__item">
                                ${index === 0
                ? nothing
                : html`<span
                                          class="vl-breadcrumb__list__item__separator"
                                          aria-hidden="true"
                                      ></span>`}
                                <slot name=${name}></slot>
                            </li>
                        `;
        })}
                </ol>
            </nav>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-breadcrumb': VlBreadcrumb;
    }
}
