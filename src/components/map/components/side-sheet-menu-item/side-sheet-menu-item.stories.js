import { html } from "lit-html";
import "../../../map";

export default {
  title: "custom-elements/vl-map/vl-map-side-sheet-menu-item",
  args: { title: "Terug naar resultaten", href: "/" },
  argTypes: {
    title: {
      name: "data-vl-title",
      type: { summary: "string" },
      description: "Attribuut wordt gebruikt als titel van een menu item.",
      table: {
        defaultValue: { summary: "Terug" },
      },
    },
    href: {
      name: "data-vl-href",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om via het href attribuut de link te koppelen aan een menu item.",
      table: {
        defaultValue: { summary: "#" },
      },
    },
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
export const Default = ({ title, href }) => html`
  <vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-side-sheet>
      <vl-map-side-sheet-menu>
        <vl-map-side-sheet-menu-item data-vl-title=${title} data-vl-href=${href}
          ><span
            >Gelieve een resultaat aan te maken</span
          ></vl-map-side-sheet-menu-item
        >
      </vl-map-side-sheet-menu>
    </vl-map-side-sheet>
  </vl-map>
`;
