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

  onSlotChange() {
    const items = [...this.querySelectorAll('vl-breadcrumb-item')];
    items.forEach((item, index) => {
      item.isLastItem = items.length === index + 1;
    });
  }

  render() {
    return html`<nav aria-label="U bent hier: " class="vl-breadcrumb">
      <ol class="vl-breadcrumb__list">
        <slot @slotchange=${this.onSlotChange}></slot>
      </ol>
    </nav>`;
  }
}

customElements.define('vl-breadcrumb-test', VlTest);
