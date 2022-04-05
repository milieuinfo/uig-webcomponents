import sinon from 'sinon/pkg/sinon-esm';
import { expect } from 'chai';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as SourceVector } from 'ol/source';
import { VlShowInfoSelectAction } from '../../../actions/show-info-select-action';

describe('show info select action', () => {
  let map;
  let showInfoSelectAction;
  let feature;
  let source;
  let doneFunctionCalled;
  let visibility;
  let mapWasRerendered;

  const waitFor = (done, callback) => {
    if (done() && callback) {
      callback();
    } else {
      window.setTimeout(() => {
        waitFor(done, callback);
      }, 50);
    }
  };

  beforeEach(() => {
    mapWasRerendered = false;
    source = new SourceVector();
    const infoPromise = () => ({
      then: (callback) => callback('content of info object'),
    });
    map = {
      overlays: [],
      addOverlay(overlay) {
        this.overlays.push(overlay);
      },
      removeOverlay(overlay) {
        this.overlays.splice(this.overlays.indexOf(overlay), 1);
      },
      render: () => {
        mapWasRerendered = true;
      },
      on: sinon.spy(),
      un: sinon.spy(),
    };
    feature = new Feature();
    feature.setGeometry(new Point([0, 0]));
    doneFunctionCalled = false;
    showInfoSelectAction = new VlShowInfoSelectAction(
      {
        getSource: () => source,
        setVisible: (visible) => (visibility = visible),
        getVisible: () => visibility,
      },
      infoPromise,
      'loading message',
      () => (doneFunctionCalled = true),
    );
    showInfoSelectAction.map = map;
  });

  it('bij het activeren wordt de laag op visible gezet', () => {
    visibility = false;
    showInfoSelectAction.activate();
    expect(visibility).to.be.true;
  });

  it('bij het deactiveren wordt de laag zichtbaarheid weer op de oorspronkelijke waarde gezet', () => {
    visibility = false;
    showInfoSelectAction.activate();
    showInfoSelectAction.deactivate();
    expect(visibility).to.be.false;

    visibility = true;
    showInfoSelectAction.activate();
    showInfoSelectAction.deactivate();
    expect(visibility).to.be.true;
  });

  it('zet een overlay op de map wanneer punt getekend werd, met daarin inhoud van de promise', (done) => {
    showInfoSelectAction.selectInteraction.getFeatures().push(feature);
    const event = { type: 'select', mapBrowserEvent: { coordinate: [0, 0] } };
    showInfoSelectAction.selectInteraction.dispatchEvent(event);
    const contentShown = () =>
      map.overlays.length === 1 &&
      map.overlays[0].getElement().innerHTML ===
        '<span class="content">content of info object</span><div class="arrow"></div>';
    waitFor(contentShown, () => {
      expect(map.overlays[0].getPosition()).to.deep.equal([0, 0]);
      expect(doneFunctionCalled).to.be.true;
      done();
    });
  });

  it('er wordt een loading message getoond als de promise er lang over doet om zijn resultaat te resolven', (done) => {
    const infoPromise = () => ({
      then: (callback) => setTimeout(() => callback('content of info object'), 600),
    });
    showInfoSelectAction = new VlShowInfoSelectAction(
      {
        getSource: () => new SourceVector(),
        setVisible: () => {},
        getVisible: () => {},
      },
      infoPromise,
      'loading message',
      () => {},
    );
    showInfoSelectAction.map = map;
    showInfoSelectAction.selectInteraction.getFeatures().push(feature);
    const event = { type: 'select', mapBrowserEvent: { coordinate: [0, 0] } };
    showInfoSelectAction.selectInteraction.dispatchEvent(event);
    const loadingShown = () =>
      map.overlays.length === 1 &&
      map.overlays[0].getElement().innerHTML ===
        '<span class="content"><span class="icon"></span> loading message</span><div class="arrow"></div>';
    const contentShown = () =>
      map.overlays.length === 1 &&
      map.overlays[0].getElement().innerHTML ===
        '<span class="content">content of info object</span><div class="arrow"></div>';
    waitFor(loadingShown, () => {
      waitFor(contentShown, () => {
        expect(mapWasRerendered).to.be.true;
        done();
      });
    });
  });

  it('overlays worden verwijderd als de interactie gedeactiveerd wordt', (done) => {
    showInfoSelectAction.selectInteraction.getFeatures().push(feature);
    const event = { type: 'select', mapBrowserEvent: { coordinate: [0, 0] } };
    showInfoSelectAction.selectInteraction.dispatchEvent(event);
    const contentShown = () => map.overlays.length === 1;
    waitFor(contentShown, () => {
      showInfoSelectAction.deactivate();
      expect(map.overlays.length).to.equal(0);
      expect(source.getFeatures().length).to.equal(0);
      done();
    });
  });

  it('een default offset van [0, -10] wordt gebruikt wanneer er geen offset wordt meegegeven', (done) => {
    const infoPromise = () => ({
      then: (callback) => setTimeout(() => callback('content of info object'), 600),
    });
    showInfoSelectAction = new VlShowInfoSelectAction(
      {
        getSource: () => new SourceVector(),
        setVisible: () => {},
        getVisible: () => {},
      },
      infoPromise,
      'loading message',
      () => {},
    );
    showInfoSelectAction.map = map;
    showInfoSelectAction.selectInteraction.getFeatures().push(feature);
    const event = { type: 'select', mapBrowserEvent: { coordinate: [0, 0] } };
    showInfoSelectAction.selectInteraction.dispatchEvent(event);
    const contentShown = () =>
      map.overlays.length === 1 &&
      map.overlays[0].getElement().innerHTML ===
        '<span class="content">content of info object</span><div class="arrow"></div>' &&
      map.overlays[0].getOffset().length === 2 &&
      map.overlays[0].getOffset()[0] === 0 &&
      map.overlays[0].getOffset()[1] === -10;
    waitFor(contentShown, () => done());
  });

  it('een meegegeven offset wordt gebruikt', (done) => {
    const infoPromise = () => ({
      then: (callback) => setTimeout(() => callback('content of info object'), 600),
    });
    showInfoSelectAction = new VlShowInfoSelectAction(
      {
        getSource: () => new SourceVector(),
        setVisible: () => {},
        getVisible: () => {},
      },
      infoPromise,
      'loading message',
      () => {},
      { offset: [0, 0] },
    );
    showInfoSelectAction.map = map;
    showInfoSelectAction.selectInteraction.getFeatures().push(feature);
    const event = { type: 'select', mapBrowserEvent: { coordinate: [0, 0] } };
    showInfoSelectAction.selectInteraction.dispatchEvent(event);
    const contentShown = () =>
      map.overlays.length === 1 &&
      map.overlays[0].getElement().innerHTML ===
        '<span class="content">content of info object</span><div class="arrow"></div>' &&
      map.overlays[0].getOffset().length === 2 &&
      map.overlays[0].getOffset()[0] === 0 &&
      map.overlays[0].getOffset()[1] === 0;
    waitFor(contentShown, () => done());
  });
});
