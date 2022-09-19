import { VlElementTester } from '../base/vl-element.tester';
import { By } from '../util/tester.setup';
import { VlInputAddon } from './input-addon';
import { VlIconTester } from './icon/vl-icon.tester';

export class VlButtonInputAddon extends VlInputAddon {
    async getIcon() {
        const icon = await this.findElement(By.css(this.selector + ' [is="vl-icon"]'));
        if (icon) {
            return new VlIconTester(this.driver, icon);
        }
    }
}
