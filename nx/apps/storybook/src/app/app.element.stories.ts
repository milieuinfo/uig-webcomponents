// // demo-button.stories.js
//
// import { html } from 'lit-html';
//
// import './app.element';
//
// export default {
//   title: 'App element'
// };
//
// export const Primary = () => html`<nx-root></nx-root>`;

import { AppElement } from './app.element';

export default {
  title: 'App Element',
};

const Template = (args) => new AppElement();

export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
