import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { UigElement } from '../uig-element/uig-elements';

@customElement('uig-row')
export class UigRow extends UigElement {

  render() {
    return html`<tr>
      <slot></slot>
    </tr>`;
  }
}
