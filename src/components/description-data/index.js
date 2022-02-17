import { html, css, LitElement, unsafeCSS } from 'lit';
import '../grid';
import styles from './styles.scss';
import './components/description-data-item';

export class VlDescriptionData extends LitElement {
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
    return html`<div class="vl-description-data">
      <div is="vl-grid">
        ${[...this.children].map((child, index) => {
          const name = `item-${index}`;
          child.setAttribute('slot', name);
          return html`<div is="vl-column" data-vl-size=${12 / this.children.length}>
            <slot name=${name}></slot>
          </div>`;
        })}
      </div>
    </div>`;
  }
}

customElements.define('vl-description-data', VlDescriptionData);
