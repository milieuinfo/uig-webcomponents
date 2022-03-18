import { html } from 'lit-html';
import '.';
import { stylesheet, docsIntro } from '../../../../../.storybook/utils.js';
import linkStyles from '../../../../components/link/styles.scss';

export default {
  title: 'legacy/vl-radio/vl-radio-group',
  decorators: [(story) => html`${stylesheet(linkStyles)}${story()}`],
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'radio-group',
          intro:
            'A radio group can be used to group sibling radio buttons so only one radio button in the group can be selected. ',
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
  href="https://webcomponenten.omgeving.vlaanderen.be/demo/vl-radio-group.html"
>
  Legacy docs <span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-link></span
></a>`;
