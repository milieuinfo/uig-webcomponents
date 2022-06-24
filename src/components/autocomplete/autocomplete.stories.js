import { html } from "lit-html";
import "../autocomplete";
import { docsIntro } from "../../../.storybook/utils.js";

export default {
  title: 'custom-elements/vl-autocomplete',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'autocomplete',
          intro: 'Use autocomplete to show a list of suggestions filtered by the text that was entered. ' +
              'The list can be a static list (data-static-list) or can be retrieved from an api call (dataFetcher).',
        }),
      },
    },
  },
};

//--------------------------

export const Default = () => html`
  <vl-autocomplete data-min-chars="1" 
                   data-static-list='[
              {"title":"hello", "value": "1"},
              {"title":"hi", "value": "2"},
              {"title":"How are you", "value": "3" },
              {"title":"My name is" , "value": "4"}]' placeholder="Hint: typ hello, hi, How are you of My name is"></vl-autocomplete>`;

//--------------------------

export const WithCustomInputField = () => html`
  <vl-autocomplete data-min-chars="1" 
                   data-static-list='[
              {"title":"hello", "value": "1"},
              {"title":"hi", "value": "2"},
              {"title":"How are you", "value": "3" },
              {"title":"My name is" , "value": "4"}]'>
    <input type="text" placeholder="Hint: typ hello, hi, How are you of My name is" style="width: 100%" />
  </vl-autocomplete>`;

//--------------------------

async function fetchDataFromFunction(searchTerm, autocomplete){
  const suggestions = [
    {"title":"hello", "value": "1"},
    {"title":"hi", "value": "2"},
    {"title":"How are you", "value": "3" },
    {"title":"My name is" , "value": "4"}];
  autocomplete.filterAndSuggest(searchTerm, suggestions);
}

export const WithDataFromFunction = () => html`
  <vl-autocomplete data-min-chars="1" .dataFetcher="${fetchDataFromFunction}" placeholder="Hint: typ hello, hi, How are you of My name is"></vl-autocomplete>`;

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

export const WithComplexDataFromFunctionAndDefaultCaptionFormatter = () => html`
  <vl-autocomplete data-min-chars="1" .dataFetcher="${fetchComplexDataFromFunction}" placeholder="Hint: typ Gent"></vl-autocomplete>`;

//--------------------------
function formatCaptionWithOnlyTitle(item)
{
  return item.title;
}


export const WithComplexDataFromFunctionGroupBySubTitle = () => html`
  <vl-autocomplete data-min-chars="1" data-group-by="subtitle" .dataFetcher="${fetchComplexDataFromFunction}" 
                   .captionFormatter="${formatCaptionWithOnlyTitle}" 
                   placeholder="Hint: typ Gent"></vl-autocomplete>`;

//--------------------------

function formatCaption(item)
{
  if(item.subtitle != null) {
    return `${item.subtitle}: ${item.title}`;
  }
  else {
    return item.title;
  }
}

export const WithComplexDataFromFunctionAndCustomCaptionFormatter = () => html`
  <vl-autocomplete data-min-chars="1" .dataFetcher="${fetchComplexDataFromFunction}" .captionFormatter="${formatCaption}" placeholder="Hint: typ Gent"></vl-autocomplete>`;

//--------------------------

function formatCaptionAsHtml(item)
{
  return `${item.subtitle}<br>${item.title}`;
  //return html`${item.subtitle}<br>${item.title}`;
  /*if(item.subtitle != null) {
    return `${item.subtitle}<br>${item.title}`;
  }
  else {
    return item.title;
  }*/
  /*if(item.subtitle != null) {
    return html`<span class="vl-autocomplete__cta__title">${item.title}</span><span
            class="vl-autocomplete__cta__sub">${item.subtitle}</span>`;
  }
  else {
    return html`<span class="vl-autocomplete__cta__title">${item.title}</span>`;
  }*/
}

export const WithComplexDataFromFunctionAndHtmlCaptionFormatter = () => html`
  <vl-autocomplete data-min-chars="1" .dataFetcher="${fetchComplexDataFromFunction}" .captionFormatter="${formatCaptionAsHtml}" placeholder="Hint: typ Gent"></vl-autocomplete>`;

//--------------------------

async function fetchDataWithApiCall(searchTerm, autocomplete){
  const count = this.maxSuggestions;
  const result = await fetch(`https://loc.geopunt.be/geolocation/suggestion?q=${searchTerm}&c=${count}`)
  const responseBody = await result.json()
  console.log(responseBody);

  var suggestions = responseBody.SuggestionResult.map((obj) => ({
    "title": obj,
    "value": obj}));

  autocomplete.fetchDataResult(suggestions);
}

export const WithApiCall = () => html`
  <vl-autocomplete .dataFetcher="${fetchDataWithApiCall}" placeholder="Gemeente, Straat of Project" data-max-suggestions="10"></vl-autocomplete>
`;