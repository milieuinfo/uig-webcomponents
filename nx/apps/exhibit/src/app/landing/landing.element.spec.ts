import { LandingElement } from './landing.element';

// TODO: fix
describe('AppElement', () => {
  let app: LandingElement;

  beforeEach(() => {
    app = new LandingElement();
  });

  it('should create successfully', () => {
    expect(app).toBeTruthy();
  });

  it('should have a greeting', () => {
    app.connectedCallback();

    expect(app.querySelector('h1').innerHTML).toContain('Welcome exhibit');
  });
});
