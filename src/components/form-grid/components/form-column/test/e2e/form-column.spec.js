import { assert, getDriver, config } from '../../../../../../utils/test';
import { VlFormColumn } from './form-column';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-form-grid--default`;

describe('vl-form-column', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see form columns with the right size', async () => {
    await driver.get(defaultUrl);
    const labelColumn = await new VlFormColumn(driver, 'div[is="vl-form-grid"] div:first-child');
    const inputColumn = await new VlFormColumn(driver, 'div[is="vl-form-grid"] div:nth-child(2)');
    await assert.eventually.equal(labelColumn.getSize(), 2);
    await assert.eventually.equal(inputColumn.getSize(), 10);
  });
});
