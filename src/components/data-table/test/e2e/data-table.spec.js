import { assert, getDriver, config } from '../../../../utils/test';
import { VlDataTable } from './data-table';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-data-table--default`;
const joinedUrl = `${sbUrl}?id=native-elements-vl-data-table--matrix-with-joined-row-titles`;
const selector = 'table[is="vl-data-table"]';

describe('vl-data-table', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the caption of a data-table', async () => {
    await driver.get(defaultUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.equal(dataTable.getCaption(), 'Data table');
  });

  it('as a user, I can see the headers of a data-table', async () => {
    await driver.get(defaultUrl);
    const dataTable = await new VlDataTable(driver, selector);
    const header = await dataTable.getHeader();
    const headerRows = await header.getRows();
    await assert.eventually.lengthOf(headerRows[0].getCells(), 4);
    const headerCells = await headerRows[0].getCells();
    await assert.eventually.equal(headerCells[0].getText(), 'Entry Header 1');
    await assert.eventually.equal(headerCells[1].getText(), 'Entry Header 2');
    await assert.eventually.equal(headerCells[2].getText(), 'Entry Header 3');
    await assert.eventually.equal(headerCells[3].getText(), 'Entry Header 4');
    await headerRows[0].assertValues(['Entry Header 1', 'Entry Header 2', 'Entry Header 3', 'Entry Header 4']);
  });

  it('as a user, I can see the columns of a data-table', async () => {
    await driver.get(defaultUrl);
    const dataTable = await new VlDataTable(driver, selector);
    const body = await dataTable.getBody();
    const rows = await body.getRows();

    await assert.eventually.lengthOf(rows[0].getCells(), 4);
    const cellsRow0 = await rows[0].getCells();
    await assert.eventually.equal(cellsRow0[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow0[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow0[2].getText(), 'Entry line 3');
    await assert.eventually.equal(cellsRow0[3].getText(), 'Entry line 4');

    await assert.eventually.lengthOf(rows[1].getCells(), 3);
    const cellsRow1 = await rows[1].getCells();
    await assert.eventually.equal(cellsRow1[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow1[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow1[2].getText(), 'Entry line 3');

    await assert.eventually.lengthOf(rows[2].getCells(), 4);
    const cellsRow2 = await rows[2].getCells();
    await assert.eventually.equal(cellsRow2[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow2[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow2[2].getText(), 'Entry line 3');
    await assert.eventually.equal(cellsRow2[3].getText(), 'Entry line 4');
  });

  it('as a dev, I can use the data-tabled wrapper hover functionality', async () => {
    await driver.get(defaultUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isHover());

    await driver.get(`${defaultUrl}&args=hover:true`);
    const datatableWithHover = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableWithHover.isHover());
  });

  it('as a dev, I can use the data-tabled wrapper matrix functionality', async () => {
    await driver.get(defaultUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isMatrix());

    await driver.get(`${defaultUrl}&args=matrix:true`);
    const datatableWithMatrix = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableWithMatrix.isMatrix());
  });

  it('as a dev, I can use the data-tabled wrapper zebra functionality', async () => {
    await driver.get(defaultUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isZebra());

    await driver.get(`${defaultUrl}&args=zebra:true`);
    const datatableWithZebra = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableWithZebra.isZebra());
  });

  it('as a dev, I can use the data-tabled wrapper grid functionality', async () => {
    await driver.get(defaultUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isGrid());

    await driver.get(`${defaultUrl}&args=grid:true`);
    const datatableWithGrid = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableWithGrid.isGrid());
  });

  it('as a dev, I can use the data-tabled wrapper collapsed-m functionality', async () => {
    await driver.get(defaultUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isCollapsedMedium());

    await driver.get(`${defaultUrl}&args=collapsedM:true`);
    const datatableCollapsedM = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableCollapsedM.isCollapsedMedium());
  });

  it('as a dev, I can use the data-tabled wrapper collapsed-s functionality', async () => {
    await driver.get(defaultUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isCollapsedSmall());

    await driver.get(`${defaultUrl}&args=collapsedS:true`);
    const datatableCollapsedS = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableCollapsedS.isCollapsedSmall());
  });

  it('as a dev, I can use the data-tabled wrapper collapsed-xs functionality', async () => {
    await driver.get(defaultUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isCollapsedExtraSmall());

    await driver.get(`${defaultUrl}&args=collapsedXS:true`);
    const datatableCollapsedXs = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableCollapsedXs.isCollapsedExtraSmall());
  });

  it('as a user, I can see where cells are spread over several rows or columns', async () => {
    await driver.get(joinedUrl);
    const dataTable = await new VlDataTable(driver, selector);
    const body = await dataTable.getBody();
    const rows = await body.getRows();
    const cellsRow0 = await rows[0].getCells();
    const cellsRow1 = await rows[1].getCells();

    await assert.eventually.equal(cellsRow0[0].getRowSpan(), 3);
    await assert.eventually.equal(cellsRow0[0].getScope(), 'rowgroup');
    await assert.eventually.isTrue(cellsRow0[0].isTh());
    await assert.eventually.isFalse(cellsRow0[0].isTd());
    await assert.eventually.equal(cellsRow1[1].getColSpan(), 2);
    await assert.eventually.isFalse(cellsRow1[1].isTh());
    await assert.eventually.isTrue(cellsRow1[1].isTd());
  });
});
