import { html, LitElement, nothing } from "lit";
export class Pane extends LitElement {
  static properties = {
    isActive: { type: Boolean },
    name: { type: String, attribute: "data-vl-name", reflect: true },
  };

  updated(changed) {
    [...changed].forEach(
      ([prop]) => prop === "name" && this.parentElement.onSlotChange()
    );
  }

  render() {
    return html`${this.isActive ? html`<slot></slot>` : nothing}`;
  }
}

customElements.define("vl-wizard-pane", Pane);
