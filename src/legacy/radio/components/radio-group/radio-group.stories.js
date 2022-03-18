import { html } from 'lit-html';
import '.';
import { docsIntro } from '../../../../../.storybook/utils.js';

export default {
  title: 'legacy-elements/vl-radio/vl-radio-group',
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
