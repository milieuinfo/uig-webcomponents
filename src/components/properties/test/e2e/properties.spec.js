import { assert, getDriver, config } from '../../../../utils/test';
import { VlProperties } from './properties';
import { VlPropertiesColumn } from '../../components/column/test/e2e/column';

const { sbUrl } = config;
const baseUrl = `${sbUrl}?id=custom-elements-vl-properties-vl-properties-column--default`;
const selector = 'vl-properties';

describe('vl-properties', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see properties in a column', async () => {
    await driver.get(baseUrl);
    const propertiesEl = await new VlProperties(driver, selector);
    const propertiesChildren = await propertiesEl.getSlotElements();
    const [title, firstColumn] = propertiesChildren;
    const nonFullSizeColumn = await new VlPropertiesColumn(driver, firstColumn);
    await assert.eventually.isFalse(nonFullSizeColumn.isFullSize());
  });

  it('as a user, I can see properties in a full-size column', async () => {
    await driver.get(`${baseUrl}&args=full:true`);
    const propertiesEl = await new VlProperties(driver, selector);
    const propertiesChildren = await propertiesEl.getSlotElements();
    const [title, firstColumn] = propertiesChildren;
    assert.lengthOf(propertiesChildren, 3);

    const fullSizeColumn = await new VlPropertiesColumn(driver, firstColumn);
    await assert.eventually.isTrue(fullSizeColumn.isFullSize());

    const propertiesList = await fullSizeColumn.getPropertiesList();
    const nationaliteitProperty = await propertiesList.getPropertyByTermText('Voornaam');
    await assert.eventually.equal(nationaliteitProperty.value.getText(), 'Koen');

    const properties = await propertiesList.getProperties();
    assert.lengthOf(properties, 3);
    const [firstname, name, gender] = properties;

    await assert.eventually.equal(name.term.getText(), 'Naam');
    await assert.eventually.equal(name.value.getText(), 'Peeters');
    await assert.eventually.equal(gender.term.getText(), 'Geslacht');
    await assert.eventually.equal(gender.value.getText(), 'Man');
  });
});
