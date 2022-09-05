import { html } from 'lit-html';
import './vl-checkbox.component';

export default {
  title: 'Components/vl-checkbox',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () => html`
  <vl-checkbox data-vl-label="Optie 1"></vl-checkbox>  
`;
