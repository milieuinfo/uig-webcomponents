import { assert, getDriver, config } from '../../../../utils/test';
import { VlCodePreview } from './code-preview';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-code-preview--default`;

describe('vl-code-preview', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the content of a code preview', async () => {
    await driver.get(defaultUrl);
    const element = await new VlCodePreview(driver, 'vl-code-preview');
    const text = await element.getText();

    await assert.include(text, '<h3>This is a title</h3>');
    await assert.include(text, '<h2>This is a subtitle</h2>');
    await assert.include(text, '<p>test</p>');
    await assert.include(
      text,
      '<p>\n' +
        '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam\n' +
        '      impedit dolor maxime incidunt eos labore aut delectus, omnis repellat\n' +
        '      officia id dolores, magni velit beatae similique ex optio enim, nulla.\n' +
        '    </p>\n',
    );
    await assert.include(text, '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>');
  });
});
