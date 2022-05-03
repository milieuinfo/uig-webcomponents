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

    this.measureOptions = options;
  }

  activate() {
    this.drawStartHandler = this.drawInteraction.on('drawstart', (event) => {
      this._handleDrawStart(event);
    });

    this.drawEndHandler = this.drawInteraction.on('drawend', () => {
      this._setMeasurementTooltipsClosable(true);
    });

    this.removeFeatureHandler = this.layer.getSource().on('removefeature', (event) => {
      this._handleRemoveFeature(event);
    });

    this.layerVisibilityChangeHandler = this.layer.on('change:visible', () => {
      this._handleLayerVisibilityChange();
    });

    super.activate(this);
  }

  _setMeasurementTooltipsClosable(closable) {
    this.measurementTooltips.forEach((tooltip) => {
      // Check if tooltip still exists
      if (tooltip && tooltip.getElement()) {
        if (closable) {
          tooltip.getElement().setAttribute('data-vl-closable', closable);
        } else {
          tooltip.getElement().removeAttribute('data-vl-closable');
        }
      }
    });
  }

  _setMeasurementTooltipsVisible(visible) {
    this.measurementTooltips.forEach((tooltip) => {
      // Check if tooltip still exists
      if (tooltip && tooltip.getElement()) {
        if (visible) {
          tooltip.getElement().style.display = 'initial';
        } else {
          tooltip.getElement().style.display = 'none';
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

  _handleDrawStart({ feature }) {
    // Add measurement line (feature) and tooltip (overlay)

    const featureId = this.featureCounter;
    this.featureCounter += 1;

    this._setMeasurementTooltipsClosable(false); // Hide close buttons on tooltips while drawing

    feature.setId(featureId);

    const tooltipElement = document.createElement('vl-pill');
    tooltipElement.opacity = '0.8';

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

    tooltipOverlay.set('featureId', featureId);

    this.map.addOverlay(tooltipOverlay);

    this.measurementTooltips = [...this.measurementTooltips, tooltipOverlay];

    this.measurePointermoveHandler = this.map.on('pointermove', () => {
      this._showMeasurementTooltip(feature, tooltipOverlay, tooltipElement);
    });
  }

  _handleLayerVisibilityChange() {
    this._setMeasurementTooltipsVisible(this.layer.getVisible());
    this.deactivate();

    this.layerVisibilityChangeHandler = this.layer.on('change:visible', () => {
      this._handleLayerVisibilityChange();
    });
  }

  _removeMeasureFeature(feature) {
    const source = this.layer.getSource();
    if (feature && (feature.getId() == null || source.getFeatureById(feature.getId()) === feature)) {
      source.removeFeature(feature);
      this.map.render();
    }
  }

  _removeMeasurementTooltip(featureId) {
    const tooltip = this.getTooltipFor(featureId);
    this.map.removeOverlay(tooltip);

    this.measurementTooltips = this.measurementTooltips.filter((t) => this._getFeatureIdFor(t) !== featureId);
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
      this.measurementTooltips.forEach((tooltip) => {
        const featureId = this._getFeatureIdFor(tooltip);
        if (this.layer.getSource().getFeatureById(featureId) == null) {
          this._removeMeasurementTooltip(featureId);
        }
      });
    }
  }

  getTooltipFor(featureId) {
    return this.measurementTooltips.find((tooltip) => this._getFeatureIdFor(tooltip) === featureId);
  }

  _getFeatureIdFor(tooltip) {
    return tooltip.values_.featureId;
  }

  deactivate() {
    this._setMeasurementTooltipsClosable(true);

    this._cleanUp(true);

    unByKey(this.drawStartHandler);
    unByKey(this.drawEndHandler);
    unByKey(this.removeFeatureHandler);
    unByKey(this.layerVisibilityChangeHandler);

    super.deactivate(this);
  }
}
