import { assert, getDriver, config } from '../../../../utils/test';
import { VlDescriptionDataItem } from './description-data-item';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-description-data-vl-description-data-item--with-slot-elements`;
const selector = 'vl-description-data-item';

describe('vl-description-data-item', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('the value and label of the description data item are displayed correctly when using slots', async () => {
    await driver.get(defaultUrl);
    const descriptionDataItem = await new VlDescriptionDataItem(driver, selector);

    await assert.eventually.equal(descriptionDataItem.getSlotLabel(), 'Uitgever');
    await assert.eventually.equal(descriptionDataItem.getSlotValue(), 'Kind en Gezin');
  });
});
