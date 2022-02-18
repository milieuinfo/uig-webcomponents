import { html } from 'lit-html';
import { docsIntro, TYPES, CATEGORIES } from '../../../.storybook/utils.js';
import '.';

export default {
  title: 'custom-elements/vl-description-data',
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'description-data',
          intro:
            'Use the description data component to give more information about the content on the page, for example about a contact person, an entity or a publication.',
        }),
      },
    },
  },
  args: {
    size: '',
    maxSize: 12,
    mediumSize: 3,
    mediumMaxSize: 12,
    smallSize: 4,
    smallMaxSize: 12,
    extraSmallSize: 12,
    extraSmallMaxSize: 12,
  },
  argTypes: {
    size: {
      name: 'data-vl-items-size',
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on large screens, typically desktop.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: '12 / number of data items' },
      },
    },
    maxSize: {
      name: 'data-vl-items-max-size',
      description:
        'The maximum (denominator) that will be evaluated against on large screens, typically desktop, for each data item.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 12 },
      },
    },
    mediumSize: {
      name: 'data-vl-items-medium-size',
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on medium screens, typically tablet..',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 10 },
      },
    },
    mediumMaxSize: {
      name: 'data-vl-items-medium-max-size',
      description:
        'The maximum (denominator) that will be evaluated against on medium screens, typically tablet, for each data item.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 12 },
      },
    },
    smallSize: {
      name: 'data-vl-items-small-size',
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on small screens, typically mobile.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 12 },
      },
    },
    smallMaxSize: {
      name: 'data-vl-items-small-max-size',
      description:
        'The maximum (denominator) that will be evaluated against on small screens, typically mobile, for each data item.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 12 },
      },
    },
    extraSmallSize: {
      name: 'data-vl-items-extra-small-size',
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on very small screens.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 12 },
      },
    },
    extraSmallMaxSize: {
      name: 'data-vl-items-extra-small-max-size',
      description: 'The maximum (denominator) against which to evaluate for very small screens, for each data item.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: 12 },
      },
    },
  },
};

export const Default = ({
  size,
  maxSize,
  mediumSize,
  mediumMaxSize,
  smallSize,
  smallMaxSize,
  extraSmallSize,
  extraSmallMaxSize,
}) =>
  html`
    <vl-description-data
      data-vl-items-size=${size}
      data-vl-items-max-size=${maxSize}
      data-vl-items-medium-size=${mediumSize}
      data-vl-items-medium-max-size=${mediumMaxSize}
      data-vl-items-small-size=${smallSize}
      data-vl-items-small-max-size=${smallMaxSize}
      data-vl-items-extra-small-size=${extraSmallSize}
      data-vl-items-extra-small-max-size=${extraSmallMaxSize}
    >
      <vl-description-data-item data-vl-label="Uitgever" data-vl-value="Kind en Gezin"></vl-description-data-item>
      <vl-description-data-item
        data-vl-label="Publicatiedatum"
        data-vl-value="Augustus 2018"
      ></vl-description-data-item>
      <vl-description-data-item data-vl-label="Publicatietype" data-vl-value="Brochure"></vl-description-data-item>
      <vl-description-data-item
        data-vl-label="Categorie"
        data-vl-value="Kinderen en jongeren"
      ></vl-description-data-item>
    </vl-description-data>
  `;
