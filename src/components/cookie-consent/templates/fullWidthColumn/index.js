import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

export const fwColumn = (children, slot) =>
  html` <div slot=${ifDefined(slot)} is="vl-column" data-vl-size="12" data-vl-medium-size="12">${children}</div>`;
