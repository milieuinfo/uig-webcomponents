import { assert, getDriver, config } from '../../../../../../utils/test';
import { VlTestMapLegend } from './legend.js';
import { LEGEND_PLACEMENT } from '../../enums/index.js';
//import { Default } from '../../legend-single-features-layer.stories.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-map-vl-map-legend-vl-map-legend-single-features-layer--default&viewMode=story`;
const selector = 'vl-map-legend';

function getUrlWithPlacement(placement) {
  return `${defaultUrl}&args=placement:${placement}`;
}

describe('vl-map-legend', async () => {
  let driver;

  function delay(interval) {
    return it('should delay', (done) => {
      setTimeout(() => done(), interval);
    }).timeout(interval + 100); // The extra 100ms should guarantee the test will not fail due to exceeded timeout
  }

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the legend by default positioned in de bottom-right corner', async () => {
    await driver.get(defaultUrl);
    const legend = await new VlTestMapLegend(driver, selector);

    await assert.eventually.equal(legend.getTop(), undefined);
    await assert.eventually.equal(legend.getLeft(), undefined);
    await assert.eventually.notEqual(legend.getBottom(), undefined);
    await assert.eventually.notEqual(legend.getRight(), undefined);
  });

  it(`as a user, I can see the legend by default positioned in de top-left corner of placement attribute is ${LEGEND_PLACEMENT.TOP_LEFT}`, async () => {
    await driver.get(getUrlWithPlacement(LEGEND_PLACEMENT.TOP_LEFT));
    const legend = await new VlTestMapLegend(driver, selector);

    await assert.eventually.notEqual(legend.getTop(), undefined);
    await assert.eventually.notEqual(legend.getLeft(), undefined);
    await assert.eventually.equal(legend.getBottom(), undefined);
    await assert.eventually.equal(legend.getRight(), undefined);
  });

  it(`as a user, I can see the legend by default positioned in de top-right corner of placement attribute is ${LEGEND_PLACEMENT.TOP_RIGHT}`, async () => {
    await driver.get(getUrlWithPlacement(LEGEND_PLACEMENT.TOP_RIGHT));
    const legend = await new VlTestMapLegend(driver, selector);

    await assert.eventually.notEqual(legend.getTop(), undefined);
    await assert.eventually.equal(legend.getLeft(), undefined);
    await assert.eventually.equal(legend.getBottom(), undefined);
    await assert.eventually.notEqual(legend.getRight(), undefined);
  });

  it(`as a user, I can see the legend by default positioned in de bottom-left corner of placement attribute is ${LEGEND_PLACEMENT.BOTTOM_LEFT}`, async () => {
    await driver.get(getUrlWithPlacement(LEGEND_PLACEMENT.BOTTOM_LEFT));
    const legend = await new VlTestMapLegend(driver, selector);

    await assert.eventually.equal(legend.getTop(), undefined);
    await assert.eventually.notEqual(legend.getLeft(), undefined);
    await assert.eventually.notEqual(legend.getBottom(), undefined);
    await assert.eventually.equal(legend.getRight(), undefined);
  });

  it(`as a user, I can see the legend by default positioned in de bottom-right corner of placement attribute is ${LEGEND_PLACEMENT.BOTTOM_RIGHT}`, async () => {
    await driver.get(getUrlWithPlacement(LEGEND_PLACEMENT.BOTTOM_RIGHT));
    const legend = await new VlTestMapLegend(driver, selector);

    await assert.eventually.equal(legend.getTop(), undefined);
    await assert.eventually.equal(legend.getLeft(), undefined);
    await assert.eventually.notEqual(legend.getBottom(), undefined);
    await assert.eventually.notEqual(legend.getRight(), undefined);
  });

  it(`as a user, I can see the same amount of items in the legend as there are styles in the vl-map-features-layer`, async () => {
    await driver.get(defaultUrl);
    const legend = await new VlTestMapLegend(driver, selector);

    console.log({ legend });

    //const featuresLayers = Default.getFeaturesLayers();
    //console.log({ featuresLayers });

    //console.log({ featuresLayers });

    /*await assert.eventually.equal(legend.getTop(), undefined);
    await assert.eventually.equal(legend.getLeft(), undefined);
    await assert.eventually.notEqual(legend.getBottom(), undefined);
    await assert.eventually.notEqual(legend.getRight(), undefined);*/
  });

  //delay(600000);

  /*it('as a user, I can see the autocomplete custom placeholder', async () => {
    await driver.get(customPlaceHolderUrl);
    const autocomplete = await new VlTestAutocomplete(driver, selector);

    await assert.eventually.equal(autocomplete.getPlaceHolder(), 'Typ een waarde');
  });

  it('as a user, I can see suggestions after typing the g character', async () => {
    await driver.get(customPlaceHolderUrl);
    const autocomplete = await new VlTestAutocomplete(driver, selector);

    await autocomplete.setInputValue('g');

    const suggestions = await autocomplete.getSuggestions();
    const size = suggestions.length;
    assert.equal(size, 5);
  });

  it('as a user, I can see suggestions after typing the m character', async () => {
    await driver.get(customPlaceHolderUrl);
    const autocomplete = await new VlTestAutocomplete(driver, selector);

    await autocomplete.setInputValue('m');

    const suggestions = await autocomplete.getSuggestions();
    const size = suggestions.length;
    assert.equal(size, 2);
  });

  it('as a user, I can see suggestions after typing at least three characters', async () => {
    await driver.get(minCharsUrl);
    const autocomplete = await new VlTestAutocomplete(driver, selector);

    await autocomplete.setInputValue('g');

    await autocomplete.assertSuggestionsCount(0);

    await autocomplete.setInputValue('e');

    await autocomplete.assertSuggestionsCount(0);

    await autocomplete.setInputValue('n');

    await autocomplete.assertSuggestionsCount(5);
  });

  it('as a user, I can see a limited amount of suggestions', async () => {
    await driver.get(maxSuggestionsUrl);
    const autocomplete = await new VlTestAutocomplete(driver, selector);

    await autocomplete.setInputValue('g');

    const suggestions = await autocomplete.getSuggestions();
    const size = suggestions.length;
    assert.equal(size, 3);
  });

  it('as a user, I can see list of suggestions grouped by subtitle', async () => {
    await driver.get(groupByUrl);

    const autocomplete = await new VlTestAutocomplete(driver, selector);

    await autocomplete.setInputValue('g');

    const suggestions = await autocomplete.getSuggestions();
    const size = suggestions.length;
    assert.equal(size, 5);

    const groups = await autocomplete.getGroupNames();
    const groupsSize = groups.length;
    assert.equal(groupsSize, 3);
    assert.deepEqual(groups, ['Gemeente', 'Adres', 'Project']);

    const gemeenteGroupIndex = await autocomplete.getGroupIndex('Gemeente');
    assert.equal(gemeenteGroupIndex, 0);

    const adresGroupIndex = await autocomplete.getGroupIndex('Adres');
    assert.equal(adresGroupIndex, 1);

    const projectGroupIndex = await autocomplete.getGroupIndex('Project');
    assert.equal(projectGroupIndex, 2);

    const gemeenteSuggestions = await autocomplete.getSuggestionsOfGroup('Gemeente');
    const gemeenteSuggestionsSize = gemeenteSuggestions.length;
    assert.equal(gemeenteSuggestionsSize, 1);
    assert.deepEqual(gemeenteSuggestions, [{ title: 'Gent', subtitle: 'Gemeente' }]);

    const adresSuggestions = await autocomplete.getSuggestionsOfGroup('Adres');
    const adresSuggestionsSize = adresSuggestions.length;
    assert.equal(adresSuggestionsSize, 3);
    assert.deepEqual(adresSuggestions, [
      { title: 'Gentbos, Merelbeke', subtitle: 'Adres' },
      { title: 'Gentbruggestraat, Gent', subtitle: 'Adres' },
      { title: 'Gentele, Brugge', subtitle: 'Adres' },
    ]);

    const projectSuggestions = await autocomplete.getSuggestionsOfGroup('Project');
    const projectSuggestionsSize = projectSuggestions.length;
    assert.equal(1, projectSuggestionsSize);
    assert.deepEqual(projectSuggestions, [{ title: 'Automotive Contractors Gent', subtitle: 'Project' }]);
  });

  it('as a user, I can see list of suggestions with only a title displayed', async () => {
    await driver.get(captionFormatTitleOnlyUrl);
    const autocomplete = await new VlTestAutocomplete(driver, selector);

    await autocomplete.setInputValue('g');

    const suggestions = await autocomplete.getSuggestions();
    const size = suggestions.length;
    assert.equal(size, 5);

    assert.deepEqual(suggestions, [
      { title: 'Gent' },
      { title: 'Gentbos, Merelbeke' },
      { title: 'Gentbruggestraat, Gent' },
      { title: 'Gentele, Brugge' },
      { title: 'Automotive Contractors Gent' },
    ]);
  });

  it('as a user, I can see list of suggestions when the autocomplete is calling an api call to resolve the suggestions', async () => {
    await driver.get(apiCallUrl);
    const autocomplete = await new VlTestAutocomplete(driver, selector);

    await autocomplete.setInputValue('drabstraat');
    await autocomplete.assertSuggestionsCount(5);

    const suggestions = await autocomplete.getSuggestions();
    const size = suggestions.length;
    assert.equal(size, 5);

    assert.deepEqual(suggestions, [
      { title: 'Drabstraat, Gent' },
      { title: 'Drabstraat, Kontich' },
      { title: 'Drabstraat, Mechelen' },
      { title: 'Drabstraat, Mortsel' },
      { title: 'Drabstraat, Wichelen' },
    ]);
  });*/
});
