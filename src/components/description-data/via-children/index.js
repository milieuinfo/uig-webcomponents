import { html, css, LitElement, unsafeCSS } from 'lit';
import '../../grid';
import styles from '../styles.scss';
import './item';

export class VlDescriptionDataViaChildren extends LitElement {
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
          const id = `item-${index}`;
          child.setAttribute('slot', id);
          return html`<div is="vl-column" data-vl-size="3">
            <slot name=${id}></slot>
          </div>`;
        })}
      </div>
    </div>`;
  }
}

customElements.define('vl-via-children', VlDescriptionDataViaChildren);
