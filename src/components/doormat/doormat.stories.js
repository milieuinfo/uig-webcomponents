import { html } from 'lit-html';
import { stylesheet } from '../../../.storybook/utils';
import '../doormat';
import styles from './styles.scss';

export default {
  title: 'native-elements/vl-doormat',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  args: {
    alt: false,
    graphic: false,
  },
};

export const Default = ({ alt }) => html`<a is="vl-doormat" href="#" ?data-vl-alt=${alt}>
  <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
  <div is="vl-doormat-text">
    De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt sociale
    woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen om de stijging
    van de vastgoedprijzen onder controle te houden.
  </div>
</a>`;

export const WithImage = ({ alt, graphic }) => html` <a is="vl-doormat" href="#" ?data-vl-alt=${alt}>
  <h2 is="vl-doormat-title">Bouwen, wonen en energie</h2>
  <div is="vl-doormat-text">
    De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt sociale
    woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen om de stijging
    van de vastgoedprijzen onder controle te houden.
  </div>
  <img
    is="vl-doormat-image"
    src=${graphic ? 'https://picsum.photos/1600/400?image=1048' : 'https://picsum.photos/100/150?image=1048'}
    alt="Bouwen in Brussel"
    ?data-vl-graphic=${graphic}
  />
</a>`;
