import { html } from 'lit-html';
import { DEFAULT_CAPTION_FORMAT, DEFAULT_MAX_MATCHES, DEFAULT_MIN_CHARS } from '../autocomplete';
import { CATEGORIES, docsIntro, TYPES } from '../../../.storybook/utils.js';
import { CAPTION_FORMAT, GROUP_BY } from './enums';

const complexItems = [
  { title: 'Gent', subtitle: 'Gemeente', value: '1' },
  { title: 'Gentbos, Merelbeke', subtitle: 'Adres', value: '2' },
  { title: 'Gentbruggestraat, Gent', subtitle: 'Adres', value: '3' },
  { title: 'Gentele, Brugge', subtitle: 'Adres', value: '5' },
  { title: 'Automotive Contractors Gent ', subtitle: 'Project', value: '6' },
  { title: 'Buurtshuis Watersportbaan Gent', subtitle: 'Project', value: '7' },
];

export default {
  title: 'custom-elements/vl-autocomplete',
  decorators: [(story) => html`<div style="margin-bottom: 20em;">${story()}</div>`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'autocomplete',
          intro:
            'Use autocomplete to show a list of suggestions filtered by the text that was entered. ' +
            'The list can be a static list (data-vl-static-list) or can be retrieved from an api call (dataFetcher).',
        }),
      },
    },
  },
  args: {
    placeholder: 'Hint: typ Gent',
    initialValue: '',
    label: '',
    labelSmall: false,
    minChars: 1,
    maxSuggestions: 5,
    captionFormat: CAPTION_FORMAT.TITLE_SUBTITLE_VERTICAL,
    groupBy: '',
    showClear: false,
    clearTooltip: 'Wissen',
    noMatchesText: 'Geen resultaat',
    items: complexItems,
  },
  argTypes: {
    placeholder: {
      name: 'placeholder',
      type: { summary: TYPES.STRING, required: false },
      description: 'Attribuut wordt gebruikt om de placeholder te bepalen.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    initialValue: {
      name: 'data-vl-initial-value',
      type: { summary: TYPES.STRING, required: false },
      description: 'Attribuut wordt gebruikt om de initiële waarde te bepalen.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    label: {
      name: 'data-vl-label',
      type: { summary: TYPES.STRING, required: false },
      description: 'Attribuut wordt gebruikt om de label te bepalen.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    labelSmall: {
      name: 'data-vl-label-small',
      type: { summary: TYPES.BOOLEAN, required: false },
      description: 'Attribuut wordt gebruikt om de label kleiner te maken.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    minChars: {
      name: 'data-vl-min-chars',
      type: { summary: TYPES.NUMBER, required: false },
      description:
        'Attribuut wordt gebruikt om te bepalen hoeveel karakters de gebruiker moet ingeven alvorens de suggesties getoond worden.',
      control: { type: 'range', min: 1, max: 10, step: 1 },
      table: {
        defaultValue: { summary: DEFAULT_MIN_CHARS },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    maxSuggestions: {
      name: 'data-vl-max-suggestions',
      type: { summary: TYPES.NUMBER, required: false },
      description: 'Attribuut wordt gebruikt om het maximum aantal suggesties dat moet getoond worden te bepalen.',
      control: { type: 'range', min: 1, max: 20, step: 1 },
      table: {
        defaultValue: { summary: DEFAULT_MAX_MATCHES },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    captionFormat: {
      name: 'data-vl-caption-format',
      type: {
        summary: `${CAPTION_FORMAT.TITLE} | ${CAPTION_FORMAT.SUBTITLE} | ${CAPTION_FORMAT.VALUE} 
        | ${CAPTION_FORMAT.TITLE_SUBTITLE_HORIZONTAL} | ${CAPTION_FORMAT.TITLE_SUBTITLE_VERTICAL} 
        | ${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}`,
        required: false,
      },
      description: 'Attribuut bepaalt wat er hoe moet getoond worden voor ieder item in de suggestielijst.',
      control: {
        type: 'select',
        options: [
          CAPTION_FORMAT.TITLE,
          CAPTION_FORMAT.SUBTITLE,
          CAPTION_FORMAT.VALUE,
          CAPTION_FORMAT.TITLE_SUBTITLE_HORIZONTAL,
          CAPTION_FORMAT.TITLE_SUBTITLE_VERTICAL,
          CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL,
        ],
      },
      table: {
        defaultValue: { summary: DEFAULT_CAPTION_FORMAT },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    groupBy: {
      name: 'data-vl-group-by',
      type: {
        summary: `${GROUP_BY.TITLE} | ${GROUP_BY.SUBTITLE}`,
        required: false,
      },
      description: 'Attribuut bepaalt hoe de items in de lijst gegroepeerd moeten worden.',
      control: {
        type: 'select',
        options: [GROUP_BY.TITLE, GROUP_BY.SUBTITLE],
      },
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    showClear: {
      name: 'data-vl-show-clear',
      type: { summary: TYPES.BOOLEAN, required: false },
      description: 'Attribuut wordt gebruikt te bepalen of het clear icoon moet tevoorschijn komen.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    clearTooltip: {
      name: 'data-vl-clear-tooltip',
      type: { summary: TYPES.STRING, required: false },
      description: 'Attribuut wordt gebruikt de tekst te bepalen die getoond moet worden bij hover van clear icon.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    noMatchesText: {
      name: 'data-vl-no-matches-text',
      type: { summary: TYPES.STRING, required: false },
      description: 'Attribuut wordt gebruikt de tekst te bepalen die getoond moet worden als er geen suggesties zijn.',
      table: {
        defaultValue: { summary: '' },
        category: CATEGORIES.ATTRIBUTES,
      },
    },
    items: {
      description: 'Use this property when you want to use a static list of items.',
      type: { summary: 'array' },
      table: {
        category: CATEGORIES.PROPERTIES,
        defaultValue: { summary: '[]' },
      },
    },
    search: {
      name: 'search',
      description:
        'This custom event is triggered when the user enters characters in de textbox while the component has no items specified. ' +
        'Use this event when you want to fill the suggestion list with items from an api call. Check out the WithInputAndApiCall story for more details.',
      table: { category: CATEGORIES.EVENTS },
    },
  },
};

//--------------------------

const Template = ({
  placeholder,
  initialValue,
  label,
  labelSmall,
  minChars,
  maxSuggestions,
  captionFormat,
  groupBy,
  items,
  showClear,
  clearTooltip,
  noMatchesText,
}) => html`
  <vl-autocomplete
    placeholder=${placeholder}
    data-vl-initial-value=${initialValue}
    data-vl-label=${label}
    ?data-vl-label-small=${labelSmall}
    data-vl-min-chars=${minChars}
    data-vl-max-suggestions=${maxSuggestions}
    data-vl-caption-format=${captionFormat}
    data-vl-group-by=${groupBy}
    ?data-vl-show-clear=${showClear}
    data-vl-clear-tooltip=${clearTooltip}
    data-vl-no-matches-text=${noMatchesText}
    .items=${items}
  ></vl-autocomplete>
`;

export const Default = Template.bind({});

//--------------------------

export const WithDefaultCaptionFormatter = () => html` <vl-autocomplete
  data-vl-min-chars="1"
  .items=${complexItems}
  placeholder="Hint: typ Gent"
></vl-autocomplete>`;

//--------------------------
export const WithGroupBySubTitle = () => html` <vl-autocomplete
  data-vl-min-chars="1"
  data-vl-group-by="${GROUP_BY.SUBTITLE}"
  .items=${complexItems}
  data-vl-caption-format="${CAPTION_FORMAT.TITLE}"
  placeholder="Hint: typ Gent"
></vl-autocomplete>`;

//--------------------------

export const WithCustomCaptionFormatter = () => html` <vl-autocomplete
  data-vl-min-chars="1"
  .items=${complexItems}
  data-vl-caption-format="${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}"
  placeholder="Hint: typ Gent"
  @clear=${() => console.log('autocomplete cleared!!!')}
></vl-autocomplete>`;

//--------------------------
async function mockedApiCall(searchTerm, maxSuggestions) {
  const results = [
    'Drabbinkdreef, Gent',
    'Drabstraat, Gent',
    'Drabstraat, Kontich',
    'Drabstraat, Mechelen',
    'Drabstraat, Mortsel',
    'Drabstraat, Wichelen',
    'Drabstraat, Zwevezele',
  ];

  const filteredResults = results
    .filter((i) => i.toLowerCase().startsWith(searchTerm.toLowerCase()))
    .slice(0, maxSuggestions);

  return {
    SuggestionResult: filteredResults,
  };
}

async function fetchDataFromMockedApiCall(autocomplete, searchTerm) {
  const responseBody = await mockedApiCall(searchTerm, autocomplete.maxSuggestions);

  autocomplete.matches = responseBody.SuggestionResult.map((obj) => ({
    title: obj,
    value: obj,
  }));
}

export const WithInputAndMockedApiCall = () => html`<vl-autocomplete
  @search=${(e) => fetchDataFromMockedApiCall(e.target, e.detail.searchTerm)}
  placeholder="Gemeente, Straat of Project"
  data-vl-min-chars="2"
  data-vl-max-suggestions="5"
></vl-autocomplete>`;

//-------------------------

//--------------------------
async function fetchDataFromApiCall(autocomplete, searchTerm) {
  const result = await fetch(
    `https://loc.geopunt.be/geolocation/suggestion?q=${searchTerm}&c=${autocomplete.maxSuggestions}`,
  );
  const responseBody = await result.json();

  autocomplete.matches = responseBody.SuggestionResult.map((obj) => ({
    title: obj,
    value: obj,
  }));
}

export const WithInputAndApiCall = () => html`
  <vl-autocomplete
    @search=${(e) => fetchDataFromApiCall(e.target, e.detail.searchTerm)}
    placeholder="Gemeente, Straat of Project"
    data-vl-min-chars="2"
    data-vl-max-suggestions="10"
  ></vl-autocomplete>
`;

//-------------------------

export const InSideSheet = () => html`
  <vl-side-sheet>
    <vl-autocomplete
      data-vl-min-chars="1"
      .items=${complexItems}
      data-vl-caption-format="${CAPTION_FORMAT.SUBTITLE_TITLE_HORIZONTAL}"
      placeholder="Hint: typ Gent"
    ></vl-autocomplete>
  </vl-side-sheet>
`;
