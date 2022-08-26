import { html } from 'lit-html';
import { docsIntro, stylesheet } from '../../../.storybook/utils';
import linkStyles from '../../components/link/styles.scss';
import '../../legacy/upload';

export default {
  title: 'legacy/vl-upload',
  decorators: [(story) => html`${stylesheet(linkStyles)} ${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'upload',
          stylesheets: ['upload'],
          isLegacy: true,
        }),
      },
    },
  },
};

export const uig2120 = () =>
  html` <vl-upload url="http://httpbin.org/post" data-vl-input-name="files" id="vl-upload"></vl-upload> `;
