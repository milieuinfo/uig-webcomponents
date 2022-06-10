import { assert, getDriver, config } from '../../../../utils/test';
import { VlProzaMessage } from './proza-message';

const { sbUrl } = config;
const baseUrl = `${sbUrl}?id=custom-elements-vl-proza-message--default`;
const updateErrorUrl = `${sbUrl}?id=custom-elements-vl-proza-message--with-update-error`;
const parametersUrl = `${sbUrl}?id=custom-elements-vl-proza-message--with-parameters`;
const selector = 'vl-proza-message';

describe('vl-proza-message', async () => {
  let driver;

  async function enableWysiwyg(message) {
    await message.edit();
    await message.selectAllText();
    await message.waitUntilWysiwygIsPresent();
  }

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user I can see a pencil', async () => {
    await driver.get(baseUrl);
    const message = await new VlProzaMessage(driver, selector);

    const button = await message.getEditButton();
    await assert.eventually.isTrue(button.hasIcon());
    const icon = await button.getIcon();
    await assert.eventually.equal(icon.getType(), 'edit');
  });

  it('as a user I can make a text editable by clicking the pencil', async () => {
    await driver.get(baseUrl);
    const message = await new VlProzaMessage(driver, selector);

    await message.edit();
    await assert.eventually.isTrue(message.isEditable());
    await message.cancel();
  });

  it('as a user I can delete a text', async () => {
    await driver.get(baseUrl);
    let message = await new VlProzaMessage(driver, selector);

    await message.edit();
    await message.clear();
    await message.confirm();

    message = await new VlProzaMessage(driver, selector);
    await assert.eventually.equal(message.getText(), '');
  });

  it('as a user I can click the escape button to cancel my changes', async () => {
    await driver.get(baseUrl);
    let message = await new VlProzaMessage(driver, selector);

    await assert.eventually.equal(message.getText(), 'foobar');
    await message.edit();
    await message.type('decibel');
    await message.cancel();

    message = await new VlProzaMessage(driver, selector);
    await assert.eventually.equal(message.getText(), 'foobar');
  });

  it('as a user I can click the enter button to save my changes', async () => {
    await driver.get(baseUrl);
    let message = await new VlProzaMessage(driver, selector);

    await message.edit();
    await message.type('decibel');
    await message.confirm();

    message = await new VlProzaMessage(driver, selector);
    await assert.eventually.equal(message.getText(), 'decibel');
  });

  it('as a user I can click enter + shift to a dd a line-break', async () => {
    await driver.get(baseUrl);
    let message = await new VlProzaMessage(driver, selector);

    await message.edit();
    await message.type('line');
    await message.shiftEnter();
    await message.append('break');
    await message.confirm();

    message = await new VlProzaMessage(driver, selector);
    await assert.eventually.include(message.getText(), '\n');
  });

  it('as a user I can active the wysiwyg by selecting text', async () => {
    await driver.get(baseUrl);
    const message = await new VlProzaMessage(driver, selector);

    await message.edit();
    await message.selectAllText();
    await message.waitUntilWysiwygIsPresent();
    await assert.eventually.isTrue(message.isWysiwygPresent());
    await message.confirm();
  });

  it('as a user I can add bold styling by clicking the bold styling button in the wysiwyg', async () => {
    await driver.get(baseUrl);
    const message = await new VlProzaMessage(driver, selector);

    await enableWysiwyg(message);
    await assert.eventually.isFalse(message.hasBoldStyle());
    await message.clickWysiwygBoldButton();
    await message.confirm();
    await assert.eventually.isTrue(message.hasBoldStyle());
  });

  it('as a user I can add italic styling by clicking the italic styling button in the wysiwyg', async () => {
    await driver.get(baseUrl);
    const message = await new VlProzaMessage(driver, selector);

    await enableWysiwyg(message);
    await assert.eventually.isFalse(message.hasItalicStyle());
    await message.clickWysiwygItalicButton();
    await message.confirm();
    await assert.eventually.isTrue(message.hasItalicStyle());
  });

  it('as a user I can add underline styling by clicking the underline styling button in the wysiwyg', async () => {
    await driver.get(baseUrl);
    const message = await new VlProzaMessage(driver, selector);

    await enableWysiwyg(message);
    await assert.eventually.isFalse(message.hasUnderlineStyle());
    await message.clickWysiwygUnderlineButton();
    await message.confirm();
    await assert.eventually.isTrue(message.hasUnderlineStyle());
  });

  it('as a user I can click outside of the text area to close the edit mode and save my changes', async () => {
    await driver.get(baseUrl);
    const message = await new VlProzaMessage(driver, selector);

    await assert.eventually.equal(message.getText(), 'foobar');
    await message.edit();
    await message.type('decibel');
    await assert.eventually.isTrue(message.isEditable());
    await message.blur();
    await assert.eventually.isFalse(message.isEditable());
    await assert.eventually.equal(message.getText(), 'decibel');
  });

  it('as a user I can see a warning alert when updating fails', async () => {
    await driver.get(updateErrorUrl);
    const message = await new VlProzaMessage(driver, selector);

    await assert.eventually.equal(message.getText(), 'Update zal fout gaan');
    await message.edit();
    await message.type('decibel');
    await message.confirm();

    const toaster = await message.getToaster();
    await assert.eventually.lengthOf(toaster.getAlerts(), 1);
    const alert = (await toaster.getAlerts())[0];
    await assert.eventually.isTrue(alert.isError());
    await assert.eventually.equal(alert.getTitle(), 'Technische storing');
  });

  it('as a user I can see the parameter values when not in edit mode', async () => {
    await driver.get(parametersUrl);
    const message = await new VlProzaMessage(driver, selector);

    await assert.eventually.equal(
      message.getText(),
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis molestie feugiat. Lorem ipsum eros, consequat et venenatis ac, scelerisque feugiat nunc. Nam molestie tincidunt lectus, nec volutpat ante egestas at. Curabitur quis odio metus. Morbi at purus ac purus convallis tempus at eu est. Nunc id ligula quis justo semper ullamcorper. Donec orci nisi, tempus varius massa ut, vulputate imperdiet nibh. Maecenas tempus lectus quis turpis cursus, ac vehicula ligula fermentum.\nPraesent consequat diam nec semper congue. ipsum tempor ut erat nec aliquam. Quisque ullamcorper sapien magna, sit amet porta ipsum pulvinar aliquam. Sed eleifend fringilla augue in vehicula. Sed leo sem, imperdiet non ornare maximus, bibendum facilisis massa. Nunc condimentum leo mi, quis porta ante mattis ut. Quisque eu enim vel metus consequat iaculis. Donec malesuada odio quis quam vulputate vestibulum.',
    );
  });

  it('as a user I can see the parameter keys in edit mode', async () => {
    await driver.get(parametersUrl);
    const message = await new VlProzaMessage(driver, selector);

    await message.edit();
    await assert.eventually.equal(
      message.getWysiwygText(),
      'Lorem ${parameter.key2} dolor sit amet, consectetur adipiscing elit. Duis iaculis molestie feugiat. Lorem ${parameter.key2} eros, consequat et venenatis ac, scelerisque feugiat nunc. Nam molestie tincidunt lectus, nec volutpat ante egestas at. Curabitur quis odio metus. Morbi at purus ac purus convallis ${parameter.key1} at eu est. Nunc id ligula quis justo semper ullamcorper. Donec orci nisi, ${parameter.key1} varius massa ut, vulputate imperdiet nibh. Maecenas ${parameter.key1} lectus quis turpis cursus, ac vehicula ligula fermentum.\n\nPraesent consequat diam nec semper congue. ${parameter.key2} tempor ut erat nec aliquam. Quisque ullamcorper sapien magna, sit amet porta ${parameter.key2} pulvinar aliquam. Sed eleifend fringilla augue in vehicula. Sed leo sem, imperdiet non ornare maximus, bibendum facilisis massa. Nunc condimentum leo mi, quis porta ante mattis ut. Quisque eu enim vel metus consequat iaculis. Donec malesuada odio quis quam vulputate vestibulum.',
    );
  });
});
