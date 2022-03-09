import { html } from 'lit-html';
import '../cookie';

export default {
  title: 'custom-elements/vl-cookie-statement/vl-cookie',
  args: {
    title: 'Captcha contactformulier',
    names: ['NID'],
    purpose:
      'reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen.',
    domain: 'google.com',
    processor: 'Google',
    validity: 'Permanente cookie met een geldigheid van 6 maanden',
  },
};

export const Default = ({ title, names, purpose, domain, processor, validity }) =>
  html`<vl-cookie
    data-vl-title=${title}
    .names=${names}
    data-vl-purpose=${purpose}
    data-vl-domain=${domain}
    data-vl-processor=${processor}
    data-vl-validity=${validity}
  ></vl-cookie>`;
