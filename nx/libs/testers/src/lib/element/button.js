import { VlElement } from '../util/vl-element';
import { By } from '../util/setup';
import { VlIcon } from '../icon/icon';

class VlButtonElement extends VlElement {
    async getIcon() {
        const icon = await this.findElement(By.css('[is="vl-icon"]'));
        if (icon) {
            return new VlIcon(this.driver, icon);
        }
    }

    async isError() {
        return this.hasAttribute('error');
    }

    async isBlock() {
        return this.hasAttribute('block');
    }

    async isLarge() {
        return this.hasAttribute('large');
    }

    async isWide() {
        return this.hasAttribute('wide');
    }

    async isNarrow() {
        return this.hasAttribute('narrow');
    }

    async isLoading() {
        return this.hasAttribute('loading');
    }

    async isSecondary() {
        return this.hasAttribute('secondary');
    }

    async isTertiary() {
        return this.hasAttribute('tertiary');
    }

    async hasIcon() {
        try {
            await this.getIcon();
            return true;
        } catch (e) {
            return false;
        }
    }
}

export class VlButton extends VlButtonElement {}

export class VlLinkButton extends VlButtonElement {}
