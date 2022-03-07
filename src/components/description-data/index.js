import { html, css, LitElement, unsafeCSS } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
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
      size: { type: Number, attribute: 'data-vl-items-size', reflect: true },
      maxSize: { type: Number, attribute: 'data-vl-items-max-size', reflect: true },
      mediumSize: { type: Number, attribute: 'data-vl-items-medium-size', reflect: true },
      mediumMaxSize: { type: Number, attribute: 'data-vl-items-medium-max-size', reflect: true },
      smallSize: { type: Number, attribute: 'data-vl-items-small-size', reflect: true },
      smallMaxSize: { type: Number, attribute: 'data-vl-items-small-max-size', reflect: true },
      extraSmallSize: { type: Number, attribute: 'data-vl-items-extra-small-size', reflect: true },
      extraSmallMaxSize: { type: Number, attribute: 'data-vl-items-extra-small-max-size', reflect: true },
    };
  }

  firstUpdated() {
    const observer = new MutationObserver(() => {
      this.requestUpdate();
    });

    observer.observe(this, { subtree: true, childList: true });
  }

  render() {
    this.size = this.size || 12 / this.children.length;

    return html`<div class="vl-description-data">
      <div is="vl-grid">
        ${[...this.children].map((child, index) => {
          const name = `item-${index}`;
          child.setAttribute('slot', name);
          return html`<div
            is="vl-column"
            data-vl-size=${this.size}
            data-vl-max-size=${ifDefined(this.maxSize)}
            data-vl-medium-size=${ifDefined(this.mediumSize)}
            data-vl-medium-max-size=${ifDefined(this.mediumMaxSize)}
            data-vl-small-size=${ifDefined(this.smallSize)}
            data-vl-small-max-size=${ifDefined(this.smallMaxSize)}
            data-vl-extra-small-size=${ifDefined(this.extraSmallSize)}
            data-vl-extra-small-max-size=${ifDefined(this.extraSmallMaxSize)}
          >
            <slot name=${name}></slot>
          </div>`;
        })}
      </div>
    </div>`;
  }
}

customElements.define('vl-description-data', VlDescriptionData);
