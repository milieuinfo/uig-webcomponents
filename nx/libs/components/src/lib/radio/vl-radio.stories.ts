import { html } from 'lit-html';
import './vl-radio.component';

export default {
  title: 'Components/vl-radio',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () => html`
  <vl-radio data-vl-label="Ja" data-vl-value="yes"></vl-radio>
  <vl-radio data-vl-label="Nee" data-vl-value="no"></vl-radio>
`;
