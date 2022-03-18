import { assert, getDriver, config } from '../../../../utils/test';
import { VlVideoPlayer } from './video-player';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-video-player--default`;
const selector = '[is="vl-video-player"]';

describe('vl-video-player', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('als gebruiker kan ik een video bekijken', async () => {
    await driver.get(defaultUrl);
    const videoPlayer = await new VlVideoPlayer(driver, selector);

    await assert.eventually.isTrue(videoPlayer.isDisplayed());
  });
});
