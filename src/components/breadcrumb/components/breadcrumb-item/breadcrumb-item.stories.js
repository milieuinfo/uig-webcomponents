import { html } from 'lit-html';
import { docsIntro, TYPES } from '../../../../../.storybook/utils.js';
import '../..';

export default {
  title: 'custom-elements/vl-breadcrumb',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component: docsIntro({
          root: 'breadcrumb',
          intro: 'Use breadcrumb items to add navigation steps to a breadcrumb.',
        }),
      },
    },
  },
  args: {
    href: '#',
  },
  argTypes: {
    href: {
      name: 'data-vl-href',
      description: 'Changes the url to which the browser will navigate when clicking the breadcrumb item.',
      type: { summary: TYPES.STRING },
    },
  },
};

export const breadCrumbItem = ({ href }) => html`
  <vl-breadcrumb-item data-vl-href=${href}>Regelgeving</vl-breadcrumb-item>
`;
breadCrumbItem.storyName = 'breadcrumb-item - default';

export const breadcrumbItemReactive = () => html`
  <script>
    console.log('BREADCRUMB-ITEM WORDT GEÏNITIALISEERD');
    changeHref = (href) => {
      console.log('changeHref to', href);
      document.getElementById('breadCrumbItem1').setAttribute('data-vl-href', href);
    };
  </script>
  <button onclick="changeHref('testUrl')">Href wijzigen</button>
  <vl-breadcrumb-item id="breadCrumbItem1" data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>
`;
breadcrumbItemReactive.storyName = 'breadcrumb-item - reactive';
