import { VlInputField } from '../../../input-field/test/e2e/input-field';
import { VlForm } from './form';
import { assert, getDriver, config, By } from '../../../../utils/test';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-form--default`;
const selector = 'form[is="vl-form"]';

describe('vl-form', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can submit a form without the url getting changed', async () => {
    await driver.get(defaultUrl);
    const form = await new VlForm(driver, selector);
    const input = await new VlInputField(driver, await form.findElement(By.css('input[name="name"]')));
    await input.setValue('foo');
    await form.submit();
    const url = await driver.getCurrentUrl();
    assert.isTrue(url.endsWith('&viewMode=story'));
  });
});
