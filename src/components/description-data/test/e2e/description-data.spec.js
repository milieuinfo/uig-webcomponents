import { assert, getDriver, config } from '../../../../utils/test';
import { VlDescriptionData } from './description-data';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-description-data--default`;
const selector = 'vl-description-data';

describe('vl-description-data', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('the value and label of each description data item are displayed correctly', async () => {
    await driver.get(defaultUrl);
    const descriptionData = await new VlDescriptionData(driver, selector);

    const descriptionDatablocks = await descriptionData.getDescriptionDataBlocks();
    assert.lengthOf(descriptionDatablocks, 4);

    await assert.eventually.equal(descriptionDatablocks[0].getLabel(), 'Uitgever');
    await assert.eventually.equal(descriptionDatablocks[0].getValue(), 'Kind en Gezin');

    await assert.eventually.equal(descriptionDatablocks[1].getLabel(), 'Publicatiedatum');
    await assert.eventually.equal(descriptionDatablocks[1].getValue(), 'Augustus 2018');

    await assert.eventually.equal(descriptionDatablocks[2].getLabel(), 'Publicatietype');
    await assert.eventually.equal(descriptionDatablocks[2].getValue(), 'Brochure');

    await assert.eventually.equal(descriptionDatablocks[3].getLabel(), 'Categorie');
    await assert.eventually.equal(descriptionDatablocks[3].getValue(), 'Kinderen en jongeren');
  });
});
