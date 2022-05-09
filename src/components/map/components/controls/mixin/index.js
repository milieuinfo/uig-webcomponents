import Control from 'ol/control/Control';

export const VlMapControl = (superClass) => {
  class VlMapControlElement extends superClass {
    connectedCallback() {
      super.connectedCallback();

      this.map = this.closest('vl-map').map;

      this.control = new Control({
        element: this.controlElement,
        target: this,
      });

      this.control.set('controlIdentifier', this.identifier);
      this.control.set('controlType', this.type);

      this.map.addControl(this.control);
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      this.map.removeControl(this.control);
    }

    createRenderRoot() {
      return this;
    }
  }

  return VlMapControlElement;
};
