import { html } from 'lit-html';
import './vl-input-field.element';
import "../button/vl-button.element";
import "../link/vl-link.element";
import "../form-message/vl-form-message.element";
import { args, argTypes } from "../form-validation/config/form-validation.stories-helper";
import { VALIDATION_TYPE } from "../form-validation/enums/enums";

export default {
  title: 'Elements/vl-input-field',
  args: {
    block: false,
    error: false,
    small: false,
    success: false,
    ...args,
  },
  argTypes: {
    block: {
      name: 'data-vl-block',
      description: 'The input field will take the width of its parent.',
      table: {
        category: 'Attributes',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      name: 'data-vl-error',
      description: 'Causes a red border to appear around the input field.',
      table: {
        category: 'Attributes',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    small: {
      name: 'data-vl-small',
      description: 'Small variant of the input field.',
      table: {
        category: 'Attributes',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    success: {
      name: 'data-vl-success',
      description: 'Causes a green border to appear around the input field.',
      table: {
        category: 'Attributes',
        type: { summary: 'string' },
        defaultValue: { summary: 'false' },
      },
    },
    ...argTypes,
  },
};

interface InputFieldInterface {
  block: string,
  error: string,
  success: string,
  small: string,
}

export const Default = ({ block, error, success, small }: InputFieldInterface) => html`
  <input
    is="vl-input-field"
    ?data-vl-block=${block}
    ?data-vl-error=${error}
    ?data-vl-success=${success}
    ?data-vl-small=${small}
    data-cy="input-field"
  />
`;

export const Disabled = ({ block, error, success, small }: InputFieldInterface) => html`
  <input
    is="vl-input-field"
    disabled
    ?data-vl-block=${block}
    ?data-vl-error=${error}
    ?data-vl-success=${success}
    ?data-vl-small=${small}
    data-cy="input-field"
    />
`;

interface TemplateInterface {
  validationType: string,
  required: string,
  errorMessage: string,
  errorPlaceholder: string,
  successClass: string,
  errorClass: string,
  numericalOnlyInteger: string,
  numericalGreaterThan: string,
  numericalGreaterThanOrEqualTo: string,
  numericalLessThan: string,
  numericalLessThanOrEqualTo: string,
  block: string,
  error: string,
  success: string,
  disabled: string,
  small: string,

}

const Template = ({
  validationType,
  required,
  errorMessage,
  errorPlaceholder,
  successClass,
  errorClass,
  numericalOnlyInteger,
  numericalGreaterThan,
  numericalGreaterThanOrEqualTo,
  numericalLessThan,
  numericalLessThanOrEqualTo,
  block,
  error,
  success,
  disabled,
  small,
}: TemplateInterface) => html`
  <form is="vl-form" data-vl-validate target="_self" action="#">
    <div is="vl-form-group">
      <div is="vl-form-grid" data-vl-is-stacked>
        <div is="vl-form-column">
          <label is="vl-form-label" for="name" data-vl-block>
            Naam
            <span is="vl-form-annotation-span">(verplicht)</span>
          </label>
        </div>
        <div is="vl-form-column" data-vl-size="9">
          <input
            is="vl-input-field"
            data-vl-validation-type=${validationType}
            ?data-vl-required=${required}
            data-vl-error-message=${errorMessage}
            data-vl-error-placeholder=${errorPlaceholder}
            ?data-vl-success-class=${successClass}
            ?data-vl-error-class=${errorClass}
            ?data-vl-numerical-only-integer=${numericalOnlyInteger}
            data-vl-numerical-greater-than=${numericalGreaterThan}
            data-vl-numerical-greater-than-or-equal-to=${numericalGreaterThanOrEqualTo}
            data-vl-numerical-less-than=${numericalLessThan}
            data-vl-numerical-less-than-or-equal-to=${numericalLessThanOrEqualTo}
            ?data-vl-block=${block}
            ?data-vl-error=${error}
            ?data-vl-success=${success}
            ?data-vl-disabled=${disabled}
            ?data-vl-small=${small}
          />
          <p
            is="vl-form-validation-message"
            data-vl-error
            data-vl-error-id=${errorPlaceholder}
          ></p>
        </div>

        <div is="vl-form-column" data-vl-size="9">
          <div is="vl-action-group">
            <button is="vl-button" type="submit">Versturen</button>
            <a is="vl-link" href="#">
              <span is="vl-icon" data-vl-icon="cross" data-vl-before></span>
              Annuleren
            </a>
          </div>
        </div>
      </div>
    </div>
  </form>
`;

export const WithValidation = Template.bind({});
export const WithNumericalValidation = Template.bind({});

Default.argTypes = {
  validationType: {
    control: {
      disable: true,
    },
  },
  required: {
    control: {
      disable: true,
    },
  },
  errorMessage: {
    control: {
      disable: true,
    },
  },
  errorPlaceholder: {
    control: {
      disable: true,
    },
  },
  successClass: {
    control: {
      disable: true,
    },
  },
  errorClass: {
    control: {
      disable: true,
    },
  },
  numericalOnlyInteger: {
    control: {
      disable: true,
    },
  },
  numericalGreaterThan: {
    control: {
      disable: true,
    },
  },
  numericalGreaterThanOrEqualTo: {
    control: {
      disable: true,
    },
  },
  numericalLessThan: {
    control: {
      disable: true,
    },
  },
  numericalLessThanOrEqualTo: {
    control: {
      disable: true,
    },
  },
};

WithValidation.args = {
  errorMessage: "Foutmelding komt hier.",
  errorPlaceholder: "name-error-id",
};

WithNumericalValidation.args = {
  validationType: VALIDATION_TYPE.NUMERICAL,
  errorMessage: "Getal voldoet niet aan de voorwaarden.",
  errorPlaceholder: "numerical-error-id",
  numericalOnlyInteger: true,
  numericalLessThan: 100,
  numericalLessThanOrEqualTo: 100,
  numericalGreaterThan: 1,
  numericalGreaterThanOrEqualTo: 1,
};
