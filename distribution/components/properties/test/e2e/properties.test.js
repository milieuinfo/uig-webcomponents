const {assert, getDriver, By} = require('vl-ui-core').Test.Setup;
const VlPropertiesPage = require('./pages/vl-properties.page');
const {VlPropertiesColumn} = require('./components/vl-properties');

describe('vl-properties', async () => {
  let driver;
  let vlPropertiesPage;

  before(async () => {
    driver = getDriver();
    vlPropertiesPage = new VlPropertiesPage(driver);
    return vlPropertiesPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlPropertiesPage.hasWcagIssues());
  });

  it('als gebruiker kan ik properties zien in een full-size kolom', async () => {
    const propertiesElement = await vlPropertiesPage.getProperties();
    const propertiesChildren = await propertiesElement.getSlotElements();

    assert.lengthOf(propertiesChildren, 4);
    const fullSizeColumn = await new VlPropertiesColumn(driver, propertiesChildren.pop());
    await assert.eventually.isTrue(fullSizeColumn.isFullSize());

    const nonFullSizeColumn = await new VlPropertiesColumn(driver, propertiesChildren.pop());
    await assert.eventually.isFalse(nonFullSizeColumn.isFullSize());

    const propertiesList = await fullSizeColumn.getPropertiesList();
    const nationaliteitProperty = await propertiesList.getPropertyByTermText('Nationaliteit');
    await assert.eventually.equal(nationaliteitProperty.value.getText(), 'Belg');

    const properties = await propertiesList.getProperties();
    assert.lengthOf(properties, 3);
    const adresProperty = properties[2];
    await assert.eventually.equal(adresProperty.term.getText(), 'Adres');
    const adresElements = await adresProperty.value.findElements(By.css('*'));
    assert.lengthOf(adresElements, 2);
    await assert.eventually.equal(adresElements[0].getText(), 'Havenlaan 88');
    await assert.eventually.equal(adresElements[1].getText(), '1000 Brussel');
  });
});
