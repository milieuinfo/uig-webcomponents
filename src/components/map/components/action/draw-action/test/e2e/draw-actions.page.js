import { VlTestMapDrawPointAction } from './draw-point-action';
import { VlTestMapDrawLineAction } from './draw-line-action';
import { VlTestMapDrawPolygonAction } from './draw-polygon-action';
import { VlTestMapMeasureAction } from './measure-action';
import { config } from '../../../../../../../utils/test';
import { VlTestMapPage } from '../../../../map/test/e2e/map.page.js';

export class VlTestMapDrawActionsPage extends VlTestMapPage {
  async getMapWithDrawPointAction() {
    return this._getMap('#map-with-draw-point-action');
  }

  async getMapWithDrawPointSnapAction() {
    return this._getMap('#map-with-draw-point-snap-action');
  }

  async getMapWithDrawLineAction() {
    return this._getMap('#map-with-draw-line-action');
  }

  async getMapWithDrawPolygonAction() {
    return this._getMap('#map-with-draw-polygon-action');
  }

  async getMapWithMeasureAction() {
    return this._getMap('#map-with-measure-action');
  }

  async getDrawPointAction() {
    return new VlTestMapDrawPointAction(this.driver, '#draw-point-action');
  }

  async getDrawPointSnapAction() {
    return new VlTestMapDrawPointAction(this.driver, '#draw-point-snap-action');
  }

  async getDrawLineAction() {
    return new VlTestMapDrawLineAction(this.driver, '#draw-line-action');
  }

  async getDrawPolygonAction() {
    return new VlTestMapDrawPolygonAction(this.driver, '#draw-polygon-action');
  }

  async getMeasureAction() {
    return new VlTestMapMeasureAction(this.driver, '#measure-action');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/action/draw-action/test/e2e/index.html`);
  }
}
