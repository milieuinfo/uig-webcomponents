import { assert, getDriver, config } from '../../../../utils/test';
import { VlFormGrid } from './form-grid';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-form-grid--default`;
const selector = 'div[is="vl-form-grid"]';

describe('vl-form-grid', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see a stacked form grid', async () => {
    await driver.get(defaultUrl);
    const formGrid = await new VlFormGrid(driver, selector);
    await assert.eventually.isTrue(formGrid.isStacked());
  });
});
