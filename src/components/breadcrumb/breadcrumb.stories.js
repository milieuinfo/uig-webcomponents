import { html } from 'lit-html';
import { docsIntro } from '../../../.storybook/utils.js';
import '.';

export default {
  title: 'custom-elements/vl-breadcrumb',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'breadcrumb',
          intro: 'Use breadcrumbs to show the location of the current page within a navigational hierarchy.',
        }),
      },
    },
  },
};

export const breadcrumbDefault = () => html`
  <vl-breadcrumb>
    <vl-breadcrumb-item data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Webuniversum</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Componenten</vl-breadcrumb-item>
  </vl-breadcrumb>
`;
breadcrumbDefault.storyName = 'breadcrumb - default';

export const breadcrumbReactive = () => html`
  <script>
    console.log('BREADCRUMB WORDT GEÏNITIALISEERD');
    changeHref = (href) => {
      console.log('changeHref to', href);
      document.getElementById('breadCrumbItem1').setAttribute('data-vl-href', href);
    };
  </script>
  <button onclick="changeHref('testUrl')">Href wijzigen</button>
  <vl-breadcrumb>
    <vl-breadcrumb-item id="breadCrumbItem1" data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Webuniversum</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Componenten</vl-breadcrumb-item>
  </vl-breadcrumb>
`;
breadcrumbReactive.storyName = 'breadcrumb - reactive';
