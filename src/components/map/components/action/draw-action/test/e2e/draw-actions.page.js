import { VlMapDrawPointAction } from './draw-point-action';
import { VlMapDrawLineAction } from './draw-line-action';
import { VlMapDrawPolygonAction } from './draw-polygon-action';
import { config } from '../../../../../../../utils/test';
import { VlMapPage } from '../../../../map/test/e2e/map.page.js';

export class VlMapDrawActionsPage extends VlMapPage {
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

  async getDrawPointAction() {
    return new VlMapDrawPointAction(this.driver, '#draw-point-action');
  }

  async getDrawPointSnapAction() {
    return new VlMapDrawPointAction(this.driver, '#draw-point-snap-action');
  }

  async getDrawLineAction() {
    return new VlMapDrawLineAction(this.driver, '#draw-line-action');
  }

  async getDrawPolygonAction() {
    return new VlMapDrawPolygonAction(this.driver, '#draw-polygon-action');
  }

  async load() {
    await super.load(`${config.baseUrl}components/map/components/action/draw-action/test/e2e`);
  }
}
