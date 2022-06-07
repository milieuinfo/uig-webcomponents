import { assert, getDriver, config, By, Key } from '../../../../utils/test';
import { VlInputField } from '../../../../components/input-field/test/e2e/input-field';
import { VlTextareaPage } from './textarea.page.js';

describe('vl-textarea', async () => {
  let driver;
  let vlTextareaPage;

  beforeEach(() => {
    driver = getDriver();
    vlTextareaPage = new VlTextareaPage(driver);
    return vlTextareaPage.load();
  });

  it('as a user I can fill in and read and empty the text of a textarea', async () => {
    const textarea = await vlTextareaPage.getTextarea();
    await textarea.setValue('Dit is de tekst in de textarea');
    await assert.eventually.equal(textarea.getValue(), 'Dit is de tekst in de textarea');
    await textarea.clear();
    await assert.eventually.equal(textarea.getValue(), '');
  });

  it('as a user I can see the difference between an inline textarea and a block textarea', async () => {
    const textarea = await vlTextareaPage.getTextarea();
    await assert.eventually.isFalse(textarea.isBlock());
    const textareaBlock = await vlTextareaPage.getTextareaBlock();
    await assert.eventually.isTrue(textareaBlock.isBlock());
  });

  it('as a user I can see the difference between a regular textarea and an error textarea', async () => {
    const textarea = await vlTextareaPage.getTextarea();
    await assert.eventually.isFalse(textarea.isError());
    const textareaError = await vlTextareaPage.getTextareaError();
    await assert.eventually.isTrue(textareaError.isError());
  });

  it('as a user I can see the difference between an ordinary textarea and a success textarea', async () => {
    const textarea = await vlTextareaPage.getTextarea();
    await assert.eventually.isFalse(textarea.isSuccess());
    const textareaSuccess = await vlTextareaPage.getTextareaSuccess();
    await assert.eventually.isTrue(textareaSuccess.isSuccess());
  });

  it('as a user I can see the difference between a regular textarea and a focus textarea', async () => {
    const textarea = await vlTextareaPage.getTextarea();
    await assert.eventually.isFalse(textarea.isFocus());
    const textareaFocus = await vlTextareaPage.getTextareaFocus();
    await assert.eventually.isTrue(textareaFocus.isFocus());
  });

  it('as a user I can see the difference between a regular textarea and a disabled textarea', async () => {
    const textarea = await vlTextareaPage.getTextarea();
    await assert.eventually.isFalse(textarea.isDisabled());
    const textareaDisabled = await vlTextareaPage.getTextareaDisabled();
    await assert.eventually.isTrue(textareaDisabled.isDisabled());
  });

  it('as a user I can only set a value in a non-disabled textarea', async () => {
    const textarea = await vlTextareaPage.getTextarea();
    await assert.eventually.isTrue(textarea.isEnabled());
    const textareaDisabled = await vlTextareaPage.getTextareaDisabled();
    await assert.eventually.isFalse(textareaDisabled.isEnabled());
    try {
      await textareaDisabled.setValue('text');
      assert.isTrue(false);
    } catch (error) {
      return Promise.resolve();
    }
  });

  it('as a user I can see the difference between a geowne textarea and a rich textarea', async () => {
    const textarea = await vlTextareaPage.getTextarea();
    await assert.eventually.isFalse(textarea.isRich());
    const textareaRich = await vlTextareaPage.getTextareaRich();
    await assert.eventually.isTrue(textareaRich.isRich());
  });

  it('as a user I can add text and a root paragraph tag will be added automatically', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();

    const text = 'text';
    await textarea.setValue(text);

    await assert.eventually.include(textarea.getValue(), `<p>${text}</p>`);
  });

  it('as a user I can provide my text with bold, italic, underline and strikethrough style', async () => {
    if (config.browserName !== 'chrome') {
      const textarea = await vlTextareaPage.getTextareaRich();
      await textarea.clear();
      const text = 'text';
      await textarea.sendKeys(text);
      await assert.eventually.include(textarea.getValue(), `${text}`);
      await textarea.activateBold();
      await textarea.sendKeys(text);
      await assert.eventually.include(textarea.getValue(), `<b>${text}</b>`);
      await textarea.deactivateBold();
      await textarea.activateItalic();
      await textarea.sendKeys(text);
      await assert.eventually.include(textarea.getValue(), `<i>${text}</i>`);
      await textarea.deactivateItalic();
      await textarea.activateUnderline();
      await textarea.sendKeys(text);
      await assert.eventually.include(textarea.getValue(), `<u>${text}</u>`);
      await textarea.deactivateUnderline();
      await textarea.activateStrikethrough();
      await textarea.sendKeys(text);
      await assert.eventually.include(textarea.getValue(), `<s>${text}</s>`);
      await textarea.deactivateStrikethrough();
    }
  });

  it('as a user I can add titles', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    await textarea.clear();
    const text = 'title';
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.activateH1();
    await assert.eventually.include(textarea.getValue(), `<h1>${text}</h1>`);
    await textarea.activateH2();
    await assert.eventually.include(textarea.getValue(), `<h2>${text}</h2>`);
    await textarea.activateH3();
    await assert.eventually.include(textarea.getValue(), `<h3>${text}</h3>`);
    await textarea.activateH4();
    await assert.eventually.include(textarea.getValue(), `<h4>${text}</h4>`);
    await textarea.activateH5();
    await assert.eventually.include(textarea.getValue(), `<h5>${text}</h5>`);
    await textarea.activateH6();
    await assert.eventually.include(textarea.getValue(), `<h6>${text}</h6>`);
  });

  it('as a user I can add a quote text', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    const text = 'quote';
    await textarea.setValue(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.activateBlockquote();
    await assert.eventually.include(textarea.getValue(), `<blockquote><p>${text}</p></blockquote>`);
    await textarea.deactivateBlockquote();
    await assert.eventually.include(textarea.getValue(), `${text}`);
  });

  it('as a user I can add a horizontal line tag', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    const text = 'text';
    await textarea.setValue(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.addHorizontalLine();
    await assert.eventually.include(textarea.getValue(), `<hr`);
  });

  it('as a user I can add a numbered list', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    const text = 'item';
    await textarea.setValue(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.addNumberedList();
    await assert.eventually.include(textarea.getValue(), `<ol><li>${text}</li></ol>`);
  });

  it('as a user I can add a list', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    const text = 'item';
    await textarea.setValue(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.addList();
    await assert.eventually.include(textarea.getValue(), `<ul><li>${text}</li></ul>`);
  });

  it('as a user I can add a link', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    await textarea.clear();
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    const linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
    const text = 'Google';
    const link = 'https://www.google.be';

    await textInputField.setValue(text);
    await linkInputField.setValue(link);
    await modal.submit();
    await assert.eventually.include(
      textarea.getValue(),
      `<a target="_blank" href="${link}" rel="noopener" data-mce-href="${link}">${text}</a>`,
    );
  });

  it("as a user I get an error if I don't enter a valid text or link when adding a link", async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    await textarea.clear();
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    const linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
    await assert.eventually.isFalse(textInputField.hasError());
    await assert.eventually.isFalse(linkInputField.hasError());
    await modal.submit();
    await assert.eventually.isTrue(textInputField.hasError());
    await assert.eventually.isTrue(linkInputField.hasError());
    await modal.cancel();
  });

  it('as a user I can cancel the link modal and when opening the link modal again the input fields will be empty', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    await textarea.clear();
    await assert.eventually.isEmpty(textarea.getValue());
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    await textInputField.setValue('text');
    await modal.cancel();
    await textarea.addLink();
    await assert.eventually.isEmpty(textarea.getValue());
    await modal.cancel();
  });

  it('as a user I create a new paragraph element with every enter', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    const text = 'text';
    await textarea.setValue(text + Key.RETURN + text);
    await assert.eventually.include(textarea.getValue(), `<p>text</p><p>text</p>`);
  });

  it('as a user i can copy text with style', async () => {
    if (config.browserName !== 'chrome' && config.browserName !== 'edge') {
      const textarea = await vlTextareaPage.getTextareaRich();
      await textarea.clear();
      await assert.eventually.isEmpty(textarea.getValue());
      await textarea.activateBold();
      const text = 'text';
      await textarea.sendKeys(text);
      await assert.eventually.include(textarea.getValue(), `<p><b>${text}</b></p>`);
      await textarea.copyPasteValue();
      await assert.eventually.include(textarea.getValue(), `<p><b>${text}${text}</b></p>`);
    }
  });

  it('as a user I can add text to a rich textarea in a shadow DOM', async () => {
    const textarea = await vlTextareaPage.getTextareaRichShadowDOM();
    const text = 'text';
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
  });

  it('as a user I can select a text and then add a link without having to re-enter the text', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    await textarea.clear();
    const text = 'this is a link!';
    const link = 'https://www.google.be';
    await textarea.setValue(text);
    await textarea.selectValue();
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    const linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
    await assert.eventually.equal(textInputField.getValue(), text);
    await linkInputField.setValue(link);
    await modal.submit();
    await assert.eventually.include(
      textarea.getValue(),
      `<a target="_blank" href="${link}" rel="noopener" data-mce-href="${link}">${text}</a>`,
    );
  });

  it('as a user I can select a text with special characters and then add a link without having to re-enter the text', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    await textarea.clear();
    const text = 'this is a <spécîàl> link!';
    const link = 'https://www.google.be';
    await textarea.setValue(text);
    await textarea.selectValue();
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    const linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
    await assert.eventually.equal(textInputField.getValue(), text);
    await linkInputField.setValue(link);
    await modal.submit();
    await assert.eventually.include(
      textarea.getValue(),
      `<a target="_blank" href="${link}" rel="noopener" data-mce-href="${link}">this is a &lt;spécîàl&gt; link!</a>`,
    );
  });

  it('as a user I can edit a link', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    await textarea.clear();
    const text = 'Vlaanderen';
    const link = 'https://www.vlaanderen.be/';
    await textarea.setValue(text);
    await textarea.selectValue();
    await textarea.addLink();
    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    const textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    const linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
    await assert.eventually.equal(textInputField.getValue(), text);
    await linkInputField.setValue(link);
    await modal.submit();
    await assert.eventually.include(
      textarea.getValue(),
      `<a target="_blank" href="${link}" rel="noopener" data-mce-href="${link}">${text}</a>`,
    );

    await textarea.selectValue();
    await textarea.addLink();
    const value = await textInputField.getValue();
    console.log('value: ', value);
    await assert.eventually.include(textInputField.getValue(), text);
    await assert.eventually.equal(linkInputField.getValue(), link);
  });
});
