import { html } from 'lit-html';
import '../vl-radio-group';
import { docsIntro } from '../../../../../.storybook/utils.js';

export default {
  title: 'native-elements/vl-radio/vl-radio-group',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'radio-group',
          intro:
            'A radio group can be used to group sibling radio buttons so only one radio button in the group can be selected. ',
        }),
      },
    },
  },
};

export const Default = () => html`<vl-radio-group>
  <vl-radio data-vl-label="Ja" data-vl-value="yes"></vl-radio>
  <vl-radio data-vl-label="Nee" data-vl-value="no"></vl-radio>
</vl-radio-group>`;

export const WithDisabledRadio = () => html`<vl-radio-group>
  <vl-radio data-vl-label="Ja" data-vl-value="yes"></vl-radio>
  <vl-radio data-vl-label="Misschien" data-vl-value="maybe" data-vl-disabled></vl-radio>
  <vl-radio data-vl-label="Nee" data-vl-value="no"></vl-radio>
</vl-radio-group>`;
