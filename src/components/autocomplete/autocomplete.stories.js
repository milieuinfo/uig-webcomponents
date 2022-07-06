import {html} from "lit-html";
import {VlAutocomplete} from "../autocomplete";
import {docsIntro} from "../../../.storybook/utils.js";

export default {
  title: 'custom-elements/vl-autocomplete',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'autocomplete',
          intro: 'Use autocomplete to show a list of suggestions filtered by the text that was entered. ' +
              'The list can be a static list (data-vl-static-list) or can be retrieved from an api call (dataFetcher).',
        }),
      },
    },
  },
};

//--------------------------

const defaultItems = [{"title":"hello", "value": "1"},
  {"title":"hi", "value": "2"},
  {"title":"How are you", "value": "3" },
  {"title":"My name is" , "value": "4"}];

export const Default = () => html`
  <vl-autocomplete data-vl-min-chars="1" .items=${defaultItems} 
                   placeholder="Hint: typ hello, hi, How are you of My name is"></vl-autocomplete>`;

//--------------------------

const complexItems =[
  {"title": "Gent", "subtitle": "Gemeente", "value": "1"},
  {"title": "Gentbos, Merelbeke", "subtitle": "Adres", "value": "2"},
  {"title": "Gentbruggestraat, Gent", "subtitle": "Adres", "value": "3"},
  {"title": "Gentele, Brugge", "subtitle": "Adres", "value": "5"},
  {"title": "Automotive Contractors Gent ", "subtitle": "Project", "value": "6"},
  {"title": "Buurtshuis Watersportbaan Gent", "subtitle": "Project", "value": "7"}];

export const WithComplexDataFromFunctionAndDefaultCaptionFormatter = () => html`
  <vl-autocomplete data-vl-min-chars="1" .items=${complexItems} placeholder="Hint: typ Gent"></vl-autocomplete>`;

//--------------------------
export const WithComplexDataFromFunctionGroupBySubTitle = () => html`
  <vl-autocomplete data-vl-min-chars="1" data-vl-group-by="subtitle"
                   .items=${complexItems}
                   data-vl-caption-format="${VlAutocomplete.CaptionFormat.Title}"
                   placeholder="Hint: typ Gent"></vl-autocomplete>`;

//--------------------------

export const WithComplexDataFromFunctionAndCustomCaptionFormatter = () => html`
  <vl-autocomplete data-vl-min-chars="1" 
                   .items=${complexItems}
                   data-vl-caption-format="${VlAutocomplete.CaptionFormat.SubtitleTitleHorizontal}" 
                   placeholder="Hint: typ Gent"></vl-autocomplete>`;

//--------------------------
async function fetchDataWithApiCall(autocomplete, searchTerm){

  const result = await fetch(`https://loc.geopunt.be/geolocation/suggestion?q=${searchTerm}&c=${autocomplete.maxSuggestions}`);
  const responseBody = await result.json();

  autocomplete.matches = responseBody.SuggestionResult.map((obj) => ({
    "title": obj,
    "value": obj}));
}

export const WithInputAndApiCall = () => html`
  <vl-autocomplete @search=${(e) => fetchDataWithApiCall(e.target, e.detail.searchTerm)} 
                   placeholder="Gemeente, Straat of Project" 
                   data-vl-max-suggestions="10"></vl-autocomplete>
`;