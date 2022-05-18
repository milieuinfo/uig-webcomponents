import { defaults } from 'ol/interaction';
import Map from 'ol/Map';
import { CONTROL_TYPE } from '../enums';

/**
 * Deze map bevat enkel de functionaliteit om de acties te behandelen. Aan het eerste argument van de constructor kan het gebruikelijke object map opties worden weergegeven die ook op de ol.Map worden gezet, samen met een extra parameter 'acties' in dat object. Deze array bevat MapActions.
 * De eerste actie van de array is steeds de default actie en zal ook hierop gezet worden bij bijvoorbeeld een escape toets.
 *
 * Deze kaart regelt dat er maar één actie actief kan staan. Bij het activeren van een andere actie wordt namelijk de huidige actie gedeactiveerd.
 */
export class VlMapWithActions extends Map {
  static get CLICK_COUNT_TIMEOUT() {
    return 300;
  }

  constructor(options = {}) {
    const enableRotation = !options.disableRotation;
    const enableMouseWheelZoom = !options.disableMouseWheelZoom;
    const interactions = defaults({
      altShiftDragRotate: enableRotation,
      pinchRotate: enableRotation,
      mouseWheelZoom: enableMouseWheelZoom,
    });
    if (options && options.interactions) {
      options.interactions.forEach((interaction) => interactions.push(interaction));
    }
    options.interactions = interactions;
    super(options);
    this.actions = [];

    options.actions.forEach((action) => {
      this.addAction(action);
    });

    setTimeout(() => {
      this.activateDefaultAction();
    });

    if (!options.disableEscapeKey) {
      const activateFirstActionOnEscapeKey = (e) => {
        if (e && e.keyCode && e.keyCode === 27) {
          if (this.getCurrentActiveAction()) {
            this.getCurrentActiveAction().stop();
          } else {
            this.activateDefaultAction();
          }
        }
      };

      document.body.removeEventListener('keydown', activateFirstActionOnEscapeKey);
      document.body.addEventListener('keydown', activateFirstActionOnEscapeKey);
    }

    this.mapElement = options.target;
  }

  getDefaultActiveAction() {
    return this.actions && this.actions.find((action) => action.element.defaultActive);
  }

  getCurrentActiveAction() {
    return this.actions && this.actions.find((action) => action.element.active);
  }

  getActionWithIdentifier(identifier) {
    return this.actions && this.actions.find((action) => action.element.identifier === identifier);
  }

  getControlsOfType(type) {
    const controls = this.getControls().getArray();
    return controls.filter((control) => control.get('element') && control.get('element').type === type);
  }

  getActionControls() {
    return this.getControlsOfType(CONTROL_TYPE.ACTION);
  }

  getActionControlWithIdentifier(identifier) {
    const actionControls = this.getActionControls();
    return (
      actionControls &&
      actionControls.find((control) => control.get('element') && control.get('element').identifier === identifier)
    );
  }

  getLayerActions(layer) {
    return this.actions && this.actions.filter((action) => action.layer === layer);
  }

  activateAction(action) {
    this.deactivateCurrentAction();

    // delay the activation of the action with 300ms because ol has a timeout of 251ms to detect a double click event
    // when we don't use a delay some click and select events of the previous action will be triggered on the new action
    this.timeout = setTimeout(() => {
      action.activate();
    }, VlMapWithActions.CLICK_COUNT_TIMEOUT);
  }

  deactivateCurrentAction() {
    if (this.getCurrentActiveAction()) {
      this.getCurrentActiveAction().deactivate();
      clearTimeout(this.timeout);
    }
  }

  addAction(action) {
    this.actions.push(action);
    action.map = this;

    action.interactions.forEach((interaction) => {
      this.addInteraction(interaction);
      interaction.map = action.map;
    });
  }

  removeAction(action) {
    if (this.getCurrentActiveAction() === action) {
      this.activateDefaultAction();
    }
    action.interactions.forEach((interaction) => {
      this.removeInteraction(interaction);
    });
    this.actions.splice(this.actions.indexOf(action), 1);
  }

  activateDefaultAction() {
    if (this.getDefaultActiveAction()) {
      this.getDefaultActiveAction().element.activate();
    }
  }
}
