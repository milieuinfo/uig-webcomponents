import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { UigElement } from '../uig-element/uig-elements';

@customElement('uig-table')
export class UigTable extends UigElement {

  render() {
    return html`<table>
      <slot></slot>
    </table>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "uig-table": UigTable;
  }
}
