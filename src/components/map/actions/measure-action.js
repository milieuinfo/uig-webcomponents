import Overlay from 'ol/Overlay';
import { unByKey } from 'ol/Observable';
import GeometryType from 'ol/geom/GeometryType';
import { VlDrawAction } from './draw-action';
import '../../pill';

export class VlMeasureAction extends VlDrawAction {
  constructor(layer, options) {
    super(
      layer,
      GeometryType.LINE_STRING,
      () => {
        unByKey(this.measurePointermoveHandler);
      },
      { ...options, maxPoints: 2 },
    );

    this.featureCounter = 0;
    this.layer = layer;
    this.measurementTooltips = [];
    this.measurePointermoveHandler = undefined;

    this.measureOptions = options;
  }

  activate() {
    this.drawStartHandler = this.drawInteraction.on('drawstart', (event) => {
      this._handleDrawStart(event);
    });

    this.removeFeatureHandler = this.layer.getSource().on('removefeature', (event) => {
      this._handleRemoveFeature(event);
    });

    super.activate(this);
  }

  _setMeasurementTooltipsClosable(closable) {
    this.measurementTooltips.forEach((tooltip) => {
      // Check if tooltip still exists
      if (tooltip) {
        if (tooltip.getElement()) {
          if (closable) {
            tooltip.getElement().setAttribute('data-vl-closable', closable);
          } else {
            tooltip.getElement().removeAttribute('data-vl-closable');
          }
        }
      }
    });
  }

  _showMeasurementTooltip(feature, tooltipOverlay, tooltipElement) {
    const length = feature.getGeometry().getLength().toFixed(2);
    tooltipElement.textContent = `${length} m`;
    tooltipOverlay.setElement(tooltipElement);
    tooltipOverlay.setPosition(feature.getGeometry().getLastCoordinate());
  }

  _handleDrawStart(event) {
    // Add measurement line (feature) and tooltip (overlay)

    const id = this.featureCounter;
    this.featureCounter += 1;

    this._setMeasurementTooltipsClosable(false); // Hide close buttons on tooltips while drawing

    const { feature } = event;
    feature.setId(id);

    const tooltipElement = document.createElement('vl-pill');
    tooltipElement.setAttribute('data-vl-opacity', '0.8');

    tooltipElement.addEventListener(
      'close',
      (closePillEvent) => {
        this._handleRemoveMeasurement(closePillEvent, feature);
      },
      { once: true },
    );

    const tooltipOverlay = new Overlay({
      offset: [0, 40],
      positioning: 'bottom-center',
      stopEvent: true,
      insertFirst: true,
    });

    this.map.addOverlay(tooltipOverlay);

    this.measurementTooltips[id] = tooltipOverlay;

    this.measurePointermoveHandler = this.map.on('pointermove', () => {
      this._showMeasurementTooltip(feature, tooltipOverlay, tooltipElement);
    });

    this.drawInteraction.on(
      'drawend',
      () => {
        this._setMeasurementTooltipsClosable(true);
      },
      { once: true },
    );
  }

  _removeMeasureFeature(feature) {
    const source = this.layer.getSource();
    if (feature && (feature.getId() == null || source.getFeatureById(feature.getId()) === feature)) {
      source.removeFeature(feature);
      this.map.render();
    }
  }

  _removeMeasurementTooltip(id) {
    this.map.removeOverlay(this.measurementTooltips[id]);
    this.measurementTooltips[id] = null; // Not removing the item from the list because id corresponds with list index
  }

  _handleRemoveMeasurement(event, feature) {
    event.stopPropagation();
    this._removeMeasurementTooltip(feature.getId());
    this._removeMeasureFeature(feature);
  }

  _handleRemoveFeature(event) {
    this._removeMeasurementTooltip(event.feature.getId());
  }

  _cleanUp(removeUnlinkedTooltips) {
    unByKey(this.measurePointermoveHandler);

    if (removeUnlinkedTooltips) {
      // When deactivated (layer gets deactivated or measure drawing gets interrupted) the tooltips that are not linked to a feature need to be removed
      const tooltipsToRemove = [];
      this.measurementTooltips.forEach((value, index) => {
        if (this.layer.getSource().getFeatureById(index) == null) {
          tooltipsToRemove.push(index);
        }
      });
      tooltipsToRemove.forEach((id) => {
        this._removeMeasurementTooltip(id);
      });
    }
  }

  getTooltipFor(id) {
    return this.measurementTooltips[id];
  }

  deactivate() {
    this._setMeasurementTooltipsClosable(true);

    this._cleanUp(true);

    unByKey(this.drawStartHandler);
    unByKey(this.removeFeatureHandler);

    super.deactivate(this);
  }
}
