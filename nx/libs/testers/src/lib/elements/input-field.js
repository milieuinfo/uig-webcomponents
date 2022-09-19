import { VlElementTester } from '../base/vl-element.tester';
import { Key } from '../util/tester.setup';
import { vlFormValidation } from './form-validation';
import { vlPattern } from './pattern';

export class VlInputField extends VlElementTester {
    constructor(driver, identifier) {
        super(driver, identifier, [vlFormValidation, vlPattern]);
    }

    async setValue(content) {
        await super.clear();
        try {
            await this.sendKeys(content);
        } catch (error) {
            await this.driver.executeScript(`arguments[0].value='${content}'`, this);
        }
    }

    async getValue() {
        return this.getAttribute('value');
    }

    async isBlock() {
        return this.hasAttribute('data-vl-block');
    }

    async isError() {
        return this.hasAttribute('data-vl-error');
    }

    async isSuccess() {
        return this.hasAttribute('data-vl-success');
    }

    async isSmall() {
        return this.hasAttribute('data-vl-small');
    }

    async clear() {
        const value = await this.getValue();
        for (let i = 0; i < value.length; i++) {
            await this.sendKeys(Key.BACK_SPACE);
        }
    }
}
