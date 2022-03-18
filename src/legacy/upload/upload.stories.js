import { html } from 'lit-html';
import '../upload';
import styles from '../../components/button/styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import linkStyles from '../../components/link/styles.scss';

export default {
  title: 'legacy/vl-upload',
  decorators: [(story) => html`${stylesheet(`${styles}${linkStyles}`)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'upload',
          intro:
            'Use the upload component to select or drag and drop one or more files in the upload field. Alternatively, the user can upload one or more files by clicking the link in the upload field and selecting the file(s) in the File menu.',
          isLegacy: true,
        }),
      },
    },
  },
};

export const Default = () => html`<a
  is="vl-link"
  target="_blank"
  data-vl-inline
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlUpload.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;
