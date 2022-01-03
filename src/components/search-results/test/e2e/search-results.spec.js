import { assert, getDriver, config } from '../../../../utils/test';
import { VLSearchResults } from './search-results';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-search-results--default`;
const selector = 'ul[is="vl-search-results"]';

describe('vl-search-results', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the title of a search result', async () => {
    await driver.get(defaultUrl);
    const searchResults = await new VLSearchResults(driver, selector);
    const searchResult = await searchResults.getSearchResult(1);
    await assert.eventually.equal(searchResult.getTitle(), 'Vlaanderenkiest.be');
  });

  it('as a user, I can see the sub title of a search result', async () => {
    await driver.get(defaultUrl);
    const searchResults = await new VLSearchResults(driver, selector);
    const searchResult = await searchResults.getSearchResult(1);
    await assert.eventually.equal(searchResult.getSubTitle(), 'Maandag 22 oktober 2018');
  });

  it('as a user, I can see the content of a search result', async () => {
    await driver.get(defaultUrl);
    const searchResults = await new VLSearchResults(driver, selector);
    const searchResult = await searchResults.getSearchResult(1);
    const content = await searchResult.getContent(1);
    await assert.eventually.equal(content.getDescription(1), 'Vlaanderenkiest.be');
    await assert.eventually.equal(content.getValue(1), 'Verkiezingsresultaten op Vlaanderenkiest.be...');
    await assert.eventually.equal(content.getDescription(2), 'Vlaanderen intern');
    await assert.eventually.equal(content.getValue(2), 'Werkt u bij de Vlaamse overheid...');
  });
});
