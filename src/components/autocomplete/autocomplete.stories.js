import { html } from 'lit-html';
import {docsIntro, getLastElement, getLastElementByClassName} from '../../../.storybook/utils.js';
import '.';

export default {
  title: 'custom-elements/vl-autocomplete',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'autocomplete',
          intro: 'Use autocomplete to show ...',
        }),
      },
    },
  },
};

export const Default = () => html`
  <vl-autocomplete data-min-chars="1"
      fulllist='[
              {"title":"hello", "value": "1"},
              {"title":"hi", "value": "2"},
              {"title":"How are you", "value": "3" },
              {"title":"My name is" , "value": "4"}]'>
    <input type="text" placeholder="search value" />
  </vl-autocomplete>`;

async function fetchDataFromFunction(searchTerm, autocomplete){
  const suggestions = [
    {"title":"hello", "value": "1"},
    {"title":"hi", "value": "2"},
    {"title":"How are you", "value": "3" },
    {"title":"My name is" , "value": "4"}];
  autocomplete.filterAndSuggest(searchTerm, suggestions);
}

export const WithDataFromFunction = () => html`
  <vl-autocomplete data-min-chars="1" .dataFetcher="${fetchDataFromFunction}">
    <input type="text" placeholder="search value" />
  </vl-autocomplete>`;

//--------------------------

async function fetchComplexDataFromFunction(searchTerm, autocomplete){
  const suggestions = [
    {"title":"Gent", "subtitle":"Gemeente", "value": "1"},
    {"title":"Gentbos, Merelbeke", "subtitle":"Adres", "value": "2"},
    {"title":"Gentbruggestraat, Gent", "subtitle":"Adres", "value": "3"},
    {"title":"Gentele, Brugge", "subtitle":"Adres", "value": "5"},
    {"title":"Automotive Contractors Gent ", "subtitle":"Project", "value": "6"},
    {"title":"Buurtshuis Watersportbaan Gent", "subtitle":"Project", "value": "7"}]
  autocomplete.filterAndSuggest(searchTerm, suggestions);
}

function formatCaption(item)
{
  if(item.subtitle != null) {
    return `${item.subtitle}: ${item.title}`;
  }
  else {
    return item.title;
  }
}

export const WithComplexDataFromFunction = () => html`
  <vl-autocomplete data-min-chars="1" .dataFetcher="${fetchComplexDataFromFunction}" .captionFormatter="${formatCaption}">
    <input type="text" placeholder="search value" />
  </vl-autocomplete>`;

//--------------------------

function formatCaptionAsHtml(item)
{
  //return html`${item.subtitle}<br>${item.title}`;
  if(item.subtitle != null) {
    return `${item.subtitle}<br>${item.title}`;
  }
  else {
    return item.title;
  }
}

export const WithComplexDataFromFunctionAndHtmlCaptionFormatter = () => html`
  <vl-autocomplete data-min-chars="1" .dataFetcher="${fetchComplexDataFromFunction}" .captionFormatter="${formatCaptionAsHtml}">
    <input type="text" placeholder="search value" />
  </vl-autocomplete>`;

//--------------------------

async function fetchDataWithApiCall(searchTerm, autocomplete){
  const result = await fetch(`https://loc.geopunt.be/geolocation/suggestion?q=${searchTerm}&c=10`)
  const responseBody = await result.json()
  console.log(responseBody);

  var suggestions = responseBody.SuggestionResult.map((obj) => ({
    "title": obj,
    "value": obj}));

  autocomplete.fetchDataResult(suggestions);
}

export const WithApiCall = () => html`


  <label for="vl-autocomplete-1-input" class="vl-form__label">
    Geolocation
  </label>
  <vl-autocomplete .dataFetcher="${fetchDataWithApiCall}" >
    <input type="text" placeholder="search value" />
  </vl-autocomplete>
  <div id="vl-autocomplete-1-hint" class="vl-form__annotation">
    Minimum 3 karakters
  </div>
  
  <!--
  <label for="vl-autocomplete-1-input" class="vl-form__label">
    Geolocation
  </label>
  <vl-autocomplete .dataFetcher="${fetchDataWithApiCall}" >
    <input type="text" placeholder="search value" />
  </vl-autocomplete>
  <div id="vl-autocomplete-1-hint" class="vl-form__annotation">
    Minimum 3 karakters
  </div>-->`;