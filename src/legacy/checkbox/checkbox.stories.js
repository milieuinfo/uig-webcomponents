import { html } from "lit-html";
import "../checkbox";
import linkStyles from '../../components/link/styles.scss';
import { docsIntro, stylesheet } from '../../../.storybook/utils.js';


export default {
  title: 'legacy/vl-checkbox',
  decorators: [(story) => html`${stylesheet(linkStyles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'checkbox',
          isLegacy: true,
        }),
      },
    },
  },
};

export const Default = () => html`<a
  is="vl-link"
  target="_blank"
  data-vl-inline
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlCheckbox.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;

// const defaultArgs = {
//   block: false,
//   disabled: false,
//   error: false,
//   label: "test label",
//   name: "test name",
//   single: false,
//   switch: false,
//   value: "test value",
// };

// export default {
//   title: "native-elements/vl-checkbox",
//   args: { ...defaultArgs },
//   argTypes: {
//     block: {
//       name: "data-vl-block",
//       type: { summary: "boolean" },
//       description:
//         "Attribuut wordt gebruikt om ervoor te zorgen dat de checkbox getoond wordt als een block element en bijgevol de breedte van de parent zal aannemen.",
//       table: {
//         defaultValue: { summary: "false" },
//       },
//     },
//     disabled: {
//       name: "data-vl-disabled",
//       type: { summary: "boolean" },
//       description:
//         "Attribuut wordt gebruikt om te voorkomen dat de gebruiker de checkbox kan selecteren.",
//       table: {
//         defaultValue: { summary: "false" },
//       },
//     },
//     error: {
//       name: "data-vl-error",
//       type: { summary: "boolean" },
//       description:
//         "Attribuut wordt gebruikt om aan te duiden dat de checkbox verplicht is.",
//       table: {
//         defaultValue: { summary: "false" },
//       },
//     },
//     label: {
//       name: "data-vl-label",
//       type: { summary: "string" },
//       description:
//         "Attribuut wordt gebruikt om label te definiëren via een attribuut ter vervanging van een slot element.",
//       table: {
//         defaultValue: { summary: "" },
//       },
//     },
//     name: {
//       name: "data-vl-name",
//       type: { summary: "boolean" },
//       description: "Attribuut wordt gebruikt om checkbox te identificeren.",
//       table: {
//         defaultValue: { summary: "false" },
//       },
//     },
//     single: {
//       name: "data-vl-single",
//       type: { summary: "boolean" },
//       description:
//         "Attribuut wordt gebruikt om alleen een checkbox te tonen zonder label.",
//       table: {
//         defaultValue: { summary: "false" },
//       },
//     },
//     switch: {
//       name: "data-vl-switch",
//       type: { summary: "boolean" },
//       description:
//         "Attribuut wordt gebruikt om een checkbox variant te genereren met de stijl van een switch.",
//       table: {
//         defaultValue: { summary: "false" },
//       },
//     },
//     value: {
//       name: "data-vl-value",
//       type: { summary: "string" },
//       description: "Attribuut wordt gebruikt om de checkbox waarde te bepalen.",
//       table: {
//         defaultValue: { summary: "" },
//       },
//     },
//   },
// };

// const stylesheet = html`<style>
//   ${styles}
// </style>`;

// const buttonWrap = (props, children) => {
//   return html`
//     ${stylesheet}
//     <vl-checkbox
//       id="checkbox"
//       ?data-vl-block=${props.block}
//       ?data-vl-disabled=${props.disabled}
//       ?data-vl-error=${props.error}
//       data-vl-label=${props.label}
//       data-vl-name=${props.name}
//       ?data-vl-single=${props.single}
//       ?data-vl-switch=${props.switch}
//       data-vl-value=${props.value}
//     ></vl-checkbox>
//   `;
// };

// export const Default = (props) => html`${buttonWrap(props, props.content)}`;

// export const Switch = () => html`
//   ${stylesheet}
//   <vl-checkbox
//     id="checkbox-switch"
//     data-vl-label="Instellingen blokkeren"
//     data-vl-switch=""
//     data-vl-single=""
//   ></vl-checkbox>
// `;

// export const MultipleCheckboxes = () => html`
//   ${stylesheet}
//   <vl-checkbox
//     id="checkbox-multi-1"
//     data-vl-label="Optie 1"
//     data-vl-value="1"
//     data-vl-checked="[]"
//   ></vl-checkbox>
//   <vl-checkbox
//     id="checkbox-multi-2"
//     data-vl-label="Optie 2"
//     data-vl-value="2"
//     data-vl-checked="[]"
//   ></vl-checkbox>
//   <vl-checkbox
//     id="checkbox-multi-3"
//     data-vl-label="Optie 3"
//     data-vl-value="3"
//     data-vl-checked="[]"
//   ></vl-checkbox>
// `;

// export const MultipleCheckboxesWithDefaultsChecked = () => html`
//   ${stylesheet}
//   <vl-checkbox
//     id="checkbox-multi-st-1"
//     data-vl-label="Optie 1"
//     data-vl-value="1"
//     data-vl-checked="[2,3]"
//   ></vl-checkbox>
//   <vl-checkbox
//     id="checkbox-multi-st-2"
//     data-vl-label="Optie 2"
//     data-vl-value="2"
//     data-vl-checked="[2,3]"
//   ></vl-checkbox>
//   <vl-checkbox
//     id="checkbox-multi-st-3"
//     data-vl-label="Optie 3"
//     data-vl-value="3"
//     data-vl-checked="[2,3]"
//   ></vl-checkbox>
// `;

// export const WithSlotElement = () => html`
//   ${stylesheet}
//   <vl-checkbox id="checkbox-slot" data-vl-value="1">
//     <span>Optie <strong>1</strong></span>
//   </vl-checkbox>
//   <vl-checkbox id="checkbox-slot-switch" data-vl-switch="">
//     <span>Optie <strong>2</strong></span>
//   </vl-checkbox>
// `;
