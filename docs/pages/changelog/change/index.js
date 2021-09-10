import { html } from "lit";

export const change = ({ version, date, children }) => html`
  <div is="vl-column" data-vl-size="8">
    <h2 is="vl-h2" style="margin-bottom: 3rem">${version} - ${date}</h2>
    <vl-typography>${children}</vl-typography>
  </div>
`;
