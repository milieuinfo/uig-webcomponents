const { VlInputField } = require('vl-ui-input-field').Test;

import { assert, getDriver, config, By } from '../../../../utils/test';

describe('vl-form', async () => {
  let driver;
  let vlFormPage;

  before(() => {
    driver = getDriver();
    vlFormPage = new VlFormPage(driver);
    return vlFormPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlFormPage.hasWcagIssues());
  });

  it('als gebruiker kan ik een formulier submitten zonder dat de URL aangepast wordt', async () => {
    const form = await vlFormPage.getForm();
    const nameInput = await new VlInputField(driver, await form.findElement(By.css('#name')));
    await nameInput.setValue('Jos');
    await form.submit();
    const url = await driver.getCurrentUrl();
    assert.isTrue(url.endsWith('?no-header=true&no-footer=true'));
  });
});
