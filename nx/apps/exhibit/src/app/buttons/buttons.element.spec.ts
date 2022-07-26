import {ButtonsElement} from './buttons.element';

// TODO: fix
describe('AppElement', () => {
    let app: ButtonsElement;

    beforeEach(() => {
        app = new ButtonsElement();
    });

    it('should create successfully', () => {
        expect(app).toBeTruthy();
    });

    it('should have a greeting', () => {
        app.connectedCallback();

        expect(app.querySelector('h1').innerHTML).toContain('Welcome exhibit');
    });
});
