import { assert, getDriver, config } from '../../../../../../../../utils/test';
import { VlTestMeasureControl } from './measure-control';
import { VlTestMapMeasureAction } from '../../../../../action/draw-action/test/e2e/measure-action';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-map-vl-map-controls--default`;
const controlSelector = 'vl-map-measure-control';
const actionSelector = 'vl-map-measure-action';

// Use to wait for map action to be activated. Timeout for activating a mapaction in map-with-actions can otherwise result in flaky tests.
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('vl-measure-control', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user I can activate and deactivate the measure action by clicking the measure control', async () => {
    await driver.get(defaultUrl);

    const measureAction = await new VlTestMapMeasureAction(driver, actionSelector);
    const measureControl = await new VlTestMeasureControl(driver, controlSelector);

    assert.isFalse(await measureAction.isActive());

    measureControl.click();
    sleep(350);
    assert.isTrue(await measureAction.isActive());

    measureControl.click();
    sleep(350);
    assert.isFalse(await measureAction.isActive());
  });
});
