import { assert, getDriver, config } from '../../../../../../utils/test';
import { VlLink } from '../../../../test/e2e/link';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-link-vl-button-link--default`;
const selector = 'button[is="vl-button-link"]';

describe('vl-button-link', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the text of a button, styled as a link', async () => {
    await driver.get(defaultUrl);
    const link = await new VlLink(driver, selector);
    await assert.eventually.equal(link.getText(), 'Terug naar overzicht');
  });
});
