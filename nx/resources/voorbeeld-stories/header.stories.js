import { Header } from './header';

export default {
    title: 'Example/Header',
};

const Template = (args) => Header(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
