import Overlay from 'ol/Overlay';

export class VlTooltips {
  constructor(layer, infoPromise, loadingMessage, doneLoading) {
    this.layer = layer;
    layer.tooltips = [];

    this.showTooltip = (map, feature, coordinates, options) => {
      options = options || {};

      const element = document.createElement('div');
      element.innerHTML = '<span class=\'content\'></span><div class=\'arrow\'></div>';
      element.setAttribute('class', 'info-tooltip');

      const tooltip = new Overlay({
        offset: options.offset || [0, -10],
        positioning: 'bottom-center',
        insertFirst: false,
      });

      tooltip.setElement(element);
      map.addOverlay(tooltip);
      layer.tooltips.push(tooltip);

      const showInfoContent = (content) => {
        element.childNodes[0].innerHTML = content;
        tooltip.setPosition(coordinates);
        tooltip.setElement(element);
        element.parentNode.style.position = 'fixed'; // because the overlay has absolute positioning and otherwise the left side panel could influence the overlay elements
      };

      const delay = 100; // Maximum time we wait on the promise to be resolved before rendering a loading element
      let resolveDelay = 0; // Minimum time the loading element will be displayed to prevent flashy text
      const loading = setTimeout(() => {
        resolveDelay = 500; // Set the minimum delay time the loading element will be visible
        showInfoContent('<span class=\'icon\'></span> ' + (loadingMessage ? loadingMessage : 'Info berekenen  ...'));
      }, delay);

      infoPromise(feature, coordinates).then((result) => {
        setTimeout(() => {
          clearTimeout(loading);
          showInfoContent(result);
          map.render(); // re-render the map so changes in the size of the tooltip (due to different content) don't result in a badly placed tooltip
          if (doneLoading) {
            doneLoading(feature, coordinates);
          }
        }, resolveDelay);
      });
    };

    this.clear = (map) => {
      this.layer.tooltips.forEach((tooltip) => map.removeOverlay(tooltip));
    };
  }
}
