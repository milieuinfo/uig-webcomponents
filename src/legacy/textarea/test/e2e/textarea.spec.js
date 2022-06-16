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

    const paragraph = await textarea.getChild('p');
    const paragraphText = await textarea.getChildValue(paragraph);
    await assert.exists(paragraph);
    await assert.include(paragraphText, text);
  });

  it('as a user I can provide my text with bold, italic, underline and strikethrough style', async () => {
    if (config.browserName === 'chrome') {
      const textarea = await vlTextareaPage.getTextareaRich();
      await textarea.clear();
      const text = 'text';
      await textarea.sendKeys(text);
      await assert.eventually.include(textarea.getValue(), `${text}`);

      // await textarea.setValue(text);
      await textarea.selectValue();
      await textarea.activateBold();
      let element = await textarea.getChild('b');
      let elementText = await textarea.getChildValue(element);
      await assert.exists(element);
      await assert.include(elementText, text);
      await textarea.selectValue();
      await textarea.deactivateBold();

      await textarea.setValue(text);
      await textarea.selectValue();
      await textarea.activateItalic();
      element = await textarea.getChild('i');
      elementText = await textarea.getChildValue(element);
      await assert.exists(element);
      await assert.include(elementText, text);
      await textarea.selectValue();
      await textarea.deactivateItalic();

      await textarea.setValue(text);
      await textarea.selectValue();
      await textarea.activateUnderline();
      element = await textarea.getChild('u');
      elementText = await textarea.getChildValue(element);
      await assert.exists(element);
      await assert.include(elementText, text);
      await textarea.selectValue();
      await textarea.deactivateUnderline();

      await textarea.setValue(text);
      await textarea.selectValue();
      await textarea.activateStrikethrough();
      element = await textarea.getChild('s');
      elementText = await textarea.getChildValue(element);
      await assert.exists(element);
      await assert.include(elementText, text);
      await textarea.selectValue();
      await textarea.deactivateStrikethrough();
    }
  });

  it('as a user I can add titles', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    await textarea.clear();
    const text = 'title';
    await textarea.sendKeys(text);

    await textarea.activateH1();

    let title = await textarea.getChild('h1');
    let titleText = await textarea.getChildValue(title);
    await assert.exists(title);
    await assert.include(titleText, text);

    await textarea.activateH2();

    title = await textarea.getChild('h2');
    titleText = await textarea.getChildValue(title);
    await assert.exists(title);
    await assert.include(titleText, text);

    await textarea.activateH3();

    title = await textarea.getChild('h3');
    titleText = await textarea.getChildValue(title);
    await assert.exists(title);
    await assert.include(titleText, text);

    await textarea.activateH4();

    title = await textarea.getChild('h4');
    titleText = await textarea.getChildValue(title);
    await assert.exists(title);
    await assert.include(titleText, text);

    await textarea.activateH5();

    title = await textarea.getChild('h5');
    titleText = await textarea.getChildValue(title);
    await assert.exists(title);
    await assert.include(titleText, text);

    await textarea.activateH6();

    title = await textarea.getChild('h6');
    titleText = await textarea.getChildValue(title);
    await assert.exists(title);
    await assert.include(titleText, text);
  });

  it('as a user I can add a quote text', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    const text = 'quote';
    await textarea.setValue(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
    await textarea.activateBlockquote();
    const blockquote = await textarea.getChild('blockquote');
    const blockquoteText = await textarea.getChildValue(blockquote);
    await assert.exists(blockquote);
    await assert.include(blockquoteText, text);
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

    await textarea.addNumberedList();

    const numberedList = await textarea.getChild('ol');
    await assert.exists(numberedList);

    const listItem = await textarea.getChild('li', numberedList);
    await assert.exists(listItem);

    const listItemText = await textarea.getChildValue(listItem);
    await assert.include(listItemText, text);
  });

  it('as a user I can add a list', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    const text = 'item';
    await textarea.setValue(text);

    await textarea.addList();

    const numberedList = await textarea.getChild('ul');
    await assert.exists(numberedList);

    const listItem = await textarea.getChild('li', numberedList);
    await assert.exists(listItem);

    const listItemText = await textarea.getChildValue(listItem);
    await assert.include(listItemText, text);
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
    await textarea.addLink();

    const modal = await textarea.getLinkToolbarModal();
    const contentElements = await modal.getContentSlotElements();
    let textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    await textInputField.setValue('text');
    await modal.cancel();

    await textarea.addLink();

    textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
    await assert.eventually.isEmpty(textInputField.getValue());
    await modal.cancel();
  });

  it('as a user I create a new paragraph element with every enter', async () => {
    const textarea = await vlTextareaPage.getTextareaRich();
    const text1 = 'text1';
    const text2 = 'text2';
    await textarea.setValue(text1 + Key.RETURN + text2);

    const paragraph1 = await textarea.getNthChild(1, 'p');
    const paragraph1Text = await textarea.getChildValue(paragraph1);
    await assert.exists(paragraph1);
    await assert.include(paragraph1Text, text1);

    const paragraph2 = await textarea.getNthChild(2, 'p');
    const paragraph2Text = await textarea.getChildValue(paragraph2);
    await assert.exists(paragraph2);
    await assert.include(paragraph2Text, text2);
  });

  it('as a user i can copy text with style', async () => {
    if (config.browserName === 'chrome') {
      const textarea = await vlTextareaPage.getTextareaRich();
      await textarea.clear();

        await textarea.activateBold();
      const text = 'text';
      await textarea.sendKeys(text);

        let paragraph = await textarea.getChild('p');
      let paragraphText = await textarea.getChildValue(paragraph);
      await assert.exists(paragraph);
      await assert.include(paragraphText, text);

      await textarea.copyPasteValue();

      paragraph = await textarea.getChild('b');
      paragraphText = await textarea.getChildValue(paragraph);
      await assert.exists(paragraph);
      await assert.include(paragraphText, `${text}${text}`);
    }
  });

  it('as a user I can add text to a rich textarea in a shadow DOM', async () => {
    const textarea = await vlTextareaPage.getTextareaRichShadowDOM();
    const text = 'text';
    await textarea.sendKeys(text);
    await assert.eventually.include(textarea.getValue(), `${text}`);
  });

  it('as a user I can select a text and then add a link without having to re-enter the text', async () => {
    if (config.browserName === 'chrome') {
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
    }
  });

  it('as a user I can select a text with special characters and then add a link without having to re-enter the text', async () => {
    if (config.browserName === 'chrome') {
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
    }
  });

  it('as a user I can edit a link', async () => {
    if (config.browserName === 'chrome') {
      const textarea = await vlTextareaPage.getTextareaRich();
      await textarea.clear();
      const text = 'Vlaanderen';
      const link = 'https://www.vlaanderen.be/';

      await textarea.setValue(text);
      await textarea.selectValue();
      await textarea.addLink();

      const modal = await textarea.getLinkToolbarModal();

      const contentElements = await modal.getContentSlotElements();
      let textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
      await assert.eventually.equal(textInputField.getValue(), text);

      let linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));

      await linkInputField.setValue(link);

      linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));
      await assert.eventually.equal(linkInputField.getValue(), link);

      await modal.submit();
      await assert.eventually.include(
        textarea.getValue(),
        `<a target="_blank" href="${link}" rel="noopener" data-mce-href="${link}">${text}</a>`,
      );

      await textarea.selectValue();
      await textarea.addLink();

      textInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#text')));
      linkInputField = await new VlInputField(driver, await contentElements[0].findElement(By.css('#url')));

      await assert.eventually.include(textInputField.getValue(), text);
      await assert.eventually.equal(linkInputField.getValue(), link);
    }
  });
});
