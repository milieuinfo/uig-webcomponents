import { vlElement, define } from '../../../../utils/core';
import '../..';
import styles from '../../styles.scss';

export class VlTestRichTextarea extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
        ${styles}
      </style>
      <div>
        <textarea is="vl-textarea" cols="40" rows="4" data-vl-rich></textarea>
      </div>
    `);
  }
}

define('vl-rich-textarea', VlTestRichTextarea);
