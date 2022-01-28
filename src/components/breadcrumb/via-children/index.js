import { html, css, LitElement, unsafeCSS } from 'lit';
import styles from '../styles.scss';
import './item';

export class VlTest extends LitElement {
  static get styles() {
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

    observer.observe(this, { subtree: true, childList: true });
  }

  render() {
    return html`<nav aria-label="U bent hier: " class="vl-breadcrumb">
      <ol class="vl-breadcrumb__list">
        ${[...this.children].map((child, index) => {
          const name = `item-${index}`;
          child.setAttribute('slot', name);
          return html` <li class="vl-breadcrumb__list__item">
            <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
            <slot name=${name}></slot>
          </li>`;
        })}
      </ol>
    </nav>`;
  }
}

customElements.define('vl-breadcrumb-test', VlTest);
