
import { html } from 'lit-html';
import '../../components/link';
import '../../legacy/multiselect';
import linkStyles from '../../components/link/styles.scss';
import { docsIntro, stylesheet } from '../../../.storybook/utils.js';

export default {
  title: 'legacy/vl-multiselect',
  decorators: [(story) => html`${stylesheet(linkStyles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'multiselect',
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
  href="https://webcomponenten.omgeving.vlaanderen.be/doc/VlMultiSelect.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;

export const Test = () => {
  return html`
    <select id="multiselect" is="vl-multiselect">
      <option value="Belgium">België</option>
      <option value="Germany">Duitsland</option>
      <option value="France">Frankrijk</option>
    </select>
  `;
};