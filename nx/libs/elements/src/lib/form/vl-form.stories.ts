import { html } from 'lit-html';
import './vl-form.element';
import '../form-grid/vl-form-grid.element';
import '../button/vl-button.element';
// import '../input-field/vl-input-field.element';
import '../form-message/vl-form-message.element';
import { args, argTypes } from './helpers/vl-form.stories-helper';

export default {
  title: 'Elements/vl-form',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args,
  argTypes,
};

export const Default = () => html`
  <div style="max-width: 800px">
    <form is="vl-form">
      <div is="vl-form-grid" data-vl-is-stacked>
        <div is="vl-form-column" data-vl-size="3">
          <label is="vl-form-label" for="name" data-vl-block>
            Naam
            <span is="vl-form-annotation-span">(verplicht)</span>
          </label>
        </div>
        <div is="vl-form-column" data-vl-size="9">
          <input name="name" autocomplete="name" is="vl-input-field" data-vl-block />
        </div>

        <div is="vl-form-column" data-vl-size="3">
          <label is="vl-form-label" for="firstname" data-vl-block>
            Voornaam
            <span is="vl-form-annotation-span">(verplicht)</span>
          </label>
        </div>
        <div is="vl-form-column" data-vl-size="9">
          <input name="firstname" autocomplete="firstname" is="vl-input-field" data-vl-block />
        </div>

        <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
          <div is="vl-action-group">
            <button is="vl-button" type="submit">Versturen</button>
            <a is="vl-link" href="#">
              <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
              Annuleren
            </a>
          </div>
        </div>
      </div>
    </form>
  </div>
`;

interface WithValidationInterface {
  validate: string
}

export const WithValidation = ({ validate }: WithValidationInterface) => html`
  <div style="max-width: 800px">
    <form is="vl-form" ?data-vl-validate=${validate}>
      <div is="vl-form-grid" data-vl-is-stacked>
        <div is="vl-form-column" data-vl-size="3">
          <label is="vl-form-label" for="name" data-vl-block>
            Naam
            <span is="vl-form-annotation-span">(verplicht)</span>
          </label>
        </div>
        <div is="vl-form-column" data-vl-size="9">
          <input
            name="name"
            autocomplete="name"
            is="vl-input-field"
            data-vl-block
            data-vl-required
            data-vl-error-message="Geef een naam in."
            data-vl-error-placeholder="name-error"
          />
          <p is="vl-form-validation-message" data-vl-error data-vl-error-id="name-error"></p>
        </div>

        <div is="vl-form-column" data-vl-size="3">
          <label is="vl-form-label" for="firstname" data-vl-block>
            Voornaam
            <span is="vl-form-annotation-span">(verplicht)</span>
          </label>
        </div>
        <div is="vl-form-column" data-vl-size="9">
          <input
            name="firstname"
            autocomplete="firstname"
            is="vl-input-field"
            data-vl-block
            data-vl-required
            data-vl-error-message="Geef een voornaam in."
            data-vl-error-placeholder="firstname-error"
          />
          <p is="vl-form-validation-message" data-vl-error data-vl-error-id="firstname-error"></p>
        </div>

        <div is="vl-form-column" data-vl-size="9" data-vl-push="3">
          <div is="vl-action-group">
            <button is="vl-button" type="submit">Versturen</button>
            <a is="vl-link" href="#">
              <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
              Annuleren
            </a>
          </div>
        </div>
      </div> 
    </form>
  </div>
`;
