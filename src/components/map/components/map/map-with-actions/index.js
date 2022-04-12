import { defaults } from 'ol/interaction';
import Map from 'ol/Map';

/**
 * This map only contains the functionality to handle the actions. The first argument of the constructor can display the usual object map options that are also put on the ol.Map, along with an extra parameter 'actions' in that object. This array contains MapActions.
 * The first action of the array is always the default action and will also be set to this when, for example, an escape key.
 *
 * This map allows only one action to be active. When activating another action, the current action is deactivated.
 */
export class VlMapWithActions extends Map {
  static get CLICK_COUNT_TIMEOUT() {
    return 300;
  }

  constructor(options) {
    options = options || {};
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
        if (e && e.keyCode && e.keyCode == 27) {
          this.activateDefaultAction();
        }
      };

      document.body.removeEventListener('keydown', activateFirstActionOnEscapeKey);
      document.body.addEventListener('keydown', activateFirstActionOnEscapeKey);
    }
  }

  activateAction(action) {
    if (this.currentAction) {
      this.currentAction.deactivate();
      clearTimeout(this.timeout);
    }

    this.currentAction = action;

    // delay the activation of the action with 300ms because ol has a timeout of 251ms to detect a double click event
    // when we don't use a delay some click and select events of the previous action will be triggered on the new action
    this.timeout = setTimeout(() => {
      action.activate();
    }, VlMapWithActions.CLICK_COUNT_TIMEOUT);
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
    if (this.currentAction == action) {
      this.activateDefaultAction();
    }
    action.interactions.forEach((interaction) => {
      this.removeInteraction(interaction);
    });
    this.actions.splice(this.actions.indexOf(action), 1);
  }

  activateDefaultAction() {
    if (this.actions.length > 0 && this.actions[0]) {
      this.activateAction(this.actions[0]);
    }
  }
}
