import Overlay from 'ol/Overlay';
import { unByKey } from 'ol/Observable';
import GeometryType from 'ol/geom/GeometryType';
import { VlDrawAction } from '..';
import '../../../../../../pill';

export class VlMeasureAction extends VlDrawAction {
  constructor(layer, options) {
    super(
      layer,
      GeometryType.LINE_STRING,
      () => {
        unByKey(this.measurePointermoveHandler);
      },
      options,
    );

    this.featureCounter = 0;
    this.layer = layer;
    this.measurePills = [];
    this.measurePointermoveHandler = undefined;

    this.drawInteraction.on('drawstart', (event) => {
      this._handleDrawStart(event);
    });

    this.layer.getSource().on('removefeature', (event) => {
      this._handleRemoveFeature(event);
    });

    this.measureOptions = options;
  }

  // _getPillFor(id) {
  //   return this.measurePills[id];
  // }

  _showMeasurePill(measureFeature, pill, pillElement) {
    const length = measureFeature.getGeometry().getLength().toFixed(2);
    pillElement.textContent = `${length} m`;
    pill.setElement(pillElement);
    pill.setPosition(measureFeature.getGeometry().getLastCoordinate());
  }

  _handleDrawStart(event) {
    const id = this.featureCounter;
    this.featureCounter += 1;

    // Set feature

    const measureFeature = event.feature;
    measureFeature.setId(id);

    // Set pill

    const pillElement = document.createElement('vl-pill');
    pillElement.setAttribute('class', 'measure-pill');
    pillElement.setAttribute('data-vl-closable', 'true');

    const pill = new Overlay({
      offset: [-15, 10],
      positioning: 'bottom-center',
      stopEvent: true,
      insertFirst: true,
    });

    pillElement.addEventListener('close', (closePillEvent) => {
      this._handleDeleteMeasurement(closePillEvent, measureFeature);
    });

    this.map.addOverlay(pill);

    this.measurePills[id] = pill;

    this.measurePointermoveHandler = this.map.on('pointermove', () => {
      this._showMeasurePill(measureFeature, pill, pillElement);
    });
  }

  _removeMeasureFeature(measureFeature) {
    const source = this.layer.getSource();
    if (
      measureFeature &&
      (measureFeature.getId() == null || source.getFeatureById(measureFeature.getId()) === measureFeature)
    ) {
      source.removeFeature(measureFeature);
      this.map.render();
    }
  }

  _removePill(id) {
    this.map.removeOverlay(this.measurePills[id]);
    this.measurePills[id] = null;
  }

  _handleDeleteMeasurement(event, measureFeature) {
    event.stopPropagation();
    this._removePill(measureFeature.getId());
    this._removeMeasureFeature(measureFeature);
  }

  _handleRemoveFeature(event) {
    this._removePill(event.feature.getId());
  }

  _cleanUp() {
    unByKey(this.measurePointermoveHandler);
  }

  deactivate() {
    this._cleanUp();
    super.deactivate(this);
  }
}
