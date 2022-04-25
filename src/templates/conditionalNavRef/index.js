import { html } from 'lit';

export const conditionalNavRef = (withNavigationRef, children) =>
  withNavigationRef ? html`<div is="vl-side-navigation-reference">${children}</div>` : html`${children}`;
