import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export abstract class UigElement extends LitElement {
  @property({ type: Boolean })
  noShadowDom = false;

  createRenderRoot() {
    return this.noShadowDom ? this : super.createRenderRoot();
  }
}
