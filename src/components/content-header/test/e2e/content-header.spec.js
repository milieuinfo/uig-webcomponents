import { assert, getDriver, config } from '../../../../utils/test';
import { VlContentHeader } from './content-header';
import { VlImage } from '../../../image/test/e2e/image';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-content-header--default`;
const selector = 'vl-content-header';

describe('vl-content-header', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see a context-link in the content header', async () => {
    await driver.get(defaultUrl);
    const element = await new VlContentHeader(driver, selector);
    const link = await element.getContextLink();
    await assert.eventually.equal(link.getText(), 'Context');
  });

  it('as a user, I can see a title-link in the content header', async () => {
    await driver.get(defaultUrl);
    const element = await new VlContentHeader(driver, selector);
    const link = await element.getTitleLink();
    await assert.eventually.equal(link.getText(), 'Vlaanderen');
  });

  it('as a user, I can see an image in the the content header', async () => {
    await driver.get(defaultUrl);
    const image = new VlImage(driver, 'img');
    await assert.eventually.isNotNull(image);
  });
});
