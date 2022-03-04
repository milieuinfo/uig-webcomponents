import { LitElement } from 'lit';

export class VlTabsPaneNew extends LitElement {
  static get properties() {
    return {
      title: { type: String, attribute: 'data-vl-title', reflect: true },
      tabId: { type: String, attribute: 'data-vl-id', reflect: true },
    };
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('vl-tabs-pane-new', VlTabsPaneNew);
