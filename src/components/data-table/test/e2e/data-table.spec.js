import { assert, getDriver, config, By } from '../../../../utils/test';
import { VlDataTable } from './data-table';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=native-elements-vl-data-table--default`;
const joinedUrl = `${sbUrl}?id=native-elements-vl-data-table--matrix-with-joined-row-titles`;
const expandableUrl = `${sbUrl}?id=native-elements-vl-data-table--expandable`;
const expandableWithCustomExpandUrl = `${sbUrl}?id=native-elements-vl-data-table--expandable-with-custom-toggle-details-column`;
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

  it('as a user, I can see the caption of a data-table', async () => {
    await driver.get(expandableUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.equal(dataTable.getCaption(), 'Data table');
  });

  it('as a user, I can see the headers of a data-table', async () => {
    await driver.get(expandableUrl);
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
    await driver.get(expandableUrl);
    const dataTable = await new VlDataTable(driver, selector);
    const body = await dataTable.getBody();
    const rows = await body.getRows();

    // first row: data
    const row0 = rows[0];
    await assert.eventually.isTrue(row0.isDisplayed());
    await assert.eventually.lengthOf(row0.getCells(), 5);
    const cellsRow0 = await row0.getCells();
    await assert.eventually.equal(cellsRow0[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow0[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow0[2].getText(), 'Entry line 3');
    await assert.eventually.equal(cellsRow0[3].getText(), 'Entry line 4');

    // first row: details
    const row1 = rows[1];
    await assert.eventually.isFalse(row1.isDisplayed());
    await assert.eventually.lengthOf(row1.getCells(), 1);
    const cellsRow1 = await row1.getCells();
    await assert.eventually.equal(cellsRow1[0].getColSpan(), 5);
    await assert.eventually.equal(cellsRow1[0].getText(), '');

    // first row: find expand button and click
    const row0Buttons = await cellsRow0[4].getButtons();
    await assert.lengthOf(row0Buttons, 1);
    await row0Buttons[0].click();

    // first row: verify details are visible
    await assert.eventually.isTrue(row1.isDisplayed());
    await assert.eventually.equal(cellsRow1[0].getText(), 'Details 1');

    // second row: data
    const row2 = rows[2];
    await assert.eventually.isTrue(row2.isDisplayed());
    await assert.eventually.lengthOf(row2.getCells(), 4);
    const cellsRow2 = await row2.getCells();
    await assert.eventually.equal(cellsRow2[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow2[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow2[2].getText(), 'Entry line 3');

    // second row: details
    const row3 = rows[3];
    await assert.eventually.isFalse(row3.isDisplayed());
    await assert.eventually.lengthOf(row3.getCells(), 1);
    const cellsRow3 = await row3.getCells();
    await assert.eventually.equal(cellsRow3[0].getColSpan(), 4);
    await assert.eventually.equal(cellsRow3[0].getText(), '');

    // second row: find expand button and click
    const row2Buttons = await cellsRow2[3].getButtons();
    await assert.lengthOf(row2Buttons, 1);
    await row2Buttons[0].click();

    // second row: verify details are visible
    await assert.eventually.isTrue(row3.isDisplayed());
    await assert.eventually.equal(cellsRow3[0].getText(), 'Details 2');

    // third row: data
    const row4 = rows[4];
    await assert.eventually.isTrue(row4.isDisplayed());
    await assert.eventually.lengthOf(row4.getCells(), 5);
    const cellsRow4 = await row4.getCells();
    await assert.eventually.equal(cellsRow4[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow4[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow4[2].getText(), 'Entry line 3');
    await assert.eventually.equal(cellsRow4[3].getText(), 'Entry line 4');

    // third row: details
    const row5 = rows[5];
    await assert.eventually.isFalse(row5.isDisplayed());
    await assert.eventually.lengthOf(row5.getCells(), 1);
    const cellsRow5 = await row5.getCells();
    await assert.eventually.equal(cellsRow5[0].getColSpan(), 5);
    await assert.eventually.equal(cellsRow5[0].getText(), '');

    // third row: find expand button and click
    const row4Buttons = await cellsRow4[4].getButtons();
    await assert.lengthOf(row4Buttons, 1);
    await row4Buttons[0].click();

    // third row: verify details are visible
    await assert.eventually.isTrue(row5.isDisplayed());
    await assert.eventually.equal(cellsRow5[0].getText(), 'Details 3');
  });

  it('as a dev, I can use the data-tabled wrapper hover functionality', async () => {
    await driver.get(expandableUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isHover());

    await driver.get(`${expandableUrl}&args=hover:true`);
    const datatableWithHover = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableWithHover.isHover());
  });

  it('as a dev, I can use the data-tabled wrapper matrix functionality', async () => {
    await driver.get(expandableUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isMatrix());

    await driver.get(`${expandableUrl}&args=matrix:true`);
    const datatableWithMatrix = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableWithMatrix.isMatrix());
  });

  it('as a dev, I can use the data-tabled wrapper grid functionality', async () => {
    await driver.get(expandableUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isGrid());

    await driver.get(`${expandableUrl}&args=grid:true`);
    const datatableWithGrid = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableWithGrid.isGrid());
  });

  it('as a dev, I can use the data-tabled wrapper collapsed-m functionality', async () => {
    await driver.get(expandableUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isCollapsedMedium());

    await driver.get(`${expandableUrl}&args=collapsedM:true`);
    const datatableCollapsedM = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableCollapsedM.isCollapsedMedium());
  });

  it('as a dev, I can use the data-tabled wrapper collapsed-s functionality', async () => {
    await driver.get(expandableUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isCollapsedSmall());

    await driver.get(`${expandableUrl}&args=collapsedS:true`);
    const datatableCollapsedS = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableCollapsedS.isCollapsedSmall());
  });

  it('as a dev, I can use the data-tabled wrapper collapsed-xs functionality', async () => {
    await driver.get(expandableUrl);
    const dataTable = await new VlDataTable(driver, selector);
    await assert.eventually.isFalse(dataTable.isCollapsedExtraSmall());

    await driver.get(`${expandableUrl}&args=collapsedXS:true`);
    const datatableCollapsedXs = await new VlDataTable(driver, selector);
    await assert.eventually.isTrue(datatableCollapsedXs.isCollapsedExtraSmall());
  });

  it('as a user, I can see the columns of a data-table', async () => {
    await driver.get(expandableWithCustomExpandUrl);
    const dataTable = await new VlDataTable(driver, selector);
    const body = await dataTable.getBody();
    const rows = await body.getRows();

    // first row: data
    const row0 = rows[0];
    await assert.eventually.isTrue(row0.isDisplayed());
    await assert.eventually.lengthOf(row0.getCells(), 5);
    const cellsRow0 = await row0.getCells();
    await assert.eventually.equal(cellsRow0[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow0[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow0[2].getText(), 'Entry line 3');
    await assert.eventually.equal(cellsRow0[3].getText(), 'Entry line 4');

    // first row: details
    const row1 = rows[1];
    await assert.eventually.isFalse(row1.isDisplayed());
    await assert.eventually.lengthOf(row1.getCells(), 1);
    const cellsRow1 = await row1.getCells();
    await assert.eventually.equal(cellsRow1[0].getColSpan(), 5);
    await assert.eventually.equal(cellsRow1[0].getText(), '');

    // first row: find expand button and click
    const row0CustomExpand = await cellsRow0[4].getElement(By.css('span'));
    await assert.lengthOf(row0CustomExpand, 1);
    await row0CustomExpand[0].click();

    // first row: verify details are visible
    await assert.eventually.isTrue(row1.isDisplayed());
    await assert.eventually.equal(cellsRow1[0].getText(), 'Details 1');

    // second row: data
    const row2 = rows[2];
    await assert.eventually.isTrue(row2.isDisplayed());
    await assert.eventually.lengthOf(row2.getCells(), 4);
    const cellsRow2 = await row2.getCells();
    await assert.eventually.equal(cellsRow2[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow2[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow2[2].getText(), 'Entry line 3');

    // second row: details
    const row3 = rows[3];
    await assert.eventually.isFalse(row3.isDisplayed());
    await assert.eventually.lengthOf(row3.getCells(), 1);
    const cellsRow3 = await row3.getCells();
    await assert.eventually.equal(cellsRow3[0].getColSpan(), 4);
    await assert.eventually.equal(cellsRow3[0].getText(), '');

    // second row: find expand button and click
    const row2CustomExpand = await cellsRow2[3].getElement(By.css('span'));
    await assert.lengthOf(row2CustomExpand, 1);
    await row2CustomExpand[0].click();

    // second row: verify details are visible
    await assert.eventually.isTrue(row3.isDisplayed());
    await assert.eventually.equal(cellsRow3[0].getText(), 'Details 2');

    // third row: data
    const row4 = rows[4];
    await assert.eventually.isTrue(row4.isDisplayed());
    await assert.eventually.lengthOf(row4.getCells(), 5);
    const cellsRow4 = await row4.getCells();
    await assert.eventually.equal(cellsRow4[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow4[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow4[2].getText(), 'Entry line 3');
    await assert.eventually.equal(cellsRow4[3].getText(), 'Entry line 4');

    // third row: details
    const row5 = rows[5];
    await assert.eventually.isFalse(row5.isDisplayed());
    await assert.eventually.lengthOf(row5.getCells(), 1);
    const cellsRow5 = await row5.getCells();
    await assert.eventually.equal(cellsRow5[0].getColSpan(), 5);
    await assert.eventually.equal(cellsRow5[0].getText(), '');

    // third row: find expand button and click
    const row4CustomExpand = await cellsRow4[4].getElement(By.css('span'));
    await assert.lengthOf(row4CustomExpand, 1);
    await row4CustomExpand[0].click();

    // third row: verify details are visible
    await assert.eventually.isTrue(row5.isDisplayed());
    await assert.eventually.equal(cellsRow5[0].getText(), 'Details 3');
  });
});
