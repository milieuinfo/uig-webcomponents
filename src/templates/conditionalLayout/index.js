import { html } from 'lit';

export const conditionalLayout = (isInConsent, children) =>
  isInConsent ? html`${children}` : html`<div is="vl-layout">${children}</div>`;
