import { html } from 'lit-html';
import '../form';
import '../button';
import '../select';
import '../input-field';
import '../search-filter';
import '../link';
import styles from './styles.scss';
import buttonStyles from '../button/styles.scss';
import inputStyles from '../input-field/styles.scss';
import formStyles from '../form/styles.scss';
import selectStyles from '../select/styles.scss';
import linkStyles from '../link/styles.scss';
import { stylesheet, docsIntro } from '../../../.storybook/utils.js';
import { args, argTypes } from './config';

export default {
  title: 'native-elements/vl-search-filter',
  decorators: [
    (story) =>
      html`${stylesheet(`${styles}${buttonStyles}${inputStyles}${formStyles}${selectStyles}${linkStyles}`)}${story()}`,
  ],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          stylesheets: ['search-filter'],
          root: 'search-filter',
          intro: 'The search filter allows the user to refine the search results for a specific query.',
        }),
      },
    },
  },
  args,
  argTypes,
};

const Template = ({ title, alt, mobileModal, mobileModalTitle, maxWidth }) => html`
  <div style="max-width: ${maxWidth}">
    <div
      is="vl-search-filter"
      data-vl-title=${title}
      ?data-vl-alt=${alt}
      ?data-vl-mobile-modal=${mobileModal}
      data-vl-mobile-modal-title=${mobileModalTitle}
    >
      <form is="vl-form">
        <section>
          <h2>Gegevens</h2>
          <div>
            <label is="vl-form-label" for="firstname">Voornaam</label>
            <input is="vl-input-field" type="text" name="firstname" data-vl-block autocomplete="given-name" />
          </div>
          <div>
            <label is="vl-form-label" for="name">Naam</label>
            <input is="vl-input-field" type="text" name="name" data-vl-block autocomplete="family-name" />
          </div>
        </section>
        <section>
          <h2>Locatie</h2>
          <div>
            <label is="vl-form-label" for="vl-select-city">Stad</label>
            <select
              is="vl-select"
              name="vl-select-default"
              data-vl-select-deletable
              data-vl-block
              autocomplete="address-level2"
            >
              <option placeholder="">Kies een stad</option>
              <option value="brussel">Brussel</option>
              <option value="gent">Gent</option>
            </select>
          </div>
          <div>
            <label is="vl-form-label" for="vl-select-country">Land</label>
            <select
              is="vl-select"
              name="vl-select-default"
              data-vl-select-deletable
              data-vl-block
              autocomplete="country"
            >
              <option placeholder="">Kies een land</option>
              <option value="belgië">België</option>
            </select>
          </div>
        </section>
        <div>
          <button is="vl-button" type="submit">Zoeken</button>
        </div>
      </form>
      <div>
        <a href="#" is="vl-link">Zoekopdracht verwijderen</a>
      </div>
    </div>
  </div>
`;

export const Default = Template.bind({});
export const Mobile = Template.bind({});

Default.argTypes = {
  mobileModal: {
    control: {
      disable: true,
    },
  },
  mobileModalTitle: {
    control: {
      disable: true,
    },
  },
};

Mobile.args = {
  mobileModal: true,
  mobileModalTitle: 'Mobile title',
};

Mobile.argTypes = {
  title: {
    control: {
      disable: true,
    },
  },
  mobileModal: {
    control: {
      disable: true,
    },
  },
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
