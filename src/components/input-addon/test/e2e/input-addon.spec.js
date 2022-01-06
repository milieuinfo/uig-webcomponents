import { assert, getDriver, config } from '../../../../utils/test';
import { VlInputAddon } from './input-addon';
import { VlTooltip } from '../../../tooltip/test/e2e/tooltip';

const { sbUrl } = config;
const baseUrl = `${sbUrl}?id=native-elements-vl-input-addon--`;

describe('vl-input-addon', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the text of an input addon', async () => {
    await driver.get(`${baseUrl}default`);
    const inputAddon = await new VlInputAddon(driver, 'p[is="vl-input-addon"]');
    await assert.eventually.include(inputAddon.getText(), '€');
  });

  it('as a user, I can consult the text of a tooltip of an input addon', async () => {
    await driver.get(`${baseUrl}with-tooltip`);
    const tooltip = await new VlTooltip(driver, 'vl-tooltip');
    await assert.eventually.equal(tooltip.getText(), 'Euro');
  });
});
