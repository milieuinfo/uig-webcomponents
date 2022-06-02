import { nativeVlElement, define } from '../../utils/core';
import './lib';

export class VlVideoPlayer extends nativeVlElement(HTMLVideoElement) {
  connectedCallback() {
    this._processStyle();
  }

  get _containerTemplate() {
    return this._template(`<div class="vl-video-player"></div>`);
  }

  get _hasContainer() {
    return this.closest('.vl-video-player') !== null;
  }

  get _isDressed() {
    return this.hasAttribute('data-vl-video-player-dressed');
  }

  _processStyle() {
    this.setAttribute('data-vl-video-player', '');
    this._addContainerElement();
    this._dress();
  }

  _dress() {
    if (!this._isDressed) {
      window.vl.videoPlayer.dress(this);
    }
  }

  _addContainerElement() {
    if (!this._hasContainer) {
      const container = this._containerTemplate.firstElementChild;
      this.parentElement.append(container);
      container.append(this);
    }
  }
}

define('vl-video-player', VlVideoPlayer, { extends: 'video' });
