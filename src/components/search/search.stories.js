// import { html } from "lit-html";
// import "../search";
// import styles from "./styles.scss";

// const defaultArgs = {
//   label: "Label",
//   submitLabel: "Test Label",
//   block: false,
//   inline: false,
//   alt: false,
// };

// export default {
//   title: "custom-elements/vl-search",
//   args: { ...defaultArgs },
//   argTypes: {
//     label: {
//       name: "data-vl-label",
//       type: { summary: "string" },
//       description: "Attribuut wordt gebruikt als label voor zoekcriteria.",
//       table: {
//         defaultValue: { summary: "" },
//       },
//     },
//     submitLabel: {
//       name: "data-vl-submit-label",
//       type: { summary: "string" },
//       description: "Attribuut wordt gebruikt als label voor de submit knop.",
//       table: {
//         defaultValue: { summary: "" },
//       },
//     },
//     block: {
//       name: "data-vl-block",
//       type: { summary: "boolean" },
//       description:
//         "Attribuut duidt aan dat een breed zoekveld met knop wordt getoond. Dit is de standaardweergave.",
//       table: {
//         defaultValue: { summary: "false" },
//       },
//     },
//     inline: {
//       name: "data-vl-inline",
//       type: { summary: "boolean" },
//       description:
//         "Attribuut duidt aan dat een smal zoekveld met kleine knop wordt gebruikt.",
//       table: {
//         defaultValue: { summary: "false" },
//       },
//     },
//     alt: {
//       name: "data-vl-alt",
//       type: { summary: "boolean" },
//       description:
//         "Attribuut bepaalt of de alternatieve weergave (witte achtergrond) wordt gebruikt. Alleen relevant in combinatie met data-vl-block.",
//       table: {
//         defaultValue: { summary: "false" },
//       },
//     },
//   },
// };

// const stylesheet = html`<style>
//   ${styles}
// </style>`;

// const buttonWrap = (props) => {
//   return html`
//     ${stylesheet}
//     <vl-search
//       id="search-inline"
//       ?data-vl-inline=${props.inline}
//       ?data-vl-block=${props.block}
//       ?data-vl-alt=${props.alt}
//       data-vl-label=${props.label}
//       data-vl-submit-label=${props.submitLabel}
//     ></vl-search>
//   `;
// };

// export const Default = (props) => html`${buttonWrap(props, props.content)}`;

// export const SearchBlockWithCustomLabelSLot = () => html`
//   ${stylesheet}
//   <vl-search id="search-block-slot-label" data-vl-block="">
//     <span slot="label"><strong>Foo</strong></span>
//     <span slot="submit-label"><strong>Bar</strong></span>
//   </vl-search>
// `;

// export const SearchInlineWithSelect = () => html`
//   ${stylesheet}
//   <vl-search id="search-inline-slot-input" data-vl-inline="">
//     <select is="vl-select" slot="input" data-vl-block="" data-vl-select="">
//       <option value="Belgium">België</option>
//       <option value="Germany">Duitsland</option>
//       <option value="France">Frankrijk</option>
//     </select>
//   </vl-search>
// `;

// export const SearchWithSelect = () => html`
//   ${stylesheet}
//   <vl-search id="search-block-slot-input" data-vl-block="">
//     <select is="vl-select" slot="input" data-vl-block="" data-vl-select="">
//       <option value="Belgium">België</option>
//       <option value="Germany">Duitsland</option>
//       <option value="France">Frankrijk</option>
//     </select>
//   </vl-search>
// `;
