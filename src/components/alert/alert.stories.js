import { html } from 'lit-html';
import '../button';
import '../alert';
import { ifDefined } from 'lit-html/directives/if-defined';
import styles from '../button/styles.scss';
import { stylesheet, docsIntro, getElement } from '../../../.storybook/utils';
import { ALERT_TYPE, ALERT_ICON } from './enums';
import { args, argTypes } from './config';
import './new';

export default {
  title: 'custom-elements/vl-alert',
  decorators: [(story) => html`${stylesheet(styles)}${story()}`],
  parameters: {
    docs: {
      description: {
        component: docsIntro({
          root: 'alert',
          intro: 'Use the alert (or notice) component to keep the user updated about important information.',
        }),
      },
    },
  },
  args,
  argTypes,
};

const Template = ({ closable, icon, title, size, type, content, onClose }) => html`
  <new-alert
    ?data-vl-closable=${closable}
    data-vl-icon=${ifDefined(icon)}
    data-vl-title=${title}
    data-vl-size=${ifDefined(size)}
    data-vl-type=${ifDefined(type)}
    @vl-close=${(event) => onClose(event)}
  >
    <p>${content}</p>
  </new-alert>
`;

export const Default = Template.bind({});
export const Error = Template.bind({});
export const Info = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});

Error.args = {
  title: 'Opgelet!',
  type: ALERT_TYPE.ERROR,
  icon: ALERT_ICON.WARNING,
  content: 'U heeft geen rechten om deze actie uit te voeren.',
};

Info.args = {
  title: 'Info',
  type: ALERT_TYPE.INFO,
  icon: ALERT_ICON.INFO_CIRCLE,
  content:
    'Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.',
};

Success.args = {
  title: 'Gelukt!',
  type: ALERT_TYPE.SUCCESS,
  icon: ALERT_ICON.CHECK,
  content: 'We hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.',
};

Warning.args = {
  title: 'Technische storing',
  type: ALERT_TYPE.WARNING,
  icon: ALERT_ICON.WARNING,
  content: 'Door een technische storing is dit loket tijdelijk niet beschikbaar.',
};

export const WithButton = ({ closable, icon, title, size, type, buttonSlotText, content, onClose }) => html`
  <new-alert
    ?data-vl-closable=${closable}
    data-vl-icon=${ifDefined(icon)}
    data-vl-title=${title}
    data-vl-size=${ifDefined(size)}
    data-vl-type=${ifDefined(type)}
    @vl-close=${(event) => onClose(event)}
  >
    <p>${content}</p>
    <button slot="actions" is="vl-button">${buttonSlotText}</button>
  </new-alert>
`;

WithButton.args = {
  buttonSlotText: 'Button',
};

export const WithTitleSlot = ({ closable, icon, size, type, titleSlotText, content, onClose }) => html`
  <vl-alert
    ?data-vl-closable=${closable}
    data-vl-icon=${ifDefined(icon)}
    data-vl-size=${ifDefined(size)}
    data-vl-type=${ifDefined(type)}
    @vl-close=${(event) => onClose(event)}
  >
    <span slot="title">${titleSlotText}</span>
    <p>${content}</p>
  </vl-alert>
`;

WithTitleSlot.args = {
  titleSlotText: 'Title via slot',
};

export const Controlled = ({ closable, icon, title, size, type, content, open, onClose }) => html`
  <new-alert
    ?data-vl-closable=${closable}
    data-vl-icon=${ifDefined(icon)}
    data-vl-title=${title}
    data-vl-size=${ifDefined(size)}
    data-vl-type=${ifDefined(type)}
    .open=${open}
    @vl-close=${(event) => {
      onClose(event);
      getElement('new-alert').open = false;
    }}
  >
    <p>${content}</p>
  </new-alert>
`;

Controlled.args = { open: true };
