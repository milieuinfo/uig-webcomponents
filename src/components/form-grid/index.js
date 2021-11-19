import { VlGrid } from '../grid';
import { define } from '../../utils/core';
import './components/form-column';

/**
 * VlFormGrid
 * @class
 * @classdesc Class die een grid layout mogelijk maakt in een formulier.
 *
 * @extends VlGrid
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-grid/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-form-grid.html|Demo}
 */
export class VlFormGrid extends VlGrid {
  connectedCallback() {
    this.classList.add('vl-grid');
  }

  get _classPrefix() {
    return 'vl-grid--';
  }
}

define('vl-form-grid', VlFormGrid, { extends: 'div' });
