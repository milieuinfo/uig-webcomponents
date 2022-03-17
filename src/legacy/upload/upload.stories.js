import { html } from 'lit-html';
import '../upload';
import styles from '../../components/button/styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';

export default {
  title: 'legacy-elements/vl-upload',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro(
          {
            root: 'upload',
            intro:
              'Use the upload component to select or drag and drop one or more files in the upload field. Alternatively, the user can upload one or more files by clicking the link in the upload field and selecting the file(s) in the File menu.',
          },
          true,
        ),
      },
    },
  },
};

export const Default = () =>
  html`<p>
    Documentatie:
    <a href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlUpload.html"
      >https://webcomponenten.omgeving.vlaanderen.be/doc/VlUpload.html</a
    >
  </p>`;
