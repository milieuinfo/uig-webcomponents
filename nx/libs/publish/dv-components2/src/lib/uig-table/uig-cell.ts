import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { UigElement } from '../uig-element/uig-elements';
import {LandingElement} from "../../../../../../apps/exhibit/src/app/landing/landing.element";

// @customElement('uig-cell')
export class UigCell extends UigElement {

  render() {
    return html`<td>
      <slot></slot>
    </td>`;
  }
}

customElements.define('uig-cell', UigCell, {extends: 'td'});
