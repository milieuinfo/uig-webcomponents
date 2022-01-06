import { VlColumn } from '../../../../../grid/components/column/test/e2e/column';

export class VlFormColumn extends VlColumn {
  get _columnClassPrefix() {
    return 'vl-form-col--';
  }

  get _pushClassPrefix() {
    return 'vl-form-push--';
  }
}
