import { html, nothing } from 'lit';

export const header = (withoutFunctionalHeader) =>
  html`${withoutFunctionalHeader
    ? nothing
    : html`<vl-functional-header
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Cookieverklaring"
        data-vl-link="https://omgeving.vlaanderen.be"
      ></vl-functional-header>`}`;
