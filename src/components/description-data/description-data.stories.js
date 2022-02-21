import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
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
    size: undefined,
    maxSize: undefined,
    mediumSize: undefined,
    mediumMaxSize: undefined,
    smallSize: undefined,
    smallMaxSize: undefined,
    extraSmallSize: undefined,
    extraSmallMaxSize: undefined,
  },
  argTypes: {
    size: {
      name: 'data-vl-items-size',
      type: { name: TYPES.NUMBER, required: false },
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
      type: { name: TYPES.NUMBER, required: false },
      description:
        'The maximum (denominator) that will be evaluated against on large screens, typically desktop, for each data item.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: undefined },
      },
    },
    mediumSize: {
      name: 'data-vl-items-medium-size',
      type: { name: TYPES.NUMBER, required: false },
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on medium screens, typically tablet.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: undefined },
      },
    },
    mediumMaxSize: {
      name: 'data-vl-items-medium-max-size',
      type: { name: TYPES.NUMBER, required: false },
      description:
        'The maximum (denominator) that will be evaluated against on medium screens, typically tablet, for each data item.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: undefined },
      },
    },
    smallSize: {
      name: 'data-vl-items-small-size',
      type: { name: TYPES.NUMBER, required: false },
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on small screens, typically mobile.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: undefined },
      },
    },
    smallMaxSize: {
      name: 'data-vl-items-small-max-size',
      type: { name: TYPES.NUMBER, required: false },
      description:
        'The maximum (denominator) that will be evaluated against on small screens, typically mobile, for each data item.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: undefined },
      },
    },
    extraSmallSize: {
      name: 'data-vl-items-extra-small-size',
      type: { name: TYPES.NUMBER, required: false },
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on very small screens.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: undefined },
      },
    },
    extraSmallMaxSize: {
      name: 'data-vl-items-extra-small-max-size',
      type: { name: TYPES.NUMBER, required: false },
      description: 'The maximum (denominator) against which to evaluate for very small screens, for each data item.',
      table: {
        type: { summary: TYPES.NUMBER },
        category: CATEGORIES.ATTRIBUTES,
        defaultValue: { summary: undefined },
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
      data-vl-items-size=${ifDefined(size)}
      data-vl-items-max-size=${ifDefined(maxSize)}
      data-vl-items-medium-size=${ifDefined(mediumSize)}
      data-vl-items-medium-max-size=${ifDefined(mediumMaxSize)}
      data-vl-items-small-size=${ifDefined(smallSize)}
      data-vl-items-small-max-size=${ifDefined(smallMaxSize)}
      data-vl-items-extra-small-size=${ifDefined(extraSmallSize)}
      data-vl-items-extra-small-max-size=${ifDefined(extraSmallMaxSize)}
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
