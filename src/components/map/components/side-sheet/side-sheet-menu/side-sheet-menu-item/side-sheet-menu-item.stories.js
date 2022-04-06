import { html } from 'lit-html';
import '../../../../map';
import { docsIntro, TYPES, CATEGORIES } from '../../../../../../../.storybook/utils.js';

export default {
  title: 'custom-elements/vl-map/vl-map-side-sheet/vl-map-side-sheet-menu/vl-map-side-sheet-menu-item',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'map',
          intro: 'The menu item associated with a side sheet.',
        }),
      },
    },
  },
  args: { title: 'Terug naar resultaten', href: '/' },
  argTypes: {
    title: {
      name: 'data-vl-title',
      type: { summary: TYPES.STRING },
      description: 'Used as the title of a menu item.',
      table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: 'Terug' } },
    },
    href: {
      name: 'data-vl-href',
      type: { summary: TYPES.STRING },
      description: 'Used to link the link to a menu item via the href attribute.',
      table: { category: CATEGORIES.ATTRIBUTES, defaultValue: { summary: '#' } },
    },
  },
};
export const Default = ({ title, href }) => html`
  <vl-map id="map">
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-side-sheet>
      <vl-map-side-sheet-menu>
        <vl-map-side-sheet-menu-item data-vl-title=${title} data-vl-href=${href}
          ><span>Gelieve een resultaat aan te maken</span></vl-map-side-sheet-menu-item
        >
      </vl-map-side-sheet-menu>
    </vl-map-side-sheet>
  </vl-map>
`;
