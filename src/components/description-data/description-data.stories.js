import { html } from 'lit-html';
import '../description-data';
import styles from './styles.scss';
import { stylesheet, docsIntro, CATEGORIES, TYPES } from '../../../.storybook/utils.js';
import '../grid';
import './via-props';
import './via-children';

export default {
  title: 'native-elements/vl-description-data',
  decorators: [(story) => html` ${stylesheet(`${styles}`)}${story()} `],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['description-data'],
          root: 'description-data',
          intro:
            'Use the description data component to give more information about the content on the page, for example about a contact person, an entity or a publication.',
        }),
      },
    },
  },
  args: {
    label: true,
    labelText: '',
    value: true,
    toggleBlock: true,
    items: [
      { label: 'Uitgever', value: 'Kind en Gezin' },
      { label: 'Publicatiedatum', value: 'Augustus 2018' },
      { label: 'Publicatietype', value: 'Brochure' },
      { label: 'Categorie', value: 'Kinderen en jongeren' },
    ],
    itemsSize: 3,
  },
  argTypes: {
    label: {
      name: 'data-vl-label',
    },
    value: {
      name: 'data-vl-value',
    },
  },
};

export const Legacy = ({ label, value, toggleBlock }) => html`<div is="vl-description-data">
  <div is="vl-grid">
    ${toggleBlock
      ? html` <div is="vl-column" data-vl-size="3">
          <span ?data-vl-label=${label}>Uitgever</span>
          <span ?data-vl-value=${value}>Kind en Gezin</span>
        </div>`
      : null}
    <div is="vl-column" data-vl-size="3">
      <span ?data-vl-label=${label}>Publicatiedatum</span>
      <span ?data-vl-value=${value}>Augustus 2018</span>
    </div>
    <div is="vl-column" data-vl-size="3">
      <span ?data-vl-label=${label}>Publicatietype</span>
      <span ?data-vl-value=${value}>Brochure</span>
    </div>
    <div is="vl-column" data-vl-size="3">
      <span ?data-vl-label=${label}>Categorie</span>
      <span ?data-vl-value=${value}>Kinderen en jongeren</span>
    </div>
  </div>
</div>`;

export const ViaProps = ({ items, itemsSize, toggleBlock }) =>
  html`<vl-via-props data-vl-items-size=${itemsSize} .items=${items}></vl-via-props>`;

export const viaChildren = ({ toggleBlock, labelText }) =>
  html`<vl-via-children>
    ${toggleBlock
      ? html`<vl-description-data-item
          data-vl-label=${labelText}
          data-vl-value="Kind en Gezin"
        ></vl-description-data-item>`
      : null}
    <vl-description-data-item data-vl-label="Publicatiedatum" data-vl-value="Augustus 2018"></vl-description-data-item>
    <vl-description-data-item data-vl-label="Publicatietype" data-vl-value="Brochure"></vl-description-data-item>
    <vl-description-data-item data-vl-label="Categorie" data-vl-value="Kinderen en jongeren"></vl-description-data-item>
  </vl-via-children>`;
