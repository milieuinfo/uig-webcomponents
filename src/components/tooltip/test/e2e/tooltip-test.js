import { vlElement, define } from "../../../../utils/test";
import "../../../button";
import "../../../tooltip";
import styles from "../../styles.scss";
import buttonStyles from "../../../button/styles.scss";

export class VlTooltipTest extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
        ${styles}
        ${buttonStyles}

          div {
            position: relative;
          }
      </style>

      <div>
        <button is="vl-button" slot="button">
          <vl-tooltip placement="top">This is tooltip on the top</vl-tooltip>
          <span>top</span>
        </button>
      </div>
    `);
  }
}

define("vl-tooltip-test", VlTooltipTest);
