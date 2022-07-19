import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { UigElement } from '../uig-element/uig-elements';
import {ButtonsElement} from "../../../../../../apps/exhibit/src/app/landing/buttonsElement";

// @customElement('uig-cell')
export class UigCell extends UigElement {

  render() {
    return html`<td>
      <slot></slot>
    </td>`;
  }
}

customElements.define('uig-cell', UigCell, {extends: 'td'});
