import { assert, getDriver, config } from '../../../../../../utils/test';
import { VlTestMapCurrentLocation } from './current-location.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-map-vl-map-current-location--default&viewMode=story`;
const selector = 'vl-map-current-location';

describe('vl-map-current-location', async () => {
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

  it(`as a user, I can see the current location icon on the map`, async () => {
    await driver.get(defaultUrl);
    const mapCurrentLocation = await new VlTestMapCurrentLocation(driver, selector);
    await mapCurrentLocation.assertIsDisplayed();
  });
});
