import { VlColumn } from '../column';

export class VlFormColumnTester extends VlColumn {
    get _columnClassPrefix() {
        return 'vl-form-col--';
    }

    get _pushClassPrefix() {
        return 'vl-form-push--';
    }
}
