import { html } from 'lit-html';
import { stylesheet, wrapWidth, docsIntro, TYPES } from '../../../.storybook/utils';
import '../doormat';
import styles from './styles.scss';

export default {
  title: 'native-elements/vl-doormat',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'doormat',
          stylesheets: ['doormat'],
          intro:
            'Use the doormat component to add a quick and clear overview of the information on your site, divided into categories. Each doormat category gets a title, an image (optional) and a short intro. Each category links to its underlying page.',
        }),
      },
    },
  },
  args: {
    alt: false,
  },
  argTypes: {
    alt: {
      name: 'data-vl-alt',
      description: 'Changes the gray background of the doormat to white.',
      type: { summary: TYPES.BOOLEAN },
      defaultValue: { summary: 'false' },
    },
  },
};

export const Default = ({ alt }) => html` <div style="max-width: ${wrapWidth}">
  <a is="vl-doormat" href="#" ?data-vl-alt=${alt}>
    <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
    <div is="vl-doormat-text">
      De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt sociale
      woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen om de
      stijging van de vastgoedprijzen onder controle te houden.
    </div>
  </a>
</div>`;
