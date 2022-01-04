import { assert, getDriver, config } from '../../../../utils/test';
import { VlTypography } from './typography';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-typography--default`;

describe('vl-typography', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the content of a typography component', async () => {
    await driver.get(defaultUrl);
    const typography = await new VlTypography(driver, 'vl-typography');
    const innerHTML = await typography.getAttribute('innerHTML');
    await assert.isTrue(innerHTML.indexOf('<a href="#">tempor incididunt</a>') > 0);
    await assert.isTrue(innerHTML.indexOf('<p>') > 0);
    await assert.isTrue(innerHTML.indexOf('</p>') > 0);
    await assert.eventually.equal(
      typography.getText(),
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem dolor sit amet, consectetur adipisicing elit. Deleniti, in.',
    );
  });
});
