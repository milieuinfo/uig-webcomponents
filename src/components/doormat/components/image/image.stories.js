import { html } from 'lit-html';
import '../..';
import styles from '../../styles.scss';
import { stylesheet, wrapWidth, TYPES, docsIntro } from '../../../../../.storybook/utils';

export default {
  title: 'native-elements/vl-doormat/vl-doormat-image',
  decorators: [(story) => html`${stylesheet(styles)} ${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'doormat',
          stylesheets: ['doormat'],
          intro: 'Add an extra image to the doormat to visually support the connected content.',
        }),
      },
    },
  },
  args: { graphic: false },
  argTypes: {
    graphic: {
      name: 'data-vl-graphic',
      description: 'Default doormat with a large image above.',
      type: { summary: TYPES.BOOLEAN },
      defaultValue: { summary: 'false' },
    },
  },
};

export const Default = ({ graphic }) => html` <div style="max-width: ${wrapWidth}">
  <a is="vl-doormat" href="#">
    <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
    <div is="vl-doormat-text">
      De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt sociale
      woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen om de
      stijging van de vastgoedprijzen onder controle te houden.
    </div>
    <img
      is="vl-doormat-image"
      src=${graphic ? 'https://picsum.photos/1600/400?image=1048' : 'https://picsum.photos/100/150?image=1048'}
      alt="Bouwen in Brussel"
      ?data-vl-graphic=${graphic}
    />
  </a>
</div>`;
