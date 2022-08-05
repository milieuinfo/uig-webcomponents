import { html } from 'lit-html';
import { stylesheet, wrapWidth, docsIntro } from '../../../.storybook/utils';
import '../video-player';
import styles from './styles.scss';

export default {
  title: 'native-elements/vl-video-player',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'video-player',
          stylesheets: ['video-player'],
          intro:
            'Use the video-player component to offer an accessible video player with support for HTML5 video. Make sure to provide a video transcript to offer a good user experience for all users. The video player also offers support for closed captions.',
        }),
      },
    },
  },
};

export const Default = () => html`<div style="max-width: ${wrapWidth}">
  <video
    is="vl-video-player"
    poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1"
    controls
    crossorigin
    playsinline
  >
    <!-- Video files -->
    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size="576" />
    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" size="720" />
    <source
      src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
      type="video/mp4"
      size="1080"
    />
    <!-- Text track file -->
    <track
      kind="captions"
      label="English"
      srclang="en"
      src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
      default=""
    />
    <!-- Fallback for browsers that don't support the <video> element -->
    <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" download=""> Download </a>
  </video>
</div>`;
