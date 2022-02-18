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

  static get properties() {
    return {
      size: { type: String, attribute: 'data-vl-items-size', reflect: true },
      maxSize: { type: String, attribute: 'data-vl-items-max-size', reflect: true },
      mediumSize: { type: String, attribute: 'data-vl-items-medium-size', reflect: true },
      mediumMaxSize: { type: String, attribute: 'data-vl-items-medium-max-size', reflect: true },
      smallSize: { type: String, attribute: 'data-vl-items-small-size', reflect: true },
      smallMaxSize: { type: String, attribute: 'data-vl-items-small-max-size', reflect: true },
      extraSmallSize: { type: String, attribute: 'data-vl-items-extra-small-size', reflect: true },
      extraSmallMaxSize: { type: String, attribute: 'data-vl-items-extra-small-max-size', reflect: true },
    };
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
          return html`<div
            is="vl-column"
            data-vl-size=${this.size ? this.size : 12 / this.children.length}
            data-vl-max-size=${this.maxSize}
            data-vl-medium-size=${this.mediumSize}
            data-vl-medium-max-size=${this.mediumMaxSize}
            data-vl-small-size=${this.smallSize}
            data-vl-small-max-size=${this.smallMaxSize}
            data-vl-extra-small-size=${this.extraSmallSize}
            data-vl-extra-small-max-size=${this.extraSmallMaxSize}
          >
            <slot name=${name}></slot>
          </div>`;
        })}
      </div>
    </div>`;
  }
}

customElements.define('vl-description-data', VlDescriptionData);
