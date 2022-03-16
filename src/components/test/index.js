import { html, LitElement } from 'lit';

export class SimpleGreeting extends LitElement {
  static get properties() {
    return { open: { type: Boolean }, showContent: { type: Boolean } };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'open':
          this.showContent = this.open;
          break;

        default:
          break;
      }
    });
  }

  render() {
    return html`<button
        @click=${() => {
          if (this.open === undefined) {
            this.showContent = !this.showContent;
          }
          this.dispatchEvent(
            new CustomEvent('vl-open', {
              bubbles: true,
              composed: true,
              detail: {},
            }),
          );
        }}
      >
        Toggle</button
      >${this.showContent ? html`<p>Content</p>` : null}`;
  }
}
customElements.define('vl-test', SimpleGreeting);
