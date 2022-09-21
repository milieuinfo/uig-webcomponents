import { VlGridColumnTester } from '../grid/vl-grid-column.tester';

export class VlFormColumnTester extends VlGridColumnTester {
    get _columnClassPrefix() {
        return 'vl-form-col--';
    }

    get _pushClassPrefix() {
        return 'vl-form-push--';
    }
}
