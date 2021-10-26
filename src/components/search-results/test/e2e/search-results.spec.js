import { assert, getDriver } from "../../../../utils/test";
import VLSearchResultsPage from "./search-results.page";

describe("vl-search-results", async () => {
  let vlSearchResultsPage;

  before(() => {
    vlSearchResultsPage = new VLSearchResultsPage(getDriver());
    return vlSearchResultsPage.load();
  });

  // it("WCAG", async () => {
  //   await assert.eventually.isFalse(vlSearchResultsPage.hasWcagIssues());
  // });

  it("als gebruiker kan ik de titel van een zoekresultaat zien", async () => {
    const searchResults = await vlSearchResultsPage.getSearchResults();
    const searchResult = await searchResults.getSearchResult(1);
    await assert.eventually.equal(
      searchResult.getTitle(),
      "Vlaanderenkiest.be"
    );
  });

  it("als gebruiker kan ik de sub titel van een zoekresultaat zien", async () => {
    const searchResults = await vlSearchResultsPage.getSearchResults();
    const searchResult = await searchResults.getSearchResult(1);
    await assert.eventually.equal(
      searchResult.getSubTitle(),
      "Maandag 22 oktober 2018"
    );
  });

  it("als gebruiker kan ik de content van een zoekresultaat zien", async () => {
    const searchResults = await vlSearchResultsPage.getSearchResults();
    const searchResult = await searchResults.getSearchResult(1);
    const content = await searchResult.getContent(1);
    await assert.eventually.equal(
      content.getDescription(1),
      "Vlaanderenkiest.be"
    );
    await assert.eventually.equal(
      content.getValue(1),
      "Verkiezingsresultaten op Vlaanderenkiest.be..."
    );
    await assert.eventually.equal(
      content.getDescription(2),
      "Vlaanderen intern"
    );
    await assert.eventually.equal(
      content.getValue(2),
      "Werkt u bij de Vlaamse overheid..."
    );
  });
});
