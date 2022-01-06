import { assert, getDriver, config } from '../../../../utils/test';
import { VlIntroduction } from './introduction';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-introduction--default`;

describe('vl-introduction', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the introduction', async () => {
    await driver.get(defaultUrl);
    const introduction = await new VlIntroduction(driver, 'p[is="vl-introduction"]');
    await assert.eventually.equal(
      introduction.getText(),
      'Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
    );
  });
});
